import React from 'react'

export default function Register() {
  return (
    <div className='flex min-h-screen font-sans bg-white'>
      
      <div className=' flex w-full flex-col justify-center px-8 sm:px-16 ig:w-[45%] x1:px-24'>
        <div className=' mx-auto w-full max-w-[400px]'>

          {/* Logo */}
          <div className='mb-10  flex items-center gap-2'>
              <div className=' flex h-8  items-center justify-center rounded bg-blue-600 shodow-sm'>
                <span className='text-x1 font-bold leading-none text-white'>G</span>
              </div>
              <span className='text-x1 font-bold tracking-light text-slate-900'>Guidewire</span>
          </div>

          {/* headings*/}
          <h1 className='text-2x1 font-bold text-slate-900' > Create your account </h1>
          <p  className='mt-2 text-sm text-slate-500 mb-80'> Start growing in under 2 minutes</p>
          {/* error  */}

          {/*form */}
          <form className='space-y-6'>
             {/* Role selection */}
             <div className='grid grid-cols-2 gap-3'></div>

          </form>

        </div>
      </div>
      </div>
  )
}
