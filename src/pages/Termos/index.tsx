const Termos = () => {
  const itens = [
    { titulo: "1. Aceitação integral e incondicional", texto: "Ao acessar, instalar ou utilizar a plataforma Gestão Lematec, o USUÁRIO declara ter lido e aceitado integralmente estes Termos. Caso não concorde, deve cessar o uso imediatamente. A continuidade do uso implica aceitação automática de atualizações." },
    { titulo: "2. Definições", texto: "PLATAFORMA: sistema Gestão Lematec, incluindo web, PWA e aplicativo Android (distribuído diretamente ou via Google Play Store). PROVEDOR: Lematec LTDA, CNPJ 54.440.545/0001-48. USUÁRIO: pessoa física ou jurídica que utiliza a plataforma. DADOS: informações inseridas pelo USUÁRIO. TRIAL: período gratuito de 30 dias." },
    { titulo: "3. Natureza do serviço e ausência de garantias", texto: "A plataforma é fornecida NO ESTADO EM QUE SE ENCONTRA (as is), sem qualquer garantia expressa ou implícita, incluindo: funcionamento ininterrupto, adequação a finalidade específica, compatibilidade com dispositivos do USUÁRIO, precisão dos resultados ou correção de defeitos em prazo determinado. O PROVEDOR não garante SLA, tempo de resposta ou disponibilidade mínima." },
    { titulo: "4. Limitação máxima de responsabilidade", texto: "NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI, O PROVEDOR NÃO SERÁ RESPONSÁVEL POR: danos diretos, indiretos, incidentais, especiais ou punitivos; perda de lucros, receitas ou dados; corrupção de dados do USUÁRIO; interrupção de negócios; falhas de terceiros (Google, Firebase, internet); acesso não autorizado por terceiros; caso fortuito ou força maior; decisões tomadas com base na plataforma. EM NENHUMA HIPÓTESE A RESPONSABILIDADE TOTAL DO PROVEDOR EXCEDERÁ O VALOR PAGO PELO USUÁRIO NO MÊS ANTERIOR AO EVENTO." },
    { titulo: "5. Responsabilidades exclusivas do usuário", texto: "O USUÁRIO é integral e exclusivamente responsável por: todos os dados inseridos e sua legalidade; sigilo de suas credenciais; uso feito por terceiros com suas credenciais; obrigações fiscais e trabalhistas do seu negócio; backups independentes dos seus dados; garantir que o uso não viola direitos de terceiros." },
    { titulo: "6. Acesso administrativo para suporte técnico", texto: "O USUÁRIO autoriza expressamente o PROVEDOR a acessar seus dados para: diagnóstico de falhas, manutenção, cumprimento de obrigações legais e verificação de conformidade com estes Termos. Este acesso é realizado com estrita confidencialidade, sem cessão a terceiros, em conformidade com a LGPD." },
    { titulo: "7. Pagamento, trial e suspensão", texto: "TRIAL: 30 dias gratuitos a partir do primeiro acesso, sem cartão. ASSINATURA: valor vigente cobrado mensalmente, podendo ser alterado com aviso de 30 dias. INADIMPLÊNCIA: suspensão automática e imediata sem notificação prévia. REEMBOLSO: garantido o direito de arrependimento em até 7 dias da primeira contratação (art. 49, CDC), com devolução integral; após esse prazo, e nas renovações, pagamentos são não reembolsáveis, sendo o serviço prestado até o fim do período pago. CANCELAMENTO: a qualquer momento, sem multa. Dados disponíveis por 30 dias após cancelamento, depois excluídos definitivamente." },
    { titulo: "8. Propriedade intelectual", texto: "Todos os direitos sobre a plataforma (código, design, interfaces, algoritmos, marcas e logotipos) são propriedade exclusiva do PROVEDOR. É proibido: copiar, modificar ou distribuir o software; fazer engenharia reversa; remover marcas de propriedade; usar a marca Lematec sem autorização expressa." },
    { titulo: "9. Condutas proibidas", texto: "É expressamente proibido: usar a plataforma para fins ilegais ou fraudulentos; inserir dados falsos ou de terceiros sem autorização; burlar sistemas de autenticação ou segurança; compartilhar acesso com terceiros; sobrecarregar intencionalmente a infraestrutura; violar direitos de privacidade de terceiros. Violações implicam suspensão imediata sem reembolso." },
    { titulo: "10. Disponibilidade, manutenção e restabelecimento", texto: "O PROVEDOR não garante disponibilidade contínua nem tempo máximo de resposta. A plataforma pode ser suspensa para manutenção, atualizações, casos fortuitos, falhas de infraestrutura de terceiros ou determinação judicial. Em caso de indisponibilidade, o PROVEDOR envidará esforços razoáveis para restabelecer o serviço, sem compromisso de prazo, garantia contratual, SLA ou obrigação de resultado, podendo inclusive descontinuar a plataforma definitivamente na forma da cláusula 11, especialmente em caso de inviabilidade técnica ou econômica causada por terceiros ou fornecedores de infraestrutura. Interrupções, de qualquer duração, não geram direito a reembolso, abatimento, multa ou indenização de qualquer natureza, ressalvadas as hipóteses legais inafastáveis." },
    { titulo: "11. Modificações e encerramento", texto: "O PROVEDOR pode a qualquer tempo modificar ou encerrar funcionalidades, alterar a interface e encerrar a plataforma definitivamente com aviso de 30 dias. Alterações nos Termos comunicadas por e-mail. Uso continuado implica aceitação." },
    { titulo: "12. Indenização pelo usuário", texto: "O USUÁRIO concorda em indenizar o PROVEDOR por quaisquer reclamações, danos, custos e honorários advocatícios decorrentes de: uso da plataforma; violação destes Termos; violação de direitos de terceiros; dados inseridos na plataforma." },
    { titulo: "13. Lei aplicável e foro", texto: "Estes Termos são regidos pelas leis brasileiras. Foro exclusivo: comarca de João Pessoa, Paraíba, com renúncia a qualquer outro." },
    { titulo: "14. Disposições gerais", texto: "Cláusulas inválidas não afetam as demais. Omissão do PROVEDOR não implica renúncia de direitos. Estes Termos constituem o acordo integral entre as partes. Dúvidas: contato@gestaolematec.com.br" },
  ]

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        <a href="/" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar ao início</a>
        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#f8fafc", margin: "32px 0 8px" }}>Termos de Uso</h1>
        <p style={{ color: "#64748b", marginBottom: "48px" }}>Última atualização: 23 de julho de 2026 — Versão 2.1</p>
        {itens.map((item, i) => (
          <div key={i} style={{ marginBottom: "40px", borderBottom: "1px solid #1e293b", paddingBottom: "40px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#facc15", marginBottom: "12px" }}>{item.titulo}</h2>
            <p style={{ color: "#94a3b8", lineHeight: "1.9", fontSize: "14px" }}>{item.texto}</p>
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
