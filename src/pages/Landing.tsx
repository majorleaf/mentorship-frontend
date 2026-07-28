import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronDown, 
  Users, 
  Target, 
  Sparkles,
  Briefcase
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
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Top Right Blue Glow */}
        <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-blue-400/15 rounded-full blur-[120px]" />
        {/* Center Right Purple Glow */}
        <div className="absolute top-[20%] right-[5%] w-[800px] h-[800px] bg-purple-400/15 rounded-full blur-[150px]" />
        {/* Bottom Left Subtle Cyan */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[100px]" />
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
            className="text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2.5 rounded-lg shadow-sm transition-all"
          >
            Get started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-[3.25rem] leading-[1.1] font-extrabold text-[#111827] tracking-tight mb-6">
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
              <button 
                onClick={() => navigate('/login')}
                className="bg-white text-slate-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                Sign In
              </button>
            </div>
          </motion.div>

          {/* Right Column - Floating UI Card */}
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
                
                {/* Area Chart graphic */}
                <div className="h-32 w-full relative flex items-end justify-between">
                  <div className="absolute inset-0 flex flex-col justify-between z-0">
                    <div className="w-full h-px bg-slate-200"></div>
                    <div className="w-full h-px bg-slate-200"></div>
                    <div className="w-full h-px bg-slate-200"></div>
                    <div className="w-full h-px bg-slate-200"></div>
                  </div>
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

            {/* Decorative Floating Elements */}
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
      </main>
    </motion.div>
  );
}