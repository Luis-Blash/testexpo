import { Dimensions, Text, View } from "react-native";
import { useState } from "react";
import { GLView } from "expo-gl";
import {
  AmbientLight,
  PerspectiveCamera,
  Scene,
} from "three";
import { Renderer } from "expo-three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Asset } from "expo-asset";

const { width, height } = Dimensions.get("window");

export const ScreenViewModel = ({ route }) => {
  const { params } = route;
  const [logConsole, setLogConsole] = useState({})
  const [logObj, setLogObj] = useState({})
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

    const light = new AmbientLight( 0x404040 );
    light.intensity = 2
    scene.add( light );

    // set camera position away from cube
    camera.position.z = 2;

    const renderer = new Renderer({ gl });
    // set size of buffer to be equal to drawing buffer width
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const [{ localUri }] = await Asset.loadAsync(require('../../assets/costal/Costales.obj'));
    setLogConsole({url: localUri})
    //! create cube
    const loader = new OBJLoader();
    loader.load(
      localUri,
      function ( object ) {
        scene.add(object)
        setLogObj({complete: "completo"})
        
      },
      function ( xhr ) {
        setLogObj({complete: "progreso"})
      },
      function ( error ) {
        setLogObj({complete: "error", err: error})
        console.log( 'An error happened' );
      }
    );
    

    // define geometry
    // const geometry = new BoxBufferGeometry(1, 1, 1);
    // const material = new MeshBasicMaterial({
    //   color: "cyan",
    // });
    // const cube = new Mesh(geometry, material);
    // scene.add(cube);

    // create render function
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
      <GLView
        style={{ height: "100%", width: "100%" }}
        onContextCreate={onContextCreate}
      />
      <View style={{position: 'absolute', bottom: 100, left: 100, width: '80%'}}>
        <Text>{JSON.stringify(logConsole)}</Text>
        <Text>{JSON.stringify(logObj)}</Text>
      </View>
    </View>
  );
};
