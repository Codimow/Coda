"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CalendarCell } from './CalendarCell';

interface CalendarGridProps {
  month: number;
  year: number;
}

export function CalendarGrid({ month, year }: CalendarGridProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  
  return (
    <group ref={groupRef}>
      {Array.from({ length: daysInMonth }).map((_, index) => {
        const date = index + 1;
        const dayPosition = index + firstDay;
        const row = Math.floor(dayPosition / 7);
        const col = dayPosition % 7;
        
        return (
          <CalendarCell
            key={date}
            date={date}
            position={[
              col - 3, // Center the grid
              2 - row, // Start from top
              0
            ]}
            isActive={date === new Date().getDate()}
            hasEvents={Math.random() > 0.7} // Random events for demonstration
          />
        );
      })}
    </group>
  );
}