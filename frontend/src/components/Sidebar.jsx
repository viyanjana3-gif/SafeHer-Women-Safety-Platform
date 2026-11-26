import React, { useState } from 'react'

const Sidebar = () => {

  const [activeMenu, setActiveMenu] = useState("Dashboard")

  const menuItems = [
    "Dashboard",
    "Emergency",
    "Emergency Contacts",
    "Safety Map",
    "Incident Reports",
    "Settings"
  ]

  return (
    <div className="w-48 min-h-screen bg-pink-100 p-5">

      <h2 className="font-bold text-purple-800 text-xl">
        Menu
      </h2>

      {menuItems.map((item, index) => (

        <p
          key={index}
          onClick={() => setActiveMenu(item)}
          className={`mt-4 p-2 rounded cursor-pointer ${
            activeMenu === item
              ? "bg-pink-500 text-white font-bold"
              : "text-gray-800 hover:bg-pink-200"
          }`}
        >
          {item}
        </p>

      ))}

    </div>
  )
}

export default Sidebar