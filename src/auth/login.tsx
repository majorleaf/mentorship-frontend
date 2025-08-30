import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginResponse {
  token: string,
  user:{
    id:string,
    name?:string ,
    email: string,
    role:string
  }
}

const backendUrl = "https://mentorship-backend-r9vb.onrender.com"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsloading]=useState<boolean>(false)
  const [error, setError] =useState<string>("")
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsloading(true)
    setError("")
    try {
      const response = await axios.post<LoginResponse>(`${backendUrl}/api/auth/login`,{
        email,
        password
      })
      if(response.status===200 || response.status===201){      
        navigate("/")
      }
            //(response.data.user.role==="admin"){
            //navigate("/admin")
          //}
    } catch (error) {
      console.error(error)
    }finally{
      setIsloading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Mentorship Login
        </h1>
        <form onSubmit={submit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Type in a valid email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Type in your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md transform hover:scale-[1.02] transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
