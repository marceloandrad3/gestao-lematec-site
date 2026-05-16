const Termos = () => {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        <a href="/" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar ao início</a>
        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#f8fafc", margin: "32px 0 8px" }}>Termos de Uso</h1>
        <p style={{ color: "#64748b", marginBottom: "48px" }}>Última atualização: 16 de maio de 2026 — Versão 2.0</p>

        {[
          {
            titulo: "1. Aceitação integral e incondicional",
            texto: "Ao acessar, instalar, cadastrar-se ou utilizar a plataforma Gestão Lematec, em qualquer forma ou modalidade, o USUÁRIO declara ter lido, compreendido e aceitado integralmente estes Termos de Uso, sem qualquer reserva. Caso não concorde com qualquer disposição, o USUÁRIO deve cessar imediatamente o uso da plataforma. A continuidade do uso implica aceitação automática de eventuais atualizações destes Termos."
          },
          {
            titulo: "2. Definições",
            texto: "PLATAFORMA: sistema Gestão Lematec, incluindo aplicativo web, aplicativo Android (APK), Progressive Web App (PWA) e quaisquer interfaces futuras.
PROVEDOR: Lematec LTDA, CNPJ 54.440.545/0001-48, único responsável pela operação.
USUÁRIO: pessoa física ou jurídica que acessa ou utiliza a plataforma.
DADOS: todas as informações inseridas pelo USUÁRIO na plataforma.
TRIAL: período gratuito de 30 dias."
          },
          {
            titulo: "3. Natureza do serviço e ausência de garantias",
            texto: "A plataforma é fornecida NO ESTADO EM QUE SE ENCONTRA (as is) e conforme disponível (as available), sem qualquer garantia expressa, implícita ou legal, incluindo, sem limitação:
— Garantia de funcionamento ininterrupto ou livre de erros
— Garantia de adequação a finalidade específica
— Garantia de compatibilidade com dispositivos ou sistemas do USUÁRIO
— Garantia de que os resultados obtidos serão precisos ou confiáveis
— Garantia de que defeitos serão corrigidos em prazo determinado

O PROVEDOR não garante SLA (Service Level Agreement), tempo de resposta ou disponibilidade mínima."
          },
          {
            titulo: "4. Limitação máxima de responsabilidade",
            texto: "NA MÁXIMA EXTENSÃO PERMITIDA PELA LEGISLAÇÃO APLICÁVEL, O PROVEDOR NÃO SERÁ RESPONSÁVEL POR:

a) Danos diretos, indiretos, incidentais, especiais, consequenciais, punitivos ou exemplares;
b) Perda de lucros, receitas, dados, negócios, oportunidades ou economia esperada;
c) Perda ou corrupção de dados inseridos pelo USUÁRIO;
d) Interrupção de negócios ou atividades profissionais;
e) Falhas de terceiros (Google, Firebase, servidores, provedores de internet);
f) Acesso não autorizado por terceiros aos dados do USUÁRIO;
g) Danos decorrentes de caso fortuito, força maior ou atos de terceiros;
h) Decisões tomadas pelo USUÁRIO com base em informações da plataforma;
i) Qualquer dano decorrente do uso ou impossibilidade de uso da plataforma.

EM NENHUMA HIPÓTESE A RESPONSABILIDADE TOTAL DO PROVEDOR EXCEDERÁ O VALOR PAGO PELO USUÁRIO NO MÊS IMEDIATAMENTE ANTERIOR AO EVENTO DANOSO."
          },
          {
            titulo: "5. Responsabilidades exclusivas do usuário",
            texto: "O USUÁRIO é integral e exclusivamente responsável por:

a) Todos os dados inseridos na plataforma, sua veracidade, legalidade e adequação;
b) Manter sigilo absoluto de suas credenciais de acesso;
c) Qualquer uso da plataforma feito por terceiros com suas credenciais;
d) Cumprir todas as obrigações fiscais, trabalhistas e legais de seu negócio;
e) Realizar backups independentes de seus dados;
f) Garantir que o uso da plataforma não viola direitos de terceiros;
g) Danos causados a terceiros em decorrência do uso da plataforma;
h) Manter dispositivos e conexão de internet adequados ao uso."
          },
          {
            titulo: "6. Acesso administrativo para suporte técnico",
            texto: "O USUÁRIO autoriza expressamente o PROVEDOR a acessar seus dados armazenados na plataforma exclusivamente para:

a) Diagnóstico e resolução de falhas técnicas reportadas;
b) Manutenção, atualização e melhoria da plataforma;
c) Cumprimento de obrigações legais ou ordens judiciais;
d) Verificação de conformidade com estes Termos.

