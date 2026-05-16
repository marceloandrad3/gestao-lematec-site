const Termos = () => {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        <a href="/" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar ao início</a>
        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#f8fafc", margin: "32px 0 8px" }}>Termos de Uso</h1>
        <p style={{ color: "#64748b", marginBottom: "48px" }}>Última atualização: 16 de maio de 2026 — Versão 2.0</p>
        {[
          { titulo: "1. Aceitação integral e incondicional", texto: "Ao acessar, instalar, cadastrar-se ou utilizar a plataforma Gestão Lematec, em qualquer forma ou modalidade, o USUÁRIO declara ter lido, compreendido e aceitado integralmente estes Termos de Uso, sem qualquer reserva. Caso não concorde com qualquer disposição, o USUÁRIO deve cessar imediatamente o uso da plataforma. A continuidade do uso implica aceitação automática de eventuais atualizações destes Termos." },
          { titulo: "2. Definições", texto: "PLATAFORMA: sistema Gestão Lematec, incluindo aplicativo web, aplicativo Android (APK), Progressive Web App (PWA) e quaisquer interfaces futuras.
PROVEDOR: Lematec LTDA, CNPJ 54.440.545/0001-48, único responsável pela operação.
USUÁRIO: pessoa física ou jurídica que acessa ou utiliza a plataforma.
DADOS: todas as informações inseridas pelo USUÁRIO na plataforma.
TRIAL: período gratuito de 30 dias." },
          { titulo: "3. Natureza do serviço e ausência de garantias", texto: "A plataforma é fornecida NO ESTADO EM QUE SE ENCONTRA (as is) e conforme disponível (as available), sem qualquer garantia expressa, implícita ou legal, incluindo:
— Garantia de funcionamento ininterrupto ou livre de erros
— Garantia de adequação a finalidade específica
— Garantia de compatibilidade com dispositivos do USUÁRIO
— Garantia de que resultados serão precisos ou confiáveis
— Garantia de que defeitos serão corrigidos em prazo determinado

O PROVEDOR não garante SLA, tempo de resposta ou disponibilidade mínima." },
          { titulo: "4. Limitação máxima de responsabilidade", texto: "NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI, O PROVEDOR NÃO SERÁ RESPONSÁVEL POR:

a) Danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos
b) Perda de lucros, receitas, dados, negócios ou oportunidades
c) Perda ou corrupção de dados inseridos pelo USUÁRIO
d) Interrupção de negócios ou atividades profissionais
e) Falhas de terceiros (Google, Firebase, provedores de internet)
f) Acesso não autorizado por terceiros aos dados do USUÁRIO
g) Danos por caso fortuito ou força maior
h) Decisões tomadas com base em informações da plataforma

EM NENHUMA HIPÓTESE A RESPONSABILIDADE TOTAL DO PROVEDOR EXCEDERÁ O VALOR PAGO PELO USUÁRIO NO MÊS ANTERIOR AO EVENTO." },
          { titulo: "5. Responsabilidades exclusivas do usuário", texto: "O USUÁRIO é integral e exclusivamente responsável por:

a) Todos os dados inseridos, sua veracidade e legalidade
b) Manter sigilo absoluto de suas credenciais
c) Qualquer uso feito por terceiros com suas credenciais
d) Cumprir obrigações fiscais, trabalhistas e legais do seu negócio
e) Realizar backups independentes de seus dados
f) Garantir que o uso não viola direitos de terceiros
g) Danos causados a terceiros em decorrência do uso" },
          { titulo: "6. Acesso administrativo para suporte técnico", texto: "O USUÁRIO autoriza expressamente o PROVEDOR a acessar seus dados exclusivamente para:

a) Diagnóstico e resolução de falhas técnicas reportadas
b) Manutenção, atualização e melhoria da plataforma
c) Cumprimento de obrigações legais ou ordens judiciais
d) Verificação de conformidade com estes Termos

