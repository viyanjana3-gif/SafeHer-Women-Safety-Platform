import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Emergency Contacts", path: "/emergency-contacts" },
    { name: "Safety Map", path: "/safety-map" },
    { name: "Incident Reports", path: "/incident-reports" },
    { name: "Settings", path: "/settings" }
  ]

  return (
    <div className="w-44 md:w-56 min-h-screen bg-pink-100 p-3 md:p-5">

      <h2 className="font-bold text-purple-800 text-lg md:text-xl mb-6">
        Menu
      </h2>

      {menuItems.map((item, index) => (

        <NavLink
          key={index}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `block mt-3 p-2 rounded-lg text-sm md:text-base transition-colors ${
              isActive
                ? "bg-pink-500 text-white font-bold"
                : "text-gray-800 hover:bg-pink-200"
            }`
          }
        >
          {item.name}
        </NavLink>

      ))}

    </div>
  )
}

export default Sidebar