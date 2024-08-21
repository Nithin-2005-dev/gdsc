import React, { Suspense } from 'react'
import Main from './Main'
import Memories from './Memories'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Box from './Box'
import { Link } from 'react-router-dom'
import { BallTriangle } from 'react-loader-spinner'

const Wish = () => {
  return (
    <>
     <Main></Main>
      <Memories/>
      <div style={{backgroundColor:"#674188"}} className='jersey-10-regular text-center text-4xl text-orange-200 cursor-pointer'>
        Click on the suprise box to open
      </div>
      <Link to="/suprise" className='absolute' style={{backgroundColor:"#674188",height:"70vh",width:"100vw"}} >
    <Canvas>
      <Environment preset='forest'/>
        <Box/>
      </Canvas>
      </Link> 
    </>
  )
}

export default Wish
