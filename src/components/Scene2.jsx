/* eslint-disable no-unused-vars */
'use client'
import { Environment, Float, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Neo } from './Neo';

gsap.registerPlugin(ScrollTrigger);


const Scene2 = () => {

    const cameraRef = useRef(null);
    useFrame(() => {
        cameraRef.current.lookAt(0, 0, 0);
    })
    // all the lighting camreara all in thise compoent we dont write any html in side canvas

    return (
        <>
            {/* <OrbitControls /> */}
            <PerspectiveCamera
                ref={cameraRef}
                fov={45} near={.1} far={10000} makeDefault
                position={[0, 0, 7]} />
            <Environment preset='city' />
            <Float speed={2} rotationIntensity={1}>
                <Neo />
            </Float>
            <OrbitControls />
            {/* <axesHelper args={[500]} /> */}
        </>
    )
}

export default Scene2