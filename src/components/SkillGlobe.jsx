import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Skill({ texture, position }) {
  return (
    <mesh position={position}>
      <planeGeometry args={[0.5, 0.5]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

export default function SkillGlobe({ skills }) {
  const globeRef = useRef();

  // Load textures
  const textures = useMemo(
    () => skills.map((s) => new THREE.TextureLoader().load(s.image)),
    [skills]
  );

  // Calculate positions on sphere
  const positions = useMemo(() => {
    const pts = [];
    const N = skills.length;
    skills.forEach((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      const r = 3;
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);
      pts.push([x, y, z]);
    });
    return pts;
  }, [skills]);

  // Rotate globe
  useFrame(() => {
    if (globeRef.current) globeRef.current.rotation.y += 0.002;
  });

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} />
      <group ref={globeRef}>
        {textures.map((tex, idx) => (
          <Skill key={idx} texture={tex} position={positions[idx]} />
        ))}
      </group>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
