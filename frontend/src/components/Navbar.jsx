import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav className="bg-pink-600 p-4 text-white flex items-center justify-between">

      <Link to="/" className="text-xl font-bold">
        SafeHer - Women Safety Platform
      </Link>

      <p className="text-sm">
        Your Safety, Our Priority
      </p>

    </nav>
  )
}

export default Navbar