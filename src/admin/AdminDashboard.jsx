// src/admin/AdminDashboard.jsx

export default function AdminDashboard({ onLogout }) {
  return (
    <div className="admin-layout" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="admin-sidebar open">
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
            className="active"
            style={{
              color: 'var(--white)',
              textDecoration: 'none',
              padding: '13px 24px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.03em',
              borderLeft: '3px solid var(--white)',
              background: 'rgba(255,255,255,0.1)',
              display: 'block',
            }}
          >
            Dashboard
          </a>
          <a style={{ color: 'var(--gray-300)', textDecoration: 'none', padding: '13px 24px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.03em', display: 'block' }}>
            Products
          </a>
          <a style={{ color: 'var(--gray-300)', textDecoration: 'none', padding: '13px 24px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.03em', display: 'block' }}>
            Orders
          </a>
          <a style={{ color: 'var(--gray-300)', textDecoration: 'none', padding: '13px 24px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.03em', display: 'block' }}>
            Settings
          </a>
        </nav>

        <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={onLogout}
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

      {/* Main content */}
      <div className="admin-main">
        <div style={{ padding: '28px 20px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '28px' }}>Dashboard</h2>

          <div style={{
            background: 'var(--white)',
            border: '1px solid var(--gray-200)',
            padding: '24px',
            borderRadius: '8px',
          }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Welcome to the Admin Panel</h3>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.6 }}>
              This is the main dashboard. Here you will later see:
              <br />• Recent orders
              <br />• Low stock alerts
              <br />• Quick stats (total revenue, pending orders)
              <br />• Charts (sales over time)
            </p>
            <p style={{ marginTop: '16px', color: 'var(--gray-600)' }}>
              For now it's a clean starting point — we'll add real features next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}