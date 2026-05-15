
export function AppSection() {
  return (
    <section
      id="como-funciona"
      style={{ background: '#facc15', paddingBottom: '0', borderBottom: '4px solid #0f0f0f' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          borderRadius: '16px 16px 0 0',
          overflow: 'hidden',
          border: '1px solid #e0e0e0',
          borderBottom: 'none',
          boxShadow: '0 -16px 60px rgba(0,0,0,0.2)',
        }}>
          <div style={{
            background: '#e0e0e0',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div style={{
              flex: 1, background: '#fff', borderRadius: '6px',
              padding: '4px 14px', fontSize: '12px', color: '#999',
              textAlign: 'center', marginLeft: '8px',
            }}>
              app.lematec.com.br
            </div>
          </div>
          <img
            src="/screens/dashboard-claro.png"
            alt="Dashboard Gestão Lematec — Visão Geral com gráfico de desempenho"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}
