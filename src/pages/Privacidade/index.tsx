const Privacidade = () => {
  const itens = [
    { titulo: "1. Identificação do controlador", texto: "Controlador: Lematec LTDA | CNPJ: 54.440.545/0001-48 | Endereço: Avenida Guarabira, 932, CXPST 215, João Pessoa – PB, CEP 58038-142 | DPO/Contato: contato@gestaolematec.com.br | Esta Política está em conformidade com a LGPD (Lei 13.709/2018)." },
    { titulo: "2. Dados coletados e finalidades", texto: "AUTENTICAÇÃO (Google OAuth): Nome, e-mail e foto. Base legal: execução de contrato (art. 7º, V, LGPD). DADOS INSERIDOS PELO USUÁRIO: Clientes, orçamentos, serviços, valores financeiros. O USUÁRIO é responsável pela legalidade desses dados. DADOS DE USO: Logs, IP, dispositivo, navegador. Base legal: legítimo interesse (art. 7º, IX). NÃO COLETAMOS dados de pagamento nem dados sensíveis (art. 5º, II, LGPD)." },
    {
      titulo: "3. Uso de dados das APIs do Google",
      texto: (
        <>
          O Gestão Lematec acessa dados do Google do usuário por meio das seguintes permissões, exclusivamente para as finalidades descritas:
          <br /><br />
          <strong style={{ color: "#cbd5e1" }}>Google Calendar</strong> (https://www.googleapis.com/auth/calendar): o aplicativo cria, edita e remove eventos na agenda do usuário referentes a execuções de serviços e cobranças geradas dentro da plataforma. Não acessamos eventos de agenda não relacionados às operações do sistema.
          <br /><br />
          <strong style={{ color: "#cbd5e1" }}>Envio de e-mail via Gmail</strong> (https://www.googleapis.com/auth/gmail.send): o aplicativo envia, em nome do usuário e mediante ação iniciada por ele, e-mails contendo orçamentos e notificações a seus clientes. Não lemos a caixa de entrada nem armazenamos o conteúdo das mensagens.
          <br /><br />
          O uso e a transferência, pelo Gestão Lematec, de informações recebidas das APIs do Google obedecem à{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#facc15" }}>Política de Dados do Usuário dos Serviços de API do Google</a>, incluindo seus requisitos de Uso Limitado (Limited Use). Os dados obtidos por essas APIs não são utilizados para publicidade, não são vendidos a terceiros e não são transferidos exceto quando necessário para prestar o serviço ou por exigência legal.
        </>
      ),
    },
    { titulo: "4. Acesso administrativo", texto: "O USUÁRIO autoriza o acesso do PROVEDOR aos seus dados para suporte técnico, manutenção e diagnóstico, conforme Termos de Uso. Acesso realizado com confidencialidade, por pessoal autorizado, sem uso comercial." },
    { titulo: "5. Compartilhamento", texto: "Dados compartilhados apenas com: Google LLC (infraestrutura Firebase/Cloud Run), Mercado Pago (pagamentos) e Autoridades quando exigido por lei. NÃO vendemos ou compartilhamos dados para fins comerciais." },
    { titulo: "6. Segurança e retenção", texto: "Infraestrutura Google Cloud com criptografia TLS e em repouso. Dados retidos enquanto a conta estiver ativa. Após cancelamento: prazo de 30 dias para exportação, quando tecnicamente viável, depois excluídos definitivamente; a exportação poderá ser inviabilizada por encerramento da plataforma ou indisponibilidade de infraestrutura de terceiros. Nenhum sistema é 100% seguro. O PROVEDOR não garante segurança absoluta." },
    { titulo: "7. Direitos do titular (LGPD)", texto: "Você tem direito a: acesso, correção, eliminação, portabilidade e revogação do consentimento. Solicite em: contato@gestaolematec.com.br — Prazo de resposta: até 15 dias úteis." },
    { titulo: "8. Cookies", texto: "Apenas cookies essenciais para manter sessão autenticada. Sem rastreamento publicitário ou analytics de terceiros." },
    { titulo: "9. Transferência internacional", texto: "Dados processados em servidores Google Cloud nos EUA, cobertos pelo Data Processing Agreement do Google, garantindo proteção adequada conforme LGPD." },
    { titulo: "10. Menores de idade", texto: "Plataforma destinada exclusivamente a maiores de 18 anos. Dados de menores identificados serão excluídos imediatamente." },
    { titulo: "11. Alterações", texto: "Atualizações comunicadas por e-mail, com antecedência de 10 dias sempre que possível. Uso continuado implica aceitação. Versão atual sempre em gestaolematec.com.br/privacidade." },
    { titulo: "12. Contato e ANPD", texto: "E-mail: contato@gestaolematec.com.br | Responsável: Marcelo Vieira de Andrade | Reclamações também podem ser registradas na ANPD: www.gov.br/anpd" },
  ]

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        <a href="/" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar ao início</a>
        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#f8fafc", margin: "32px 0 8px" }}>Política de Privacidade</h1>
        <p style={{ color: "#64748b", marginBottom: "48px" }}>Última atualização: 11 de junho de 2026 — Versão 2.1</p>
        {itens.map((item, i) => (
          <div key={i} style={{ marginBottom: "40px", borderBottom: "1px solid #1e293b", paddingBottom: "40px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#facc15", marginBottom: "12px" }}>{item.titulo}</h2>
            <p style={{ color: "#94a3b8", lineHeight: "1.9", fontSize: "14px" }}>{item.texto}</p>
          </div>
        ))}
        <div style={{ background: "#1e293b", borderRadius: "12px", padding: "24px", textAlign: "center", marginTop: "40px" }}>
          <p style={{ color: "#475569", fontSize: "13px" }}>Dúvidas sobre privacidade?</p>
          <a href="mailto:contato@gestaolematec.com.br" style={{ color: "#facc15", fontWeight: "600" }}>contato@gestaolematec.com.br</a>
        </div>
      </div>
    </div>
  )
}

export default Privacidade
