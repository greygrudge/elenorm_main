// src/admin/AdminDashboard.jsx

import AdminLayout from './AdminLayout';

export default function AdminDashboard() {
  return (
    <AdminLayout>
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
    </AdminLayout>
  );
}
