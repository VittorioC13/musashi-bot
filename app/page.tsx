import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";
import SmoothScrollLink from "./components/SmoothScrollLink";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-[80px] py-4 bg-[var(--bg-primary)] border-b border-[var(--border-primary)] gap-10">
        <div className="font-jetbrains text-[var(--text-primary)] text-[22px] font-bold tracking-[1px]">
          MUSASHI
        </div>
        <nav className="flex items-center gap-8">
          <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">MARKETS</a>
          <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">SIGNALS</a>
          <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">TERMINAL</a>
          <a href="/ai" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">DOCS</a>
          <a href="/privacy" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">PRIVACY</a>
        </nav>
        <a href="/install" className="px-5 py-[10px] border border-[#FFFFFF40] bg-transparent hover:bg-[var(--overlay-light)] transition-colors">
          <span className="font-jetbrains text-[var(--text-primary)] text-xs font-bold">Install</span>
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[860px] bg-[var(--bg-primary)] overflow-hidden">
        {/* Hero Content */}
        <div className="absolute left-[80px] top-[100px] w-[500px] flex flex-col gap-7 z-10">
          {/* Badge */}
          <div className="flex items-center">
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
            Like Musashi mastered timing, you&apos;ll master markets.<br />
            See prediction market opportunities the moment they<br />
            surface on Twitter—before everyone else.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <SmoothScrollLink targetId="see-the-difference" className="px-8 py-[14px] bg-[var(--overlay-light)] border border-[var(--border-lighter)] hover:bg-[var(--overlay-lighter)] transition-colors">
              <span className="font-jetbrains text-[var(--text-primary)] text-xs font-bold">Take a look</span>
            </SmoothScrollLink>
            <button className="px-8 py-[14px] bg-[var(--text-primary)] hover:opacity-90 transition-opacity">
              <span className="font-jetbrains text-[var(--bg-primary)] text-xs font-bold">Install</span>
            </button>
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

        {/* How It Works - Integrated Steps */}
        <div className="flex flex-col items-center gap-8 w-full max-w-[1100px] pt-12">
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-grotesk text-[var(--text-primary)] text-[32px] font-bold tracking-[-1px] text-center">
              From Tweet to Trade in Seconds
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-6 w-full">
            {/* Step 1 */}
            <div className="flex flex-col gap-4 p-6 bg-[var(--bg-secondary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
              <div className="flex items-center justify-center w-10 h-10 bg-[var(--text-primary)]">
                <span className="font-jetbrains text-[var(--bg-primary)] text-lg font-bold">1</span>
              </div>
              <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z"/>
              </svg>
              <h4 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
                SCROLL TWITTER
              </h4>
              <p className="font-jetbrains text-[var(--text-secondary)] text-xs font-normal leading-[1.7]">
                Browse your feed as usual. Musashi scans every tweet for prediction market relevance.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-4 p-6 bg-[var(--bg-secondary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
              <div className="flex items-center justify-center w-10 h-10 bg-[var(--text-primary)]">
                <span className="font-jetbrains text-[var(--bg-primary)] text-lg font-bold">2</span>
              </div>
              <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13h2v8H3v-8zm4-8h2v16H7V5zm4 11h2v5h-2v-5zm4-7h2v12h-2V9zm4 3h2v9h-2v-9z"/>
              </svg>
              <h4 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
                SEE LIVE ODDS
              </h4>
              <p className="font-jetbrains text-[var(--text-secondary)] text-xs font-normal leading-[1.7]">
                Market cards appear inline showing live Yes/No prices, 24h change, and volume.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-4 p-6 bg-[var(--bg-secondary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
              <div className="flex items-center justify-center w-10 h-10 bg-[var(--text-primary)]">
                <span className="font-jetbrains text-[var(--bg-primary)] text-lg font-bold">3</span>
              </div>
              <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/>
              </svg>
              <h4 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
                TRADE INSTANTLY
              </h4>
              <p className="font-jetbrains text-[var(--text-secondary)] text-xs font-normal leading-[1.7]">
                Click any market card to jump to Polymarket or Kalshi. One click from discovery to execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col items-center gap-16 w-full px-[120px] py-[100px] bg-[var(--bg-primary)]">
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
            Everything Happens Inline
          </h2>
          <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] text-center w-[660px]">
            No popups, no sidebars, no context switching. Market data appears right where you need it — inside Twitter.
          </p>
        </div>

        {/* Feature Cards - Single Row */}
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13h2v8H3v-8zm4-8h2v16H7V5zm4 4h2v12h-2V9zm4-4h2v16h-2V5zm4 7h2v9h-2v-9z"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
              Never Miss an Edge
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              Markets update in real-time as you scroll. When odds shift, you'll see it instantly—no refresh needed.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 000 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1 1 0 000-.8zM12 18c-3.17 0-6.17-2.29-7.9-6C5.83 8.29 8.83 6 12 6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
              Zero Noise
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              Only see markets that actually match the tweet. No false positives, no spam—just relevant opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
              One-Click Trading
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              Click any market card to jump straight to Polymarket or Kalshi. From signal to trade in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="flex flex-col items-center gap-12 w-full px-[120px] py-[80px] bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
        <h2 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
          650+ Markets Across Two Platforms
        </h2>
        <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] text-center w-[600px]">
          Musashi aggregates prediction markets from the two largest platforms in real time.
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

      {/* Final CTA Section */}
      <section className="flex flex-col items-center gap-8 w-full px-[120px] py-[100px] bg-[var(--bg-primary)] border border-[var(--border-primary)]">
        <h2 className="font-grotesk text-[var(--text-primary)] text-[48px] font-bold tracking-[-1px] text-center">
          Stop Missing Mispriced Markets
        </h2>
        <p className="font-jetbrains text-[var(--text-secondary)] text-[15px] font-normal leading-[1.7] text-center w-[640px]">
          Every tweet you scroll past could be hiding a trading opportunity. Musashi makes sure you never miss one.
        </p>

        <button className="px-12 py-5 bg-[var(--text-primary)] hover:opacity-90 transition-opacity">
          <span className="font-jetbrains text-[var(--bg-primary)] text-sm font-bold">INSTALL ON CHROME — FREE</span>
        </button>

        <span className="font-jetbrains text-[var(--text-tertiary)] text-xs font-medium text-center">
          Chrome Extension • No account needed • Works instantly
        </span>

        <div className="flex items-center justify-center gap-20 w-full pt-12">
          <div className="flex flex-col items-center gap-2">
            <span className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
              &lt;200ms
            </span>
            <span className="font-jetbrains text-[var(--text-secondary)] text-[11px] font-medium text-center">
              DETECTION LATENCY
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
              650+
            </span>
            <span className="font-jetbrains text-[var(--text-secondary)] text-[11px] font-medium text-center">
              LIVE MARKETS
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
              30s
            </span>
            <span className="font-jetbrains text-[var(--text-secondary)] text-[11px] font-medium text-center">
              PRICE REFRESH RATE
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-8 w-full px-[120px] py-12 bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <span className="font-jetbrains text-[var(--text-primary)] text-base font-semibold tracking-[1px]">
              MUSASHI
            </span>
            <span className="font-jetbrains text-[var(--text-tertiary)] text-xs font-normal">
              YOUR EDGE ON PREDICTION MARKETS
            </span>
          </div>

          <nav className="flex gap-8">
            <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">TWITTER</a>
            <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">GITHUB</a>
            <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">CHROME WEB STORE</a>
          </nav>
        </div>

        <div className="w-full h-[1px] bg-[var(--border-primary)]" />

        <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-normal">
          © 2026 MUSASHI. ALL RIGHTS RESERVED.
        </span>

        <div className="flex justify-between items-center w-full pt-2 border-t border-[var(--border-primary)]">
          <span className="font-jetbrains text-[10px] font-medium text-[var(--text-muted)]">ALL SYSTEMS NOMINAL</span>
          <span className="font-jetbrains text-[10px] font-medium text-[var(--text-tertiary)]">FEED LATENCY 12ms</span>
          <span className="font-jetbrains text-[10px] font-medium text-[var(--text-tertiary)]">MUSASHI PROTOCOL v2.4.1</span>
          <span className="font-jetbrains text-[10px] font-medium text-[var(--text-tertiary)]">UTC 02:47:33</span>
        </div>
      </footer>
    </div>
  );
}
