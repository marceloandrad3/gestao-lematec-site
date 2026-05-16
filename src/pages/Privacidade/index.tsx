const Privacidade = () => {
  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: '#e2e8f0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}>

        <a href="/" style={{ color: '#facc15', textDecoration: 'none', fontSize: '14px' }}>
          ← Voltar ao início
        </a>

        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#f8fafc', margin: '32px 0 8px' }}>
          Política de Privacidade
        </h1>
        <p style={{ color: '#64748b', marginBottom: '48px' }}>Última atualização: 16 de maio de 2026</p>

        {[
          { titulo: '1. Quem somos', texto: 'O Gestão Lematec é uma plataforma de gestão de serviços desenvolvida pela Lematec LTDA, CNPJ 54.440.545/0001-48, com sede na Avenida Guarabira, 932, CXPST 215, João Pessoa – PB, CEP 58038-142. Contato: contato@gestaolematec.com.br' },
          { titulo: '2. Quais dados coletamos', texto: 'Coletamos apenas os dados necessários para o funcionamento da plataforma: nome, e-mail e foto de perfil fornecidos pelo Google no momento do login via Google OAuth. Dados inseridos pelo usuário na plataforma, como clientes, orçamentos, serviços e informações financeiras. Dados de uso para melhoria da experiência (logs de acesso, dispositivo, navegador).' },
          { titulo: '3. Como usamos seus dados', texto: 'Seus dados são usados exclusivamente para: autenticar seu acesso à plataforma, exibir suas informações dentro do sistema, melhorar a experiência de uso e enviar comunicações relacionadas ao serviço. Nunca vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.' },
          { titulo: '4. Login com Google (OAuth)', texto: 'O acesso ao Gestão Lematec é feito via Google OAuth. Ao fazer login, o Google compartilha conosco apenas nome, e-mail e foto de perfil. Não temos acesso à sua senha do Google. Você pode revogar o acesso a qualquer momento nas configurações da sua conta Google.' },
          { titulo: '5. Armazenamento e segurança', texto: 'Seus dados são armazenados de forma segura na infraestrutura do Google Cloud (Firebase e Cloud Run). Utilizamos criptografia em trânsito (HTTPS) e em repouso. O acesso aos dados é restrito e controlado.' },
          { titulo: '6. Seus direitos (LGPD)', texto: 'Conforme a LGPD, você tem direito a: acessar seus dados, corrigir informações incorretas, solicitar exclusão dos seus dados e revogar consentimento a qualquer momento. Contato: contato@gestaolematec.com.br' },
          { titulo: '7. Cookies', texto: 'Utilizamos cookies essenciais para manter sua sessão autenticada. Não utilizamos cookies de rastreamento publicitário.' },
          { titulo: '8. Alterações nesta política', texto: 'Podemos atualizar esta política periodicamente. Em caso de mudanças relevantes, notificaremos pelo e-mail cadastrado.' },
          { titulo: '9. Contato', texto: 'Dúvidas sobre privacidade? Fale conosco: contato@gestaolematec.com.br' },
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

export default Privacidade
