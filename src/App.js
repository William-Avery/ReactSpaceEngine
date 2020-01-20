import React from 'react';
import './App.css';
import { Canvas } from 'react-three-fiber'
import Box from "./components/Box"

function App() {
  return (
    <div className="App">
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
