import { AnimatePresence,motion } from 'framer-motion';
import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { GiCandleLight } from "react-icons/gi";
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <AnimatePresence>
    <motion.div initial={{
      opacity:0,
    }}
    animate={
      {
        opacity:1,
      }
    }
    exit={{
      opacity:0,
      transition:{
        duration:5,
      }
    }}
    >
    <img src="https://i.imghippo.com/files/PLgGH1724239230.png" alt="" className='w-1/6 p-3 m-3 fixed'/>
    <img src="https://i.imghippo.com/files/nrxZ61724239185.png" alt="" className='absolute w-1/4 md:w-1/5 md:right-1/2' style={{height:"23%",right:"35%",top:"1.5%"}}/>
    <img src="https://i.imghippo.com/files/wngqz1724239144.png" alt="" className='h-1/4 w-1/4 absolute right-0 dino md:w-1/6'/>
    <div className='flex justify-center items-center'>
    <div style={{color:"#4F1787"}}
      className='text-2xl font-extrabold shadow-slate-400 shadow-lg p-3 w-1/2 absolute top-1/4 border-pink-300 rounded-xl [text-shadow:_0_3px_0_rgb(50_0_150_/_40%)] jersey-10-regular entryCard right-1/4 capitalize md:text-4xl'
      onClick={()=>{
        audio.play();
        console.log("playing")
      }}>Cheers to you,My friend! wishing you a birthday as amazing as you are!</div>
      <div className='flex justify-center'>
      <Link to="/memories" className='absolute bottom-1/4 w-1/2 matemasie-regular p-3 rounded-3xl text-neutral-600 text-md md:w-1/3 md:xl md:bottom-1/3' style={{backgroundColor:"#B4D6CD"}}>
      <div className='text-center' >click to blow the candle<GiCandleLight className='inline-block text-2xl text-yellow-200' style={{backgroundColor:"#B4D6CD"}}/></div>
      </Link>
      </div>
    </div>
    <img src="https://i.imghippo.com/files/5zQzS1724239103.png" alt="" className='w-1/6 dog absolute bottom-0 -z-50'/>
    </motion.div>
    </AnimatePresence>
  )
}

export default Home;
