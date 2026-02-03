// src/admin/AdminSettings.jsx

import { useState, useEffect } from 'react';

const defaultSettings = {
  siteTitle: "ELENORM — Premium Men's Apparel",
  heroTitle: "Wear Less. Mean More.",
  heroDescription: "Premium men’s T-shirts crafted with intention. Every thread, every stitch — built for the man who values quality over noise.",
  aboutContent: "ELENORM was born from a simple frustration: finding clothes that are genuinely well-made, beautifully simple, and accessible in Bangladesh. We make fewer things, but we make them perfectly — using 100% organic cotton, fair production, and timeless design.",
  contactPhone: "+880 1712-345678",
  contactEmail: "hello@elenorm.bd",
  contactAddress: "Dhaka, Bangladesh",
  facebook: "https://facebook.com/elenorm.bd",
  instagram: "https://instagram.com/elenorm",
  twitter: "",
  whatsapp: "https://wa.me/8801712345678",
};

export default function AdminSettings({ showToast }) {
  const [settings, setSettings] = useState(defaultSettings);
  const [saving, setSaving] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('elenorm_settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setSaving(true);
    localStorage.setItem('elenorm_settings', JSON.stringify(settings));
    setTimeout(() => {
      setSaving(false);
      showToast ? showToast("Settings saved!") : alert("Settings saved!");
    }, 600);
  };

  return (
    <div style={{ padding: '28px 20px', fontFamily: 'var(--font)' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '28px' }}>Site Settings</h2>

      {/* Site Title */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--gray-600)', marginBottom: '8px' }}>
          Site Title (browser tab)
        </label>
        <input
          className="input"
          value={settings.siteTitle}
          onChange={e => handleChange('siteTitle', e.target.value)}
        />
      </div>

      {/* Hero Title */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--gray-600)', marginBottom: '8px' }}>
          Homepage Hero Title
        </label>
        <input
          className="input"
          value={settings.heroTitle}
          onChange={e => handleChange('heroTitle', e.target.value)}
        />
      </div>

      {/* Hero Description */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--gray-600)', marginBottom: '8px' }}>
          Hero Description
        </label>
        <textarea
          className="input"
          rows={4}
          value={settings.heroDescription}
          onChange={e => handleChange('heroDescription', e.target.value)}
          style={{ resize: 'vertical' }}
        />
      </div>

      {/* About Content */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--gray-600)', marginBottom: '8px' }}>
          About Page Content
        </label>
        <textarea
          className="input"
          rows={6}
          value={settings.aboutContent}
          onChange={e => handleChange('aboutContent', e.target.value)}
          style={{ resize: 'vertical' }}
        />
      </div>

      {/* Contact Info */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--gray-600)', marginBottom: '8px' }}>
          Contact Phone
        </label>
        <input
          className="input"
          value={settings.contactPhone}
          onChange={e => handleChange('contactPhone', e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--gray-600)', marginBottom: '8px' }}>
          Contact Email
        </label>
        <input
          className="input"
          value={settings.contactEmail}
          onChange={e => handleChange('contactEmail', e.target.value)}
        />
      </div>

      {/* Social Links */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Social Links</h3>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: 'var(--gray-600)', marginBottom: '6px' }}>Facebook</label>
          <input className="input" value={settings.facebook} onChange={e => handleChange('facebook', e.target.value)} />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: 'var(--gray-600)', marginBottom: '6px' }}>Instagram</label>
          <input className="input" value={settings.instagram} onChange={e => handleChange('instagram', e.target.value)} />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: 'var(--gray-600)', marginBottom: '6px' }}>Twitter / X</label>
          <input className="input" value={settings.twitter} onChange={e => handleChange('twitter', e.target.value)} />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: 'var(--gray-600)', marginBottom: '6px' }}>WhatsApp</label>
          <input className="input" value={settings.whatsapp} onChange={e => handleChange('whatsapp', e.target.value)} />
        </div>
      </div>

      {/* Save Button */}
      <button
        className="btn btn-black btn-full"
        onClick={handleSave}
        disabled={saving}
        style={{ marginTop: '32px', padding: '14px' }}
      >
        {saving ? 'Saving...' : 'Save All Settings'}
      </button>
    </div>
  );
}