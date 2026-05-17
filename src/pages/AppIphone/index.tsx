const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

const passos = [
  {
    numero: 1,
    emoji: "📱",
    titulo: "Abra o Safari",
    descricao: "No seu iPhone, abra o Safari. Não funciona no Chrome ou outro navegador — tem que ser o Safari mesmo!",
    dica: "💡 O Safari é aquele ícone de bússola azul",
    cor: "#3b82f6",
  },
  {
    numero: 2,
    emoji: "🔗",
    titulo: "Acesse o sistema",
    descricao: "Digite o endereço na barra do Safari ou toque no botão abaixo para abrir direto.",
    dica: "💡 gestaolematec.com.br",
    cor: "#facc15",
    url: "https://gestaolematec.com.br",
    label: "Abrir no Safari →",
  },
  {
    numero: 3,
    emoji: "⬆️",
    titulo: "Toque em Compartilhar",
    descricao: "Na parte de baixo do Safari, toque no ícone de compartilhar — aquele quadradinho com uma setinha pra cima.",
    dica: "💡 Fica na barra inferior do Safari",
    cor: "#8b5cf6",
  },
  {
    numero: 4,
    emoji: "➕",
    titulo: "Adicionar à Tela de Início",
    descricao: "Role a lista que aparecer e toque em Adicionar à Tela de Início. Vai aparecer um ícone igual a um app!",
    dica: "💡 Se não aparecer, role a lista para baixo",
    cor: "#22c55e",
  },
  {
    numero: 5,
    emoji: "✅",
    titulo: "Confirme e pronto!",
    descricao: "Toque em Adicionar no canto superior direito. O Gestão Lematec vai aparecer na sua tela igual a qualquer outro app!",
    dica: "💡 Agora é só abrir e entrar com o Google",
    cor: "#facc15",
  },
];

const AppIphone = () => {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "60px 24px 80px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", flexWrap: "wrap", gap: "12px" }}>
          <a href="/app" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar</a>
          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#94a3b8", color: "#0f172a", padding: "10px 20px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Pular e acessar direto →</a>
        </div>

        <div style={{ textAlign: "center", margin: "0 0 48px" }}>
          <div style={{ fontSize: "72px", marginBottom: "16px" }}>🍎</div>
          <div style={{ display: "inline-block", background: "#1e293b", color: "#94a3b8", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", padding: "6px 16px", borderRadius: "20px", marginBottom: "20px" }}>INSTALAR NO IPHONE</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", color: "#f8fafc", letterSpacing: "-1px", lineHeight: "1.15", marginBottom: "16px" }}>É mais fácil do que parece! 😄</h1>
          <p style={{ color: "#64748b", fontSize: "17px", lineHeight: "1.6" }}>Em 5 passos simples o Gestão Lematec vai estar na tela do seu iPhone igual a qualquer app da loja.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "56px" }}>
          {passos.map((passo) => (
            <div key={passo.numero} style={{ background: "#1e293b", borderRadius: "20px", padding: "28px", border: "1px solid #334155", display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: passo.cor + "20", border: "2px solid " + passo.cor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>{passo.emoji}</div>
                <div style={{ width: "2px", height: passo.numero < passos.length ? "32px" : "0px", background: "#334155" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ background: passo.cor, color: "#0f172a", fontSize: "11px", fontWeight: "800", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>{passo.numero}</span>
                  <h3 style={{ color: "#f8fafc", fontSize: "18px", fontWeight: "800", margin: 0 }}>{passo.titulo}</h3>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.65", marginBottom: "12px" }}>{passo.descricao}</p>
                <div style={{ background: "#0f172a", borderRadius: "10px", padding: "10px 14px", fontSize: "13px", color: "#64748b" }}>{passo.dica}</div>
                {passo.url && (
                  <a href={passo.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "14px", background: "#facc15", color: "#0f172a", padding: "10px 20px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>{passo.label}</a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#1e293b", borderRadius: "20px", padding: "32px", textAlign: "center", border: "2px solid #facc1520" }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
          <h2 style={{ color: "#f8fafc", fontSize: "22px", fontWeight: "800", marginBottom: "12px" }}>Pronto! App instalado!</h2>
          <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "24px", lineHeight: "1.6" }}>Agora é só abrir o Gestão Lematec na sua tela e entrar com sua conta Google.</p>
          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#facc15", color: "#0f172a", padding: "14px 32px", borderRadius: "12px", fontWeight: "800", fontSize: "16px", textDecoration: "none" }}>Abrir o Gestão Lematec →</a>
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <p style={{ color: "#475569", fontSize: "14px", marginBottom: "8px" }}>Dúvidas? Fale com a gente.</p>
          <a href="mailto:contato@gestaolematec.com.br" style={{ color: "#facc15", fontSize: "15px", fontWeight: "600" }}>contato@gestaolematec.com.br</a>
        </div>

      </div>
    </div>
  );
};

export default AppIphone;
