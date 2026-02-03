// src/App.jsx
import './styles/global.css';
import { useState } from 'react';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminSettings from './admin/AdminSettings';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminSection, setAdminSection] = useState('dashboard');

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    setAdminSection('dashboard');
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  if (!isAdmin) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'var(--white)',
          color: 'var(--black)',
          fontFamily: 'var(--font)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 10vw, 6rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '1.2rem',
            lineHeight: 1.05,
          }}
        >
          ELENORM
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            color: 'var(--gray-600)',
            maxWidth: '540px',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}
        >
          Premium men's essentials — crafted in Bangladesh with intention and care.
        </p>

        <button
          className="btn btn-black"
          onClick={() => setIsAdmin(true)}
          style={{ margin: '0 10px', padding: '14px 32px' }}
        >
          Enter Admin Panel
        </button>
      </div>
    );
  }

  return (
    <>
      {adminSection === 'dashboard' && <AdminDashboard />}
      {adminSection === 'settings' && <AdminSettings />}
    </>
  );
}

export default App;
