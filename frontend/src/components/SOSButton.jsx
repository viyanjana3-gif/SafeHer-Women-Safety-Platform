import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

function SOSButton() {

  const [isActive, setIsActive] = useState(false)

  const handleSOS = () => {
    setIsActive(true)
  }

  return (
    <div className="bg-pink-50 p-6 rounded-xl text-center shadow-md">

      <h2 className="text-xl font-bold text-purple-800">
        Emergency Assistance
      </h2>

      <p className="mt-2 text-gray-600">
        Press the button below to activate an emergency alert.
      </p>

      <Button
        onClick={handleSOS}
        variant="destructive"
        size="lg"
        className="mt-5 rounded-full px-10 py-4 text-xl"
      >
        {isActive ? "SOS ACTIVATED" : "SOS"}
      </Button>

      {isActive && (
        <p className="mt-4 text-red-600 font-bold">
          Emergency Alert Activated!
        </p>
      )}

      <p className="mt-3 text-sm text-gray-500">
        Your safety matters!
      </p>

    </div>
  )
}

export default SOSButton