
const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

export function HeroSection() {
  return (
    <section style={{ background: '#0f172a', paddingTop: '120px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#1e293b', border: '1px solid #334155',
            borderRadius: '999px', padding: '5px 16px', marginBottom: '28px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: '13px', color: '#94a3b8' }}>30 dias grátis · sem cartão · sem burocracia</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: '800',
            color: '#fff', lineHeight: '1.08', letterSpacing: '-2px',
            marginBottom: '20px',
          }}>
            Chega de caderninho.<br />
            <span style={{ color: '#facc15' }}>Seus clientes no celular,</span><br />seu dinheiro no bolso.
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)', color: '#64748b',
            maxWidth: '500px', margin: '0 auto 36px', lineHeight: '1.65',
          }}>
            Para técnicos, eletricistas, instaladores e prestadores que
            trabalham no campo e querem trabalhar organizado.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
            <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer"
              style={{
                background: '#facc15', color: '#0f172a',
                fontSize: '16px', fontWeight: '800',
                padding: '14px 32px', borderRadius: '10px',
                boxShadow: '0 4px 24px rgba(250,204,21,0.3)',
              }}
            >Testar 30 dias grátis →</a>
            <a href="#como-funciona"
              style={{
                background: '#1e293b', color: '#94a3b8',
                fontSize: '15px', fontWeight: '500',
                padding: '14px 24px', borderRadius: '10px',
                border: '1px solid #334155',
              }}
            >▶ Ver como funciona</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', color: '#475569' }}>✓ Sem cartão de crédito</span>
            <span style={{ fontSize: '13px', color: '#475569' }}>✓ Cancela quando quiser</span>
            <span style={{ fontSize: '13px', color: '#475569' }}>✓ R$99,99/mês após o trial</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', alignItems: 'flex-end', flexWrap: 'wrap' }}>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: '#1e293b', border: '6px solid #334155',
              borderRadius: '36px', padding: '12px 8px',
              width: '200px', boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
            }}>
              <div style={{ width: '40px', height: '5px', background: '#0f172a', borderRadius: '999px', margin: '0 auto 10px' }} />
              <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <img src="/screens/mobile-dashboard.png" alt="Dashboard no celular" />
              </div>
            </div>
            <p style={{ color: '#475569', fontSize: '12px', marginTop: '14px' }}>Visão geral</p>
          </div>

          <div style={{ textAlign: 'center', transform: 'translateY(-24px)' }}>
            <div style={{
              background: '#1e293b', border: '6px solid #facc15',
              borderRadius: '36px', padding: '12px 8px',
              width: '220px', boxShadow: '0 32px 64px rgba(250,204,21,0.15)',
            }}>
              <div style={{ width: '40px', height: '5px', background: '#0f172a', borderRadius: '999px', margin: '0 auto 10px' }} />
              <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <img src="/screens/mobile-clientes.png" alt="Clientes no celular" />
              </div>
            </div>
            <p style={{ color: '#facc15', fontSize: '12px', fontWeight: '600', marginTop: '14px' }}>Clientes + GPS + Zap</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: '#1e293b', border: '6px solid #334155',
              borderRadius: '36px', padding: '12px 8px',
              width: '200px', boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
            }}>
              <div style={{ width: '40px', height: '5px', background: '#0f172a', borderRadius: '999px', margin: '0 auto 10px' }} />
              <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <img src="/screens/mobile-financeiro.png" alt="Financeiro no celular" />
              </div>
            </div>
            <p style={{ color: '#475569', fontSize: '12px', marginTop: '14px' }}>Financeiro</p>
          </div>

        </div>
      </div>
    </section>
  );
}
