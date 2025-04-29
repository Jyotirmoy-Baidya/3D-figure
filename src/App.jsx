import React, { useRef } from 'react'
import ActionFigure from './components/ActionFigure'
import TextCanvas from './components/TextCanvas'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ShuffleLoader from './components/ShuffleLoader'
import ShuffleLoader2 from './components/ShuffleLoader2'

const App = () => {

  return (
    <div className='flex flex-col'>
      <ActionFigure />
    </div>
  )
}

export default App