import React, { useState } from 'react'

function Settings() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() === "" || email.trim() === "") {
      setSuccess("")
      return
    }

    setSuccess("Settings Updated Successfully!")
  }

  return (
    <div className="flex-1 bg-pink-50 p-6 min-h-screen">

      <h1 className="text-3xl font-bold text-purple-900">
        Settings
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your SafeHer profile settings.
      </p>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-bold text-purple-800 mb-4">
          Profile Information
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border p-2 rounded mb-4"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border p-2 rounded mb-4"
          />

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg"
          >
            Save Settings
          </button>

        </form>

        {success && (
          <p className="mt-4 text-green-600 font-bold">
            {success}
          </p>
        )}

      </div>

    </div>
  )
}

export default Settings