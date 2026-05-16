
const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

export function CtaSection() {
  return (
    <section style={{ background: '#0f172a', padding: '120px 32px', borderTop: '1px solid #1e293b' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>

        <div style={{ fontSize: '52px', marginBottom: '24px' }}>🚀</div>

        <h2 style={{
          color: '#fff', fontSize: 'clamp(32px, 5vw, 60px)',
          fontWeight: '800', letterSpacing: '-2px', lineHeight: '1.1', marginBottom: '20px',
        }}>
          Bora começar?<br />
          <span style={{ color: '#facc15' }}>Égrátis por 30 dias.</span>
        </h2>

        <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.65', marginBottom: '40px' }}>
          Sem cartão. Sem contrato. Sem burocracia.<br />Seus clientes no celular, seu dinheiro no bolso.
        </p>

        <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-block', background: '#facc15', color: '#0f172a',
            padding: '18px 48px', borderRadius: '12px',
            fontWeight: '800', fontSize: '18px',
            boxShadow: '0 8px 32px rgba(250,204,21,0.3)',
          }}
        >Testar grátis agora →</a>

        <p style={{ color: '#334155', fontSize: '13px', marginTop: '20px' }}>
          R$99,99/mês após o trial · Lematec Tecnologia · Facilitando o trabalho de quem faz o Brasil acontecer.
        </p>

      </div>
    </section>
  );
}
