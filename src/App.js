import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { planetData } from "./Utils/planetData";
import "./App.css";
import sunTexture from "./textures/sun.jpg";
import backGround from "./textures/milky_way.jpg";
// import Dialog from "./Utils/Dialog";
// import Modal from "./Utils/Modal";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

import Portfolio from "./components/Portfolio";

export default function App() {
  // const [dialogData, setDialogData] = useState(null);

  // const hideDialog = () => {
  //   setDialogData(null);
  // };

  const styling = {
    width: "80%",
    height: "700px",
    left: "10%",
    backgroundImage: `url(${backGround})`,
  };

  return (
    <div className="background">
      <main>
        <Header />
        {/* <Dialog hideDialog={hideDialog} dialogData={dialogData} /> */}
        <Canvas
          className="canvas"
          style={styling}
          camera={{ position: [0, 20, 25], fov: 45 }}
        >
          <Suspense fallback={null}>
            <Sun />

            {planetData.map((planet) => (
              <Planet planet={planet} key={planet.id} />
            ))}
            <Lights />
            <OrbitControls />
          </Suspense>
        </Canvas>

        <About />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}
function Sun() {
  const texture = useLoader(THREE.TextureLoader, sunTexture);

  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
function Planet({
  planet: {
    xRadius,
    zRadius,
    size,
    speed,
    offset,
    rotationSpeed,
    textureMap,
    name,
    description,
  },
}) {
  const planetRef = useRef();

  const [isOver, setIsOver] = useState(false);

  const texture = useLoader(THREE.TextureLoader, textureMap);

  // const showModal = (data) => {
  //   return <div className="annotation">{data}</div>;
  // };

  useFrame(({ clock }) => {
    if (isOver) return;
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);

    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh
        ref={planetRef}
        onPointerEnter={(e) => {
          setIsOver(true);
        }}
        onPointerLeave={(e) => {
          setIsOver(false);
        }}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} />
        <Html distanceFactor={12}>
          <div className="annotation">{isOver ? description : name}</div>
        </Html>
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}
