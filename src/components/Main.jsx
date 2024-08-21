import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Tent from './Tent'
import Cake from './Cake'
import { BallTriangle } from 'react-loader-spinner'
const Main = () => {
  return (
    <div className='h-screen bg-slate-900' style={{backgroundColor:"#674188"}}>
    <div className='bg-slate-900 absolute right-0'  style={{backgroundColor:"#674188"}}>
      <Canvas style={{height:"75vh", width:"50vw"}}>
      <Cake></Cake>
      <Environment preset='studio'></Environment>
      </Canvas>
    </div>
    <img src="https://i.imghippo.com/files/5Okym1724239313.png" alt="" className='w-1/4 h-1/4 absolute z-30 ml-4'/>
    <div className='bg-slate-900 h-1/2 w-1/2 absolute top-1/4 p-2 text-white space-grotesk text-lg md:text-2xl'  style={{backgroundColor:"#674188"}}>
    Wishing you a birthday filled with endless joy, unforgettable memories, and all the happiness your heart can hold. May this year bring you closer to your dreams. Happy Birthday!
    </div>
    </div>
  )
}

export default Main
