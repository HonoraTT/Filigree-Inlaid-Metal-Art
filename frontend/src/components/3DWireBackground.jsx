// src/components/3DWireBackground.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 生成3D花丝曲线路径
const generateFiligreePath = () => {
  const points = [];
  for (let i = 0; i < 5; i++) {
    points.push(
      new THREE.Vector3(
        Math.sin(i * 0.5) * 10,
        Math.cos(i * 0.8) * 5,
        i * 2 - 5
      )
    );
  }
  return points;
};

// 3D金线组件
const GoldenWire = () => {
  const wireRef = useRef();
  const curve = new THREE.CatmullRomCurve3(generateFiligreePath());

  useFrame(({ clock }) => {
    wireRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={wireRef}>
      <Line
        points={curve.getPoints(100)}
        color="#D4AF37"
        lineWidth={0.5}
        metalness={0.9}
        roughness={0.2}
      />
    </group>
  );
};

// 3D场景
const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#D4AF37" intensity={1.5} />
      <GoldenWire />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default Scene;