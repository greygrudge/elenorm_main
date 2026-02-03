// src/App.jsx
import './styles/global.css';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--white)',
      color: 'var(--black)',
      fontFamily: 'var(--font)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        marginBottom: '1rem'
      }}>
        ELENORM
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: 'var(--gray-600)',
        maxWidth: '500px'
      }}>
        Premium men's apparel — designed in Bangladesh
      </p>
      <p style={{
        marginTop: '2rem',
        fontSize: '0.95rem',
        color: 'var(--gray-500)'
      }}>
        Loading full site...
      </p>
    </div>
  );
}

export default App;