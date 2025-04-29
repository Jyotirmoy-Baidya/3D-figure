import { Environment, Float, OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Text from './Text'

const TextCanvas = ({ color = '#000000', text, pos }) => {
    const { ...config } = {
        backside: true,
        backsideThickness: .3,
        transmission: 1,
        thickness: .3,
        chromaticAbberation: 5,
        ior: 1.5,
        color: color
    }

    return (
        <Canvas camera={{ position: pos }}>
            <ambientLight intensity={1.5} />
            <directionalLight
                position={[-5, 2, 5]}
                intensity={10}
                color={'#FF0000'} // gold/yellow
            />
            <directionalLight
                position={[5, 2, 5]}
                intensity={7}
                color={'#FF0000'} // gold/yellow
            />

            <Float speed={4} rotationIntensity={0.4}>
                <Text config={config} position={[0, -1.5, 0]}>
                    {text}
                </Text>
            </Float>
            <Environment preset='city' blur={.5} />
            {/* <OrbitControls /> */}
        </Canvas>
    )
}

export default TextCanvas