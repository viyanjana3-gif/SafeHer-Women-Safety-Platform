import React, { useState } from 'react'

function IncidentReports() {

  const [report, setReport] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (report.trim() === "") {
      setSuccess("")
      return
    }

    setSuccess("Incident Report Submitted Successfully!")
    setReport("")
  }

  return (
    <div className="flex-1 bg-pink-50 p-6 min-h-screen">

      <h1 className="text-3xl font-bold text-purple-900">
        Incident Reports
      </h1>

      <p className="mt-2 text-gray-600">
        Report a safety incident or describe an emergency situation.
      </p>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-bold text-purple-800 mb-4">
          Submit an Incident Report
        </h2>

        <form onSubmit={handleSubmit}>

          <textarea
            value={report}
            onChange={(e) => setReport(e.target.value)}
            placeholder="Describe the incident..."
            className="w-full border p-3 rounded-lg min-h-32"
          />

          <button
            type="submit"
            className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg"
          >
            Submit Report
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

export default IncidentReports