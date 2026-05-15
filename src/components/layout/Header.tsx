export function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        right: '10px',
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          background: 'rgba(15,15,15,0.92)',
          backdropFilter: 'blur(18px)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.06)',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            minWidth: 0,
            flex: 1,
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <img
              src="/logo.png"
              alt="Gestão Lematec"
              style={{
                width: '20px',
              }}
            />
          </div>

          <div
            style={{
              color: '#fff',
              fontSize: 'clamp(18px,4vw,32px)',
              fontWeight: 800,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Gestão Lematec
          </div>
        </div>

        <button
          style={{
            height: '48px',
            padding: '0 18px',
            borderRadius: '14px',
            border: 'none',
            background: '#000',
            color: '#f5c400',
            fontWeight: 800,
            fontSize: '14px',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          Testar grátis
        </button>
      </div>
    </header>
  )
}
