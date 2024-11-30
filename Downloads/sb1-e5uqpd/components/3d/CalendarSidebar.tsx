"use client";

import { Text } from '@react-three/drei';
import { EventList } from './EventList';

interface CalendarSidebarProps {
  position: [number, number, number];
}

export function CalendarSidebar({ position }: CalendarSidebarProps) {
  return (
    <group position={position}>
      {/* Sidebar Background */}
      <mesh position={[0, 0, -0.1]}>
        <boxGeometry args={[2, 6, 0.1]} />
        <meshStandardMaterial
          color="#1A202C"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Header */}
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Events
      </Text>

      {/* Event List */}
      <EventList position={[0, 1.5, 0]} />
    </group>
  );
}