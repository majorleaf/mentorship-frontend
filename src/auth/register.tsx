
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Loader2, Building2, Check } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Aligning state with the UI from the screenshot
  const [accountType, setAccountType] = useState<'individual' | 'company'>('individual');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/login');
    } catch (error) {
      setError('An error occurred during registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-white">
      
      {/* LEFT COLUMN: Promo Area (Blue Background) */}
      <div className="hidden w-full flex-col justify-center bg-linear-to-br from-blue-600 to-blue-900 p-12 lg:flex lg:w-[55%] xl:p-24 relative overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute top-0 left-0 w-125 h-125 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-lg relative z-10">
          <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            Build a career roadmap that actually works.
          </h2>
          <p className="mt-6 text-lg text-blue-100">
            Join 12,000+ professionals growing with AI guidance and human mentorship.
          </p>

          {/* Feature List */}
          <div className="mt-12 space-y-5">
            {[
              'Free for individuals — no credit card',
              'Match with mentors in your industry',
              'Track real progress toward your goals',
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

      {/* RIGHT COLUMN: Form Area */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-16 lg:w-[45%] xl:px-24">
        <div className="mx-auto w-full max-w-100">
          
          {/* Logo */}
          <div className="mb-10 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 shadow-sm">
              <span className="text-lg font-bold leading-none text-white">G</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">GuideWire</span>
          </div>

          {/* Headings */}
          <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
          <p className="mt-2 text-sm text-slate-500 mb-8">Start growing in under 2 minutes.</p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm text-center font-medium">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Role Selection */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                I'm joining as
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAccountType('individual')}
                  className={`flex items-center gap-2 rounded-xl border p-2.5 text-sm font-medium transition-all ${
                    accountType === 'individual' 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm' 
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <User className={`h-4 w-4 ${accountType === 'individual' ? 'text-blue-600' : 'text-slate-400'}`} />
                  Individual
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('company')}
                  className={`flex items-center gap-2 rounded-xl border p-2.5 text-sm font-medium transition-all ${
                    accountType === 'company' 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm' 
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Building2 className={`h-4 w-4 ${accountType === 'company' ? 'text-blue-600' : 'text-slate-400'}`} />
                  Company / HR
                </button>
              </div>
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe" 
                  required 
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com" 
                  required 
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input 
                  type="password" 
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters" 
                  required 
                  minLength={6}
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Create account
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Link */}
          <p className="mt-8 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      
    </div>
  );
}