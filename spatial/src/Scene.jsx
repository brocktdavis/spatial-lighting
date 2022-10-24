import "./Scene.css";
import Box from "./components/Box";
import {Canvas} from "@react-three/fiber";
import Draggable from "./components/Draggable";
import Floor from "./components/Floor";
import LightBulb from "./components/LightBulb";
import OrbitControls from "./components/OrbitControls";
import React from "react";

function Scene() {
  return (
    <div className="scene">
      <Canvas
        camera={
          {"position": [-6, 7, 7]}
        }
        className="canvas"
        shadows
      >
        <ambientLight color="white" intensity={0.2}/>
        <LightBulb position={[0, 3, 0]} />
        <OrbitControls />
        <Draggable>
          <Box rotateX={2} rotateY={0.2} />
        </Draggable>
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}

export default Scene;
