import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
        const [ email, setEmail ] = useState<string>("");
        const [ password, setPassword ] = useState<string>("")
        const [error, setError ] = useState("")
        const submit  = async (e:React.FormEvent<HTMLFormElement>) => {
           e.preventDefault()
           setError("");

          try { 
           console.log(email);
           console.log(password);
          } catch(error){
             setError("Invalid email or password. please try again")
            }
        };
  return (
    
    <div>
      <div>
    <div className='mt-10 justify-self-center mx-auto' >
      <h1 className='justify-self-center justify-center font-bold text-2-3x1'>Login to Guidewire</h1>
      <form className='max-w-md mx-auto mt-10 p-8 bg-white rounded-x1 shadow-1g ' onSubmit={submit}> 
        <h1 className='text-3xl font-bold text-center mb-4'> Login</h1>
           <div className='mb-4'>
            <label htmlFor='email' className='black text-black-600 mb-78'>
              Email 
            </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email'
             id='email'
              placeholder='type in valid email addess'
               required
                className='w-full rounded-x1 px-4 py-2 pl=11 pr-4 text-sm text0slate-900 placeholder:text-slate-400 focus:border-blue-600   border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
            </input>
           </div>
           <div className='mb-4'>

            <label htmlFor='password' className='block text-black-600 mb-2'>
              Password
            </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' required className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
            </input>
            
           </div>
           <div className='flex shadow-amber-300'>
            <button type='submit' 
            className=' flex w-full items-center justify-center gap-2 rounded-x1 bg=slate-900 py-3 text-sm font-semibold transition-colors hover:bg-slate-800 ' >
                  Sign in
            </button>
           </div>
      
      </form>
    </div>
    </div>
    </div>
  )
}
