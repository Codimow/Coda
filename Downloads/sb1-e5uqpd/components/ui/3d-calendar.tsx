"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { CalendarGrid } from '@/components/3d/CalendarGrid';
import { CalendarSidebar } from '@/components/3d/CalendarSidebar';
import { Neural } from '@/components/3d/Neural';

export function Calendar3DScene() {
  const currentDate = new Date();
  
  return (
    <div className="w-full h-[600px] relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.2} />
        
        <Suspense fallback={null}>
          <CalendarGrid
            month={currentDate.getMonth()}
            year={currentDate.getFullYear()}
          />
          <CalendarSidebar position={[5, 0, 0]} />
          <Neural />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}