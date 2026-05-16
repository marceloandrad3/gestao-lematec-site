
const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

const steps = [
  { num: '1', title: 'Entra com o Google', desc: '1 clique. Sem senha pra criar, sem formulário chato.' },
  { num: '2', title: 'Cadastra seus clientes', desc: 'Nome, telefone, endereço. GPS e WhatsApp já integrados.' },
  { num: '3', title: 'Manda o orçamento', desc: 'Cria e envia direto pelo WhatsApp. Profissional na hora.' },
];

export function AppSection() {
  return (
    <section id="como-funciona" style={{ background: '#0f172a', padding: '96px 32px', borderTop: '1px solid #1e293b' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>

        <div style={{ flex: '1', minWidth: '280px' }}>
          <div style={{ color: '#3b82f6', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', marginBottom: '16px' }}>
            SIMPLES ASSIM
          </div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', letterSpacing: '-1px', lineHeight: '1.15', marginBottom: '40px' }}>
            Começa a usar hoje.<br />
            <span style={{ color: '#facc15' }}>Sem treinamento.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '40px' }}>
            {steps.map((step) => (
              <div key={step.num} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: '#facc15', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontWeight: '800', fontSize: '15px',
                  color: '#0f172a', flexShrink: 0,
                }}>{step.num}</div>
                <div >
                  <div style={{ color: '#fff', fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>{step.title}</div>
                  <div style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6' }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#facc15', color: '#0f172a',
              padding: '14px 28px', borderRadius: '10px',
              fontWeight: '700', fontSize: '15px',
            }}
          >
            🔑 Entrar com o Google
          </a>
        </div>

        <div style={{ flex: '1', minWidth: '260px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            background: '#1e293b', border: '6px solid #334155',
            borderRadius: '40px', padding: '14px 10px',
            width: '240px', boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
          }}>
            <div style={{ width: '44px', height: '5px', background: '#0f172a', borderRadius: '999px', margin: '0 auto 12px' }} />
            <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
              <img src="/screens/mobile-orcamentos.png" alt="Orçamentos no celular" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
