const Privacidade = () => {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        <a href="/" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar ao início</a>
        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#f8fafc", margin: "32px 0 8px" }}>Política de Privacidade</h1>
        <p style={{ color: "#64748b", marginBottom: "48px" }}>Última atualização: 16 de maio de 2026 — Versão 2.0</p>

        {[
          {
            titulo: "1. Identificação do controlador",
            texto: "Controlador dos dados: Lematec LTDA
CNPJ: 54.440.545/0001-48
Endereço: Avenida Guarabira, 932, CXPST 215, João Pessoa – PB, CEP 58038-142
E-mail do DPO: contato@gestaolematec.com.br

Esta Política é aplicável a todos os usuários da plataforma Gestão Lematec e está em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)."
          },
          {
            titulo: "2. Dados coletados e finalidades",
            texto: "2.1 DADOS DE AUTENTICAÇÃO (Google OAuth)
Coletamos nome, e-mail e foto de perfil fornecidos pelo Google. Base legal: execução de contrato (art. 7º, V, LGPD). Finalidade: autenticação e identificação do usuário.

2.2 DADOS INSERIDOS PELO USUÁRIO
Informações de clientes, orçamentos, serviços, valores e registros financeiros inseridos voluntariamente. Base legal: execução de contrato. O USUÁRIO é responsável pela legalidade desses dados.

2.3 DADOS DE USO
Logs de acesso, endereço IP, dispositivo, navegador e comportamento de uso. Base legal: legítimo interesse (art. 7º, IX, LGPD). Finalidade: segurança, diagnóstico técnico e melhoria do serviço.

2.4 DADOS NÃO COLETADOS
Não coletamos dados de pagamento (processados pelo Mercado Pago). Não coletamos dados sensíveis conforme art. 5º, II, LGPD."
          },
          {
            titulo: "3. Acesso administrativo e suporte técnico",
            texto: "O USUÁRIO autoriza expressamente o acesso do PROVEDOR aos seus dados para fins de suporte técnico, manutenção e diagnóstico de falhas, conforme declarado nos Termos de Uso. Este acesso é realizado com estrita confidencialidade, por pessoal autorizado, e não implica cessão ou uso comercial dos dados. Registros de acesso administrativo são mantidos por razões de auditoria e segurança."
          },
          {
            titulo: "4. Compartilhamento de dados",
            texto: "Seus dados são compartilhados apenas com:

a) Google LLC — autenticação OAuth e infraestrutura Firebase/Cloud Run (processador de dados)
b) Mercado Pago — processamento de pagamentos (dados financeiros diretamente, não repassamos)
c) Autoridades competentes — quando exigido por lei, ordem judicial ou regulatória

NÃO vendemos, alugamos, cedemos ou compartilhamos seus dados com terceiros para fins comerciais, publicitários ou de marketing."
          },
          {
            titulo: "5. Armazenamento, segurança e retenção",
            texto: "5.1 LOCALIZAÇÃO: Dados armazenados na infraestrutura Google Cloud (Firebase Firestore e Cloud Run), com servidores nos EUA, cobertos pelo Data Processing Agreement do Google.

5.2 SEGURANÇA: Utilizamos criptografia TLS em trânsito e criptografia em repouso fornecida pelo Google Cloud. Acesso restrito por autenticação e regras de segurança do Firestore.

5.3 RETENÇÃO: Dados mantidos enquanto a conta estiver ativa. Após cancelamento, retidos por 30 dias para possível exportação e então excluídos definitivamente. Logs de acesso retidos por até 90 dias.

5.4 LIMITAÇÃO: Nenhum sistema é 100% seguro. O PROVEDOR não pode garantir segurança absoluta e não se responsabiliza por acessos não autorizados por terceiros fora do seu controle."
          },
          {
            titulo: "6. Direitos do titular (LGPD)",
            texto: "Conforme a LGPD, você tem direito a:

a) Confirmação da existência de tratamento
b) Acesso aos dados
c) Correção de dados incompletos ou inexatos
d) Anonimização, bloqueio ou eliminação de dados desnecessários
e) Portabilidade dos dados
f) Eliminação dos dados tratados com consentimento
g) Informação sobre compartilhamento
h) Revogação do consentimento

Para exercer seus direitos: contato@gestaolematec.com.br
Prazo de resposta: até 15 dias úteis."
          },
          {
            titulo: "7. Cookies e tecnologias similares",
            texto: "Utilizamos cookies estritamente necessários para:
a) Manter a sessão autenticada
b) Preferências de uso

NÃO utilizamos cookies de rastreamento, publicidade ou analytics de terceiros. Não há compartilhamento de dados de navegação com redes de publicidade."
          },
          {
            titulo: "8. Transferência internacional de dados",
            texto: "Seus dados são processados em servidores do Google Cloud localizados nos Estados Unidos. Esta transferência é realizada com base nas cláusulas contratuais padrão e no Data Processing Agreement do Google, garantindo nível adequado de proteção conforme exigido pela LGPD."
          },
          {
            titulo: "9. Base legal do tratamento",
            texto: "Todo tratamento de dados realizado pelo PROVEDOR possui base legal conforme a LGPD:
— Execução de contrato (art. 7º, V): autenticação e prestação do serviço
— Legítimo interesse (art. 7º, IX): segurança, diagnóstico e melhoria
— Cumprimento de obrigação legal (art. 7º, II): quando exigido por lei
— Consentimento (art. 7º, I): para dados opcionais e comunicações"
          },
          {
            titulo: "10. Menores de idade",
            texto: "A plataforma Gestão Lematec é destinada exclusivamente a pessoas maiores de 18 anos ou emancipadas. Não coletamos intencionalmente dados de menores. Se identificarmos dados de menores, procederemos à exclusão imediata."
          },
          {
            titulo: "11. Alterações desta política",
            texto: "Esta Política pode ser atualizada a qualquer momento. Alterações relevantes serão comunicadas por e-mail com antecedência mínima de 10 dias. O uso continuado após a vigência das alterações implica aceitação. A versão atual sempre estará disponível em gestaolematec.com.br/privacidade."
          },
          {
            titulo: "12. Contato e DPO",
            texto: "Para exercer seus direitos, esclarecer dúvidas ou registrar reclamações:

E-mail: contato@gestaolematec.com.br
Responsável: Marcelo Vieira de Andrade
Endereço: Avenida Guarabira, 932, CXPST 215, João Pessoa – PB

Você também pode registrar reclamações junto à Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd"
          },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: "40px", borderBottom: "1px solid #1e293b", paddingBottom: "40px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#facc15", marginBottom: "12px" }}>{item.titulo}</h2>
            <p style={{ color: "#94a3b8", lineHeight: "1.9", whiteSpace: "pre-line", fontSize: "14px" }}>{item.texto}</p>
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
