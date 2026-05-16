
const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

export function Header() {
  return (
    <header style={{
      position: 'fixed', top: '12px', left: '12px', right: '12px', zIndex: 100,
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        background: 'rgba(15,23,42,0.92)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: '1px solid #1e293b',
        padding: '12px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px', background: '#facc15',
            borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <img src="/logo.png" alt="Lematec" style={{ width: '18px' }} />
          </div>
          <span style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>Gestão Lematec</span>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#como-funciona" style={{ color: '#94a3b8', fontSize: '13px' }}>Como funciona</a>
          <a href="#preco" style={{ color: '#94a3b8', fontSize: '13px' }}>Preço</a>
          <a href="#app" style={{ color: '#94a3b8', fontSize: '13px' }}>App</a>
          <a
            href={SYSTEM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#facc15', color: '#0f172a',
              fontSize: '13px', fontWeight: '700',
              padding: '8px 18px', borderRadius: '8px',
            }}
          >Testar grátis</a>
        </div>
      </div>
    </header>
  );
}
