const APK_URL = 'https://github.com/marceloandrad3/gestao-lematec/releases/download/v1.0.7.328-prod-ok/Lematec-Producao-v1.0.7.328.apk';
const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

const passos = [
  {
    numero: 1,
    emoji: "⬇️",
    titulo: "Baixe o APK",
    descricao: "Toque no botão abaixo para baixar o arquivo do app. O download vai aparecer na barra de notificações do seu celular.",
    dica: "💡 O arquivo se chama Lematec-Producao.apk",
    cor: "#3b82f6",
    url: APK_URL,
    label: "Baixar APK Android",
  },
  {
    numero: 2,
    emoji: "📂",
    titulo: "Abra o arquivo baixado",
    descricao: "Após o download, toque na notificação ou vá em Arquivos no seu celular e abra o arquivo APK.",
    dica: "💡 Geralmente fica na pasta Downloads",
    cor: "#f97316",
  },
  {
    numero: 3,
    emoji: "🔓",
    titulo: "Permita a instalação",
    descricao: "O Android vai perguntar se você quer permitir instalar apps de fontes desconhecidas. Isso é normal e seguro — toque em Permitir.",
    dica: "💡 É seguro! O app é oficial do Gestão Lematec",
    cor: "#facc15",
  },
  {
    numero: 4,
    emoji: "📲",
    titulo: "Instale o app",
    descricao: "Toque em Instalar e aguarde alguns segundos. O app vai aparecer na sua tela inicial!",
    dica: "💡 A instalação é rápida, menos de 1 minuto",
    cor: "#8b5cf6",
  },
  {
    numero: 5,
    emoji: "🚀",
    titulo: "Entre com o Google",
    descricao: "Abra o Gestão Lematec, toque em Entrar com Google e escolha sua conta. Pronto — você já está dentro!",
    dica: "💡 Use o mesmo email que você cadastrou",
    cor: "#22c55e",
  },
];

const AppAndroid = () => {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "60px 24px 80px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", flexWrap: "wrap", gap: "12px" }}>
          <a href="/app" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar</a>
          <a href={APK_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#22c55e", color: "#0f172a", padding: "10px 20px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Pular e baixar direto ⬇️</a>
        </div>

        <div style={{ textAlign: "center", margin: "0 0 48px" }}>
          <div style={{ fontSize: "72px", marginBottom: "16px" }}>🤖</div>
          <div style={{ display: "inline-block", background: "#1e293b", color: "#22c55e", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", padding: "6px 16px", borderRadius: "20px", marginBottom: "20px" }}>INSTALAR NO ANDROID</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", color: "#f8fafc", letterSpacing: "-1px", lineHeight: "1.15", marginBottom: "16px" }}>Simples assim! 😄</h1>
          <p style={{ color: "#64748b", fontSize: "17px", lineHeight: "1.6" }}>Em 5 passos rápidos o Gestão Lematec vai estar instalado no seu Android igual a qualquer app.</p>
        </div>

        <div style={{ background: "#1e293b", borderRadius: "16px", padding: "20px 24px", marginBottom: "32px", border: "1px solid #facc1540", display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <div style={{ fontSize: "28px", flexShrink: 0 }}>⚠️</div>
          <div>
            <p style={{ color: "#f8fafc", fontSize: "15px", fontWeight: "700", marginBottom: "4px" }}>Por que não está na Play Store?</p>
            <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>O app ainda está em fase de lançamento. Em breve estará disponível na Play Store. Por enquanto, a instalação manual é 100% segura e funciona perfeitamente.</p>
          </div>
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
                  <a href={passo.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "14px", background: "#22c55e", color: "#0f172a", padding: "12px 24px", borderRadius: "10px", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>{passo.label} ⬇️</a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#1e293b", borderRadius: "20px", padding: "32px", textAlign: "center", border: "2px solid #facc1520" }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
          <h2 style={{ color: "#f8fafc", fontSize: "22px", fontWeight: "800", marginBottom: "12px" }}>App instalado com sucesso!</h2>
          <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "24px", lineHeight: "1.6" }}>Agora é só abrir o Gestão Lematec e entrar com sua conta Google. Bora trabalhar organizado!</p>
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

export default AppAndroid;
