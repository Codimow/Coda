"use client";

import { useRef } from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CalendarCellProps {
  date: number;
  position: [number, number, number];
  isActive?: boolean;
  hasEvents?: boolean;
}

export function CalendarCell({ date, position, isActive = false, hasEvents = false }: CalendarCellProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const color = isActive ? "#6B46C1" : "#2D3748";
  
  useFrame(() => {
    if (meshRef.current && isActive) {
      meshRef.current.position.z = Math.sin(Date.now() * 0.002) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Cell Base */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.9, 0.1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.5}
          roughness={0.2}
          envMapIntensity={2}
        />
      </mesh>

      {/* Date Text */}
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {date}
      </Text>

      {/* Event Indicator */}
      {hasEvents && (
        <mesh position={[0.3, -0.3, 0.06]}>
          <circleGeometry args={[0.08, 32]} />
          <meshStandardMaterial color="#E53E3E" />
        </mesh>
      )}
    </group>
  );
}