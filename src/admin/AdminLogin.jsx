// src/admin/AdminLogin.jsx

import { useState } from 'react';
import { checkAdmin } from '../utils/auth';

export default function AdminLogin({ onLoginSuccess }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 5;
  const locked = attempts >= maxAttempts;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (locked) return;

    const isValid = await checkAdmin(user, pass);

    if (isValid) {
      setError('');
      onLoginSuccess();
    } else {
      setAttempts((prev) => prev + 1);
      setError(`Invalid credentials. ${maxAttempts - attempts - 1} attempt${maxAttempts - attempts - 1 === 1 ? '' : 's'} left.`);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gray-100)',
        padding: '20px',
        fontFamily: 'var(--font)',
      }}
    >
      <div
        style={{
          background: 'var(--white)',
          padding: '48px 40px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '0.18em' }}>
            ELENORM
          </div>
          <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginTop: '4px' }}>
            Admin Panel Login
          </div>
        </div>

        {locked ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <p style={{ color: '#c0392b', fontSize: '14px', fontWeight: 600 }}>
              Account locked
            </p>
            <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginTop: '6px' }}>
              Too many failed attempts. Refresh the page to try again.
            </p>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--gray-600)',
                  marginBottom: '8px',
                }}
              >
                Username
              </label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 16px',
                  border: '1.5px solid var(--gray-200)',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--gray-600)',
                  marginBottom: '8px',
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 16px',
                  border: '1.5px solid var(--gray-200)',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
                required
              />
            </div>

            {error && (
              <p
                style={{
                  color: '#c0392b',
                  fontSize: '13px',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-black btn-full"
              style={{ padding: '14px', fontSize: '14px' }}
              disabled={locked}
            >
              Login
            </button>

            <p
              style={{
                fontSize: '11px',
                color: 'var(--gray-400)',
                textAlign: 'center',
                marginTop: '16px',
              }}
            >
              {maxAttempts - attempts} attempt{maxAttempts - attempts !== 1 ? 's' : ''} remaining
            </p>
          </form>
        )}
      </div>
    </div>
  );
}