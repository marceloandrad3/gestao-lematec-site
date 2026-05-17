const APK_URL = 'https://github.com/marceloandrad3/gestao-lematec/releases/download/v1.0.7.328-prod-ok/Lematec-Producao-v1.0.7.328.apk';
const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

const passos = [
  { numero: 1, emoji: "⬇️", titulo: "Baixe o APK", dica: "Toque no botão abaixo", cor: "#3b82f6", url: APK_URL },
  { numero: 2, emoji: "📂", titulo: "Abra o arquivo", dica: "Pasta Downloads", cor: "#f97316" },
  { numero: 3, emoji: "🔓", titulo: "Permita instalar", dica: "É seguro!", cor: "#facc15" },
  { numero: 4, emoji: "📲", titulo: "Instale o app", dica: "Menos de 1 min", cor: "#8b5cf6" },
];

const AppAndroid = () => {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 24px 60px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <a href="/app" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar</a>
          <a href={APK_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#22c55e", color: "#0f172a", padding: "8px 16px", borderRadius: "8px", fontWeight: "700", fontSize: "13px", textDecoration: "none" }}>Pular e baixar direto ⬇️</a>
        </div>

        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ fontSize: "48px", marginBottom: "10px" }}>🤖</div>
          <h1 style={{ color: "#f8fafc", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "800", marginBottom: "6px" }}>Instalar no Android</h1>
          <p style={{ color: "#64748b", fontSize: "15px" }}>Simples assim 😄</p>
        </div>

        <div style={{ background: "#1e293b", borderRadius: "14px", padding: "14px 18px", marginBottom: "24px", border: "1px solid #facc1540", display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "20px", flexShrink: 0 }}>⚠️</span>
          <div>
            <p style={{ color: "#f8fafc", fontSize: "13px", fontWeight: "700", marginBottom: "2px" }}>Por que não está na Play Store?</p>
            <p style={{ color: "#64748b", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>Em breve estará disponível. Por enquanto, a instalação manual é 100% segura.</p>
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
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "8px", background: "#22c55e", color: "#0f172a", padding: "6px 12px", borderRadius: "6px", fontWeight: "700", fontSize: "11px", textDecoration: "none" }}>Baixar ⬇️</a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#22c55e", borderRadius: "12px", padding: "16px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
          <div style={{ background: "#ffffff30", borderRadius: "10px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>🚀</div>
          <div>
            <div style={{ color: "#000", fontSize: "10px", fontWeight: "700", marginBottom: "2px" }}>PASSO 5</div>
            <div style={{ color: "#000", fontSize: "13px", fontWeight: "700", marginBottom: "2px" }}>Entre com o Google</div>
            <div style={{ color: "#065f46", fontSize: "11px" }}>Use o mesmo email que você cadastrou</div>
          </div>
        </div>

        <div style={{ background: "#1e293b", borderRadius: "16px", padding: "24px", textAlign: "center", border: "1px solid #facc1520" }}>
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>🎉</div>
          <h2 style={{ color: "#f8fafc", fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>App instalado!</h2>
          <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "16px" }}>Bora trabalhar organizado!</p>
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

export default AppAndroid;
