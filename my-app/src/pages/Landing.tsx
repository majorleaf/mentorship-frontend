import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Brain,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Star,
  Check,
} from 'lucide-react'
import Logo from '../components/common/Logo.tsx'
const features = [
  {
    icon: Brain,
    title: 'AI Career Mentor',
    desc: 'Get 24/7 guidance from an AI coach trained on career frameworks, interview prep, and growth paths.',
  },
  {
    icon: Users,
    title: '1:1 Human Mentorship',
    desc: 'Book sessions with verified mentors across industries. Filter by expertise, rate, and availability.',
  },
  {
    icon: TrendingUp,
    title: 'Predictable Growth',
    desc: 'Track progress against clear milestones so promotions and skill-building follow a roadmap, not luck.',
  },
  {
    icon: Building2,
    title: 'For Teams & HR',
    desc: 'Bring mentorship to your whole org. Manage seats, track engagement, and measure outcomes.',
  },
]

const stats = [
  { value: '12,000+', label: 'Mentees guided' },
  { value: '850+', label: 'Verified mentors' },
  { value: '94%', label: 'Reach next milestone' },
  { value: '4.9/5', label: 'Average rating' },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer → Senior',
    quote: 'I went from mid-level to Senior in 8 months. The roadmap made it obvious what to learn next.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Manager',
    quote: 'The AI mentor helped me prep for every stakeholder conversation. It felt like having a coach on call.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Priya Patel',
    role: 'HR Director, Acme Co.',
    quote: 'We rolled GuideWire out to 200 employees. Promotion readiness is up and turnover is down.',
    avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-md">
              <span className="text-lg font-bold leading-none text-white">G</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">GuideWire</span>
          </Link>

            <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Features</a>
            <a href="#mentors" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Mentors</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Stories</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Pricing</a>
            </div>
            <div className="flex items-center gap-3">
            <Link to="/login" className="btn-ghost">Sign in</Link>
            <Link to="/register" className="btn-primary">
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
           </div>
         </nav>
       </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50" />

        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700"
            >
              <Sparkles className="h-4 w-4" />
              AI-powered career growth, now with human mentors
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Make career growth
              <span className="block bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
                predictable, not accidental
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-balance text-lg text-slate-600"
            >
              GuideWire pairs you with an AI career mentor and verified human mentors
              so you always know the next step — whether you're growing solo or scaling
              mentorship across your whole team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link to="/register" className="btn-primary w-full sm:w-auto">
                Start growing free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#features" className="btn-secondary w-full sm:w-auto">
                See how it works
              </a>
            </motion.div>
          </div>

          {/* Floating UI preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto mt-16 max-w-5xl"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-500/20 to-purple-500/20 blur-2xl" />
            <div className="relative grid gap-4 md:grid-cols-3">
              {/* Floating card 1 — AI chat */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-card p-5 shadow-xl shadow-slate-900/5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100">
                    <Brain className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">AI Mentor</span>
                </div>
                <div className="space-y-2">
                  <div className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600">What skills should I focus on for a Senior role?</div>
                  <div className="rounded-lg bg-brand-500 px-3 py-2 text-xs text-white">Start with system design and cross-team leadership. Here's a 90-day plan…</div>
                </div>
              </motion.div>

              {/* Floating card 2 — Mentor booking */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="glass-card p-5 shadow-xl shadow-slate-900/5 md:mt-8"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                    <Calendar className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">Book a mentor</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Mentor" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">David Kim</p>
                    <p className="text-xs text-slate-500">Eng Director · Stripe</p>
                  </div>
                </div>
                <button className="btn-primary mt-3 w-full !py-2 text-xs">Book session</button>
              </motion.div>

              {/* Floating card 3 — Growth tracking */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="glass-card p-5 shadow-xl shadow-slate-900/5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">Your roadmap</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Core skills', pct: 80 },
                    { label: 'Leadership', pct: 55 },
                    { label: 'System design', pct: 40 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-slate-600">{s.label}</span>
                        <span className="font-semibold text-slate-900">{s.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-100">
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700" style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-slate-900 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to grow on purpose
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              One platform for AI guidance, human mentorship, and team-wide growth tracking.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6 transition-all hover:shadow-lg hover:shadow-slate-900/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-500/20">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="badge bg-brand-50 text-brand-700">For teams</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Bring structured mentorship to your whole company
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                HR admins get a dashboard to manage mentor seats, track employee
                engagement, and measure promotion readiness across the org.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Bulk invite and seat management',
                  'Engagement and milestone analytics',
                  'Private mentor pool for your org',
                  'SSO and SOC 2 ready',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/register" className="btn-primary mt-8">
                Set up your team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 shadow-xl shadow-slate-900/5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">Org overview — Acme Co.</span>
                <span className="badge bg-green-50 text-green-700"><ShieldCheck className="h-3 w-3" /> Active</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Seats used', value: '187/200' },
                  { label: 'Sessions this mo.', value: '342' },
                  { label: 'Avg. rating', value: '4.8' },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-slate-50 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">{m.value}</p>
                    <p className="text-xs text-slate-500">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { name: 'Engineering', pct: 82 },
                  { name: 'Product', pct: 67 },
                  { name: 'Design', pct: 54 },
                ].map((d) => (
                  <div key={d.name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-slate-600">{d.name}</span>
                      <span className="font-semibold text-slate-900">{d.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-linear-to-r from-brand-500 to-brand-700" style={{ width: `${d.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              People grow faster with GuideWire
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card p-6">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-700">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center shadow-2xl shadow-slate-900/20 sm:px-12">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/30 via-transparent to-purple-600/20" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start your growth roadmap today
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
                Free for individuals. Team plans start at $12/seat/month.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/register" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100">
                  Create your account
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/login" className="btn-secondary !bg-transparent !border-white/20 !text-white hover:!bg-white/10">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <Logo />
              <p className="mt-4 text-sm text-slate-500">
                Predictable career growth and mentorship for individuals and teams.
              </p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Mentors', 'Pricing', 'AI Mentor'] },
              { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'SOC 2'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-slate-900">{col.title}</h4>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-900">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center">
            <p className="text-sm text-slate-500">© 2026 GuideWire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
