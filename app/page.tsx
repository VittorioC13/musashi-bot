import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";
import SmoothScrollLink from "./components/SmoothScrollLink";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-[80px] py-4 bg-[var(--bg-primary)] border-b border-[var(--border-primary)] gap-10">
        <div className="font-jetbrains text-[var(--text-primary)] text-[22px] font-bold tracking-[1px]">
          MUSASHI
        </div>
        <nav className="flex items-center gap-8">
          <a href="/markets" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">MARKETS</a>
          <a href="/ai" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">DOCS</a>
          <a href="/pricing" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">PRICING</a>
          <a href="/privacy" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">PRIVACY</a>
        </nav>
        <a href="/install" className="px-5 py-[10px] border border-[#FFFFFF40] bg-transparent hover:bg-[var(--overlay-light)] transition-colors">
          <span className="font-jetbrains text-[var(--text-primary)] text-xs font-bold">Install</span>
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[860px] bg-[var(--bg-primary)] overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#0A0A0F] to-[#0F0F1A] opacity-80" />
        {/* Hero Content */}
        <div className="absolute left-[80px] top-[100px] w-[500px] flex flex-col gap-7 z-10">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
            <span className="font-jetbrains text-[var(--text-tertiary)] text-xs font-normal">
              CHROME EXTENSION • FREE • 650+ MARKETS
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-jetbrains text-[var(--text-primary)] text-[52px] font-normal leading-[1.15] tracking-[-2px]">
            Trade the <br />[Tweets]
          </h1>

          {/* Subtitle */}
          <p className="font-jetbrains text-[var(--text-secondary)] text-[15px] font-normal leading-[1.7]">
            Like Musashi mastered timing, you&apos;ll master markets.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <SmoothScrollLink targetId="see-the-difference" className="px-8 py-[14px] bg-[var(--overlay-light)] border border-[var(--border-lighter)] hover:bg-[var(--overlay-lighter)] transition-colors">
              <span className="font-jetbrains text-[var(--text-primary)] text-xs font-bold">Demo</span>
            </SmoothScrollLink>
            <a href="/install" className="px-8 py-[14px] bg-[var(--text-primary)] hover:opacity-90 transition-opacity">
              <span className="font-jetbrains text-[var(--bg-primary)] text-xs font-bold">Install</span>
            </a>
          </div>
        </div>

        {/* Hero Figure - Musashi Image with Market Data Overlays */}
        <div className="absolute right-0 top-0 w-[860px] h-[860px] pointer-events-none">
          <div className="relative w-full h-full bg-black">
            <Image
              src="/images/generated-1771830449125.png"
              alt="Miyamoto Musashi"
              fill
              className="object-cover object-right opacity-65"
              priority
              unoptimized
            />

            {/* Floating Market Data Cards - Creating the "Strategic Intelligence" feel */}

            {/* Top Left - Market Card */}
            <div className="absolute top-[120px] left-[60px] px-4 py-3 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md">
              <div className="flex flex-col gap-1">
                <span className="font-jetbrains text-[#666] text-[9px] font-medium">POLYMARKET</span>
                <span className="font-jetbrains text-white text-[11px] font-semibold leading-tight">Trump wins 2024?</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="font-jetbrains text-[#00FF88] text-sm font-bold">YES</span>
                    <span className="font-jetbrains text-white text-sm font-bold">89%</span>
                  </div>
                  <span className="font-jetbrains text-[#00FF88] text-[10px]">+12%</span>
                </div>
              </div>
            </div>

            {/* Top Right - Probability Indicator */}
            <div className="absolute top-[80px] right-[140px] px-3 py-2 bg-[#0A0A0A]/90 border border-[#FF4444]/30 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3 fill-[#FF4444]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
                <span className="font-jetbrains text-[#FF4444] text-lg font-bold">-23%</span>
              </div>
            </div>

            {/* Middle Left - Volume Metric */}
            <div className="absolute top-[320px] left-[40px] px-3 py-2 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md">
              <div className="flex flex-col gap-1">
                <span className="font-jetbrains text-[#666] text-[9px]">24H VOL</span>
                <span className="font-jetbrains text-white text-sm font-bold">$2.4M</span>
              </div>
            </div>

            {/* Middle Right - Market Card */}
            <div className="absolute top-[280px] right-[80px] px-4 py-3 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md max-w-[200px]">
              <div className="flex flex-col gap-1">
                <span className="font-jetbrains text-[#666] text-[9px] font-medium">KALSHI</span>
                <span className="font-jetbrains text-white text-[11px] font-semibold leading-tight">BTC above $100k?</span>
                <div className="flex items-center gap-2">
                  <span className="font-jetbrains text-[#00FF88] text-sm font-bold">67%</span>
                  <div className="flex-1 h-1 bg-[#222] rounded-full overflow-hidden">
                    <div className="h-full w-[67%] bg-[#00FF88]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left - Quick Stat */}
            <div className="absolute bottom-[180px] left-[90px] px-3 py-2 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md">
              <span className="font-jetbrains text-white text-xs font-bold">650+ MARKETS</span>
            </div>

            {/* Bottom Right - Market Trend */}
            <div className="absolute bottom-[140px] right-[120px] px-4 py-3 bg-[#0A0A0A]/90 border border-[#00FF88]/30 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-[#00FF88]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
                <span className="font-jetbrains text-[#00FF88] text-xs font-bold">TRENDING</span>
              </div>
            </div>

            {/* Far Right - Simple odds */}
            <div className="absolute top-[480px] right-[50px] px-3 py-2 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md">
              <div className="flex flex-col items-end gap-1">
                <span className="font-jetbrains text-[#00FF88] text-xs">YES 34¢</span>
                <span className="font-jetbrains text-[#FF4444] text-xs">NO 66¢</span>
              </div>
            </div>

            {/* Connecting lines - subtle data network effect */}
            <svg className="absolute inset-0 w-full h-full opacity-20" style={{ mixBlendMode: 'screen' }}>
              <line x1="180" y1="150" x2="320" y2="280" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="140" y1="340" x2="280" y2="420" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="720" y1="110" x2="640" y2="310" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>

        {/* Trust Indicators - Real Data */}
        <div className="absolute bottom-0 left-0 w-full px-[80px] py-3 border-t border-[var(--border-lightest)] flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
            <span className="font-jetbrains text-[11px] font-medium text-[var(--text-tertiary)]">650+ Markets Live</span>
          </div>
          <span className="font-jetbrains text-[11px] font-medium text-[var(--text-tertiary)]">Polymarket • Kalshi</span>
          <span className="font-jetbrains text-[11px] font-medium text-[var(--text-tertiary)]">Chrome Extension • Free</span>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section id="see-the-difference" className="flex flex-col items-center gap-12 w-full px-[120px] py-[100px] bg-[var(--bg-primary)]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
            Musashi Fills the Gap between Talks and Trades
          </h2>
        </div>

        {/* Comparison Area */}
        <BeforeAfterSlider />

        {/* Drag Hint */}
        <div className="flex items-center gap-2">
          <svg className="w-[14px] h-[14px] fill-[var(--text-tertiary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          <span className="font-jetbrains text-[var(--text-tertiary)] text-xs font-normal">Drag to compare</span>
          <svg className="w-[14px] h-[14px] fill-[var(--text-tertiary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 13h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/>
          </svg>
        </div>

        {/* Agent-Focused Combined Section */}
        <div className="flex flex-col items-center gap-12 w-full max-w-[1100px] pt-12">
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
              Infrastructure for Intelligent Agents
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[15px] font-normal leading-[1.7] text-center w-[700px]">
              AI agents need context to surface opportunities their users care about. Musashi provides the bridge between social signals and prediction markets.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 w-full">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
              <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13h2v8H3v-8zm4-8h2v16H7V5zm4 4h2v12h-2V9zm4-4h2v16h-2V5zm4 7h2v9h-2v-9z"/>
              </svg>
              <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
                Real-time Market Data
              </h3>
              <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
                650+ markets updating live. Structured JSON feeds ready for agents to consume and analyze instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
              <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 000 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1 1 0 000-.8zM12 18c-3.17 0-6.17-2.29-7.9-6C5.83 8.29 8.83 6 12 6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"/>
              </svg>
              <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
                Context-Aware Matching
              </h3>
              <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
                Intelligent matching between social conversations and markets. No noise—only relevant opportunities surface.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
              <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/>
              </svg>
              <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
                API-First Design
              </h3>
              <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
                Built for programmatic access. Agents can query, filter, and act on market data seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="flex flex-col items-center gap-12 w-full px-[120px] py-[80px] bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
        <h2 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
          The Bridge Between Social & Markets
        </h2>
        <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] text-center w-[600px]">
          Real-time data from the two largest prediction market platforms, matched against Twitter conversations. Structured for humans and agents alike.
        </p>

        <div className="flex items-center justify-center gap-10 w-full">
          <div className="flex-1 flex flex-col items-center gap-3 px-12 py-8 bg-[var(--bg-tertiary)] border border-[var(--border-primary)]">
            <span className="font-grotesk text-[var(--text-primary)] text-[22px] font-bold">Polymarket</span>
            <span className="font-jetbrains text-[var(--text-muted)] text-[13px] font-medium">500+ Markets</span>
            <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-normal">Live price updates every 30s</span>
          </div>

          <div className="flex-1 flex flex-col items-center gap-3 px-12 py-8 bg-[var(--bg-tertiary)] border border-[var(--border-primary)]">
            <span className="font-grotesk text-[var(--text-primary)] text-[22px] font-bold">Kalshi</span>
            <span className="font-jetbrains text-[var(--text-muted)] text-[13px] font-medium">150+ Markets</span>
            <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-normal">CFTC-regulated exchange</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 w-full">
          <div className="px-5 py-2 bg-[var(--overlay-lighter)] border border-[var(--border-lighter)]">
            <span className="font-jetbrains text-[var(--text-light)] text-[11px] font-bold">POLITICS</span>
          </div>
          <div className="px-5 py-2 bg-[var(--overlay-lighter)] border border-[var(--border-lighter)]">
            <span className="font-jetbrains text-[var(--text-light)] text-[11px] font-bold">CRYPTO</span>
          </div>
          <div className="px-5 py-2 bg-[var(--overlay-lighter)] border border-[var(--border-lighter)]">
            <span className="font-jetbrains text-[var(--text-light)] text-[11px] font-bold">ECONOMICS</span>
          </div>
          <div className="px-5 py-2 bg-[var(--overlay-lighter)] border border-[var(--border-lighter)]">
            <span className="font-jetbrains text-[var(--text-light)] text-[11px] font-bold">SPORTS</span>
          </div>
          <div className="px-5 py-2 bg-[var(--overlay-lighter)] border border-[var(--border-lighter)]">
            <span className="font-jetbrains text-[var(--text-light)] text-[11px] font-bold">TECH &amp; AI</span>
          </div>
          <div className="px-5 py-2 bg-[var(--overlay-lighter)] border border-[var(--border-lighter)]">
            <span className="font-jetbrains text-[var(--text-light)] text-[11px] font-bold">CLIMATE</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <section className="flex w-full px-[120px] py-[120px] bg-[var(--bg-primary)] border border-[var(--border-primary)] min-h-[500px]">
        <div className="flex flex-col items-center justify-center gap-10 w-full mx-auto">
          <h2 className="font-grotesk text-[var(--text-primary)] text-[72px] font-bold tracking-[-2px] text-center leading-[1.1]">
            Built. For. Agents.
          </h2>

          <a href="/install" className="px-12 py-5 bg-[var(--text-primary)] hover:opacity-90 transition-opacity mx-auto">
            <span className="font-jetbrains text-[var(--bg-primary)] text-sm font-bold">INSTALL ON CHROME — FREE</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-6 w-full px-[120px] py-12 bg-[var(--bg-secondary)] border-t border-[var(--border-primary)]">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-3">
            <span className="font-jetbrains text-[var(--text-primary)] text-base font-semibold tracking-[1px]">
              MUSASHI
            </span>
            <span className="font-jetbrains text-[var(--text-tertiary)] text-xs font-normal max-w-[400px] leading-relaxed">
              Turn social signals into market intelligence. Agent-ready infrastructure for prediction markets.
            </span>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-jetbrains text-[var(--text-muted)] text-[10px] font-bold tracking-[1.5px] uppercase">
                Product
              </span>
              <nav className="flex flex-col gap-2">
                <a href="/ai" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">API Docs</a>
                <a href="/pricing" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">Pricing</a>
                <a href="/privacy" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">Privacy</a>
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-jetbrains text-[var(--text-muted)] text-[10px] font-bold tracking-[1.5px] uppercase">
                Community
              </span>
              <nav className="flex flex-col gap-2">
                <a href="https://twitter.com/musashimarket" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">Twitter</a>
                <a href="https://github.com/VittorioC13/musashi-bot" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">GitHub</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[var(--border-primary)]" />

        <div className="flex items-center justify-between w-full">
          <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-normal">
            © {new Date().getFullYear()} Musashi
          </span>
          <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-normal">
            Built for agents. Powered by prediction markets.
          </span>
        </div>
      </footer>
    </div>
  );
}
