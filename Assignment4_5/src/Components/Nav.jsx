import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="text-xl font-bold flex gap-6 bg-yellow-300 justify-center items-center">
      <Link to = "/" className="p-4 border m-3 bg-sky-300">Home</Link>
      <Link to = "/Subjects" className="p-4 border m-3 bg-sky-300">Subjects</Link>
      <Link to = "/Settings" className="p-4 border m-3 bg-sky-300">Setting</Link>
      <Link to= "/Login" className="p-4 border m-3 bg-sky-300">Login</Link>
    </div>
  )
}
