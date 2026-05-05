const BASE = "/trion-intelligence/logos";

const COLORS = {
  primary: { name: "Verde Teal", hex: "#0f766e", role: "Cor principal" },
  primaryLight: { name: "Teal Claro", hex: "#14b8a6", role: "Gradientes e acentos" },
  primaryDark: { name: "Teal Escuro", hex: "#134e4a", role: "Hover e profundidade" },
  accent: { name: "Dourado Premium", hex: "#d4a24e", role: "Detalhes premium" },
  accentLight: { name: "Dourado Claro", hex: "#f0d090", role: "Shimmer e backgrounds" },
  white: { name: "Branco", hex: "#ffffff", role: "Fundo principal" },
  warmGray: { name: "Cinza Quente", hex: "#f5f5f5", role: "Fundos alternados" },
  textPrimary: { name: "Texto Principal", hex: "#111827", role: "Body text" },
  textSecondary: { name: "Texto Secundario", hex: "#6b7280", role: "Legendas" },
};

const LOGOS = [
  { src: `${BASE}/logo-principal.png`, label: "Principal" },
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
  return (
    <section id={id} className="reveal" style={{ background: bg === "gray" ? "#f5f5f5" : "#ffffff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <h2 className="font-display" style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: "#0f766e", marginBottom: 8 }}>
        {children}
      </h2>
      {sub && <p style={{ color: "#6b7280", fontSize: 16 }}>{sub}</p>}
      <div className="section-divider" style={{ marginTop: 16 }} />
    </div>
  );
}

function ColorSwatch({ color }: { color: { name: string; hex: string; role: string } }) {
  const isLight = color.hex === "#ffffff" || color.hex === "#f5f5f5" || color.hex === "#f0d090";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{
        width: 96, height: 96, borderRadius: 16,
        background: color.hex,
        border: isLight ? "2px solid #e5e7eb" : "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }} />
      <span style={{ fontWeight: 600, fontSize: 13 }}>{color.name}</span>
      <code style={{ fontSize: 12, color: "#6b7280", background: "#f5f5f5", padding: "2px 8px", borderRadius: 6 }}>{color.hex}</code>
      <span style={{ fontSize: 11, color: "#9ca3af" }}>{color.role}</span>
    </div>
  );
}

export function MIVPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <header style={{
        background: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
        color: "#fff"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="gold-shimmer" style={{
            display: "inline-block", padding: "6px 20px", borderRadius: 50,
            fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 24
          }}>
            Manual de Identidade Visual
          </div>
          <h1 className="font-display" style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 700, marginBottom: 16, lineHeight: 1.1 }}>
            Clinica de Fisioterapia<br />Santa Isabel
          </h1>
          <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            46 anos de tradicao. Maior centro de reabilitacao privado do DF.<br />
            Identidade visual completa — cores, tipografia, logos e aplicacoes.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#logos" style={{ background: "#d4a24e", color: "#111", padding: "14px 28px", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>Ver Logos</a>
            <a href="#cores" style={{ border: "2px solid rgba(255,255,255,0.6)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 500, textDecoration: "none" }}>Paleta de Cores</a>
            <a href="https://drive.google.com/drive/folders/1-HtS34JlRVgoauSqMGr3zzDbqUra-wn1" target="_blank" rel="noopener" style={{ border: "2px solid rgba(255,255,255,0.6)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 500, textDecoration: "none" }}>Download Logos (Drive)</a>
          </div>
        </div>
      </header>

      {/* Nav sticky */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(15,118,110,0.08)",
        padding: "12px 24px", overflowX: "auto", whiteSpace: "nowrap"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 24, justifyContent: "center" }}>
          {["Essencia", "Logos", "Cores", "Tipografia", "Componentes", "Aplicacoes"].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} style={{ color: "#0f766e", fontWeight: 500, fontSize: 14, textDecoration: "none" }}>{s}</a>
          ))}
        </div>
      </nav>

      {/* Essencia */}
      <Section id="essencia">
        <SectionTitle sub="A alma por tras da marca">Essencia da Marca</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {[
            { title: "Proposito", text: "Recupere seus movimentos. Recupere sua vida.", icon: "🎯" },
            { title: "Tradicao", text: "46 anos de historia. Maior centro privado do DF desde 1980.", icon: "🏛️" },
            { title: "Excelencia", text: "14+ especialidades. 3 andares. Piscina terapeutica.", icon: "⭐" },
            { title: "Humanizacao", text: "Equipe acolhedora. Paciente no centro. Reabilitacao como transformacao.", icon: "💚" },
          ].map(p => (
            <div key={p.title} style={{
              background: "#fff", border: "1px solid rgba(15,118,110,0.08)",
              borderRadius: 16, padding: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f766e", marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: "#6b7280", lineHeight: 1.6, fontSize: 15 }}>{p.text}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, background: "linear-gradient(135deg, #0f766e, #14b8a6)", borderRadius: 16, padding: 40, color: "#fff", textAlign: "center" }}>
          <h3 className="font-display" style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Tom de Voz</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 24 }}>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: 16 }}>
              <strong>Sim:</strong> Profissional e acessivel
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: 16 }}>
              <strong>Sim:</strong> Segunda pessoa (voce/sua)
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: 16 }}>
              <strong>Nao:</strong> Tom de coach motivacional
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: 16 }}>
              <strong>Nao:</strong> Frieza corporativa
            </div>
          </div>
        </div>
      </Section>

      {/* Logos */}
      <Section id="logos" bg="gray">
        <SectionTitle sub="11 variacoes para todas as aplicacoes">Logotipos</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {LOGOS.map((logo, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: 16, padding: 24,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)", border: "1px solid rgba(15,118,110,0.06)"
            }}>
              <img src={logo.src} alt={logo.label} style={{ maxWidth: "100%", height: 120, objectFit: "contain" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "#6b7280" }}>{logo.label}</span>
            </div>
          ))}
        </div>

        {/* Logo on dark bg */}
        <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f766e", marginTop: 48, marginBottom: 16, textAlign: "center" }}>Aplicacao sobre fundo escuro</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {LOGOS.slice(0, 4).map((logo, i) => (
            <div key={i} style={{
              background: "#134e4a", borderRadius: 16, padding: 24,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
            }}>
              <img src={logo.src} alt={logo.label} style={{ maxWidth: "100%", height: 120, objectFit: "contain", filter: "brightness(1.1)" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>{logo.label}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="https://drive.google.com/drive/folders/1-HtS34JlRVgoauSqMGr3zzDbqUra-wn1" target="_blank" rel="noopener"
            style={{ display: "inline-block", background: "#0f766e", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>
            Download Todos os Logos (Google Drive)
          </a>
        </div>
      </Section>

      {/* Cores */}
      <Section id="cores">
        <SectionTitle sub="Paleta estrategica — diferenciacao no mercado de Brasilia">Paleta de Cores</SectionTitle>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
          {Object.values(COLORS).map(c => <ColorSwatch key={c.hex + c.name} color={c} />)}
        </div>

        {/* Gradients */}
        <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f766e", marginTop: 48, marginBottom: 16, textAlign: "center" }}>Gradientes Aprovados</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          <div style={{ height: 80, borderRadius: 12, background: "linear-gradient(135deg, #0f766e, #14b8a6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 500 }}>
            Principal: #0f766e → #14b8a6
          </div>
          <div style={{ height: 80, borderRadius: 12, background: "linear-gradient(135deg, #134e4a, #0f766e)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 500 }}>
            Hover: #134e4a → #0f766e
          </div>
          <div style={{ height: 80, borderRadius: 12, background: "linear-gradient(90deg, #d4a24e, #f0d090, #d4a24e)", display: "flex", alignItems: "center", justifyContent: "center", color: "#111", fontWeight: 500 }}>
            Dourado: #d4a24e → #f0d090
          </div>
        </div>

        {/* Why not blue */}
        <div style={{ marginTop: 48, background: "#f5f5f5", borderRadius: 16, padding: 32, border: "1px solid rgba(15,118,110,0.08)" }}>
          <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f766e", marginBottom: 12 }}>Por que Verde Teal + Dourado e nao azul?</h4>
          <ul style={{ color: "#6b7280", lineHeight: 1.8, paddingLeft: 20 }}>
            <li>Concorrentes em Brasilia (Fisio Quality, Espaco Corpo e Saude, Clinica Vitale) todos usam azul</li>
            <li>Verde Teal transmite esperanca, cura e renovacao — diretamente ligado a fisioterapia</li>
            <li>Dourado comunica os 46 anos de tradicao premium — experiencia e confiabilidade</li>
            <li>Combinacao unica no mercado local = reconhecimento instantaneo</li>
          </ul>
        </div>
      </Section>

      {/* Tipografia */}
      <Section id="tipografia" bg="gray">
        <SectionTitle sub="Serifa para autoridade + Sans-serif para clareza">Tipografia</SectionTitle>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
          {/* Playfair */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <h3 className="font-display" style={{ fontSize: 32, fontWeight: 700, color: "#0f766e", marginBottom: 8 }}>Playfair Display</h3>
            <p style={{ color: "#6b7280", marginBottom: 16 }}>Titulos e headlines — autoridade e elegancia</p>
            <div className="font-display" style={{ lineHeight: 1.8 }}>
              <div style={{ fontSize: 48, fontWeight: 700 }}>Aa</div>
              <div style={{ fontSize: 36, fontWeight: 700 }}>Recupere seus movimentos</div>
              <div style={{ fontSize: 24, fontWeight: 400, fontStyle: "italic" }}>Desde 1980 cuidando de voce</div>
            </div>
          </div>

          {/* DM Sans */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <h3 style={{ fontSize: 32, fontWeight: 700, color: "#0f766e", marginBottom: 8 }}>DM Sans</h3>
            <p style={{ color: "#6b7280", marginBottom: 16 }}>Body e interface — clareza e modernidade</p>
            <div style={{ lineHeight: 1.8 }}>
              <div style={{ fontSize: 48, fontWeight: 700 }}>Aa</div>
              <div style={{ fontSize: 20, fontWeight: 400 }}>A Clinica de Fisioterapia Santa Isabel e o maior centro de reabilitacao privado do DF.</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginTop: 8, color: "#6b7280" }}>LABEL / BUTTON TEXT / CAPTION</div>
            </div>
          </div>
        </div>

        {/* Hierarchy table */}
        <div style={{ marginTop: 32, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "#0f766e", color: "#fff" }}>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Elemento</th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Fonte</th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Peso</th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Desktop</th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["H1 Hero", "Playfair Display", "700", "48-56px", "32-36px"],
                ["H2 Secao", "Playfair Display", "700", "36-40px", "28-32px"],
                ["H3 Subsecao", "Playfair Display", "700", "24-28px", "20-24px"],
                ["Body Large", "DM Sans", "400", "18-20px", "16-18px"],
                ["Body", "DM Sans", "400", "16px", "15px"],
                ["Caption", "DM Sans", "400", "14px", "13px"],
                ["Label", "DM Sans", "500", "12px", "11px"],
              ].map(([el, font, weight, desk, mob], i) => (
                <tr key={i} style={{ background: i % 2 ? "#f9fafb" : "#fff" }}>
                  <td style={{ padding: "10px 16px", fontWeight: 600 }}>{el}</td>
                  <td style={{ padding: "10px 16px" }}>{font}</td>
                  <td style={{ padding: "10px 16px" }}>{weight}</td>
                  <td style={{ padding: "10px 16px" }}>{desk}</td>
                  <td style={{ padding: "10px 16px" }}>{mob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Componentes */}
      <Section id="componentes">
        <SectionTitle sub="Botoes, cards e elementos de interface">Componentes</SectionTitle>

        {/* Buttons */}
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f766e", marginBottom: 16 }}>Botoes</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
          <button style={{
            background: "linear-gradient(135deg, #0f766e, #14b8a6)", color: "#fff",
            padding: "14px 28px", borderRadius: 12, border: "none", fontWeight: 600, fontSize: 16, cursor: "pointer"
          }}>Botao Primario</button>

          <button className="gold-shimmer" style={{
            padding: "14px 28px", borderRadius: 12, border: "none", fontWeight: 600, fontSize: 16, color: "#111", cursor: "pointer"
          }}>CTA Dourado</button>

          <button className="pulse-ring" style={{
            background: "#0f766e", color: "#fff",
            padding: "14px 28px", borderRadius: 50, border: "none", fontWeight: 600, fontSize: 16, cursor: "pointer"
          }}>WhatsApp CTA</button>

          <button style={{
            background: "transparent", color: "#0f766e",
            padding: "14px 28px", borderRadius: 12, border: "2px solid #0f766e", fontWeight: 600, fontSize: 16, cursor: "pointer"
          }}>Botao Ghost</button>
        </div>

        {/* Cards */}
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f766e", marginBottom: 16 }}>Cards</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 48 }}>
          <div style={{
            background: "#fff", borderRadius: 16, padding: 24,
            border: "1px solid rgba(15,118,110,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #0f766e, #14b8a6)", marginBottom: 16 }} />
            <h4 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Fisioterapia Aquatica</h4>
            <p style={{ color: "#6b7280", lineHeight: 1.6, fontSize: 15 }}>Exercicios terapeuticos em piscina aquecida para reabilitacao suave e eficaz.</p>
          </div>
          <div style={{
            background: "#fff", borderRadius: 16, padding: 24,
            border: "1px solid rgba(15,118,110,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(90deg, #d4a24e, #f0d090)", marginBottom: 16 }} />
            <h4 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>46 Anos de Experiencia</h4>
            <p style={{ color: "#6b7280", lineHeight: 1.6, fontSize: 15 }}>Desde 1980, o maior centro de reabilitacao privado do Distrito Federal.</p>
          </div>
          <div style={{
            background: "linear-gradient(135deg, #0f766e, #134e4a)", borderRadius: 16, padding: 24, color: "#fff"
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.15)", marginBottom: 16 }} />
            <h4 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Card Invertido</h4>
            <p style={{ opacity: 0.8, lineHeight: 1.6, fontSize: 15 }}>Versao sobre fundo teal para CTAs de destaque e secoes especiais.</p>
          </div>
        </div>

        {/* Badge */}
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f766e", marginBottom: 16 }}>Badges e Tags</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <span className="gold-shimmer" style={{ padding: "6px 16px", borderRadius: 50, fontSize: 13, fontWeight: 600, color: "#111" }}>46 Anos</span>
          <span style={{ background: "#0f766e", color: "#fff", padding: "6px 16px", borderRadius: 50, fontSize: 13, fontWeight: 500 }}>Novo</span>
          <span style={{ background: "#f5f5f5", color: "#0f766e", padding: "6px 16px", borderRadius: 50, fontSize: 13, fontWeight: 500, border: "1px solid rgba(15,118,110,0.15)" }}>Especialidade</span>
        </div>
      </Section>

      {/* Aplicacoes */}
      <Section id="aplicacoes" bg="gray">
        <SectionTitle sub="Mockups e exemplos de uso real">Aplicacoes da Marca</SectionTitle>

        {/* Business card mockup */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {/* Cartao de Visita */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f766e", marginBottom: 12 }}>Cartao de Visita (Frente)</h4>
            <div style={{
              width: "100%", aspectRatio: "9/5", background: "#fff",
              borderRadius: 12, padding: 24, boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              display: "flex", flexDirection: "column", justifyContent: "space-between"
            }}>
              <img src={`${BASE}/logo-principal.png`} alt="Logo" style={{ height: 48, objectFit: "contain", alignSelf: "flex-start" }} />
              <div>
                <div className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#0f766e" }}>Dr. Rafael</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>Fisioterapeuta | CREFITO 00000</div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>(61) 3301-7187 | fisiosig2@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Cartao verso */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f766e", marginBottom: 12 }}>Cartao de Visita (Verso)</h4>
            <div style={{
              width: "100%", aspectRatio: "9/5",
              background: "linear-gradient(135deg, #0f766e, #134e4a)",
              borderRadius: 12, padding: 24, boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <img src={`${BASE}/logo-principal.png`} alt="Logo" style={{ height: 64, objectFit: "contain", filter: "brightness(1.3)" }} />
            </div>
          </div>

          {/* Instagram post mockup */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f766e", marginBottom: 12 }}>Post Instagram (1080x1080)</h4>
            <div style={{
              width: "100%", aspectRatio: "1/1",
              background: "#f5f5f5", borderRadius: 12, padding: 32,
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              display: "flex", flexDirection: "column", justifyContent: "space-between"
            }}>
              <div>
                <div className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "#0f766e", lineHeight: 1.3 }}>
                  Voce sente dor ao levantar da cama?
                </div>
                <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #d4a24e, #f0d090)", borderRadius: 2, marginTop: 12 }} />
              </div>
              <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
                A fisioterapia pode transformar suas manhas. Avaliacao sem compromisso.
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <img src={`${BASE}/logo-principal.png`} alt="Logo" style={{ height: 32, objectFit: "contain" }} />
                <span style={{ fontSize: 11, color: "#9ca3af" }}>@fisiosantaisabel</span>
              </div>
            </div>
          </div>

          {/* Story mockup */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f766e", marginBottom: 12 }}>Story Instagram (1080x1920)</h4>
            <div style={{
              width: "100%", maxWidth: 240, aspectRatio: "9/16",
              background: "linear-gradient(180deg, #0f766e 0%, #14b8a6 100%)",
              borderRadius: 12, padding: 24, margin: "0 auto",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", color: "#fff"
            }}>
              <img src={`${BASE}/logo-principal.png`} alt="Logo" style={{ height: 40, objectFit: "contain", marginBottom: 16, filter: "brightness(1.3)" }} />
              <div className="font-display" style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3 }}>
                Recupere seus movimentos
              </div>
              <div style={{ fontSize: 13, opacity: 0.8, marginTop: 8 }}>Agende sua avaliacao</div>
              <div style={{ marginTop: 16, background: "#d4a24e", color: "#111", padding: "8px 20px", borderRadius: 50, fontSize: 12, fontWeight: 600 }}>
                SAIBA MAIS
              </div>
            </div>
          </div>

          {/* Email signature */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f766e", marginBottom: 12 }}>Assinatura de E-mail</h4>
            <div style={{
              background: "#fff", borderRadius: 12, padding: 20,
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)", borderLeft: "4px solid #0f766e"
            }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <img src={`${BASE}/logo-principal.png`} alt="Logo" style={{ height: 48, objectFit: "contain" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>Dr. Rafael</div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>Fisioterapeuta | Santa Isabel</div>
                  <div style={{ fontSize: 11, color: "#0f766e", marginTop: 4 }}>(61) 3301-7187 | @fisiosantaisabel</div>
                </div>
              </div>
            </div>
          </div>

          {/* Letterhead */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f766e", marginBottom: 12 }}>Papel Timbrado</h4>
            <div style={{
              width: "100%", aspectRatio: "210/297", maxHeight: 320,
              background: "#fff", borderRadius: 12, padding: 24,
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              display: "flex", flexDirection: "column", justifyContent: "space-between"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <img src={`${BASE}/logo-principal.png`} alt="Logo" style={{ height: 36, objectFit: "contain" }} />
                <div style={{ fontSize: 9, color: "#9ca3af", textAlign: "right" }}>
                  Rua 15, Lote 26, Guara II<br />Brasilia-DF, 71070-515<br />(61) 3301-7187
                </div>
              </div>
              <div style={{ flex: 1, borderTop: "1px solid #f1f5f9", marginTop: 16, paddingTop: 16 }}>
                <div style={{ width: "70%", height: 6, background: "#f1f5f9", borderRadius: 3, marginBottom: 8 }} />
                <div style={{ width: "90%", height: 6, background: "#f1f5f9", borderRadius: 3, marginBottom: 8 }} />
                <div style={{ width: "60%", height: 6, background: "#f1f5f9", borderRadius: 3 }} />
              </div>
              <div style={{ borderTop: "2px solid #0f766e", paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 8, color: "#9ca3af" }}>fisiosantaisabel.com.br</span>
                <span style={{ fontSize: 8, color: "#d4a24e" }}>Desde 1980</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Links e Downloads */}
      <Section id="downloads">
        <SectionTitle sub="Todos os assets em um so lugar">Links e Downloads</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          <a href="https://drive.google.com/drive/folders/1-HtS34JlRVgoauSqMGr3zzDbqUra-wn1" target="_blank" rel="noopener"
            style={{ display: "block", background: "#fff", borderRadius: 16, padding: 24, border: "2px solid #0f766e", textDecoration: "none", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>📁</div>
            <div style={{ fontWeight: 700, color: "#0f766e", marginBottom: 4 }}>Logos (PNG + JPEG)</div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>11 variacoes em alta resolucao</div>
          </a>
          <a href="https://drive.google.com/drive/folders/1nS32_cBQU6Lf17hfnCck97n3g_aeaF-k" target="_blank" rel="noopener"
            style={{ display: "block", background: "#fff", borderRadius: 16, padding: 24, border: "2px solid #d4a24e", textDecoration: "none", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🎨</div>
            <div style={{ fontWeight: 700, color: "#d4a24e", marginBottom: 4 }}>Identidade Visual Completa</div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>55+ logos, mockups e assets</div>
          </a>
          <a href="https://oguidomingos.github.io/trion-intelligence/site-santa-isabel.html" target="_blank" rel="noopener"
            style={{ display: "block", background: "#fff", borderRadius: 16, padding: 24, border: "2px solid #14b8a6", textDecoration: "none", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🌐</div>
            <div style={{ fontWeight: 700, color: "#14b8a6", marginBottom: 4 }}>Site Institucional</div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>Pagina completa em producao</div>
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer style={{
        background: "linear-gradient(135deg, #134e4a, #0f766e)",
        padding: "48px 24px", textAlign: "center", color: "rgba(255,255,255,0.8)"
      }}>
        <img src={`${BASE}/logo-principal.png`} alt="Logo" style={{ height: 48, objectFit: "contain", marginBottom: 16, filter: "brightness(1.3)" }} />
        <p className="font-display" style={{ fontSize: 18, color: "#fff", marginBottom: 8 }}>Clinica de Fisioterapia Santa Isabel</p>
        <p style={{ fontSize: 14 }}>Manual de Identidade Visual v2.0 — Maio 2026</p>
        <p style={{ fontSize: 12, marginTop: 8, opacity: 0.6 }}>Elaborado por Pulso — Assessoria de Marketing para Clinicas</p>
      </footer>
    </div>
  );
}
