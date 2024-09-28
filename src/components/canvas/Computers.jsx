import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); // Using absolute path for the model

  return (
    <mesh>
      {/* Adjust lighting for mobile */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={isMobile ? [-10, 25, 5] : [-20, 50, 10]} // Adjust light position for mobile
        angle={0.12}
        intensity={isMobile ? 0.7 : 1} // Lower intensity on mobile
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75} // Adjust scale for mobile
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Adjust position for mobile
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for screen size changes
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches); // Set initial mobile state

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); // Update state when screen size changes
      console.log("Is Mobile: ", event.matches); // Debugging log
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
