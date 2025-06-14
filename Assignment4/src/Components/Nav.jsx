import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-[10px] font-bold text-xl shadow-xl shadow-gray-200">
      <div className="flex text-xl gap-0 justify-start items-center w-[30%]">
        <p className="px-2 text-yellow-300">&lt;</p>
      <Link to= "/" className="px-2 text-yellow-400">CODIT</Link>
      <p className="px- text-yellow-500">&gt;</p>
      </div>
      <div className="flex gap-8 w-[70%] text-white">
      <Link to = "/" className="p-2">Home</Link>
      <Link to = "/about" className="p-2">About</Link>
      <Link to= "/contact" className="p-2">Contact</Link>
      </div>
    </div>
  )
}
