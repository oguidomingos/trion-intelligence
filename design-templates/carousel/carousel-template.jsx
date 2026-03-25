/**
 * Trion Marketing — Carousel Template (OpenPencil JSX)
 *
 * Use this template with the OpenPencil MCP `render` tool to generate
 * carousel slides for Instagram and Meta Ads.
 *
 * Slide Types:
 *   1. Cover (capa) — brand + headline + location
 *   2. Content (conteúdo) — photo background + title + description
 *   3. Stats/Data — metrics + numbers + proof
 *   4. CTA (chamada para ação) — closing slide with button
 *
 * Variables to replace:
 *   {{BRAND_NAME}}     — client brand name
 *   {{HEADLINE}}       — main headline text
 *   {{SUBHEADLINE}}    — secondary text
 *   {{LOCATION}}       — city/state
 *   {{SLIDE_NUM}}      — current slide number
 *   {{TOTAL_SLIDES}}   — total slide count
 *   {{CATEGORY}}       — category or topic name
 *   {{TAGLINE}}        — short tagline
 *   {{DETAIL}}         — detail/description text
 *   {{CTA_TEXT}}       — call-to-action button text
 *   {{PRIMARY_COLOR}}  — brand primary color hex
 *   {{BG_COLOR}}       — background color hex
 *   {{TEXT_COLOR}}      — text color hex
 *   {{ACCENT_COLOR}}   — accent color hex
 *
 * Usage with OpenPencil MCP:
 *   1. Call `new_document` with width: 1080, height: 1080
 *   2. Call `render` with the JSX below (replace variables)
 *   3. Call `export_image` with format: "PNG", scale: 2
 */

// ─────────────────────────────────────────────────
// SLIDE TYPE 1: COVER (Capa)
// ─────────────────────────────────────────────────
const CoverSlide = () => (
  <frame width={1080} height={1080} fill="#1c1a17">
    {/* Background overlay gradient */}
    <frame width={1080} height={1080} fill="linear-gradient(180deg, rgba(28,26,23,0.3) 0%, rgba(28,26,23,0.8) 80%)">
      {/* Slide indicator */}
      <text
        x={930} y={40}
        fontSize={22} fontWeight={300}
        fontFamily="Inter" fill="rgba(250,248,245,0.4)"
      >
        1 / 5
      </text>

      {/* Brand name */}
      <text
        x={50} y={780}
        fontSize={28} fontWeight={300}
        fontFamily="Cormorant Garamond" fill="#b08d57"
        letterSpacing={8} textTransform="uppercase"
      >
        {{BRAND_NAME}}
      </text>

      {/* Main headline */}
      <text
        x={50} y={830}
        fontSize={76} fontWeight={600}
        fontFamily="Cormorant Garamond" fill="#faf8f5"
        lineHeight={1.1} width={980}
      >
        {{HEADLINE}}
      </text>

      {/* Location */}
      <text
        x={50} y={1000}
        fontSize={24} fontWeight={300}
        fontFamily="Inter" fill="rgba(250,248,245,0.5)"
        letterSpacing={2}
      >
        {{LOCATION}}
      </text>
    </frame>
  </frame>
);

// ─────────────────────────────────────────────────
// SLIDE TYPE 2: CONTENT (Conteúdo com Foto)
// ─────────────────────────────────────────────────
const ContentSlide = () => (
  <frame width={1080} height={1080} fill="#1c1a17">
    {/* Top bar */}
    <frame x={0} y={0} width={1080} height={100}>
      <text
        x={50} y={40}
        fontSize={24} fontWeight={300}
        fontFamily="Cormorant Garamond" fill="rgba(176,141,87,0.6)"
        letterSpacing={8} textTransform="uppercase"
      >
        {{BRAND_NAME}}
      </text>
      <text
        x={930} y={40}
        fontSize={22} fontWeight={300}
        fontFamily="Inter" fill="rgba(250,248,245,0.4)"
      >
        {{SLIDE_NUM}} / {{TOTAL_SLIDES}}
      </text>
    </frame>

    {/* Content area */}
    <frame x={50} y={750} width={980} height={280}>
      {/* Category name */}
      <text
        x={0} y={0}
        fontSize={72} fontWeight={600}
        fontFamily="Cormorant Garamond" fill="{{PRIMARY_COLOR}}"
      >
        {{CATEGORY}}
      </text>

      {/* Tagline */}
      <text
        x={0} y={90}
        fontSize={40} fontWeight={400} fontStyle="italic"
        fontFamily="Cormorant Garamond" fill="#faf8f5"
      >
        {{TAGLINE}}
      </text>

      {/* Detail */}
      <text
        x={0} y={150}
        fontSize={24} fontWeight={300}
        fontFamily="Inter" fill="rgba(250,248,245,0.5)"
        letterSpacing={1}
      >
        {{DETAIL}}
      </text>
    </frame>
  </frame>
);

