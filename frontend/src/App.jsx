import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import Dashboard from './pages/Dashboard'
import EmergencyContacts from './pages/EmergencyContacts'
import SafetyMap from './pages/SafetyMap'
import IncidentReports from './pages/IncidentReports'
import Settings from './pages/Settings'

import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => {

  return (
    <div>

      <Navbar />

      <div className="flex min-h-screen">

        <Sidebar />

        <main className="flex-1">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/emergency-contacts" element={<EmergencyContacts />} />

            <Route path="/safety-map" element={<SafetyMap />} />

            <Route path="/incident-reports" element={<IncidentReports />} />

            <Route path="/settings" element={<Settings />} />

            <Route path="*" element={<Navigate to="/" />} />

          </Routes>

        </main>

      </div>

      <Footer />

    </div>
  )
}

export default App