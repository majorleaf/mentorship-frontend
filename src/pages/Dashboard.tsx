
import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Brain, 
  Calendar, 
  User as UserIcon, 
  Settings, 
  LogOut, 
  TrendingUp, 
  Users, 
  Sparkles,
  ArrowRight,
  Briefcase,
  DollarSign,
  Activity,
  ShieldAlert
} from 'lucide-react';
import { ShopContext } from '../context.tsx';

// 1. MENTEE VIEW (Your original beautiful design)
const MenteeView = ({ firstName }: { firstName: string }) => (
  <div className="max-w-6xl mx-auto space-y-8">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Welcome back, {firstName}</h1>
      <p className="mt-1 text-sm text-slate-500">Here's your growth snapshot for today.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'AI chats', value: '12', icon: Brain, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'Sessions booked', value: '0', icon: Calendar, color: 'text-green-600', bg: 'bg-green-100' },
        { label: 'Milestones', value: '3', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
        { label: 'Mentors', value: '0', icon: Users, color: 'text-slate-700', bg: 'bg-slate-200' },
      ].map((stat) => (
        <div key={stat.label} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.bg}`}>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
          <p className="text-sm font-medium text-slate-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            AI Mentor
          </span>
          <h2 className="text-3xl font-bold mb-2">Need quick career advice?</h2>
          <p className="text-blue-100 mb-6 max-w-md text-sm">
            Chat with your AI mentor anytime — no booking required.
          </p>
          <Link to="/ai-mentor" className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors w-fit">
            Start chatting
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
        <h3 className="font-bold text-slate-900 mb-6">Your roadmap</h3>
        <div className="space-y-5">
          {[
            { label: 'Core skills', pct: 80, color: 'bg-blue-600' },
            { label: 'Leadership', pct: 55, color: 'bg-blue-600' },
            { label: 'System design', pct: 40, color: 'bg-blue-600' },
            { label: 'Interview prep', pct: 100, color: 'bg-green-500' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-700">{item.label}</span>
                <span className="text-slate-900">{item.pct}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${item.color} transition-all duration-1000`} style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 2. MENTOR VIEW 
const MentorView = ({ firstName }: { firstName: string }) => (
  <div className="max-w-6xl mx-auto space-y-8">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Hello, {firstName}</h1>
      <p className="mt-1 text-sm text-slate-500">Here are your pending requests and upcoming sessions.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'Pending requests', value: '3', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'Sessions this week', value: '4', icon: Calendar, color: 'text-green-600', bg: 'bg-green-100' },
        { label: 'Total Mentees', value: '18', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
        { label: 'Earnings (MTD)', value: '$450', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-100' },
      ].map((stat) => (
        <div key={stat.label} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.bg}`}>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
          <p className="text-sm font-medium text-slate-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Placeholder for Mentor specific content */}
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col items-center justify-center h-64 text-center">
      <Calendar className="h-12 w-12 text-slate-300 mb-4" />
      <h3 className="text-lg font-bold text-slate-900">No sessions today</h3>
      <p className="text-slate-500 text-sm mt-2 max-w-sm">You have some free time! Update your availability if you'd like to take on more mentees this week.</p>
    </div>
  </div>
);

// 3. HR ADMIN VIEW
const HrAdminView = ({ firstName }: { firstName: string }) => (
  <div className="max-w-6xl mx-auto space-y-8">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Organization Dashboard</h1>
      <p className="mt-1 text-sm text-slate-500">Welcome back, {firstName}. Here is your company's mentorship engagement.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'Active Seats', value: '187 / 200', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'Mentorship Sessions', value: '342', icon: Activity, color: 'text-green-600', bg: 'bg-green-100' },
        { label: 'Avg Engagement', value: '84%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
        { label: 'Pending Invites', value: '13', icon: Users, color: 'text-slate-700', bg: 'bg-slate-200' },
      ].map((stat) => (
        <div key={stat.label} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.bg}`}>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
          <p className="text-sm font-medium text-slate-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
);

// 4. SUPER ADMIN VIEW
const SuperAdminView = () => (
  <div className="max-w-6xl mx-auto space-y-8">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">System Overview</h1>
      <p className="mt-1 text-sm text-slate-500">Platform health and global metrics.</p>
    </div>
    
    <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center flex flex-col items-center">
      <ShieldAlert className="h-12 w-12 text-red-500 mb-4" />
      <h3 className="text-lg font-bold text-red-900">Super Admin Access Verified</h3>
      <p className="text-red-700 text-sm mt-2 max-w-md">You have global read/write access. Please proceed with caution when modifying user data or organization billing limits.</p>
    </div>
  </div>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useContext(ShopContext) || {}; 

  // Safely extract user details
  const role = user?.role || 'mentee';
  const firstName = user?.name?.split(' ')[0] || 'there';
  const userInitial = user?.name?.charAt(0).toUpperCase() || 'U';

  const handleLogout = async () => {
    if (logout) {
      await logout();
    }
    navigate('/login');
  };

  // Determine which links to show in the sidebar based on their role
  const getNavItems = () => {
    switch (role) {
      case 'hr_admin':
        return [
          { name: 'Org Dashboard', icon: LayoutDashboard, path: '/dashboard' },
          { name: 'Employees', icon: Users, path: '/employees' },
          { name: 'Billing', icon: DollarSign, path: '/billing' },
        ];
      case 'mentor':
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
          { name: 'My Schedule', icon: Calendar, path: '/schedule' },
          { name: 'My Mentees', icon: Users, path: '/my-mentees' },
        ];
      case 'super_admin':
        return [
          { name: 'System', icon: LayoutDashboard, path: '/dashboard' },
          { name: 'All Users', icon: Users, path: '/admin/users' },
          { name: 'Organizations', icon: Briefcase, path: '/admin/orgs' },
        ];
      default: // 'mentee'
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
          { name: 'AI Mentor', icon: Brain, path: '/ai-mentor' },
          { name: 'Sessions', icon: Calendar, path: '/sessions' },
          { name: 'Profile', icon: UserIcon, path: '/profile' },
        ];
    }
  };

  const navItems = getNavItems();

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* LEFT COLUMN: Sidebar (Shared across all roles) */}
      <aside className="w-64 shrink-0 bg-white border-r border-slate-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <Link to="/dashboard" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 shadow-sm">
              <span className="text-lg font-bold leading-none text-white">G</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">GuideWire</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <Link to="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900">
            <Settings className="h-5 w-5 text-slate-400" />
            Settings
          </Link>
        </div>
      </aside>

      {/* RIGHT COLUMN: Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navbar (Shared) */}
        <header className="h-16 shrink-0 bg-white border-b border-slate-200 flex items-center justify-end px-8">
          <div className="flex items-center gap-4">
            <Link 
              to="/profile" 
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
              title="Go to Profile"
            >
              {userInitial}
            </Link>
            <button 
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50"
              title="Log out"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Dashboard Content (DYNAMIC BASED ON ROLE) */}
        <div className="flex-1 overflow-y-auto p-8">
          {role === 'hr_admin' && <HrAdminView firstName={firstName} />}
          {role === 'mentor' && <MentorView firstName={firstName} />}
          {role === 'super_admin' && <SuperAdminView />}
          {role === 'mentee' && <MenteeView firstName={firstName} />}
        </div>

      </main>
    </div>
  );
}