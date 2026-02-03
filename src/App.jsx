// src/App.jsx
import './styles/global.css';
import { useState } from 'react';
import AdminLogin from './admin/AdminLogin';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      {isAdmin ? (
        <div style={{
          minHeight: '100vh',
          background: 'var(--white)',
          color: 'var(--black)',
          fontFamily: 'var(--font)',
          padding: '40px 20px',
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Admin Panel
          </h1>
          <p style={{ color: 'var(--gray-600)' }}>
            Welcome, mahathir — admin dashboard loading...
          </p>
          <button
            className="btn btn-outline"
            onClick={() => setIsAdmin(false)}
            style={{ marginTop: '2rem' }}
          >
            Back to Home
          </button>
        </div>
      ) : (
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

          <div style={{ marginTop: '2rem' }}>
            <button
              className="btn btn-black"
              onClick={() => setIsAdmin(true)}
              style={{ margin: '0 10px', padding: '14px 32px' }}
            >
              Enter Admin Panel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
