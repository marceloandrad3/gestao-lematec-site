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
          <span style={{ color: '#facc15' }}>É grátis por 30 dias.</span>
        </h2>

        <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.65', marginBottom: '16px' }}>
          Sem cartão. Sem contrato. Sem burocracia.<br />
          Só entra com o Google e começa a usar agora.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {['Entre com Google', 'Use por 30 dias grátis', 'Pague só se gostar'].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
              <span style={{ color: '#22c55e', fontWeight: '700' }}>✓</span> {item}
            </div>
          ))}
        </div>

        <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: '#facc15', color: '#0f172a',
            padding: '20px 52px', borderRadius: '14px',
            fontWeight: '800', fontSize: '20px',
            boxShadow: '0 8px 40px rgba(250,204,21,0.35)',
            textDecoration: 'none',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Entrar com Google — é grátis
        </a>

        <p style={{ color: '#334155', fontSize: '13px', marginTop: '24px', lineHeight: '1.8' }}>
          Disponível no navegador e no celular · R$99,99/mês após o trial<br />
          Cancela quando quiser · Sem cartão de crédito
        </p>

      </div>
    </section>
  );
}
