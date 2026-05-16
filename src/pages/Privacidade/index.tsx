const Privacidade = () => {
  const itens = [
    { titulo: "1. Identificação do controlador", texto: "Controlador: Lematec LTDA | CNPJ: 54.440.545/0001-48 | Endereço: Avenida Guarabira, 932, CXPST 215, João Pessoa – PB, CEP 58038-142 | DPO/Contato: contato@gestaolematec.com.br | Esta Política está em conformidade com a LGPD (Lei 13.709/2018)." },
    { titulo: "2. Dados coletados e finalidades", texto: "AUTENTICAÇÃO (Google OAuth): Nome, e-mail e foto. Base legal: execução de contrato (art. 7º, V, LGPD). DADOS INSERIDOS PELO USUÁRIO: Clientes, orçamentos, serviços, valores financeiros. O USUÁRIO é responsável pela legalidade desses dados. DADOS DE USO: Logs, IP, dispositivo, navegador. Base legal: legítimo interesse (art. 7º, IX). NÃO COLETAMOS dados de pagamento nem dados sensíveis (art. 5º, II, LGPD)." },
    { titulo: "3. Acesso administrativo", texto: "O USUÁRIO autoriza o acesso do PROVEDOR aos seus dados para suporte técnico, manutenção e diagnóstico, conforme Termos de Uso. Acesso realizado com confidencialidade, por pessoal autorizado, sem uso comercial." },
    { titulo: "4. Compartilhamento", texto: "Dados compartilhados apenas com: Google LLC (infraestrutura Firebase/Cloud Run), Mercado Pago (pagamentos) e Autoridades quando exigido por lei. NÃO vendemos ou compartilhamos dados para fins comerciais." },
    { titulo: "5. Segurança e retenção", texto: "Infraestrutura Google Cloud com criptografia TLS e em repouso. Dados retidos enquanto a conta estiver ativa. Após cancelamento: 30 dias para exportação, depois excluídos definitivamente. Nenhum sistema é 100% seguro. O PROVEDOR não garante segurança absoluta." },
    { titulo: "6. Direitos do titular (LGPD)", texto: "Você tem direito a: acesso, correção, eliminação, portabilidade e revogação do consentimento. Solicite em: contato@gestaolematec.com.br — Prazo de resposta: até 15 dias úteis." },
    { titulo: "7. Cookies", texto: "Apenas cookies essenciais para manter sessão autenticada. Sem rastreamento publicitário ou analytics de terceiros." },
    { titulo: "8. Transferência internacional", texto: "Dados processados em servidores Google Cloud nos EUA, cobertos pelo Data Processing Agreement do Google, garantindo proteção adequada conforme LGPD." },
    { titulo: "9. Menores de idade", texto: "Plataforma destinada exclusivamente a maiores de 18 anos. Dados de menores identificados serão excluídos imediatamente." },
    { titulo: "10. Alterações", texto: "Atualizações comunicadas por e-mail com 10 dias de antecedência. Uso continuado implica aceitação. Versão atual sempre em gestaolematec.com.br/privacidade." },
    { titulo: "11. Contato e ANPD", texto: "E-mail: contato@gestaolematec.com.br | Responsável: Marcelo Vieira de Andrade | Reclamações também podem ser registradas na ANPD: www.gov.br/anpd" },
  ]

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        <a href="/" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar ao início</a>
        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#f8fafc", margin: "32px 0 8px" }}>Política de Privacidade</h1>
        <p style={{ color: "#64748b", marginBottom: "48px" }}>Última atualização: 16 de maio de 2026 — Versão 2.0</p>
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
