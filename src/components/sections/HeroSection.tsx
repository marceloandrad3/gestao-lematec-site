const SYSTEM_URL = 'https://lematec-producao-771360812262.us-west1.run.app/';
const APK_URL = 'https://github.com/marceloandrad3/gestao-lematec/releases/download/v1.0.7.328-prod-ok/Lematec-Producao-v1.0.7.328.apk';

export function HeroSection() {
  return (
    <section style={{ background: "#0f172a", paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#1e293b", border: "1px solid #334155",
            borderRadius: "999px", padding: "5px 16px", marginBottom: "28px",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ fontSize: "13px", color: "#94a3b8" }}>30 dias grátis · sem cartão · sem burocracia</span>
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 68px)", fontWeight: "800",
            color: "#fff", lineHeight: "1.08", letterSpacing: "-2px",
            marginBottom: "20px",
          }}>
            Chega de caderninho.<br />
            <span style={{ color: "#facc15" }}>Seus clientes no celular,</span><br />seu dinheiro no bolso.
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 19px)", color: "#64748b",
            maxWidth: "500px", margin: "0 auto 36px", lineHeight: "1.65",
          }}>
            Para técnicos, eletricistas, instaladores e prestadores que
            trabalham no campo e querem trabalhar organizado.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
            <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer"
              style={{
                background: "#facc15", color: "#0f172a",
                fontSize: "16px", fontWeight: "800",
                padding: "14px 32px", borderRadius: "10px",
                boxShadow: "0 4px 24px rgba(250,204,21,0.3)",
                textDecoration: "none",
              }}
            >Testar 30 dias grátis →</a>
            <a href="#como-funciona"
              style={{
                background: "#1e293b", color: "#94a3b8",
                fontSize: "15px", fontWeight: "500",
                padding: "14px 24px", borderRadius: "10px",
                border: "1px solid #334155", textDecoration: "none",
              }}
            >▶ Ver como funciona</a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap", marginBottom: "28px" }}>
            <span style={{ fontSize: "13px", color: "#475569" }}>✓ Sem cartão de crédito</span>
            <span style={{ fontSize: "13px", color: "#475569" }}>✓ Cancela quando quiser</span>
            <span style={{ fontSize: "13px", color: "#475569" }}>✓ R$99,99/mês após o trial</span>
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={APK_URL} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#1e293b", color: "#e2e8f0",
                fontSize: "13px", fontWeight: "600",
                padding: "10px 20px", borderRadius: "8px",
                border: "1px solid #334155", textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.341a.75.75 0 0 1 .976 1.138l-.084.072-6 4.5a.75.75 0 0 1-.83.008l-.084-.072-6-4.5a.75.75 0 0 1 .892-1.204l.084.062L12 19.22l5.523-3.879ZM12.75 3a.75.75 0 0 0-1.5 0v12.19l-3.22-3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.22 3.22V3Z"/>
              </svg>
              Baixar APK Android
            </a>
            <a href="/app"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#1e293b", color: "#e2e8f0",
                fontSize: "13px", fontWeight: "600",
                padding: "10px 20px", borderRadius: "8px",
                border: "1px solid #334155", textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z"/>
              </svg>
              iPhone — ver como instalar
            </a>
          </div>

        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "32px", alignItems: "flex-end", flexWrap: "wrap" }}>

          <div style={{ textAlign: "center" }}>
            <div style={{
              background: "#1e293b", border: "6px solid #334155",
              borderRadius: "36px", padding: "12px 8px",
              width: "200px", boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
            }}>
              <div style={{ width: "40px", height: "5px", background: "#0f172a", borderRadius: "999px", margin: "0 auto 10px" }} />
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <img src="/screens/mobile-dashboard.png" alt="Dashboard no celular" style={{ width: "100%" }} />
              </div>
            </div>
            <p style={{ color: "#475569", fontSize: "12px", marginTop: "14px" }}>Visão geral</p>
          </div>

          <div style={{ textAlign: "center", transform: "translateY(-24px)" }}>
            <div style={{
              background: "#1e293b", border: "6px solid #facc15",
              borderRadius: "36px", padding: "12px 8px",
              width: "220px", boxShadow: "0 32px 64px rgba(250,204,21,0.15)",
            }}>
              <div style={{ width: "40px", height: "5px", background: "#0f172a", borderRadius: "999px", margin: "0 auto 10px" }} />
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <img src="/screens/mobile-clientes.png" alt="Clientes no celular" style={{ width: "100%" }} />
              </div>
            </div>
            <p style={{ color: "#facc15", fontSize: "12px", fontWeight: "600", marginTop: "14px" }}>Clientes + GPS + Zap</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              background: "#1e293b", border: "6px solid #334155",
              borderRadius: "36px", padding: "12px 8px",
              width: "200px", boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
            }}>
              <div style={{ width: "40px", height: "5px", background: "#0f172a", borderRadius: "999px", margin: "0 auto 10px" }} />
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <img src="/screens/mobile-financeiro.png" alt="Financeiro no celular" style={{ width: "100%" }} />
              </div>
            </div>
            <p style={{ color: "#475569", fontSize: "12px", marginTop: "14px" }}>Financeiro</p>
          </div>

        </div>
      </div>
    </section>
  );
}
