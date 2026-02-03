// src/App.jsx
import './styles/global.css'

function App() {
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

      <p
        style={{
          fontSize: '0.95rem',
          color: 'var(--gray-500)',
        }}
      >
        Initial setup complete — building full site next...
      </p>
    </div>
  )
}

export default App
