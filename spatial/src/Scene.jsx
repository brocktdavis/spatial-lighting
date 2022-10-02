import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import OrbitControls from "./components/OrbitControls";
import Box from "./components/Box";
import Floor from "./components/Floor";
import LightBulb from "./components/LightBulb";
import Draggable from './components/Draggable';
import "./Scene.css";

export default class Scene extends Component {
  render() {
    return (
      <div className="scene">
        <Canvas
          shadows={true}
          className="canvas"
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />
          <OrbitControls />
          <Draggable>
            <Box rotateX={3} rotateY={0.2} />
          </Draggable>
          <Floor position={[0, -1, 0]} />
        </Canvas>
      </div>
    )
  }
}
