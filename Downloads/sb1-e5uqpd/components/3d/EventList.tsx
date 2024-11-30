"use client";

import { Text } from '@react-three/drei';

interface EventListProps {
  position: [number, number, number];
}

export function EventList({ position }: EventListProps) {
  const events = [
    { time: "09:00", title: "Team Meeting" },
    { time: "12:30", title: "Lunch Break" },
    { time: "15:00", title: "Project Review" },
  ];

  return (
    <group position={position}>
      {events.map((event, index) => (
        <group key={index} position={[0, -index * 0.4, 0]}>
          <Text
            position={[-0.7, 0, 0]}
            fontSize={0.15}
            color="#A0AEC0"
            anchorX="left"
          >
            {event.time}
          </Text>
          <Text
            position={[-0.2, 0, 0]}
            fontSize={0.15}
            color="white"
            anchorX="left"
          >
            {event.title}
          </Text>
        </group>
      ))}
    </group>
  );
}