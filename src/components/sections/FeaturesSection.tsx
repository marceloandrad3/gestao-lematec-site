
const items = [
  { icon: "◉", title: "Clientes organizados", text: "GPS e WhatsApp com um toque.", featured: false },
  { icon: "◌", title: "Orçamento pelo Zap", text: "Profissional, rápido, sem papel.", featured: false },
  { icon: "$", title: "Cobranças no controle", text: "Sabe quem pagou e quem atrasou.", featured: false },
  { icon: "▣", title: "Agenda sem bagunça", text: "Nunca mais dois no mesmo horário.", featured: false },
  { icon: "◎", title: "GPS integrado", text: "Abriu o app, já abriu o mapa.", featured: false },
  { icon: "↻", title: "Recorrência automática", text: "Fatura de novo sem esforço.", featured: true },
];

export function FeaturesSection() {
  return (
    <section style={{ background: '#050505', padding: '72px 32px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ color: '#facc15', fontWeight: '800', fontSize: '14px', letterSpacing: '4px', marginBottom: '32px' }}>
          COM A LEMATEC VOCÊ NUNCA MAIS ESQUECE NADA
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {items.map((item) => (
            <div key={item.title} style={{
              background: 'linear-gradient(180deg,#161616 0%,#121212 100%)',
              border: item.featured ? '1px solid #facc15' : '1px solid #2a2a2a',
              borderRadius: '16px', padding: '32px', minHeight: '180px',
            }}>
              <div style={{ color: '#facc15', fontSize: '32px', marginBottom: '22px' }}>{item.icon}</div>
              <div style={{ color: item.featured ? '#facc15' : '#fff', fontWeight: '800', fontSize: '20px', marginBottom: '12px' }}>{item.title}</div>
              <div style={{ color: '#5f5f5f', fontSize: '16px', lineHeight: '1.5' }}>{item.text}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <div style={{ flex: '1', minWidth: '280px', borderRadius: '14px', overflow: 'hidden', border: '1px solid #2a2a2a', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
            <img
              src="/screens/clientes-claro.png"
              alt="Tela de clientes com menu WhatsApp e GPS"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '280px', borderRadius: '14px', overflow: 'hidden', border: '1px solid #2a2a2a', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
            <img
              src="/screens/orcamentos-claro.png"
              alt="Tela de orçamentos com status e ações"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>

        <div style={{
          borderRadius: '24px', overflow: 'hidden',
          background: 'linear-gradient(90deg,#2f2e2b 0%,#343331 100%)',
          padding: '64px 72px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          alignItems: 'center', gap: '40px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#c7c3bc', fontSize: '14px', fontWeight: '800', letterSpacing: '4px', marginBottom: '24px' }}>
              SIMPLES ASSIM
            </div>
            <div style={{ color: '#facc15', fontSize: 'clamp(56px, 8vw, 92px)', fontWeight: '900', lineHeight: '0.9' }}>
              R$99<span style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}>,99</span>
            </div>
            <div style={{ marginTop: '10px', color: '#c8c2bb', fontSize: '20px' }}>
              por mês · após o trial
            </div>
          </div>
          <div style={{ borderLeft: '1px solid #4f4d48', paddingLeft: '48px', color: '#fff', fontSize: '18px', lineHeight: '2.2', fontWeight: '600' }}>
            <div >✔ 30 dias grátis</div>
            <div >✔ Clientes e orçamentos ilimitados</div>
            <div >✔ App Android e iPhone</div>
            <div >✔ PIX ou cartão · cancela quando quiser</div>
          </div>
        </div>

      </div>
    </section>
  );
}
