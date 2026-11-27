import React from 'react'

function SafetyMap() {

  return (
    <div className="flex-1 bg-pink-50 p-6 min-h-screen">

      <h1 className="text-3xl font-bold text-purple-900">
        Safety Map
      </h1>

      <p className="mt-2 text-gray-600">
        Explore your safety locations and stay aware of your surroundings.
      </p>

      <div className="mt-8 bg-white p-8 rounded-xl shadow-md text-center">

        <h2 className="text-xl font-bold text-purple-800">
          Location Information
        </h2>

        <p className="mt-4 text-gray-600">
          Your safety map will help you identify important nearby locations.
        </p>

        <div className="mt-6 bg-pink-100 p-10 rounded-lg">

          <p className="text-purple-800 font-semibold">
            Safety Map Area
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Map integration can be added in future development.
          </p>

        </div>

      </div>

    </div>
  )
}

export default SafetyMap