import { Dimensions, Text, View } from "react-native";
import { useState } from "react";
import { GLView } from "expo-gl";
import {
  HemisphereLight,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  TextureLoader,
} from "three";
import { Renderer } from "expo-three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Asset } from "expo-asset";

const { width, height } = Dimensions.get("window");

export const ScreenViewModel = ({ route }) => {
  const { params } = route;
  const [logConsole, setLogConsole] = useState({});
  const [logObj, setLogObj] = useState({});
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
    let material = null;

    camera.position.z = 2;

    const hemisLight = new HemisphereLight(0xffffff, 0x111122);
    scene.add(hemisLight);

    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const [{ localUri: localObj }] = await Asset.loadAsync(
      require("../../assets/costal/Costales.obj")
    );
    const [{ localUri: imgLocal }] = await Asset.loadAsync(
      require("../../assets/costal/tex2.jpg")
    );

    const mapHeight = new TextureLoader().load(imgLocal);

    material = new MeshPhongMaterial({
      color: 0x552811,
      specular: 0x222222,
      shininess: 25,
      bumpMap: mapHeight,
      bumpScale: 12,
    });

    setLogConsole({ url: imgLocal });

    const loader = new OBJLoader();
    loader.load(
      localObj,
      function (object) {
        objectModel = object;
        objectModel.position.z = 1
        scene.add(object);
        setLogObj({ complete: "completo" });
      },
      function (xhr) {
        setLogObj({ complete: "progreso" });
      },
      function (error) {
        setLogObj({ complete: "error", err: error });
        console.log("An error happened");
      }
    );

    // create render function
    const render = () => {
      if (objectModel && material) {
        objectModel.traverse((child) => {
          if (child instanceof Mesh) {
            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });
        objectModel.rotation.y += 0.01
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
      <View
        style={{ position: "absolute", bottom: 100, left: 100, width: "80%" }}
      >
        <Text>{JSON.stringify(logConsole)}</Text>
        <Text>{JSON.stringify(logObj)}</Text>
      </View>
    </View>
  );
};
