const BASE = "/trion-intelligence/logos";

const COLORS = {
  primary: { name: "Azul Principal", hex: "#1565c0", role: "Cor dominante" },
  primaryDark: { name: "Azul Dark", hex: "#0d47a1", role: "Gradientes e hover" },
  primaryDeeper: { name: "Azul Deeper", hex: "#0a3470", role: "Hero e profundidade" },
  accent: { name: "Dourado", hex: "#e6b25d", role: "Premium e credenciais" },
  accentDark: { name: "Dourado Dark", hex: "#c48d2a", role: "Hover e emphasis" },
  accentLight: { name: "Dourado Light", hex: "#fef3db", role: "Backgrounds sutis" },
  white: { name: "Branco", hex: "#ffffff", role: "Fundo principal" },
  blueLight: { name: "Azul Light", hex: "#e3f0ff", role: "Secoes alternadas" },
  textPrimary: { name: "Texto", hex: "#111827", role: "Body text" },
  textSecondary: { name: "Texto Sec.", hex: "#4b5563", role: "Legendas" },
};

const LOGOS = [
  { src: `${BASE}/logo-principal.png`, label: "Logo Principal" },
  { src: `${BASE}/logo-variacao-1.png`, label: "Variacao 1" },
  { src: `${BASE}/logo-variacao-2.png`, label: "Variacao 2" },
  { src: `${BASE}/logo-variacao-3.png`, label: "Variacao 3" },
  { src: `${BASE}/logo-variacao-4.png`, label: "Variacao 4" },
  { src: `${BASE}/logo-variacao-5.png`, label: "Variacao 5" },
  { src: `${BASE}/logo-variacao-6.png`, label: "Variacao 6" },
  { src: `${BASE}/logo-variacao-7.png`, label: "Variacao 7" },
  { src: `${BASE}/logo-variacao-8.png`, label: "Variacao 8" },
  { src: `${BASE}/logo-variacao-9.png`, label: "Variacao 9" },
  { src: `${BASE}/logo-variacao-10.png`, label: "Variacao 10" },
];

function Section({ id, children, bg = "white" }: { id: string; children: React.ReactNode; bg?: string }) {
  const bgColor = bg === "blue" ? "#e3f0ff" : bg === "dark" ? "#0a3470" : "#ffffff";
  return (
    <section id={id} style={{ background: bgColor, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: "#1565c0", marginBottom: 8 }}>
        {children}
      </h2>
      {sub && <p style={{ color: "#4b5563", fontSize: 16 }}>{sub}</p>}
      <div style={{ height: 3, width: 80, background: "linear-gradient(90deg, #e6b25d, #c48d2a)", borderRadius: 2, margin: "16px auto 0" }} />
    </div>
  );
}

function ColorSwatch({ color }: { color: { name: string; hex: string; role: string } }) {
  const isLight = ["#ffffff", "#e3f0ff", "#fef3db", "#f3f4f6"].includes(color.hex);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{ width: 80, height: 80, borderRadius: 12, background: color.hex, border: isLight ? "2px solid #e5e7eb" : "none", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }} />
      <span style={{ fontWeight: 600, fontSize: 12 }}>{color.name}</span>
      <code style={{ fontSize: 11, color: "#4b5563", background: "#f3f4f6", padding: "2px 8px", borderRadius: 4 }}>{color.hex}</code>
      <span style={{ fontSize: 10, color: "#9ca3af" }}>{color.role}</span>
    </div>
  );
}

