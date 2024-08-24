import { AnimatePresence,motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { BiLabel } from 'react-icons/bi';
import 'react-toastify/dist/ReactToastify.css';
import { RiFilePaper2Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';
import { addDoc, collection, doc, getDoc, getDocs} from 'firebase/firestore';
import { Bounce, toast, ToastContainer } from 'react-toastify';
let i=1;
let blessings=[{
    id:1,
    msg:"Dear son, from the moment you were born, you've brought nothing but joy into our lives. Watching you grow into the amazing person you are today has been our greatest gift. Happy Birthday, sweetheart! May all your dreams come true."   
   },{
       id:2,
       msg:"To my amazing brother, having you as my sibling is the best gift life could give. Here's to more laughter, more adventures, and more unforgettable moments together. Happy Birthday!"
   },{
       id:3,
       msg:"To my amazing brother, having you as my sibling is the best gift life could give. Here's to more laughter, more adventures, and more unforgettable moments together. Happy Birthday!"
   },{
       id:4,
       msg:"Happy Birthday to my partner-in-crime! Every moment with you is an adventure, and I can’t wait to create even more memories together. Cheers to another year of friendship!"
   }];
   getDocs(collection(db,"msgs"))
   .then((snapshot)=>{
    snapshot.docs.map((ele)=>{
        blessings.push(ele.data());
    })
   })
const SuprisePage = () => {
    const navigate=useNavigate();
    const msgRef=useRef();
    const handleSubmit=()=>{
        if(msgRef.current.value==""){
            toast.warn('blessing box is empty!!!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                localStorage.setItem("msgs",JSON.stringify(blessings));
        navigate("/suprise");
            return;
        }
        addDoc(collection(db,"msgs"),{id:blessings.length+1,msg:msgRef.current.value})
        blessings.push({id:blessings[blessings.length-1].id+1,msg:msgRef.current.value})
        localStorage.setItem("msgs",JSON.stringify(blessings));
        msgRef.current.value="";
        getData();
    }
    const getData=()=>{
        getDocs(collection(db,"msgs"))
        .then(snapshot=>{
            snapshot.docs.map((ele)=>{
                blessings.push(ele);
            })
        })
        .catch(err=>{
            console.log(err);
        })
        localStorage.setItem("msgs",JSON.stringify(blessings));
        navigate("/suprise");
    }
  return (
    <>
     <AnimatePresence>
        <motion.div initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                duration:3,
            }
        }}
        exit={{
            opacity:0,
        }}
        >
    <img src="https://i.imghippo.com/files/yWaTC1724239436.png" alt="" className='fixed rotate-45 w-1/6 top-1/4 bird -z-20 md:1-1/12'/>
    <img src="https://i.imghippo.com/files/VceQd1724239412.png" alt="" className='fixed -z-10 w-1/6 rotate-45 top-1/2 rocket md:w-1/12'/>
    <div>
    <div className='flex justify-center'>
    <div className='fixed -z-10 text-white p-3 text-4xl edu-vic-wa-nt-beginner text-center'>
        Blessings from the well wishers
        <div className='text-center p-3 m-4 text-xl text-slate-300'>
        Welcome! Discover how truly blessed you are with this special website. Reflect on the wonderful wishes and warm messages shared by your loved ones. Each message is a reminder of the joy and love surrounding you. Take a moment to cherish these blessings!
        </div>
    </div>
    </div>
      <img src="https://i.imghippo.com/files/pk2SE1724239745.jpg" alt="" id="ro" className='fixed -z-50 h-screen w-full'/>
      <img src="https://i.imghippo.com/files/SPbkZ1724239271.png" alt="" className='z-20 h-screen w-full'/>
    </div>
    <div className='bg-slate-950 text-white flex flex-col'>
    {blessings!=null && blessings.map((ele)=>{
        return <div className={`w-1/2 p-6 border-2 bg-slate-900 ml-4 mb-3 font-extrabold ${(i++)%2==0?'self-end':''} md:w-1/3 mr-4 card cursor-pointer`} key={ele.id}>
        {ele.msg}
    </div>
    })}
    <div></div>
    <div className='self-center font-mono text-2xl font-bold m-6 p-3 text-orange-200 mb-0 cursor-pointer'>
       Blessing box
    </div>
    <textarea className='self-center w-1/2 bg-slate-500 rounded-lg p-3' rows={8} placeholder='enter your message here' ref={msgRef}></textarea>
    <div  className='self-center text-xl m-4 font-extrabold bg-slate-600 px-3 rounded-lg inline-block'>
    <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default SuprisePage
