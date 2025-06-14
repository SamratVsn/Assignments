import React from 'react'
import { Route, Routes } from 'react-router-dom'
import react from '../assets/react.svg'
import Tailwind from '../assets/Tailwind.svg'
import Node from '../assets/Node.png'

export default function About() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 font-mono text-white flex flex-col min-h-screen">
  <h1 className="text-4xl flex items-center justify-center p-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
    About EduSphere
  </h1>

  <div className="flex flex-col items-center justify-center gap-6 px-4 text-lg max-w-4xl mx-auto">
    <p className="text-xl text-center font-semibold">
      EduSphere is a Nepal-based learning platform focused on hands-on collaboration and mentorship.
    </p>

    <p>
      Our mission is to make real-world tech education accessible, practical, and community-driven. Whether you're just starting out or want to level up your skills, EduSphere provides a creative space to grow and build together.
    </p>

    <p>
      We run peer-guided programs like virtual bootcamps, team-based projects, and portfolio-building challenges. At EduSphere, learning goes beyond theory — it's about building, sharing, and growing with others.
    </p>

    <p>
      Based in Kathmandu, our vision is to empower learners across Nepal and beyond with modern development skills — all while staying grounded in collaboration, simplicity, and self-growth.
    </p>

    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-6 w-full max-w-2xl">
      <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-4 text-center">
        Core Values of EduSphere
      </h2>
      <ul className="space-y-3 text-white list-disc list-inside">
        <li>💡 Peer-powered mentorship</li>
        <li>🛠️ Project-based learning</li>
        <li>🤝 Collaboration over competition</li>
        <li>🌏 Accessible to all — no fees, no gatekeeping</li>
        <li>🇳🇵 Proudly rooted in Nepal, built for everyone</li>
      </ul>
    </div>

    <div className="mt-10 text-center">
      <p className="text-xl font-semibold mb-2 text-yellow-300">Want to be part of the movement?</p>
      <p>Explore our bootcamps and join a growing community of learners shaping the future of web development in Nepal and beyond!</p>
    </div>
  </div>
</div>

    )
}
