import React, { useState } from 'react'
import { useRender } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'


export default function Box() {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const props = useSpring({
        scale: active ? [1.5, 1.5, 1.5] : [1,1,1],
        color: hovered ? 'hotpink' : 'gray',
    })
    
    useRender(() => {
        
    })

    console.log('Frame')

    return (
        <a.mesh 
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setActive(!active)}
            scale={props.scale}
        >
            <a.boxBufferGeometry attach="geometry" args={[1,1,1]} />
            <a.meshBasicMaterial attach="material" color={props.color} />
        </a.mesh>
    )
}