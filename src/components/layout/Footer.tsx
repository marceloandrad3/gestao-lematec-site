
export function Footer() {
  return (
    <footer style={{ background: '#0a0f1e', borderTop: '1px solid #1e293b', padding: '60px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '48px' }}>

          <div >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', background: '#facc15', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/logo.png" alt="Lematec" style={{ width: '20px' }} />
              </div>
              <div >
                <div style={{ color: '#fff', fontSize: '16px', fontWeight: '700' }}>Gestão Lematec</div>
                <div style={{ color: '#475569', fontSize: '12px' }}>Plataforma para prestadores de serviços</div>
              </div>
            </div>
            <div style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7', maxWidth: '360px' }}>
              Organize clientes, orçamentos, recorrências e cobranças. Sem planilha, sem papel, sem bagunça.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
            <div >
              <div style={{ color: '#3b82f6', fontSize: '11px', fontWeight: '700', letterSpacing: '3px', marginBottom: '16px' }}>
                PRODUTO
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Funcionalidades', 'Recorrência', 'Aplicativo', 'Preços'].map((item) => (
                  <a key={item} href="/" style={{ color: '#475569', fontSize: '14px' }}>{item}</a>
                ))}
              </div>
            </div>
            <div >
              <div style={{ color: '#3b82f6', fontSize: '11px', fontWeight: '700', letterSpacing: '3px', marginBottom: '16px' }}>
                LEGAL
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="/privacidade" style={{ color: '#475569', fontSize: '14px' }}>Política de Privacidade</a>
                <a href="/termos" style={{ color: '#475569', fontSize: '14px' }}>Termos de Uso</a>
              </div>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', color: '#334155', fontSize: '13px' }}>
          <div >© 2026 Gestão Lematec · Todos os direitos reservados</div>
          <div >contato@gestaolematec.com.br</div>
        </div>

      </div>
    </footer>
  );
}
