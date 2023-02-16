import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "expo-three";

export const Costal = ({ zoom = false, textures = { map: "" } }) => {
  const mesh = useRef();
  let mapsDiffuse = require("../../assets/costal/tex2.jpg")
  if(textures.map !== ""){
    mapsDiffuse = textures.map
  }
  const [diffuse] = useLoader(TextureLoader, [
    mapsDiffuse,
  ]);
  const material = useLoader(
    MTLLoader,
    require("../../assets/costal/Costales.mtl")
  );
  const obj = useLoader(
    OBJLoader,
    require("../../assets/costal/Costales.obj"),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );
  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = diffuse;
        child.castShadow = false;
        child.receiveShadow = false;
        if(textures.map === ""){
          child.visible = false
        } else {
          child.visible = true
        }
      }
    });
  }, [obj]);

  useFrame((state, delta) => {
    if (zoom) {
      if (mesh.current.position.z <= 1) {
        mesh.current.position.z += 0.01;
      }
    } else {
      if (mesh.current.position.z >= 0) {
        mesh.current.position.z -= 0.01;
      }
    }
  });

  return (
    <group>
      <primitive
        castShadow
        ref={mesh}
        rotation={[0, 0.6, 0]}
        position={[0, -1.5, 0]}
        object={obj}
        scale={7}
      />
    </group>
  );
};
