import { Dimensions, View } from "react-native";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
// import { Costal } from "../models/Costal";
// import { Lata } from "../models/Lata";
// import { typeModal } from "../types/productsDog";
// import { Premios } from "../models/Premios";
import { ButonPrimary } from "../components/Buttons/ButonPrimary";

const { width, height } = Dimensions.get("window");

function Box(props) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export const ScreenViewModel = ({ route }) => {
  const { params } = route;
  const [zoom, setZoom] = useState(false);
  return (
    <View style={{ height, width }}>
      <Canvas>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Box position={[0, 0, 0]} />
          {/* <Costal textures={{ map: params.mapCostal }} />
          <Lata textures={{ map: params.mapLata }} />
          <Premios textures={{ map: params.mapPremios }} /> */}
        </Suspense>
      </Canvas>
      <View
        style={{
          position: "absolute",
          bottom: 100,
          left: 100,
        }}
      >
        <ButonPrimary
          action={() => {
            setZoom(!zoom);
          }}
        >
          Zoom
        </ButonPrimary>
      </View>
    </View>
  );
};
