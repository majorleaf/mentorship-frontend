import React from 'react'

export default function Login() {
  return (
    <div className='mt-10 justify-self-center mx-auto' >
      <h1 className='justify-self-center justify-center font-bold text-2-3x1'>Login to Guidewire</h1>
      <form className='max-w-md mx-auto mt-10 p-8 bg-white rounded-x1 shadow-1g '> 
        <h1 className='text-3xl font-bold text-center mb-4'> Login</h1>
           <div className='mb-4'>
            <label htmlFor='email' className='black text-black-600 mb-78'>
              Email address
            </label>
            <input type='email' placeholder='type in valid email addess' required className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
            </input>
           </div>
           <div className='mb-4'>

            <label htmlFor='email' className='black text-black-600 mb-2'>
              Password
            </label>
            <input type='password' placeholder=' password' required className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
            </input>
            <button className=' absolute right-3 top-9  focus: outline-none rounded-1g shadow-amber-200s border mt-1' >
                  Login
            </button>
           </div>
      </form>
    </div>
  )
}
