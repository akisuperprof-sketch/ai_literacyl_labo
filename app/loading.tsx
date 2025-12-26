export default function Loading() {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            color: '#636e72'
        }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px', animation: 'bounce 2s infinite ease-in-out' }}>
                🐘
            </div>
            <p style={{ fontSize: '1.2rem', fontWeight: 300, letterSpacing: '0.05em' }}>
                静かな場所を準備しています...
            </p>
            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
        </div>
    );
}
