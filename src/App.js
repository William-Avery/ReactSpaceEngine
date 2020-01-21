import React from 'react';
import './App.css';
import { Canvas } from 'react-three-fiber'
import Box from "./components/Box"
import Controls from "./components/Controls"
import Plane from "./components/Plane"
import * as THREE from 'three'

function App() {
  return (
    <div className="App">
      <Canvas onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }} 
      camera={{ position: [0, 0, 5]}}
      >
        
        <Controls />
        <Box />
        <Plane />
      </Canvas>
    </div>
  );
}

export default App;
