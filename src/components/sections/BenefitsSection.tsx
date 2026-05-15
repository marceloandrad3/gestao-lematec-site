
const pains = [
  { icon: "📍", title: '"Onde foi o endereço da dona Maria?"', text: 'Caderninho, bloco de notas, WhatsApp... some quando você mais precisa.' },
  { icon: "💸", title: '"Esqueci de cobrar o João"', text: 'Serviço feito, cobrança perdida. Dinheiro que era seu foi embora.' },
  { icon: "🔄", title: '"Instalei o ar — e a limpeza em 6 meses?"', text: 'Oportunidade de faturar de novo com o mesmo cliente. Perdida.' },
  { icon: "📊", title: '"Fim do mês e não sei quanto entrou"', text: 'Trabalhou o mês inteiro mas não sabe se foi lucrativo.' },
];

export function BenefitsSection() {
  return (
    <>
      <section style={{ background: '#050505', padding: '72px 32px', borderTop: '1px solid #191919' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: '#facc15', fontSize: '14px', fontWeight: '800', letterSpacing: '4px', marginBottom: '20px' }}>
            VOCÊ SE RECONHECE AQUI?
          </div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 58px)', lineHeight: '1.1', fontWeight: '800', marginBottom: '40px' }}>
            Se sim, a Lematec foi feita pra você.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
            {pains.map((item) => (
              <div key={item.title} style={{
                background: 'linear-gradient(180deg,#171717 0%,#131313 100%)',
                border: '1px solid #2b2b2b', borderRadius: '18px', padding: '28px',
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '32px', flexShrink: 0 }}>{item.icon}</div>
                  <div >
                    <div style={{ color: '#fff', fontWeight: '700', fontSize: '18px', marginBottom: '10px', lineHeight: '1.4' }}>{item.title}</div>
                    <div style={{ color: '#5f5f5f', fontSize: '16px', lineHeight: '1.55' }}>{item.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '56px', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'linear-gradient(180deg,#403c2f 0%,#25231d 100%)',
              border: '1px solid #575141',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '32px',
            }}>↓</div>
          </div>
        </div>
      </section>

      <section style={{ background: '#facc15', padding: '72px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '64px',
          }}>
            <div >
              <div style={{ color: '#765300', fontWeight: '800', fontSize: '14px', letterSpacing: '4px', marginBottom: '24px' }}>
                DIFERENCIAL EXCLUSIVO
              </div>
              <h2 style={{ color: '#000', fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: '1.05', fontWeight: '900', marginBottom: '24px' }}>
                Instalou hoje.<br />Faturou de novo em 6 meses.
              </h2>
              <p style={{ color: '#734f00', fontSize: '20px', lineHeight: '1.6', marginBottom: '28px' }}>
                O sistema lembra de oferecer a limpeza. Sem depender da sua memória.
                Você fatura mais sem trabalhar mais.
              </p>
              <div style={{ color: '#000', fontSize: '18px', lineHeight: '2.2', fontWeight: '600' }}>
                <div >✔ Mensal, trimestral e anual</div>
                <div >✔ Avisa você na hora certa</div>
                <div >✔ Histórico completo de cada cliente</div>
              </div>
            </div>

            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
              border: '1px solid rgba(0,0,0,0.08)',
            }}>
              <img
                src="/screens/servicos-claro.png"
                alt="Tela de serviços com tags Mensal e Trimestral"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
              border: '1px solid rgba(0,0,0,0.08)',
            }}>
              <img
                src="/screens/financeiro-claro.png"
                alt="Tela financeira com cobranças atrasadas em vermelho"
                style={{ width: '100%', display: 'block' }}
              />
            </div>

            <div >
              <div style={{ color: '#765300', fontWeight: '800', fontSize: '14px', letterSpacing: '4px', marginBottom: '24px' }}>
                FINANCEIRO EM TEMPO REAL
              </div>
              <h2 style={{ color: '#000', fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.05', fontWeight: '900', marginBottom: '24px' }}>
                Saiba exatamente o que você tem a receber.
              </h2>
              <p style={{ color: '#734f00', fontSize: '20px', lineHeight: '1.6', marginBottom: '28px' }}>
                Quem está atrasado aparece em vermelho. Quem pagou, em verde.
                Fim do mês sem surpresa.
              </p>
              <div style={{ color: '#000', fontSize: '18px', lineHeight: '2.2', fontWeight: '600' }}>
                <div >✔ A vencer, hoje e atrasados</div>
                <div >✔ Total em aberto com um olhar</div>
                <div >✔ Histórico de cobranças por cliente</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
