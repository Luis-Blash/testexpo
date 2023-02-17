import { Dimensions, Text, View } from "react-native";
import { useState } from "react";
import { GLView } from "expo-gl";
import {
  AmbientLight,
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  NearestFilter,
  PerspectiveCamera,
  Scene,
} from "three";
import ExpoTHREE, { Renderer, TextureLoader } from "expo-three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Asset } from "expo-asset";
import { typeModal } from "../types/productsDog";
const { width, height } = Dimensions.get("window");

export const ScreenViewModel = ({ route }) => {
  const { params } = route;
  const onContextCreate = async (gl) => {
    // three.js implementation.
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    gl.canvas = {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
    };
    let objectModel = null;
    let objectShadow = null;
    let material = null;
    let position = { x: 0, y: 0, z: 0 };
    let rotation = { x: 0, y: 0, z: 0 };
    let model = "";
    let textures = "";
    let modelShadow = "";

    if (typeModal.costal === params.typeModel) {
      model = require("../../assets/costal/Costal1.obj");
      textures =
        params.mapCostal === ""
          ? require("../../assets/costal/ColorCostal.png")
          : params.mapCostal;
      position = { ...position, z: -80, y: -20 };
      rotation = { ...rotation };
    } else if (typeModal.cans === params.typeModel) {
      model = require("../../assets/lata/Lata.obj");
      textures =
        params.mapLata === ""
          ? require("../../assets/lata/lataColor.png")
          : params.mapLata;
      position = { ...position, z: -20 };
      rotation = { ...rotation, x: 0.7 };
    } else if (typeModal.prize === params.typeModel) {
      modelShadow = require("../../assets/sombralata/Sombra.obj");
      model = require("../../assets/premios/Treats.obj");
      textures =
        params.mapPremios === ""
          ? require("../../assets/premios/ColorTreats.png")
          : params.mapPremios;
      position = { ...position, z: -35, y: -10 };
      rotation = { ...rotation };
    } else if (typeModal.costal2 === params.typeModel) {
      model = require("../../assets/costal2/Costal2.obj");
      textures =
        params.mapCostal === ""
          ? require("../../assets/costal2/textures/TXT_ESPECIALIDAD_FELINO_DIGESTIVEHEALTH_AL.png")
          : params.mapCostal;
      position = { ...position, z: -80, y: -20 };
      rotation = { ...rotation };
    }

    camera.position.z = 2;

    // const directionalLight = new DirectionalLight(0xffffff, 1);
    // directionalLight.position.y = 5
    // directionalLight.position.z = 5
    // scene.add(directionalLight);

    const ambientLight = new AmbientLight(0xffffff);
    ambientLight.intensity = 1
    scene.add(ambientLight);

    // const hemisLight = new HemisphereLight(0xffffff, 0x000000);
    // hemisLight.intensity = 1;
    // scene.add(hemisLight);

    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    if (model !== "" && textures !== "") {
      const [{ localUri: localObj }] = await Asset.loadAsync(model);
      const texture1 = new TextureLoader().load(textures);
      // texture1.magFilter = NearestFilter;
      // texture1.minFilter = NearestFilter;
      // material = new MeshPhongMaterial({
      //   map: texture1,
      //   flatShading: true,
      //   emissiveIntensity: 0,
      //   shininess: 0,
      //   reflectivity: 0,
      // });
      material = new MeshBasicMaterial({
        map: texture1,
        // flatShading: true,
        // emissiveIntensity: 0,
        // shininess: 0,
        // reflectivity: 0,
      });
      const loader = new OBJLoader();
      loader.load(
        localObj,
        function (object) {
          object.position.x = position.x;
          object.position.y = position.y;
          object.position.z = position.z;
          object.rotation.x = rotation.x;
          object.rotation.y = rotation.y;
          object.rotation.z = rotation.z;
          object.traverse((child) => {
            if (child instanceof Mesh) {
              child.material = material;
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          objectModel = object;
          scene.add(object);
        },
        function (xhr) {},
        function (error) {}
      );

      if (modelShadow !== "") {
        const loader2 = new OBJLoader();
        const [{ localUri: localObjSombra }] = await Asset.loadAsync(
          modelShadow
        );
        const texture2 = new TextureLoader().load(
          require("../../assets/sombralata/Sombra_AL.png")
        );
        texture2.magFilter = NearestFilter;
        texture2.minFilter = NearestFilter;
        const material2 = new MeshPhongMaterial({
          map: texture2,
          flatShading: true,
          emissiveIntensity: 0,
          shininess: 0,
          reflectivity: 0,
        });
        loader2.load(
          localObjSombra,
          function (object) {
            object.rotation.x = 0;
            // object.rotation.y = 1;
            object.position.y = -9.5 ;
            object.position.z = position.z;
            object.traverse((child) => {
              if (child instanceof Mesh) {
                child.material = material2;
              }
            });
            objectShadow = object;
            scene.add(object);
          },
          function (xhr) {},
          function (error) {}
        );
      }
    }

    // create render function
    const render = () => {
      if (objectModel && material) {
        objectModel.rotation.y += 0.01;
      }
      if (objectShadow) {
        objectShadow.rotation.y += 0.01;
      }
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    // call render
    render();
  };

  return (
    <View style={{ height, width }}>
      <GLView
        style={{ height: "100%", width: "100%" }}
        onContextCreate={onContextCreate}
      />
    </View>
  );
};
