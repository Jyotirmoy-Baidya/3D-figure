/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Neo(props) {
    const { nodes, materials } = useGLTF('/Cyber_Catbot_neo_0409161209_texture.glb')
    return (
        <group scale={[1.5, 1.5, 1.5]} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
        </group>
    )
}

useGLTF.preload('/Cyber_Catbot_neo_0409161209_texture.glb')