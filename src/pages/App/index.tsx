import { useNavigate } from 'react-router-dom';
const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';

const opcoes = [
  {
    icone: "🌐",
    titulo: "Pelo navegador",
    subtitulo: "Funciona em qualquer celular ou computador",
    descricao: "Acesse direto pelo navegador, sem instalar nada. Chrome, Safari, Firefox — funciona em todos.",
    destaque: true,
    badge: "Recomendado",
    badgeColor: "#3b82f6",
    passos: ["Abra o link no navegador", "Entre com sua conta Google", "Comece a usar na hora"],
    botao: { label: "Acessar agora", url: SYSTEM_URL, externo: true },
  },
  {
    icone: "🤖",
    titulo: "App Android",
    subtitulo: "Instale no seu celular Android",
    descricao: "Baixe o APK e instale direto no seu Android. Simples e seguro.",
    destaque: false,
    badge: "Android",
    badgeColor: "#22c55e",
    passos: ["Baixe o APK", "Abra o arquivo baixado", "Permita instalar e pronto"],
    botao: { label: "Baixar APK Android", url: "/app/android", externo: false },
  },
  {
    icone: "🍎",
    titulo: "iPhone (iOS)",
    subtitulo: "Adicione na tela inicial pelo Safari",
    descricao: "No iPhone, adicione o app na tela inicial pelo Safari. Funciona igual a um app instalado.",
    destaque: false,
    badge: "iPhone",
    badgeColor: "#94a3b8",
    passos: ["Abra no Safari", "Toque em Compartilhar", "Adicionar à Tela de Início"],
    botao: { label: "Instalar no iPhone", url: "/app/iphone", externo: false },
  },
];

const App = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "80px 24px" }}>

        <a href="/" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px" }}>← Voltar ao início</a>

        <div style={{ textAlign: "center", margin: "48px 0 64px" }}>
          <div style={{ display: "inline-block", background: "#1e293b", color: "#3b82f6", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", padding: "6px 16px", borderRadius: "20px", marginBottom: "24px" }}>INSTALAR O APP</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "800", color: "#f8fafc", letterSpacing: "-2px", lineHeight: "1.1", marginBottom: "16px" }}>Escolha como acessar</h1>
          <p style={{ color: "#64748b", fontSize: "18px", maxWidth: "520px", margin: "0 auto" }}>Funciona no celular, tablet e computador.<br />Sem complicação.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "80px" }}>
          {opcoes.map((op, i) => (
            <div key={i} style={{ background: "#1e293b", border: op.destaque ? "2px solid #facc15" : "1px solid #334155", borderRadius: "20px", padding: "32px", position: "relative" }}>
              {op.destaque && (
                <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#facc15", color: "#0f172a", fontSize: "11px", fontWeight: "800", letterSpacing: "1px", padding: "4px 16px", borderRadius: "20px" }}>RECOMENDADO</div>
              )}
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>{op.icone}</div>
              <div style={{ display: "inline-block", background: op.badgeColor + "20", color: op.badgeColor, fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "10px", marginBottom: "12px" }}>{op.badge}</div>
              <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#f8fafc", marginBottom: "8px" }}>{op.titulo}</h2>
              <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "24px" }}>{op.subtitulo}</p>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7", marginBottom: "28px" }}>{op.descricao}</p>
              <div style={{ marginBottom: "28px" }}>
                {op.passos.map((passo, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                    <div style={{ minWidth: "22px", height: "22px", borderRadius: "50%", background: "#0f172a", color: "#facc15", fontSize: "11px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center" }}>{j + 1}</div>
                    <span style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5" }}>{passo}</span>
                  </div>
                ))}
              </div>
              <a href={op.botao.url} onClick={(e) => { if (!op.botao.externo) { e.preventDefault(); navigate(op.botao.url); } }} target={op.botao.externo ? "_blank" : "_self"} rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: op.destaque ? "#facc15" : "#0f172a", color: op.destaque ? "#0f172a" : "#e2e8f0", border: op.destaque ? "none" : "1px solid #334155", padding: "14px 24px", borderRadius: "12px", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>{op.botao.label}</a>
            </div>
          ))}
        </div>

        <div style={{ background: "#1e293b", borderRadius: "16px", padding: "32px", textAlign: "center" }}>
          <p style={{ color: "#475569", fontSize: "14px", marginBottom: "8px" }}>Dúvidas? Fale com a gente.</p>
          <a href="mailto:contato@gestaolematec.com.br" style={{ color: "#facc15", fontSize: "15px", fontWeight: "600" }}>contato@gestaolematec.com.br</a>
        </div>

      </div>
    </div>
  );
};

export default App;