// ─────────────────────────────────────────────────
// SLIDE TYPE 3: STATS / DATA
// ─────────────────────────────────────────────────
const StatsSlide = () => (
  <frame width={1080} height={1080} fill="#1c1a17">
    {/* Top bar */}
    <frame x={0} y={0} width={1080} height={100}>
      <text
        x={50} y={40}
        fontSize={24} fontWeight={300}
        fontFamily="Cormorant Garamond" fill="rgba(176,141,87,0.6)"
        letterSpacing={8} textTransform="uppercase"
      >
        {{BRAND_NAME}}
      </text>
      <text
        x={930} y={40}
        fontSize={22} fontWeight={300}
        fontFamily="Inter" fill="rgba(250,248,245,0.4)"
      >
        {{SLIDE_NUM}} / {{TOTAL_SLIDES}}
      </text>
    </frame>

    {/* Section title */}
    <text
      x={50} y={200}
      fontSize={56} fontWeight={600}
      fontFamily="Cormorant Garamond" fill="#faf8f5"
      width={980}
    >
      {{HEADLINE}}
    </text>

    {/* Divider */}
    <rectangle x={50} y={290} width={100} height={2} fill="{{PRIMARY_COLOR}}" />

    {/* Stat blocks — 2x2 grid */}
    <frame x={50} y={340} width={980} height={600}>
      {/* Stat 1 */}
      <frame x={0} y={0} width={440} height={250}>
        <text x={0} y={0} fontSize={72} fontWeight={700} fontFamily="Inter" fill="{{PRIMARY_COLOR}}">
          {{STAT_1_VALUE}}
        </text>
        <text x={0} y={90} fontSize={24} fontWeight={300} fontFamily="Inter" fill="rgba(250,248,245,0.6)" width={400}>
          {{STAT_1_LABEL}}
        </text>
      </frame>

      {/* Stat 2 */}
      <frame x={500} y={0} width={440} height={250}>
        <text x={0} y={0} fontSize={72} fontWeight={700} fontFamily="Inter" fill="{{PRIMARY_COLOR}}">
          {{STAT_2_VALUE}}
        </text>
        <text x={0} y={90} fontSize={24} fontWeight={300} fontFamily="Inter" fill="rgba(250,248,245,0.6)" width={400}>
          {{STAT_2_LABEL}}
        </text>
      </frame>

      {/* Stat 3 */}
      <frame x={0} y={280} width={440} height={250}>
        <text x={0} y={0} fontSize={72} fontWeight={700} fontFamily="Inter" fill="{{PRIMARY_COLOR}}">
          {{STAT_3_VALUE}}
        </text>
        <text x={0} y={90} fontSize={24} fontWeight={300} fontFamily="Inter" fill="rgba(250,248,245,0.6)" width={400}>
          {{STAT_3_LABEL}}
        </text>
      </frame>

      {/* Stat 4 */}
      <frame x={500} y={280} width={440} height={250}>
        <text x={0} y={0} fontSize={72} fontWeight={700} fontFamily="Inter" fill="{{PRIMARY_COLOR}}">
          {{STAT_4_VALUE}}
        </text>
        <text x={0} y={90} fontSize={24} fontWeight={300} fontFamily="Inter" fill="rgba(250,248,245,0.6)" width={400}>
          {{STAT_4_LABEL}}
        </text>
      </frame>
    </frame>
  </frame>
);

// ─────────────────────────────────────────────────
// SLIDE TYPE 4: CTA (Call to Action)
// ─────────────────────────────────────────────────
const CTASlide = () => (
  <frame width={1080} height={1080} fill="#1c1a17">
    {/* Decorative border */}
    <rectangle
      x={28} y={28} width={1024} height={1024}
      stroke="rgba(176,141,87,0.15)" strokeWidth={1}
      fill="transparent"
    />

    {/* Slide indicator */}
    <text
      x={930} y={40}
      fontSize={22} fontWeight={300}
      fontFamily="Inter" fill="rgba(250,248,245,0.4)"
    >
      {{TOTAL_SLIDES}} / {{TOTAL_SLIDES}}
    </text>

    {/* Centered content */}
    <frame x={80} y={300} width={920} height={480} textAlign="center">
      {/* Main CTA headline */}
      <text
        x={0} y={0}
        fontSize={76} fontWeight={600}
        fontFamily="Cormorant Garamond" fill="#faf8f5"
        textAlign="center" width={920} lineHeight={1.15}
      >
        {{HEADLINE}}
      </text>

      {/* Divider */}
      <rectangle x={410} y={200} width={100} height={1} fill="{{PRIMARY_COLOR}}" />

      {/* Subtitle */}
      <text
        x={0} y={240}
        fontSize={30} fontWeight={300}
        fontFamily="Inter" fill="rgba(250,248,245,0.6)"
        textAlign="center" width={920} lineHeight={1.5}
      >
        {{SUBHEADLINE}}
      </text>

      {/* CTA Button */}
      <frame x={260} y={340} width={400} height={80} fill="{{PRIMARY_COLOR}}" cornerRadius={0}>
        <text
          x={50} y={22}
          fontSize={24} fontWeight={600}
          fontFamily="Inter" fill="#1c1a17"
          letterSpacing={2} textTransform="uppercase"
        >
          {{CTA_TEXT}} →
        </text>
      </frame>
    </frame>

    {/* Bottom brand */}
    <text
      x={0} y={980}
      fontSize={24} fontWeight={300}
      fontFamily="Cormorant Garamond" fill="rgba(176,141,87,0.4)"
      textAlign="center" width={1080}
      letterSpacing={8} textTransform="uppercase"
    >
      {{BRAND_NAME}}
    </text>
  </frame>
);

