
const items = [
  { icon: "👥", title: "Clientes organizados", text: "GPS e WhatsApp com um toque.", featured: false },
  { icon: "💬", title: "Orçamento pelo Zap", text: "Profissional, rápido, sem papel.", featured: false },
  { icon: "💰", title: "Cobranças no controle", text: "Sabe quem pagou e quem atrasou.", featured: false },
  { icon: "🗓️", title: "Agenda sem bagunça", text: "Nunca mais dois no mesmo horário.", featured: false },
  { icon: "📍", title: "GPS integrado", text: "Abriu o app, já abriu o mapa.", featured: false },
  { icon: "🔄", title: "Recorrência automática", text: "Fatura de novo sem esforço.", featured: true },
];

const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

export function FeaturesSection() {
  return (
    <>
      <section id="app" style={{ background: '#0f172a', padding: '96px 32px', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: '#3b82f6', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', marginBottom: '16px' }}>
            COM A LEMATEC VOCÊ NUNCA MAIS ESQUECE NADA
          </div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', letterSpacing: '-1px', lineHeight: '1.15', marginBottom: '40px' }}>
            Tudo que você precisa <span style={{ color: '#facc15' }}>pra trabalhar organizado.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {items.map((item) => (
              <div key={item.title} style={{
                background: '#1e293b',
                border: item.featured ? '1px solid #3b82f6' : '1px solid #334155',
                borderRadius: '14px', padding: '28px',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
                <div style={{ color: item.featured ? '#facc15' : '#e2e8f0', fontWeight: '700', fontSize: '17px', marginBottom: '8px' }}>{item.title}</div>
                <div style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="preco" style={{ background: '#1e293b', padding: '96px 32px', borderTop: '1px solid #334155' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#3b82f6', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', marginBottom: '16px' }}>
            PREÇO
          </div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '40px' }}>
            Simples assim
          </h2>
          <div style={{
            background: '#0f172a', border: '2px solid #facc15',
            borderRadius: '20px', padding: '40px 36px',
          }}>
            <div style={{ marginBottom: '8px' }}>
              <span style={{ fontSize: '52px', fontWeight: '800', color: '#fff', letterSpacing: '-2px' }}> R$99</span>
              <span style={{ fontSize: '22px', fontWeight: '600', color: '#fff' }}>,99</span>
              <span style={{ fontSize: '15px', color: '#475569', marginLeft: '4px' }}>/mês</span>
            </div>
            <div style={{
              display: 'inline-flex', gap: '6px', background: '#14532d',
              borderRadius: '999px', padding: '5px 14px', marginBottom: '28px',
            }}>
              <span style={{ fontSize: '13px', color: '#86efac', fontWeight: '600' }}>✓ 30 dias grátis — sem cartão</span>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Clientes e orçamentos ilimitados', 'App Android e iPhone', 'Serviços recorrentes automáticos', 'GPS e WhatsApp integrados', 'PIX ou cartão · cancela quando quiser'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#facc15', fontWeight: '800', fontSize: '15px' }}>✓</span>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>{item}</span>
                </div>
              ))}
            </div>
            <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'block', background: '#facc15', color: '#0f172a',
                padding: '15px', borderRadius: '10px', fontWeight: '800',
                fontSize: '16px', textAlign: 'center',
              }}
            >Começar grátis agora →</a>
            <p style={{ fontSize: '12px', color: '#334155', marginTop: '14px' }}>
              Cancela quando quiser. Sem multa, sem pergunta.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
