
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Check } from 'lucide-react';
import {useState } from 'react';
import axios from 'axios';
import { useShopContext } from '../context';

export default function Login() {
    const navigate = useNavigate();
     interface LoginResponse {
      token: string;
      user: {
        id:string,
        name?:string,
        email:string,
        role:string
      }
     }

  const { backendUrl, setToken, setUser} = useShopContext();
  
  const [ email, setEmail ] = useState<string>("");
  const [password, setPassword ] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous error messages
    try {

      console.log(email);
      console.log(password);
         const response = await axios.post<LoginResponse>(`${backendUrl}/api/auth/login`, { 
         email, password
          });
          if(response.status === 200){
            setToken(response.data.token);
            setUser(response.data.user);
            navigate('/dashboard')
          }
    } catch {
      setError("Invalid email or password.please try again")
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex min-h-screen font-sans bg-white">
      {/* LEFT COLUMN: Form Area */}
      {}
      <div className="flex w-full flex-col justify-center px-8 sm:px-16 lg:w-[45%] xl:px-24">
        <div className="mx-auto w-full max-w-95">
          
          {/* Logo */}
          <div className="mb-12 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 shadow-sm">
              <span className="text-lg font-bold leading-none text-white">G</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">GuideWire</span>
          </div>

          {/* Headings */}
          {}
          <h1 className="text-3xl font-bold text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to continue your growth roadmap.</p>

          {/* User's Original Form (Restyled) */}
          <form className="mt-8" onSubmit={submit}>
            
            {/* Email Input Group */}
            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input  value={email} onChange={(e) => setEmail(e.target.value)}
                  type="email" 
                  id="email"
                  placeholder="you@example.com" 
                  required 
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Password Input Group */}
            {}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Forgot password
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                  type="password" 
                  id="password"
                  placeholder="password" 
                  required 
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Footer Link */}
          <p className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-700">
              Create one
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Hero/Promo Area (Hidden on mobile, visible on large screens) */}
      {}
      <div className="hidden w-full flex-col justify-center bg-linear-to-br from-blue-600 to-blue-900 p-12 lg:flex lg:w-[55%] xl:p-24 relative overflow-hidden">
        {/* Optional subtle glow effect to match the deep gradient vibe */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-lg relative z-10">
          <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            Your next promotion shouldn't be a guessing game.
          </h2>
          <p className="mt-6 text-lg text-blue-100">
            AI guidance, human mentors, and a clear roadmap — all in one place.
          </p>

          {/* Feature List */}
          <div className="mt-12 space-y-5">
            {[
              'AI mentor available 24/7',
              'Book verified human mentors in minutes',
              'Track growth milestones with real data',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-blue-50 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}