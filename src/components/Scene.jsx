/* eslint-disable no-unused-vars */
'use client'
import { Environment, Float, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Neo } from './Neo';

gsap.registerPlugin(ScrollTrigger);


const Scene = ({ progress }) => {

    const cameraRef = useRef(null);
    useFrame(() => {
        cameraRef.current.lookAt(0, 0, 0);
    })
    // all the lighting camreara all in thise compoent we dont write any html in side canvas

    useEffect(() => {
        const updateCamPos = () => {
            const positions = [
                [0.7, 0.7, 7],
                [-1, -0.2, 1],
                [0.7, -0.6, 4.7],
                [-1, -0.6, 1.7],
                [0, -1, 4.6],
            ];

            if (progress >= 1) {
                gsap.to(cameraRef.current.position, {
                    x: 0,
                    y: -1,
                    z: 4.6,
                    duration: .5,
                    ease: 'power1.out',
                })
            }
            else {

                const segmentProgress = 1 / 4;
                const segmentIndex = Math.floor(progress / segmentProgress);
                const perentage = (progress % segmentProgress) / segmentProgress;
                // console.log(perentage);

                const [startX, startY, startZ] = positions[segmentIndex];
                const [endX, endY, endZ] = positions[segmentIndex + 1];

                const x = startX + (endX - startX) * perentage;
                const y = startY + (endY - startY) * perentage;
                const z = startZ + (endZ - startZ) * perentage;


                gsap.to(cameraRef.current.position, {
                    x: x,
                    y: y,
                    z: z,
                    duration: .5,
                    ease: 'power1.out',
                })
            }
        };
        updateCamPos();
    }, [progress, cameraRef.current]);

    return (
        <>
            {/* <OrbitControls /> */}
            <PerspectiveCamera
                ref={cameraRef}
                fov={45} near={.1} far={10000} makeDefault
                position={[3.5, 1, 3.7]} />

            <Environment preset='city' />
            <Float speed={2} rotationIntensity={1}>
                <Neo />
            </Float>
            {/* <axesHelper args={[500]} /> */}
        </>
    )
}

export default Scene