import React, { useState, useEffect } from 'react'
import SafetyCard from '../components/SafetyCard'
import SOSButton from '../components/SOSButton'

function Dashboard() {

  const [safetyData, setSafetyData] = useState([])
  const [loading, setLoading] = useState(true)

  // XSS Auto-Escaping Demo
  const userInput = '<img src=x onerror=alert("Hacked") />'

  useEffect(() => {

    console.log("Dashboard Loaded")

    setTimeout(() => {

      setSafetyData([
        { Name: "Emergency Contacts", Count: "05" },
        { Name: "Safety Check-ins", Count: "12" },
        { Name: "Safety Reports", Count: "03" }
      ])

      setLoading(false)

    }, 2000)

  }, [])

  return (
    <div className="flex-1 bg-pink-50 p-6">

      <h1 className="text-3xl font-bold text-purple-900">
        Welcome to SafeHer!
      </h1>

      <p className="mt-2 text-gray-600">
        Your personal women safety dashboard.
      </p>

      {loading ? (

        <p className="mt-8 text-purple-700 font-bold">
          Loading Safety Information...
        </p>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

          {safetyData.map((item, index) => (
            <SafetyCard
              key={index}
              Name={item.Name}
              Count={item.Count}
            />
          ))}

        </div>

      )}

      <div className="mt-8">
        <SOSButton />
      </div>

      <div className="mt-8 bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-xl font-bold text-purple-800">
          Safety Reminder
        </h2>

        <p className="mt-3 text-gray-600">
          Stay alert, stay connected, and always keep your trusted
          emergency contacts updated.
        </p>

      </div>

      {/* JSX XSS Auto-Escaping Demonstration */}
      <div className="mt-8 bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-xl font-bold text-purple-800">
          XSS Protection Demo
        </h2>

        <p className="mt-3 text-gray-600">
          {userInput}
        </p>

      </div>

    </div>
  )
}

export default Dashboard