Este acesso é realizado com a mais estrita confidencialidade, não implica cessão ou compartilhamento de dados com terceiros e está em conformidade com a LGPD (Lei 13.709/2018). O USUÁRIO reconhece que este acesso é condição necessária para a prestação do serviço de suporte."
          },
          {
            titulo: "7. Pagamento, trial e suspensão",
            texto: "7.1 TRIAL: O período gratuito de 30 dias inicia-se no primeiro acesso. Não requer cartão de crédito. Findo o trial sem pagamento, o acesso é automaticamente restrito às funcionalidades básicas de consulta.

7.2 ASSINATURA: Após o trial, o valor vigente (disponível na plataforma) é cobrado mensalmente. O PROVEDOR reserva-se o direito de alterar preços mediante aviso prévio de 30 dias.

7.3 INADIMPLÊNCIA: O não pagamento na data de vencimento implica suspensão automática e imediata do acesso completo, sem necessidade de notificação prévia.

7.4 SEM REEMBOLSO: Pagamentos realizados são não reembolsáveis, independentemente do período de uso no mês pago.

7.5 CANCELAMENTO: O USUÁRIO pode cancelar a qualquer momento. O acesso permanece ativo até o fim do período pago. Após o cancelamento, os dados ficam disponíveis por 30 dias para exportação, sendo então excluídos definitivamente."
          },
          {
            titulo: "8. Propriedade intelectual",
            texto: "Todos os direitos sobre a plataforma, incluindo código-fonte, design, interfaces, algoritmos, marcas, logotipos e documentação, são de propriedade exclusiva do PROVEDOR e estão protegidos pela legislação de propriedade intelectual brasileira e internacional.

É expressamente proibido:
a) Copiar, modificar, distribuir ou criar obras derivadas;
b) Fazer engenharia reversa do software;
c) Remover marcas ou avisos de propriedade;
d) Usar a marca Lematec sem autorização expressa."
          },
          {
            titulo: "9. Uso aceitável e condutas proibidas",
            texto: "É expressamente proibido:
a) Usar a plataforma para fins ilegais ou fraudulentos;
b) Inserir dados falsos, enganosos ou de terceiros sem autorização;
c) Tentar burlar sistemas de autenticação ou segurança;
d) Compartilhar acesso com terceiros não autorizados;
e) Usar a plataforma para enviar spam ou comunicações não solicitadas;
f) Sobrecarregar intencionalmente a infraestrutura do serviço;
g) Violar direitos de privacidade de terceiros.

O descumprimento implica suspensão ou encerramento imediato da conta, sem direito a reembolso."
          },
          {
            titulo: "10. Disponibilidade e manutenção",
            texto: "O PROVEDOR envidará esforços razoáveis para manter a plataforma disponível, mas não garante disponibilidade contínua, ininterrupta ou livre de erros. A plataforma pode ser suspensa a qualquer momento para:
a) Manutenção programada ou emergencial;
b) Atualizações de segurança;
c) Casos fortuitos ou de força maior;
d) Determinação judicial ou regulatória.

Interrupções não geram direito a reembolso, compensação ou indenização de qualquer natureza."
          },
          {
            titulo: "11. Modificações da plataforma e dos termos",
            texto: "O PROVEDOR reserva-se o direito de, a qualquer tempo e sem aviso prévio:
a) Modificar, suspender ou encerrar qualquer funcionalidade;
b) Alterar a interface, fluxos e comportamentos do sistema;
c) Encerrar a plataforma definitivamente.

Alterações nestes Termos serão comunicadas por e-mail ou notificação na plataforma. O uso continuado após a comunicação implica aceitação automática."
          },
          {
            titulo: "12. Encerramento da plataforma",
            texto: "O PROVEDOR pode encerrar a plataforma definitivamente a qualquer momento, mediante aviso prévio de 30 dias. Neste caso, o USUÁRIO terá 30 dias para exportar seus dados. Após este prazo, todos os dados serão excluídos permanentemente. O PROVEDOR não será responsável por qualquer dano decorrente do encerramento."
          },
          {
            titulo: "13. Indenização pelo usuário",
            texto: "O USUÁRIO concorda em defender, indenizar e isentar o PROVEDOR, seus representantes e colaboradores de quaisquer reclamações, danos, prejuízos, responsabilidades, custos e despesas (incluindo honorários advocatícios) decorrentes de:
a) Uso da plataforma pelo USUÁRIO;
b) Violação destes Termos;
c) Violação de direitos de terceiros;
d) Dados inseridos pelo USUÁRIO na plataforma."
          },
          {
            titulo: "14. Lei aplicável e foro",
            texto: "Estes Termos são regidos exclusivamente pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de João Pessoa, Estado da Paraíba, para dirimir quaisquer controvérsias, com renúncia expressa a qualquer outro, por mais privilegiado que seja."
          },
          {
            titulo: "15. Disposições gerais",
            texto: "a) Se qualquer cláusula for considerada inválida, as demais permanecem em pleno vigor.
b) A omissão do PROVEDOR em exercer qualquer direito não implica renúncia.
c) Estes Termos constituem o acordo integral entre as partes sobre o objeto aqui tratado.
d) O USUÁRIO declara ter capacidade legal para aceitar estes Termos.
e) Dúvidas: contato@gestaolematec.com.br"
          },
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
