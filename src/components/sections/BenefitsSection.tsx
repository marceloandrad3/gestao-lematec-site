
const pains = [
  { icon: "📍", title: '"Onde foi o endereço da dona Maria?"', text: 'Caderninho, bloco de notas, WhatsApp... some quando você mais precisa.' },
  { icon: "💸", title: '"Esqueci de cobrar o João"', text: 'Serviço feito, cobrança perdida. Dinheiro que era seu foi embora.' },
  { icon: "🔄", title: '"Instalei o ar — e a limpeza em 6 meses?"', text: 'Oportunidade de faturar de novo com o mesmo cliente. Perdida.' },
  { icon: "📊", title: '"Fim do mês e não sei quanto entrou"', text: 'Trabalhou o mês inteiro mas não sabe se foi lucrativo.' },
];

export function BenefitsSection() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: '96px 32px', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: '#3b82f6', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', marginBottom: '16px' }}>
            VOCÊ SE RECONHECE AQUI?
          </div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-1px', lineHeight: '1.1', marginBottom: '40px' }}>
            Se sim, a Lematec <span style={{ color: '#facc15' }}>foi feita pra você.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {pains.map((item) => (
              <div key={item.title} style={{
                background: '#1e293b', border: '1px solid #334155',
                borderRadius: '16px', padding: '28px',
                display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <div style={{ fontSize: '32px', flexShrink: 0 }}>{item.icon}</div>
                <div >
                  <div style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '16px', marginBottom: '8px', lineHeight: '1.4' }}>{item.title}</div>
                  <div style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#1e293b', padding: '96px 32px', borderTop: '1px solid #334155' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div >
            <div style={{ color: '#3b82f6', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', marginBottom: '16px' }}>
              DIFERENCIAL EXCLUSIVO
            </div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '800', letterSpacing: '-1px', lineHeight: '1.1', marginBottom: '20px' }}>
              Instalou hoje.<br />
              <span style={{ color: '#facc15' }}>Faturou de novo em 6 meses.</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '17px', lineHeight: '1.7', marginBottom: '28px' }}>
              O sistema lembra de oferecer a limpeza. Sem depender da sua memória.
              Você fatura mais sem trabalhar mais.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Mensal, trimestral e anual', 'Avisa você na hora certa', 'Histórico completo de cada cliente'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#facc15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#0f172a' }}>✓</span>
                  </div>
                  <span style={{ color: '#94a3b8', fontSize: '15px' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: '#0f172a', border: '6px solid #334155',
              borderRadius: '40px', padding: '14px 10px',
              width: '240px', boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            }}>
              <div style={{ width: '44px', height: '5px', background: '#1e293b', borderRadius: '999px', margin: '0 auto 12px' }} />
              <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <img src="/screens/mobile-dashboard.png" alt="Dashboard recorrência" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
