import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { range } from "three/tsl";
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={10} position={[0, 1, 0]} range={50} />
      <spotLight position={[1, 1, -10]} angle={0.12} intensity={2} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -1, 0]}
        rotation={[0, 0, -0.2]}
      />
    </mesh>
  );
};
const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 5, 5], rotation: [30, 30, 30], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers />

      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