// ─────────────────────────────────────────────────
// SLIDE TYPE 5: EDUCATIONAL / LIST
// ─────────────────────────────────────────────────
const ListSlide = () => (
  <frame width={1080} height={1080} fill="#1c1a17">
    {/* Top bar */}
    <frame x={0} y={0} width={1080} height={100}>
      <text
        x={50} y={40}
        fontSize={24} fontWeight={300}
        fontFamily="Cormorant Garamond" fill="rgba(176,141,87,0.6)"
        letterSpacing={8} textTransform="uppercase"
      >
        {{BRAND_NAME}}
      </text>
      <text
        x={930} y={40}
        fontSize={22} fontWeight={300}
        fontFamily="Inter" fill="rgba(250,248,245,0.4)"
      >
        {{SLIDE_NUM}} / {{TOTAL_SLIDES}}
      </text>
    </frame>

    {/* Title */}
    <text
      x={50} y={160}
      fontSize={52} fontWeight={600}
      fontFamily="Cormorant Garamond" fill="{{PRIMARY_COLOR}}"
      width={980}
    >
      {{HEADLINE}}
    </text>

    {/* List items */}
    <frame x={50} y={280} width={980} height={700}>
      {/* Item 1 */}
      <frame x={0} y={0} width={980} height={120}>
        <frame x={0} y={0} width={56} height={56} fill="{{PRIMARY_COLOR}}" cornerRadius={28}>
          <text x={18} y={12} fontSize={28} fontWeight={700} fontFamily="Inter" fill="#1c1a17">1</text>
        </frame>
        <text x={80} y={4} fontSize={28} fontWeight={600} fontFamily="Inter" fill="#faf8f5">
          {{ITEM_1_TITLE}}
        </text>
        <text x={80} y={44} fontSize={22} fontWeight={300} fontFamily="Inter" fill="rgba(250,248,245,0.5)" width={880}>
          {{ITEM_1_DESC}}
        </text>
      </frame>

      {/* Item 2 */}
      <frame x={0} y={140} width={980} height={120}>
        <frame x={0} y={0} width={56} height={56} fill="{{PRIMARY_COLOR}}" cornerRadius={28}>
          <text x={18} y={12} fontSize={28} fontWeight={700} fontFamily="Inter" fill="#1c1a17">2</text>
        </frame>
        <text x={80} y={4} fontSize={28} fontWeight={600} fontFamily="Inter" fill="#faf8f5">
          {{ITEM_2_TITLE}}
        </text>
        <text x={80} y={44} fontSize={22} fontWeight={300} fontFamily="Inter" fill="rgba(250,248,245,0.5)" width={880}>
          {{ITEM_2_DESC}}
        </text>
      </frame>

      {/* Item 3 */}
      <frame x={0} y={280} width={980} height={120}>
        <frame x={0} y={0} width={56} height={56} fill="{{PRIMARY_COLOR}}" cornerRadius={28}>
          <text x={18} y={12} fontSize={28} fontWeight={700} fontFamily="Inter" fill="#1c1a17">3</text>
        </frame>
        <text x={80} y={4} fontSize={28} fontWeight={600} fontFamily="Inter" fill="#faf8f5">
          {{ITEM_3_TITLE}}
        </text>
        <text x={80} y={44} fontSize={22} fontWeight={300} fontFamily="Inter" fill="rgba(250,248,245,0.5)" width={880}>
          {{ITEM_3_DESC}}
        </text>
      </frame>

      {/* Item 4 */}
      <frame x={0} y={420} width={980} height={120}>
        <frame x={0} y={0} width={56} height={56} fill="{{PRIMARY_COLOR}}" cornerRadius={28}>
          <text x={18} y={12} fontSize={28} fontWeight={700} fontFamily="Inter" fill="#1c1a17">4</text>
        </frame>
        <text x={80} y={4} fontSize={28} fontWeight={600} fontFamily="Inter" fill="#faf8f5">
          {{ITEM_4_TITLE}}
        </text>
        <text x={80} y={44} fontSize={22} fontWeight={300} fontFamily="Inter" fill="rgba(250,248,245,0.5)" width={880}>
          {{ITEM_4_DESC}}
        </text>
      </frame>
    </frame>
  </frame>
);