Este acesso é realizado com estrita confidencialidade, não implica cessão de dados a terceiros e está em conformidade com a LGPD." },
          { titulo: "7. Pagamento, trial e suspensão", texto: "7.1 TRIAL: 30 dias gratuitos a partir do primeiro acesso. Sem cartão.

7.2 ASSINATURA: Valor vigente cobrado mensalmente. Preços podem ser alterados com aviso de 30 dias.

7.3 INADIMPLÊNCIA: Não pagamento implica suspensão automática e imediata, sem notificação prévia.

7.4 SEM REEMBOLSO: Pagamentos realizados são não reembolsáveis, independentemente do uso.

7.5 CANCELAMENTO: A qualquer momento, sem multa. Acesso ativo até fim do período pago. Dados disponíveis por 30 dias após cancelamento, então excluídos definitivamente." },
          { titulo: "8. Propriedade intelectual", texto: "Todos os direitos sobre a plataforma — código, design, interfaces, algoritmos, marcas e logotipos — são propriedade exclusiva do PROVEDOR.

É proibido:
a) Copiar, modificar ou distribuir o software
b) Fazer engenharia reversa
c) Remover marcas ou avisos de propriedade
d) Usar a marca Lematec sem autorização expressa" },
          { titulo: "9. Condutas proibidas", texto: "É expressamente proibido:
a) Usar a plataforma para fins ilegais ou fraudulentos
b) Inserir dados falsos ou de terceiros sem autorização
c) Tentar burlar sistemas de autenticação ou segurança
d) Compartilhar acesso com terceiros não autorizados
e) Sobrecarregar intencionalmente a infraestrutura
f) Violar direitos de privacidade de terceiros

Violações implicam suspensão imediata sem reembolso." },
          { titulo: "10. Disponibilidade e manutenção", texto: "O PROVEDOR não garante disponibilidade contínua. A plataforma pode ser suspensa para manutenção, atualizações, casos fortuitos ou determinação judicial. Interrupções não geram direito a reembolso ou indenização de qualquer natureza." },
          { titulo: "11. Modificações e encerramento", texto: "O PROVEDOR pode a qualquer tempo:
a) Modificar ou encerrar funcionalidades
b) Alterar interface e comportamentos
c) Encerrar a plataforma definitivamente com aviso de 30 dias

Alterações nos Termos comunicadas por e-mail. Uso continuado implica aceitação." },
          { titulo: "12. Indenização pelo usuário", texto: "O USUÁRIO concorda em indenizar o PROVEDOR por quaisquer reclamações, danos, custos e honorários advocatícios decorrentes de:
a) Uso da plataforma
b) Violação destes Termos
c) Violação de direitos de terceiros
d) Dados inseridos na plataforma" },
          { titulo: "13. Lei aplicável e foro", texto: "Estes Termos são regidos pelas leis brasileiras. Foro exclusivo: comarca de João Pessoa, Paraíba, com renúncia a qualquer outro." },
          { titulo: "14. Disposições gerais", texto: "a) Cláusulas inválidas não afetam as demais
b) Omissão do PROVEDOR não implica renúncia de direitos
c) Estes Termos constituem o acordo integral entre as partes
d) Dúvidas: contato@gestaolematec.com.br" },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: "40px", borderBottom: "1px solid #1e293b", paddingBottom: "40px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#facc15", marginBottom: "12px" }}>{item.titulo}</h2>
            <p style={{ color: "#94a3b8", lineHeight: "1.9", whiteSpace: "pre-line", fontSize: "14px" }}>{item.texto}</p>
          </div>
        ))}
        <div style={{ background: "#1e293b", borderRadius: "12px", padding: "24px", textAlign: "center", marginTop: "40px" }}>
          <p style={{ color: "#475569", fontSize: "13px" }}>Dúvidas sobre estes termos?</p>
          <a href="mailto:contato@gestaolematec.com.br" style={{ color: "#facc15", fontWeight: "600" }}>contato@gestaolematec.com.br</a>
        </div>
      </div>
    </div>
  )
}
export default Termos
