const Termos = () => {
  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: '#e2e8f0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}>

        <a href="/" style={{ color: '#facc15', textDecoration: 'none', fontSize: '14px' }}>
          ← Voltar ao início
        </a>

        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#f8fafc', margin: '32px 0 8px' }}>
          Termos de Uso
        </h1>
        <p style={{ color: '#64748b', marginBottom: '48px' }}>Última atualização: 16 de maio de 2026</p>

        {[
          { titulo: '1. Aceitação dos termos', texto: 'Ao acessar ou utilizar o Gestão Lematec, você concorda com estes Termos de Uso. Se não concordar, não utilize a plataforma.' },
          { titulo: '2. O serviço', texto: 'O Gestão Lematec é uma plataforma SaaS para gestão de prestadores de serviços, incluindo módulos de clientes, orçamentos, serviços, financeiro e serviços recorrentes. Desenvolvido pela Lematec LTDA, CNPJ 54.440.545/0001-48.' },
          { titulo: '3. Trial e cobrança', texto: 'Novos usuários têm 30 dias de uso gratuito, sem cartão de crédito. Após o trial, o valor é de R$99,99/mês. Pagamento via PIX ou cartão. A falta de pagamento implica suspensão do acesso.' },
          { titulo: '4. Responsabilidades do usuário', texto: 'Você é responsável por: manter seus dados de acesso em sigilo, usar a plataforma de forma legal e ética, não compartilhar sua conta com terceiros, garantir que os dados inseridos são verídicos.' },
          { titulo: '5. Propriedade dos dados', texto: 'Os dados inseridos por você são de sua propriedade. A Lematec LTDA não reivindica propriedade sobre seus dados. Você pode solicitar exportação ou exclusão a qualquer momento.' },
          { titulo: '6. Disponibilidade', texto: 'Nos esforçamos para manter a plataforma disponível 24/7, mas não garantimos disponibilidade ininterrupta. Manutenções programadas serão comunicadas com antecedência.' },
          { titulo: '7. Cancelamento', texto: 'Você pode cancelar sua conta a qualquer momento, sem multa. O cancelamento encerra o acesso ao término do período já pago. Seus dados ficam disponíveis para exportação por 30 dias após o cancelamento.' },
          { titulo: '8. Limitação de responsabilidade', texto: 'A Lematec LTDA não se responsabiliza por perdas causadas por uso indevido da plataforma ou eventos fora do nosso controle.' },
          { titulo: '9. Alterações nos termos', texto: 'Podemos atualizar estes termos. Alterações relevantes serão comunicadas por e-mail. O uso continuado implica aceitação.' },
          { titulo: '10. Foro e legislação', texto: 'Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de João Pessoa – PB para resolução de conflitos.' },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: '40px', borderBottom: '1px solid #1e293b', paddingBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#facc15', marginBottom: '12px' }}>
              {item.titulo}
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>{item.texto}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Termos
