import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, useAnimations } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Model() {
  const group = useRef<any>(null);
  const { scene, animations } = useGLTF("/landing_page_motor.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["Animation"]) {
      actions["Animation"].stop();
    }
  }, [actions]);

  const handleClick = () => {
    if (actions && actions["Animation"]) {
      actions["Animation"].reset().play();
      actions["Animation"].clampWhenFinished = true;
      actions["Animation"].repetitions = 1;
    }
  };

  return (
    <primitive
      ref={group}
      object={scene}
      scale={2}
      onClick={handleClick}
    />
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl leading-tight"
      >
        Precision{" "}
        <span
          className="text-gray-400 font-bold"
          style={{ fontFamily: "'Cabin Sketch', sans-serif", fontWeight: 500 }}
        >
          CNC{" "}
        </span>
        Parts <br />
        Shipped as Fast as Tomorrow
      </motion.h1>

      {/* 3D Model */}
      <div className="w-full h-[400px] mt-12">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <Model />
          <OrbitControls autoRotate />
          <Environment files="/forest.exr" background={false} />
        </Canvas>
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-gray-600 text-lg"
      >
        Upload your CAD file, and we'll take care of machining, finishing, and
        shipping — accurate parts delivered fast, no stress.
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        UPLOAD YOUR DESIGN
      </motion.button>
    </section>
  );
}