export function MIVPage() {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <header style={{ background: "linear-gradient(135deg, #1565c0 0%, #0d47a1 50%, #0a3470 100%)", padding: "100px 24px 80px", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M26 0h8v60h-8zM0 26h60v8H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(230,178,93,0.15)", border: "1px solid rgba(230,178,93,0.3)", padding: "6px 16px", borderRadius: 6, marginBottom: 24 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#e6b25d" }}>MANUAL DE IDENTIDADE VISUAL</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 800, marginBottom: 8, lineHeight: 1.1 }}>Dr. Rafael Rocha</h1>
          <p style={{ fontSize: 20, fontWeight: 500, opacity: 0.9, marginBottom: 24 }}>Medico da Dor | Ortopedista</p>
          <p style={{ fontSize: 16, opacity: 0.7, maxWidth: 500, margin: "0 auto" }}>CRM/DF 31.365 | RQE 22.589<br />5.000+ procedimentos | 3.000+ pacientes | 8+ anos</p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#logos" style={{ background: "#e6b25d", color: "#111", padding: "12px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Ver Logos</a>
            <a href="#cores" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 500, fontSize: 14, textDecoration: "none" }}>Paleta</a>
            <a href="https://drive.google.com/drive/folders/1-HtS34JlRVgoauSqMGr3zzDbqUra-wn1" target="_blank" rel="noopener" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 500, fontSize: 14, textDecoration: "none" }}>Drive</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #f3f4f6", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          {["Essencia", "Logos", "Cores", "Tipografia", "Componentes", "Aplicacoes"].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} style={{ color: "#1565c0", fontWeight: 500, fontSize: 14, textDecoration: "none" }}>{s}</a>
          ))}
        </div>
      </nav>

      {/* Essencia */}
      <Section id="essencia">
        <SectionTitle sub="Medico da Dor — marca pessoal de autoridade">Essencia</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            { t: "Proposito", d: "Eliminar dor cronica e devolver movimento com procedimentos minimamente invasivos guiados por ultrassom.", i: "🎯" },
            { t: "Autoridade", d: "CRM/DF 31.365 | RQE 22.589 | Fellow Dor UFG | 500+ cirurgias | 5.000+ procedimentos.", i: "🏆" },
            { t: "Diferencial", d: "Integracao com Santa Isabel (46 anos). Reabilitacao completa pos-procedimento.", i: "⚡" },
            { t: "Posicionamento", d: "Premium mas acessivel. Convenios. Medico da Dor #1 Brasilia.", i: "📍" },
          ].map(p => (
            <div key={p.t} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{p.i}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1565c0", marginBottom: 6 }}>{p.t}</h3>
              <p style={{ color: "#4b5563", lineHeight: 1.6, fontSize: 14 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Logos */}
      <Section id="logos" bg="blue">
        <SectionTitle sub="Variacoes para todas as aplicacoes">Logotipos</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {LOGOS.map((logo, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <img src={logo.src} alt={logo.label} style={{ maxWidth: "100%", height: 90, objectFit: "contain" }} />
              <span style={{ fontSize: 11, color: "#4b5563" }}>{logo.label}</span>
            </div>
          ))}
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1565c0", marginTop: 32, marginBottom: 12, textAlign: "center" }}>Sobre fundo azul</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {LOGOS.slice(0, 4).map((logo, i) => (
            <div key={i} style={{ background: "linear-gradient(135deg, #1565c0, #0a3470)", borderRadius: 10, padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <img src={logo.src} alt={logo.label} style={{ maxWidth: "100%", height: 90, objectFit: "contain", filter: "brightness(1.2)" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{logo.label}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <a href="https://drive.google.com/drive/folders/1-HtS34JlRVgoauSqMGr3zzDbqUra-wn1" target="_blank" rel="noopener" style={{ display: "inline-block", background: "#1565c0", color: "#fff", padding: "10px 24px", borderRadius: 8, fontWeight: 600, fontSize: 13, textDecoration: "none" }}>Download (Drive)</a>
        </div>
      </Section>

      {/* Cores */}
      <Section id="cores">
        <SectionTitle sub="Azul (autoridade medica) + Dourado (premium)">Paleta de Cores</SectionTitle>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          {Object.values(COLORS).map(c => <ColorSwatch key={c.hex + c.name} color={c} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginTop: 32 }}>
          <div style={{ height: 64, borderRadius: 10, background: "linear-gradient(135deg, #1565c0, #0d47a1, #0a3470)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 13 }}>Hero Gradient</div>
          <div style={{ height: 64, borderRadius: 10, background: "linear-gradient(90deg, #c48d2a, #e6b25d, #c48d2a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#111", fontWeight: 600, fontSize: 13 }}>Gold Gradient</div>
        </div>
      </Section>

      {/* Tipografia */}
      <Section id="tipografia" bg="blue">
        <SectionTitle sub="Inter — uma unica fonte, hierarquia por peso">Tipografia</SectionTitle>
        <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: "#1565c0" }}>Aa</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#111827", marginTop: 8 }}>Dr. Rafael Rocha</div>
          <div style={{ fontSize: 18, fontWeight: 500, color: "#4b5563", marginTop: 4 }}>Medico da Dor | Ortopedista</div>
          <div style={{ fontSize: 15, fontWeight: 400, color: "#4b5563", marginTop: 12, lineHeight: 1.6 }}>Tratamento de dor cronica com procedimentos minimamente invasivos guiados por ultrassom.</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
            {[400, 500, 600, 700, 800].map(w => (
              <span key={w} style={{ fontWeight: w, fontSize: 13, padding: "4px 8px", background: "#e3f0ff", borderRadius: 4 }}>{w}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* Componentes */}
      <Section id="componentes">
        <SectionTitle sub="Botoes, cards, badges">Componentes</SectionTitle>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
          <button style={{ background: "#25D366", color: "#fff", padding: "12px 24px", borderRadius: 8, border: "none", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>WhatsApp</button>
          <button style={{ background: "linear-gradient(135deg, #1565c0, #0d47a1)", color: "#fff", padding: "12px 24px", borderRadius: 8, border: "none", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Azul</button>
          <button style={{ background: "transparent", color: "#1565c0", padding: "12px 24px", borderRadius: 8, border: "2px solid #1565c0", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Ghost</button>
          <button style={{ background: "linear-gradient(90deg, #c48d2a, #e6b25d)", color: "#111", padding: "12px 24px", borderRadius: 8, border: "none", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Gold</button>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <span style={{ background: "#fef3db", color: "#c48d2a", padding: "5px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>CRM/DF 31.365</span>
          <span style={{ background: "#e3f0ff", color: "#1565c0", padding: "5px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>Medico da Dor</span>
          <span style={{ background: "#1565c0", color: "#fff", padding: "5px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>5.000+</span>
        </div>
      </Section>

      {/* Aplicacoes */}
      <Section id="aplicacoes" bg="blue">
        <SectionTitle sub="Mockups e exemplos reais">Aplicacoes</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          <div style={{ background: "#fff", borderRadius: 10, padding: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.08)", aspectRatio: "9/5", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, #1565c0, #0d47a1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 10 }}>RR</div>
              <div><div style={{ fontWeight: 700, fontSize: 12 }}>Dr. Rafael Rocha</div><div style={{ fontSize: 9, color: "#1565c0" }}>Medico da Dor</div></div>
            </div>
            <div style={{ fontSize: 9, color: "#4b5563" }}>CRM/DF 31.365 | (61) 99999-9999</div>
          </div>
          <div style={{ background: "linear-gradient(135deg, #1565c0, #0a3470)", borderRadius: 10, padding: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.08)", aspectRatio: "9/5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ color: "#fff", textAlign: "center" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12 }}>RR</div>
              <div style={{ fontWeight: 700, marginTop: 6, fontSize: 13 }}>Dr. Rafael Rocha</div>
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: 10, padding: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.08)", aspectRatio: "1/1", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #e5e7eb" }}>
            <div>
              <span style={{ background: "#fef3db", color: "#c48d2a", fontSize: 9, fontWeight: 600, padding: "2px 8px", borderRadius: 3 }}>MEDICINA DA DOR</span>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#1565c0", marginTop: 10, lineHeight: 1.3 }}>Dor cronica nao e normal.</div>
              <div style={{ width: 40, height: 2, background: "#e6b25d", marginTop: 8 }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div style={{ width: 16, height: 16, borderRadius: 3, background: "#1565c0", color: "#fff", fontSize: 7, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>RR</div>
              <span style={{ fontSize: 9, color: "#4b5563" }}>@drrafaelrocha</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ background: "linear-gradient(135deg, #0d47a1, #0a3470)", padding: "36px 24px", textAlign: "center", color: "rgba(255,255,255,0.8)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 10 }}>RR</div>
          <span style={{ fontWeight: 700, color: "#fff" }}>Dr. Rafael Rocha</span>
        </div>
        <p style={{ fontSize: 12 }}>MIV v1.0 — Maio 2026 | Pulso</p>
      </footer>
    </div>
  );
}
