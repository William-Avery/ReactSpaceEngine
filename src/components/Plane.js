import React from 'react'

export default function Plane() {
    return (
        <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[100,100]} />
            <meshPhysicalMaterial attach="material" color="white" />
        </mesh>
    )
}
