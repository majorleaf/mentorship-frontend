import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  return (
    <motion.div 
    initial= {{ opacity: 0 }}
    animate= {{ opacity: 1 }}
    exit= {{ opacity: 0, transition: { duration: 0.2 } }}
    className='min-h-screen bg-slate-50 font-sans overflow-hidden relative selection:bg-indigo-100 selection:text-indigo-900'
    >
        {/* Background grdients */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0'>
         {/* Top Right Colour glow Glow*/}
            <div  className=' absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-blue-400/15 rounded-full blur-[120px]'/>
            {/* Center Right Purple Glow */}
            <div className='absolute top-[20%] right-[5%] w-[800px] h-[800px] bg-purple-400/15 rounded-full blur-[150px]'/>
            {/* Buttom left subtle cyan */}
            <div className='absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[100px]'/>
        </div>
       {/*Navigation */}
           <nav className='relative z-10 max-w-7x1 mx-auto px-6 py-6'></nav>
       < div>Landing</div>
    </motion.div>
    
  )
}