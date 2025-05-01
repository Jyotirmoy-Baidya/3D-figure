import React, { useRef } from 'react'
import ActionFigure from './components/ActionFigure'
import TextCanvas from './components/TextCanvas'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ShuffleLoader from './components/ShuffleLoader'
import ShuffleLoader2 from './components/ShuffleLoader2'
import Scene2 from './components/Scene2'

const App = () => {

  return (
    <>
      <div className='flex-col hidden lg:flex'>
        <ActionFigure />
      </div>
      <div className='flex-col hidden max-lg:flex h-screen w-screen items-center bg-[#181818]'>
        <p className='text-xl text-white absolute top-36'>Please open in desktop view</p>
        <Canvas>
          <Scene2 />
        </Canvas>
        <p className=' text-white absolute bottom-24'>Hold to rotate Neo Cat.👆🏻</p>
      </div>
    </>
  )
}

export default App