import React from 'react'
import Home from './components/Home'
import Main from './components/Main'
import Memories from './components/Memories'
import Box from './components/Box'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Wish from './components/Wish'
import SuprisePage from './components/SuprisePage'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },{
      path:"/memories",
      element:<Wish/>
    },
    {
      path:"/suprise",
      element:<SuprisePage/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>  )
}

export default App
