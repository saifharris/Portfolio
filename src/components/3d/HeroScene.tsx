"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.elapsedTime * 0.12;
    ref.current.rotation.y = clock.elapsedTime * 0.18;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshBasicMaterial color="#5b5bd6" wireframe transparent opacity={0.85} />
    </mesh>
  );
}

function OuterRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = Math.PI / 3 + clock.elapsedTime * 0.07;
    ref.current.rotation.z = clock.elapsedTime * 0.04;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.9, 0.014, 6, 120]} />
      <meshBasicMaterial color="#7c3aed" transparent opacity={0.6} />
    </mesh>
  );
}

function InnerRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.1;
    ref.current.rotation.x = Math.PI / 5 - clock.elapsedTime * 0.05;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.2, 0.009, 6, 90]} />
      <meshBasicMaterial color="#0ea5e9" transparent opacity={0.45} />
    </mesh>
  );
}

function FloatingOrbs() {
  const orbRefs = useRef<THREE.Mesh[]>([]);
  const data = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        angleOffset: (i / 6) * Math.PI * 2,
        radius: 3.3 + (i % 2) * 0.4,
        speed: 0.2 + i * 0.035,
      })),
    []
  );

  useFrame(({ clock }) => {
    orbRefs.current.forEach((orb, i) => {
      if (!orb) return;
      const d = data[i];
      const t = clock.elapsedTime * d.speed + d.angleOffset;
      orb.position.x = Math.cos(t) * d.radius;
      orb.position.y = Math.sin(t * 0.6) * 1.4;
      orb.position.z = Math.sin(t) * d.radius * 0.45;
    });
  });

  return (
    <>
      {data.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) orbRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.055, 8, 8]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#5b5bd6" : "#7c3aed"} />
        </mesh>
      ))}
    </>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 700;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4.5 + Math.random() * 4.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.02;
      ref.current.rotation.x = clock.elapsedTime * 0.007;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#a5b4fc"
        size={0.025}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ParticleField />
      <RotatingIcosahedron />
      <OuterRing />
      <InnerRing />
      <FloatingOrbs />
    </Canvas>
  );
}
