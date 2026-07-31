import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronDown, 
  ArrowRight, 
  BarChart3, 
  Users, 
  Target, 
  Sparkles,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="min-h-screen bg-slate-50 font-sans overflow-hidden relative selection:bg-indigo-100 selection:text-indigo-900"
    >
      
      {/* Background Gradients (Inspired by the Clearbit reference) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Top Right Blue Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-250 h-250 bg-blue-400/15 rounded-full blur-[120px]" />
        {/* Center Right Purple Glow */}
        <div className="absolute top-[20%] right-[5%] w-200 h-[800px] bg-purple-400/15 rounded-full blur-[150px]" />
        {/* Bottom Left Subtle Cyan */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[100px]" />
        
        {/* Grid Pattern overlay for that "tech" feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlNGRlZjciLz48L3N2Zz4=')] opacity-50 mask-image-radial-gradient"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg leading-none">G</span>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">GuideWire</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button className="flex items-center gap-1 hover:text-slate-900 transition-colors">
              Solutions <ChevronDown className="w-4 h-4 opacity-50" />
            </button>
            <button className="flex items-center gap-1 hover:text-slate-900 transition-colors">
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

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-[3.5rem] leading-[1.1] font-extrabold text-[#111827] tracking-tight mb-6">
              Predictable <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">career growth</span> starts here.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              GuideWire gives you full context on your skills and connects you with industry-leading mentors so you can reach your career goals faster, and more predictably.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/register')}
                className="bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Right Column - Floating UI Component (Replicating the image feel) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center lg:justify-end"
          >
            {/* The Main "Dashboard" Card */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-20 w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-6"
              style={{ boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.15)' }}
            >
              {/* Fake App Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Career Trajectory</h3>
                  <p className="text-xs text-slate-500">Mentorship Impact Analysis</p>
                </div>
              </div>

              {/* Fake Chart Area */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100/50">
                <div className="flex justify-between items-end mb-4">
                  <div className="flex gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-1">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Expected
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-1">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span> With GuideWire
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CSS Drawn Chart graphic */}
                <div className="h-32 w-full relative flex items-end justify-between">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between z-0">
                    <div className="w-full h-px bg-slate-200"></div>
                    <div className="w-full h-px bg-slate-200"></div>
                    <div className="w-full h-px bg-slate-200"></div>
                    <div className="w-full h-px bg-slate-200"></div>
                  </div>
                  {/* Fake Area Chart (SVG) */}
                  <svg className="absolute inset-0 h-full w-full z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,100 L0,80 Q25,70 50,50 T100,20 L100,100 Z" fill="url(#blue-gradient)" opacity="0.2" />
                    <path d="M0,80 Q25,70 50,50 T100,20" fill="none" stroke="#4f46e5" strokeWidth="2" />
                    <defs>
                      <linearGradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Plot points */}
                  <div className="absolute top-[20%] right-0 w-3 h-3 bg-indigo-600 border-2 border-white rounded-full z-20 shadow"></div>
                  <div className="absolute top-[50%] right-[50%] w-3 h-3 bg-indigo-600 border-2 border-white rounded-full z-20 shadow"></div>
                </div>
              </div>

              {/* Fake Activity List */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Recent Matches</h4>
                <div className="space-y-3">
                  {[
                    { role: "Senior Frontend Engineer", company: "Stripe", match: "98%" },
                    { role: "Product Manager", company: "Linear", match: "94%" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{item.role}</p>
                          <p className="text-xs text-slate-500">{item.company}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        {item.match} Match
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative floating elements behind the main card */}
            <motion.div 
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 z-10 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Goal Reached</p>
                <p className="text-[10px] text-slate-500">System Design</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-8 z-30 bg-indigo-600 text-white p-4 rounded-xl shadow-xl flex items-center gap-3"
            >
               <Sparkles className="w-5 h-5 text-indigo-200" />
              <div>
                <p className="text-sm font-bold">New Mentor Available</p>
                <p className="text-xs text-indigo-200">from Google</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Proof / Logos */}
        <div className="mt-32 pt-10 border-t border-slate-200/60">
          <p className="text-center text-sm font-medium text-slate-500 mb-8">
            GuideWire is the platform behind the world's fastest-growing careers
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text/lucide to simulate logos since we can't import actual SVGs easily */}
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
              <div className="w-6 h-6 rounded-sm bg-blue-600 text-white flex items-center justify-center text-xs">S</div>
              Segment
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
              <div className="w-4 h-4 rounded-full bg-rose-500"></div>
              asana
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
              <div className="flex gap-0.5"><div className="w-1 h-5 bg-blue-500"></div><div className="w-1 h-5 bg-blue-500"></div><div className="w-1 h-5 bg-blue-500"></div></div>
              INTERCOM
            </div>
            <div className="flex items-center gap-2 font-black italic text-xl text-slate-800">
               GONG
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
               HubSpot
            </div>
          </div>
        </div>
      </main>

    </motion.div>
  );
}





//LOGIN 
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Check } from 'lucide-react';

export default function Login() {
  const [ email, setEmail ] = useState<string>("");
  const [password, setPassword ] = useState<string>(""
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log(email);
      console.log(password);

    } catch (error) {
        setError("Invalid email or password.please try again")
    }
  }
  return (
    <div className="flex min-h-screen font-sans bg-white">
      {/* LEFT COLUMN: Form Area */}
      {}
      <div className="flex w-full flex-col justify-center px-8 sm:px-16 lg:w-[45%] xl:px-24">
        <div className="mx-auto w-full max-w-[380px]">
          
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
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Sign in
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
      <div className="hidden w-full flex-col justify-center bg-gradient-to-br from-blue-600 to-blue-900 p-12 lg:flex lg:w-[55%] xl:p-24 relative overflow-hidden">
        {/* Optional subtle glow effect to match the deep gradient vibe */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
        
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