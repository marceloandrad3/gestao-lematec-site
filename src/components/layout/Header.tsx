import { useState } from 'react';

const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ position: 'fixed', top: '12px', left: '12px', right: '12px', zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(20px)', borderRadius: menuOpen ? '16px 16px 0 0' : '16px', border: '1px solid #1e293b', borderBottom: menuOpen ? '1px solid #0f172a' : '1px solid #1e293b', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', background: '#facc15', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <img src="/logo.png" alt="Lematec" style={{ width: '18px' }} />
          </div>
          <span style={{ color: '#fff', fontSize: '15px', fontWeight: '600', whiteSpace: 'nowrap' }}>Gestão Lematec</span>
        </div>

        <div className="desktop-nav" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#como-funciona" style={{ color: '#94a3b8', fontSize: '13px' }}>Como funciona</a>
          <a href="#preco" style={{ color: '#94a3b8', fontSize: '13px' }}>Preço</a>
          <a href="#app" style={{ color: '#94a3b8', fontSize: '13px' }}>App</a>
          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#facc15', color: '#0f172a', fontSize: '13px', fontWeight: '700', padding: '8px 18px', borderRadius: '8px', whiteSpace: 'nowrap' }}>Testar grátis</a>
        </div>

        <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#facc15', color: '#0f172a', fontSize: '13px', fontWeight: '700', padding: '8px 14px', borderRadius: '8px', whiteSpace: 'nowrap' }}>Testar grátis</a>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#facc15' : '#94a3b8', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#facc15' : '#94a3b8', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#facc15' : '#94a3b8', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'rgba(15,23,42,0.97)', backdropFilter: 'blur(20px)', borderRadius: '0 0 16px 16px', border: '1px solid #1e293b', borderTop: 'none', padding: '8px 20px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)} style={{ color: '#94a3b8', fontSize: '15px', padding: '12px 0', borderBottom: '1px solid #1e293b' }}>Como funciona</a>
          <a href="#preco" onClick={() => setMenuOpen(false)} style={{ color: '#94a3b8', fontSize: '15px', padding: '12px 0', borderBottom: '1px solid #1e293b' }}>Preço</a>
          <a href="#app" onClick={() => setMenuOpen(false)} style={{ color: '#94a3b8', fontSize: '15px', padding: '12px 0' }}>App</a>
        </div>
      )}

      <style>{"@media (max-width: 600px) { .desktop-nav { display: none !important; } .mobile-nav { display: flex !important; } }"}</style>
    </header>
  );
}
