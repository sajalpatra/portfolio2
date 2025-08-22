"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function WavyBackground() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={6}>
      <planeGeometry args={[3, 3, 40, 40]} />
      <meshStandardMaterial
        color={"#1e40af"} // deep blue
        wireframe={false}
        metalness={0.8}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
      {/* 3D Background */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 2, 5]} />
        <WavyBackground />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>

      {/* Overlay Content */}
      <div className="absolute w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-center justify-between">
        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:w-1/2 mb-6 md:mb-0"
        >
          <Image
            src="/image/im3.jpg"
            alt="Sajal Profile"
            width={280}
            height={280}
            className="rounded-full shadow-lg border-4 border-blue-500"
          />
        </motion.div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 0.9 }}
            transition={{ duration: 1.7, type: "spring",bounce:0.3 }}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          >
            Hi, I'm{" "}
            <motion.span
              animate={{ color: ["#ffffff", "#60a5fa"] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-blue-400"
            >
              Sajal
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl text-gray-300"
          >
            <motion.span
              initial={{ letterSpacing: "0em" }}
              animate={{ letterSpacing: "0.1em" }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-blue-500"
            >
              A passionate Full-Stack Developer
            </motion.span>{" "}
            & AI Enthusiast
          </motion.p>
<Link href="/projects">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
            className="mt-6 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all"
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View My Work
          </motion.button></Link>
           <div className="mt-6 mb-10 flex flex-wrap justify-center md:justify-start gap-3">
          <span className="px-3 py-1 bg-blue-900/50 rounded-xl text-sm text-blue-300">
            React
          </span>
          <span className="px-3 py-1 bg-blue-900/50 rounded-xl text-sm text-blue-300">
            Next.js
          </span>
          <span className="px-3 py-1 bg-blue-900/50 rounded-xl text-sm text-blue-300">
            Node.js
          </span>
          <span className="px-3 py-1 bg-blue-900/50 rounded-xl text-sm text-blue-300">
            AI/ML
          </span>
        </div>
        </div>
        
      </div>
     
    </section>
  );
}
