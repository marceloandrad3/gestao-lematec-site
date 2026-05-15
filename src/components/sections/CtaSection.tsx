
const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';
const WHATSAPP_URL = 'https://wa.me/5500000000000';

export function CtaSection() {
  return (
    <section style={{ background: '#facc15', padding: '100px 32px 120px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>

        <div style={{ color: '#765300', fontWeight: '800', fontSize: '14px', letterSpacing: '4px', marginBottom: '28px' }}>
          COMECE HOJE
        </div>

        <h2 style={{
          color: '#000',
          fontSize: 'clamp(40px, 8vw, 92px)',
          lineHeight: '0.92',
          letterSpacing: '-3px',
          fontWeight: '900',
          marginBottom: '36px',
        }}>
          Seu concorrente ainda
          <br />
          usa caderno.
        </h2>

        <div style={{ color: '#7a5300', fontSize: 'clamp(20px, 3vw, 30px)', lineHeight: '1.45', fontWeight: '700', marginBottom: '52px' }}>
          Você pode começar hoje organizado,<br />
          profissional e cobrando certo.
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <a
            href={SYSTEM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '72px',
              padding: '0 40px',
              borderRadius: '18px',
              background: '#000',
              color: '#facc15',
              fontSize: '20px',
              fontWeight: '800',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            Começar 30 dias grátis →
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '72px',
              padding: '0 40px',
              borderRadius: '18px',
              background: '#dfb700',
              color: '#000',
              fontSize: '20px',
              fontWeight: '700',
              textDecoration: 'none',
            }}
          >
            Falar no WhatsApp
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap', color: '#7a5300', fontSize: '15px' }}>
          <span >✓ Sem fidelidade</span>
          <span >✓ Funciona no navegador</span>
          <span >✓ Android e iPhone</span>
        </div>

      </div>
    </section>
  );
}
