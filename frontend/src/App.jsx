import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen">
        <Sidebar />
        <Dashboard />
      </div>

      <Footer />
    </>
  );
};

export default App;