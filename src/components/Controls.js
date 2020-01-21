import React, { useState, useRef } from 'react'
import { extend, useThree, useFrame } from 'react-three-fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls });

export default function Controls() {
    const orbitRef = useRef();
    const { camera, gl } = useThree();
    
    useFrame(() => {
        orbitRef.current.update()
    })

    return (
        <orbitControls  
            args={[camera, gl.domElement]}
            ref={orbitRef}
            autoRotate
            maxPolarAngle={Math.PI/3}
            minPolarAngle={Math.PI/3}
        />
    )
}