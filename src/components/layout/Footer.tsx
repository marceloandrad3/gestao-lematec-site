
const links = {
  produto: ['Funcionalidades', 'Recorrência', 'Aplicativo', 'Preços'],
  legal: [
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid #1b1b1b', padding: '60px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '52px', flexWrap: 'wrap', gap: '40px' }}>

          <div >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/logo.png" alt="Gestão Lematec" style={{ width: '24px' }} />
              </div>
              <div >
                <div style={{ color: '#fff', fontSize: '22px', fontWeight: '800' }}> Gestão Lematec </div>
                <div style={{ color: '#5f5f5f', fontSize: '14px' }}> Plataforma para prestadores de serviços </div>
              </div>
            </div>
            <div style={{ color: '#6d6d6d', fontSize: '16px', lineHeight: '1.7', maxWidth: '420px' }}>
              Organize clientes, orçamentos, recorrências e cobranças sem planilhas, sem papel e sem bagunça.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '72px', flexWrap: 'wrap' }}>
            <div >
              <div style={{ color: '#facc15', fontSize: '13px', fontWeight: '800', letterSpacing: '3px', marginBottom: '18px' }}> PRODUTO </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.produto.map((item) => (
                  <a key={item} href="/" style={{ color: '#8a8a8a', fontSize: '16px', textDecoration: 'none' }}>{item}</a>
                ))}
              </div>
            </div>
            <div >
              <div style={{ color: '#facc15', fontSize: '13px', fontWeight: '800', letterSpacing: '3px', marginBottom: '18px' }}> LEGAL </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.legal.map((item) => (
                  <a key={item.label} href={item.href} style={{ color: '#8a8a8a', fontSize: '16px', textDecoration: 'none' }}>{item.label}</a>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', color: '#5f5f5f', fontSize: '14px' }}>
          <div >© 2026 Gestão Lematec · Todos os direitos reservados</div>
          <div > contato@gestaolematec.com.br </div>
        </div>

      </div>
    </footer>
  );
}
