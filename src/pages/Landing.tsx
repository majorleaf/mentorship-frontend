import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

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
           <nav className='relative z-10 max-w-7x1 mx-auto px-6 py-6 flex items-center justify-between'>
              <div className='flex items-center gap-12'>
                {/* Logo */}
                 <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/')}>
                     <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-700 to-yellow-600 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg leading-none">G</span>
                    </div>
                  <span className="text-xl font-bold text-slate-900 tracking-tight">GuideWire</span>
                 </div>

              {/* Desktop links */}
              <div className='hidden md:flex items-center gap-8 text-sm font-medium text-blue-500'>
               <button className='flex items-center gap-1 hover:text-slate-900 transition-colors'>
                Solutions <ChevronDown className='w-4 h-4 opacity-50'/>
              </button>
               < button className="flex items-center gap-1 hover:text-slate-900 transition-colors">
              Platform <ChevronDown className="w-4 h-4 opacity-50" />
               </button>
               <button className="hover:text-slate-900 transition-colors">Mentors</button>
             <button className="flex items-center gap-1 hover:text-slate-900 transition-colors">
              Company <ChevronDown className="w-4 h-4 opacity-50" />
                </button>
               <button className="flex items-center gap-1 hover:text-slate-900 transition-colors">
              Resources <ChevronDown className="w-4 h-4 opacity-50" />
                </button>
              
                </div>
              </div>

              {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/login')}
            className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Login
          </button>
          <button 
            onClick={() => navigate('/register')}
            className="text-sm font-medium bg-white text-slate-900 border border-slate-200 px-5 py-2.5 rounded-lg shadow-sm hover:shadow hover:border-slate-300 transition-all"
          >
            Get started
          </button>
        </div>
            </nav>
       < div>Landing</div>
    </motion.div>
    
  )
}