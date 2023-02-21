import { Dimensions, Image, Text, View } from "react-native";
import { GLView } from "expo-gl";
import {
  AmbientLight,
  Color,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
} from "three";
import ExpoTHREE, { Renderer, TextureLoader } from "expo-three";
import { useState } from "react";
import { Asset } from "expo-asset";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
const { width, height } = Dimensions.get("window");

export const ScreenViewModel = ({ route }) => {
  const { params } = route;
  const [logConsole, setlogConsole] = useState({ url: "" });
  const onContextCreate = async (gl) => {
    // three.js implementation.
    const scene = new Scene();
    scene.background = new Color(0xff00ff);
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

    let position = { x: 0, y: 0, z: 0 };
    let positionShadow = { x: 0, y: 0, z: 0 };
    let rotation = { x: 0, y: 0, z: 0 };
    let rotationShadow = { x: 0, y: 0, z: 0 };
    position = { ...position, z: -80, y: -20 };
    positionShadow = { ...positionShadow, z: -80, y: -20 };
    rotation = { ...rotation };
    rotationShadow = { ...rotationShadow };
    camera.position.set(0, 0, 5);

    const ambientLight = new AmbientLight(0xffffff);
    ambientLight.intensity = 1;
    scene.add(ambientLight);

    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    //* plane
    const geometry = new PlaneGeometry(1, 1);
    const material = new MeshBasicMaterial({
      color: 0xffff00,
      side: DoubleSide,
    });
    const plane = new Mesh(geometry, material);
    plane.position.set(0, 2, 0);
    plane.rotation.set(-0.5, 0, 0);
    scene.add(plane);

    //*plane texture url
    const geometry2 = new PlaneGeometry(1, 1);
    const material2 = new MeshBasicMaterial({
      map: await ExpoTHREE.loadTextureAsync({
        asset:
          "https://petapixel.com/assets/uploads/2017/08/IMG_20170826_183429_058.dng_-800x400.jpg",
      }),
    });
    const plane2 = new Mesh(geometry2, material2);
    plane2.position.set(0, 1, 0);
    plane2.rotation.set(-0.5, 0, 0);
    scene.add(plane2);

    //*plane texture module url2
    const texture = new TextureLoader().load(
      require("../../assets/sombralata/Sombra.xpng")
    );
    const geometry3 = new PlaneGeometry(1, 1);
    const material3 = new MeshBasicMaterial({
      map: texture,
    });
    const plane3 = new Mesh(geometry3, material3);
    plane3.position.set(1, 1, 0);
    plane3.rotation.set(-0.5, 0, 0);
    scene.add(plane3);
    //! assets
    const assetDownload = Asset.fromModule(
      require("../../assets/sombralata/Sombra.xpng")
    );
    await assetDownload.downloadAsync();
    const childFuntion = (object, material, typeMaterial) => {
      if (typeMaterial === 0) {
        object.position.x = position.x;
        object.position.y = position.y;
        object.position.z = position.z;
        object.rotation.x = rotation.x;
        object.rotation.y = rotation.y;
        object.rotation.z = rotation.z;
      } else {
        object.position.x = positionShadow.x;
        object.position.y = positionShadow.y;
        object.position.z = positionShadow.z;
        object.rotation.x = rotationShadow.x;
        object.rotation.y = rotationShadow.y;
        object.rotation.z = rotationShadow.z;
      }
      object.traverse((child) => {
        if (child instanceof Mesh) {
          child.material = material;
        }
      });
    };
    const [{ localUri: localObj }] = await Asset.loadAsync(
      require("../../assets/costal/Costal1.obj")
    );
    const texture1 = new TextureLoader().load(
      require("../../assets/costal/ColorCostal.xpng")
    );
    const material1 = new MeshPhongMaterial({
      map: texture1,
      flatShading: true,
      emissiveIntensity: 0,
      shininess: 0,
      reflectivity: 0,
    });
    const loader = new OBJLoader();
    loader.load(
      localObj,
      function (object) {
        childFuntion(object, material1, 0);
        objectModel = object;
        scene.add(object);
      },
      function (xhr) {},
      function (error) {}
    );

    setlogConsole({
      assetDownload,
      localObj,
    });

    const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    // call render
    render();
  };

  return (
    <View style={{ height, width }}>
      <View style={{ position: "absolute", top: 30, zIndex: 10 }}>
        <Text>{JSON.stringify(logConsole, null, 3)}</Text>
      </View>
      <GLView
        style={{ height: "100%", width: "100%" }}
        onContextCreate={onContextCreate}
      />
    </View>
  );
};
