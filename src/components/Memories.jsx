import React from 'react'
import { motion } from 'framer-motion';
import Box from './Box';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
const Memories = () => {
  const photos=["https://i.imghippo.com/files/HG38q1724204732.jpg","https://i.imghippo.com/files/JDAjc1724205009.jpg","https://i.imghippo.com/files/4drkM1724205032.jpg","https://i.imghippo.com/files/vaHKP1724205074.jpg"];
  return (
    <div  style={{backgroundColor:"#674188"}} className='flex'>
      <p className='absolute top-3/4 m-3 p-2 matemasie-regular text-white text-2xl [text-shadow:_0.5rem_0rem_0.5rem_rgb(200_200_150_/_80%)] underline cursor-pointer'>our memorable moments</p>
      <div className='flex items-center flex-col'>
      {photos.map((ele)=>{
        return <motion.img src={ele} alt="" className='w-1/3 rounded-2xl m-7 cursor-pointer' whileHover={{
          borderRadius:"50%",
          scale:1.2
        }}
          initial={{
            y:"-50px",
            opacity:0,
          }}
          whileInView={{
            opacity:1,
            y:"0px",
            transition:{
              duration:2,
            }
          }}
        />
      })}
      </div>
    </div>
  )
}

export default Memories;
