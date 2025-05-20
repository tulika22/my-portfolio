import * as React from "react";
import { useEffect, useState } from "react";

interface IPetal {
  id: number;
  size: number;
  x: number;
  y: number;
  animationDuration: number;
  animationDelay: number;
  rotation: number;
}

export const PetalBackground = () => {
  const [petals, setPetals] = useState<IPetal[]>([]);

  useEffect(() => {
    generatePetals();

    const handleResize = () => {
      generatePetals();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generatePetals = () => {
    const numberOfPetals = Math.floor((window.innerWidth * window.innerHeight) / 12000);
    const newPetals: IPetal[] = [];

    for (let i = 0; i < numberOfPetals; i++) {
      newPetals.push({
        id: i,
        size: Math.random() * 16 + 16, // font size in px (16px to 32px)
        x: Math.random() * 100,
        y: -Math.random() * 100,
        animationDuration: Math.random() * 10 + 5,
        animationDelay: Math.random() * 10,
        rotation: Math.random() * 360,
      });
    }

    setPetals(newPetals);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            fontSize: `${petal.size}px`,
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            transform: `rotate(${petal.rotation}deg)`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};
