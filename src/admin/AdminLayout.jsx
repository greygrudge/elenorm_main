// src/admin/AdminLayout.jsx

import { useState } from 'react';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout" style={{ minHeight: '100vh' }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay show"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 499,
          }}
        />
      )}

      {/* Sidebar */}
      <div className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div style={{ padding: '28px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.16em' }}>
            ELENORM
          </div>
          <div style={{ fontSize: '11px', color: 'var(--gray-400)', marginTop: '3px' }}>
            Admin Panel
          </div>
        </div>

        <nav style={{ flex: 1, paddingTop: '12px' }}>
          <a
            href="#dashboard"
            style={{
              color: 'var(--gray-300)',
              textDecoration: 'none',
              padding: '13px 24px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.03em',
              display: 'block',
            }}
          >
            Dashboard
          </a>
          <a
            href="#products"
            style={{
              color: 'var(--gray-300)',
              textDecoration: 'none',
              padding: '13px 24px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.03em',
              display: 'block',
            }}
          >
            Products
          </a>
          <a
            href="#orders"
            style={{
              color: 'var(--gray-300)',
              textDecoration: 'none',
              padding: '13px 24px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.03em',
              display: 'block',
            }}
          >
            Orders
          </a>
          <a
            href="#settings"
            style={{
              color: 'var(--white)',
              textDecoration: 'none',
              padding: '13px 24px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.03em',
              background: 'rgba(255,255,255,0.1)',
              borderLeft: '3px solid var(--white)',
              display: 'block',
            }}
          >
            Settings
          </a>
        </nav>

        <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => {} /* logout logic later */}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gray-400)',
              fontSize: '12px',
              cursor: 'pointer',
              fontFamily: 'var(--font)',
              letterSpacing: '0.06em',
            }}
          >
            ← Logout
          </button>
        </div>
      </div>

      {/* Hamburger menu button (mobile) */}
      <button
        onClick={() => setSidebarOpen(true)}
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 501,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <span style={{ width: '24px', height: '2px', background: 'var(--black)' }}></span>
        <span style={{ width: '18px', height: