import { Center, MeshTransmissionMaterial, Text3D } from '@react-three/drei'
import React from 'react'

const Text = ({ children, config, font = '/helvetiker_regular.typeface.json', ...props }) => {
    return (
        <>
            <group >
                <Center scale={[1, 1, 1]} top={true} position={[0, 6, 0]}  {...props}>
                    <Text3D
                        font={font}
                        scale={1.5}
                        letterSpacing={0.2}
                        height={0.25}
                        bevelEnabled
                        bevelSize={.02}
                        bevelSegments={10}
                        curveSegments={128}
                        bevelThickness={0.01}

                    >
                        {children}
                        <MeshTransmissionMaterial
                            color={'#00DDDD'}
                            emissive={'#0099AA'}
                            emissiveIntensity={0.5}
                            {...config} />
                    </Text3D>
                </Center>
            </group>
        </>
    )
}

export default Text