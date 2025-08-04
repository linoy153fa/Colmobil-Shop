export default function Loader({ message = "Loading..." }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f8f4',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '12px',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '90%'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid #e1f4e7',  
          borderTop: '4px solid #71BC78', 
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem'
        }}></div>

        <h2 style={{
          margin: '0 0 0.5rem',
          color: '#3b6640',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>
          {message}
        </h2>

        <p style={{
          margin: '0',
          color: '#4a4a4a',
          fontSize: '1rem',
          lineHeight: '1.5'
        }}>
          Please wait while we prepare your content
        </p>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
