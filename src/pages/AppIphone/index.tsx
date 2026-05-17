const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

const passos = [
  { numero: 1, emoji: "📱", titulo: "Abra o Safari", dica: "Ícone de bússola azul", cor: "#3b82f6" },
  { numero: 2, emoji: "🔗", titulo: "Acesse o sistema", dica: "gestaolematec.com.br", cor: "#facc15", url: "https://gestaolematec.com.br" },
  { numero: 3, emoji: "⬆️", titulo: "Toque em Compartilhar", dica: "Barra inferior do Safari", cor: "#8b5cf6" },
  { numero: 4, emoji: "➕", titulo: "Adicionar à Tela de Início", dica: "Role a lista para baixo", cor: "#22c55e" },
];

const AppIphone = () => {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 24px 60px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <a href="/app" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar</a>
          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#94a3b8", color: "#0f172a", padding: "8px 16px", borderRadius: "8px", fontWeight: "700", fontSize: "13px", textDecoration: "none" }}>Pular e acessar direto →</a>
        </div>

        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ fontSize: "48px", marginBottom: "10px" }}>🍎</div>
          <h1 style={{ color: "#f8fafc", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "800", marginBottom: "6px" }}>Instalar no iPhone</h1>
          <p style={{ color: "#64748b", fontSize: "15px" }}>É mais fácil do que parece! 😄</p>
        </div>

        <div style={{ background: "#1e293b", borderRadius: "14px", padding: "14px 18px", marginBottom: "24px", border: "1px solid #3b82f640", display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "20px", flexShrink: 0 }}>ℹ️</span>
          <div>
            <p style={{ color: "#f8fafc", fontSize: "13px", fontWeight: "700", marginBottom: "2px" }}>Precisa ser o Safari!</p>
            <p style={{ color: "#64748b", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>No iPhone, só o Safari permite adicionar à tela de início. Chrome e outros navegadores não funcionam.</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
          {passos.map((p) => (
            <div key={p.numero} style={{ background: "#1e293b", borderRadius: "12px", padding: "16px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ background: p.cor + "20", border: "2px solid " + p.cor, borderRadius: "10px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>{p.emoji}</div>
              <div>
                <div style={{ color: p.cor, fontSize: "10px", fontWeight: "700", marginBottom: "2px" }}>PASSO {p.numero}</div>
                <div style={{ color: "#f8fafc", fontSize: "13px", fontWeight: "700", marginBottom: "2px" }}>{p.titulo}</div>
                <div style={{ color: "#64748b", fontSize: "11px" }}>{p.dica}</div>
                {p.url && (
                  <div style={{ marginTop: "8px", background: "#0f172a", borderRadius: "6px", padding: "6px 10px", fontSize: "11px", color: "#facc15", fontWeight: "700" }}>📋 gestaolematec.com.br</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#facc15", borderRadius: "12px", padding: "16px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
          <div style={{ background: "#ffffff30", borderRadius: "10px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>✅</div>
          <div>
            <div style={{ color: "#0f172a", fontSize: "10px", fontWeight: "700", marginBottom: "2px" }}>PASSO 5</div>
            <div style={{ color: "#0f172a", fontSize: "13px", fontWeight: "700", marginBottom: "2px" }}>Confirme e pronto!</div>
            <div style={{ color: "#78350f", fontSize: "11px" }}>Toque em Adicionar no canto superior direito</div>
          </div>
        </div>

        <div style={{ background: "#1e293b", borderRadius: "16px", padding: "24px", textAlign: "center", border: "1px solid #facc1520" }}>
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>🎉</div>
          <h2 style={{ color: "#f8fafc", fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>App instalado!</h2>
          <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "16px" }}>Agora é só abrir e entrar com o Google.</p>
          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#facc15", color: "#0f172a", padding: "12px 28px", borderRadius: "10px", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>Abrir o Gestão Lematec →</a>
        </div>

        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <p style={{ color: "#475569", fontSize: "13px", marginBottom: "6px" }}>Dúvidas? Fale com a gente.</p>
          <a href="mailto:contato@gestaolematec.com.br" style={{ color: "#facc15", fontSize: "14px", fontWeight: "600" }}>contato@gestaolematec.com.br</a>
        </div>

      </div>
    </div>
  );
};

export default AppIphone;
