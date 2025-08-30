import React from 'react'
import { Link } from 'react-router-dom'
import mental from "../assets/mental.jpg"

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-6 bg-cyan-300 backdrop-blur-2xl shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-black">Mentorship</h1>
        <div className="flex gap-4">
          {/* Profile */}
          <Link
            to="/profile"
            className="px-4 py-2 bg-white text-cyan-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Profile
          </Link>
          {/* Logout */}
          <Link
            to="/login"
            onClick={() => localStorage.removeItem("token")}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative h-[90vh] flex flex-col">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          src={mental}
          alt="Mentorship"
          loading="lazy"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to the Mentorship Website
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8 drop-shadow">
            Connect with mentors who will guide you, or become a mentor to share your knowledge.
          </p>
          <div className="flex gap-6">
            <Link
              to="/find-mentor"
              className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Find a Mentor
            </Link>
            <Link
              to="/become-mentor"
              className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700 transition transform hover:scale-105"
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </main>

      {/* Why Choose Our Platform */}
      <section id="why-us" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-cyan-700 mb-10">Why Choose Our Platform?</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-6">
          <div className="flex-1 p-6 rounded-2xl shadow-lg border hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-cyan-600 mb-3">Expert Mentors</h3>
            <p className="text-gray-600">
              Learn from experienced professionals who are leaders in their fields and ready to guide you.
            </p>
          </div>

          <div className="flex-1 p-6 rounded-2xl shadow-lg border hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-cyan-600 mb-3">Flexible Learning</h3>
            <p className="text-gray-600">
              Access mentorship at your own pace, anytime and anywhere, to fit your schedule.
            </p>
          </div>

          <div className="flex-1 p-6 rounded-2xl shadow-lg border hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-cyan-600 mb-3">Community Support</h3>
            <p className="text-gray-600">
              Join a vibrant community of learners and mentors who inspire growth and success together.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-cyan-700 mb-12">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-cyan-600">1. Sign Up</h3>
            <p className="text-gray-600">Create your free account in just a few clicks.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-cyan-600">2. Connect</h3>
            <p className="text-gray-600">Browse mentors or mentees and start meaningful conversations.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-cyan-600">3. Grow</h3>
            <p className="text-gray-600">Learn, share, and build skills that move you forward.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-cyan-700 mb-12">What Our Users Say</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div className="p-6 rounded-2xl shadow-lg border">
            <p className="text-gray-700 italic">"This platform helped me find a mentor who transformed my career path!"</p>
            <h4 className="mt-4 font-semibold text-cyan-600">– Sarah, Mentee</h4>
          </div>
          <div className="p-6 rounded-2xl shadow-lg border">
            <p className="text-gray-700 italic">"Becoming a mentor here has been so fulfilling. I love giving back."</p>
            <h4 className="mt-4 font-semibold text-cyan-600">– John, Mentor</h4>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-cyan-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Whether you’re seeking guidance or eager to mentor others, our platform is here for you.
        </p>
        <Link
          to="/profile"
          className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          Go to Profile
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-300 backdrop-blur-2xl text-center py-6 text-black font-medium">
        © {new Date().getFullYear()} Mentorship Platform. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
