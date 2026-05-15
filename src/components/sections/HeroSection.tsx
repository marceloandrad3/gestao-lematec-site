
const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

export function HeroSection() {
  return (
    <section style={{
      background: '#facc15',
      paddingTop: '140px',
      paddingBottom: '0',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 32px',
        textAlign: 'center',
      }}>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(0,0,0,0.08)',
          borderRadius: '999px',
          padding: '5px 18px',
          marginBottom: '28px',
        }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#0f0f0f' }} />
          <span style={{ fontSize: '14px', color: '#713f12', fontWeight: '500' }}>
            30 dias grátis · sem cartão · sem burocracia
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 88px)',
          fontWeight: '900',
          color: '#0f0f0f',
          lineHeight: '1.0',
          letterSpacing: '-3px',
          marginBottom: '16px',
        }}>
          Bora começar?<br />Égrátis por 30 dias.
        </h1>

        <div style={{
          fontSize: 'clamp(20px, 3vw, 32px)',
          fontWeight: '700',
          color: '#713f12',
          lineHeight: '1.3',
          marginBottom: '20px',
        }}>
          Chega de caderninho.<br />Seus clientes no celular,<br />seu dinheiro no bolso.
        </div>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: '#92400e',
          maxWidth: '520px',
          margin: '0 auto 36px',
          lineHeight: '1.65',
        }}>
          Para técnicos, eletricistas, instaladores e prestadores que
          trabalham no campo e querem trabalhar organizado.
        </p>

        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '28px',
        }}>
          <a
            href={SYSTEM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#0f0f0f',
              color: '#facc15',
              fontSize: '18px',
              fontWeight: '800',
              padding: '18px 36px',
              borderRadius: '14px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
            }}
          >
            Testar 30 dias grátis →
          </a>
          <a
            href="#como-funciona"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.1)',
              color: '#0f0f0f',
              fontSize: '17px',
              fontWeight: '600',
              padding: '18px 28px',
              borderRadius: '14px',
              textDecoration: 'none',
            }}
          >
            ▶ Ver como funciona
          </a>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}>
          <span style={{ fontSize: '14px', color: '#713f12' }}>✓ Sem cartão de crédito</span>
          <span style={{ fontSize: '14px', color: '#713f12' }}>✓ Cancela quando quiser</span>
          <span style={{ fontSize: '14px', color: '#713f12' }}>✓ R$99,99/mês após o trial</span>
        </div>

      </div>
    </section>
  );
}
