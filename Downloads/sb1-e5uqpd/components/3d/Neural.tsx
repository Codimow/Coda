"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Neural() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Create neural network nodes
  const nodeCount = 50;
  const positions = new Float32Array(nodeCount * 3);
  const connections = new Float32Array(nodeCount * 6); // Two points per line
  
  for (let i = 0; i < nodeCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    
    // Create connections between nodes
    if (i > 0) {
      connections[(i - 1) * 6] = positions[(i - 1) * 3];
      connections[(i - 1) * 6 + 1] = positions[(i - 1) * 3 + 1];
      connections[(i - 1) * 6 + 2] = positions[(i - 1) * 3 + 2];
      connections[(i - 1) * 6 + 3] = positions[i * 3];
      connections[(i - 1) * 6 + 4] = positions[i * 3 + 1];
      connections[(i - 1) * 6 + 5] = positions[i * 3 + 2];
    }
  }

  useFrame(({ clock }) => {
    if (pointsRef.current && linesRef.current) {
      const time = clock.getElapsedTime();
      
      // Animate nodes
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < nodeCount; i++) {
        positions[i * 3 + 2] = Math.sin(time + i * 0.1) * 0.2;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Update connections
      const lines = linesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < nodeCount - 1; i++) {
        lines[i * 6 + 2] = positions[i * 3 + 2];
        lines[i * 6 + 5] = positions[(i + 1) * 3 + 2];
      }
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, 0, -2]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodeCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#6B46C1"
          transparent
          opacity={0.8}
        />
      </points>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodeCount * 2}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6B46C1"
          transparent
          opacity={0.2}
        />
      </lineSegments>
    </group>
  );
}