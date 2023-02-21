import { Dimensions, Image, Text, View } from "react-native";
import { GLView } from "expo-gl";
import {
  AmbientLight,
  Color,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  TextureLoader,
} from "three";
import ExpoTHREE, { Renderer } from "expo-three";
import { Asset } from "expo-asset";
import sombraImp from "../../assets/sombralata/Sombra_AL.png";
import { useState } from "react";
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

    //* plane texture assets png
    const geometry1 = new PlaneGeometry(1, 1);
    const material1 = new MeshBasicMaterial({
      map: await ExpoTHREE.loadTextureAsync({
        asset: require("../../assets/sombralata/TXT_Sombra_Costal_AL.png"),
      }),
    });
    const plane1 = new Mesh(geometry1, material1);
    plane1.position.set(-1, -2, 0);
    plane1.rotation.set(-0.5, 0, 0);
    scene.add(plane1);

    //* plane texture assets jpg
    const geometry3 = new PlaneGeometry(1, 1);
    const material3 = new MeshBasicMaterial({
      map: await ExpoTHREE.loadTextureAsync({
        asset: require("../../assets/sombralata/TXT_Sombra_Costal_AL.png"),
      }),
    });
    const plane3 = new Mesh(geometry3, material3);
    plane3.position.set(1, -2, 0);
    plane3.rotation.set(-0.5, 0, 0);
    scene.add(plane3);

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

    //*plane texture module url
    const assetsTexture = Asset.fromModule(
      require("../../assets/sombralata/TXT_Sombra_Costal_AL.png")
    );
    const geometry5 = new PlaneGeometry(1, 1);
    const material5 = new MeshBasicMaterial({
      map: await ExpoTHREE.loadTextureAsync({
        asset: assetsTexture,
      }),
    });
    const plane5 = new Mesh(geometry5, material5);
    plane5.position.set(-1, 0, 0);
    plane5.rotation.set(-0.5, 0, 0);
    scene.add(plane5);

    //*plane texture module url2
    //! assets
    const assetrequire = require("../../assets/sombralata/TXT_Sombra_Costal_AL.png")
    const assetDownload1 = Asset.fromModule(require("../../assets/sombralata/TXT_Sombra_Costal_AL.png"));
    const assetDownload = Asset.fromModule(require("../../assets/sombralata/TXT_Sombra_Costal_AL.png"));
    await assetDownload.downloadAsync();
    const exampleImageUri = Image.resolveAssetSource(sombraImp).uri;
    const imgLocal = Asset.fromURI(exampleImageUri);
    //! assets
    // const texture = new TextureLoader().load(
    //   assetsTexture.uri
    // );
    // const geometry6 = new PlaneGeometry(1, 1);
    // const material6 = new MeshBasicMaterial({
    //   map: await ExpoTHREE.loadTextureAsync({
    //     asset: assetDownload.localUri,
    //   }),
    // });
    // const plane6 = new Mesh(geometry6, material6);
    // plane6.position.set(1, 0, 0);
    // plane6.rotation.set(-0.5, 0, 0);
    // scene.add(plane6);
    setlogConsole({
      url: exampleImageUri,
      localUri: imgLocal,
      assetDownload,
      assetrequire,
      assetDownload1
    });
    // const geometry6 = new PlaneGeometry(1, 1);
    // const material6 = new MeshBasicMaterial({
    //   map: await ExpoTHREE.loadTextureAsync({
    //     asset: exampleImageUri,
    //   }),
    // });
    // const plane6 = new Mesh(geometry6, material6);
    // plane6.position.set(1, 0, 0);
    // plane6.rotation.set(-0.5, 0, 0);
    // scene.add(plane6);

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
