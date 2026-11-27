import React, { useState } from 'react'
import EmergencyContactForm from '../components/EmergencyContactForm'
import EmergencyContactDetails from '../components/EmergencyContactDetails'

function EmergencyContacts() {

  const [contacts, setContacts] = useState([])

  const addEmergencyContact = (contact) => {
    setContacts([...contacts, contact])
  }

  return (
    <div className="flex-1 bg-pink-50 p-6 min-h-screen">

      <h1 className="text-3xl font-bold text-purple-900">
        Emergency Contacts
      </h1>

      <p className="mt-2 text-gray-600">
        Add and manage your trusted emergency contacts.
      </p>

      <div className="mt-8">
        <EmergencyContactForm
          addEmergencyContact={addEmergencyContact}
        />
      </div>

      <div className="mt-8">

        <h2 className="text-xl font-bold text-purple-800 mb-4">
          Saved Emergency Contacts
        </h2>

        {contacts.length === 0 ? (
          <p className="text-gray-600">
            No emergency contacts added yet.
          </p>
        ) : (
          contacts.map((contact, index) => (
            <EmergencyContactDetails
              key={index}
              {...contact}
            />
          ))
        )}

      </div>

    </div>
  )
}

export default EmergencyContacts