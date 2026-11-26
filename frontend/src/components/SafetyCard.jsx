import React from 'react'

function SafetyCard(props) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-pink-100">
      <h2 className="text-lg font-bold text-purple-800">
        {
          props.Name
        }
      </h2>

      <p className="mt-2 text-3xl text-pink-600">
        {
          props.Count
        }
      </p>
    </div>
  )
}

export default SafetyCard