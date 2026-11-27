import React from 'react'

const EmergencyContactDetails = ({ contactName, email, phone, relationship }) => {
  return (
    <div>
      <p>Name: {contactName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Relationship: {relationship}</p>
    </div>
  )
}

export default EmergencyContactDetails