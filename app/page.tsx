import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";

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
              // MUSASHI_FEED ACTIVE — BTC DOM: 54.2% — FEAR INDEX: 73 [GREED]
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-jetbrains text-[var(--text-primary)] text-[52px] font-normal leading-[1.15] tracking-[-2px]">
            Trade the <br />[Tweets]
          </h1>

          {/* Subtitle */}
          <p className="font-jetbrains text-[var(--text-secondary)] text-[15px] font-normal leading-[1.7]">
            Real-time intelligence, on chain signals, and<br />
            predictive analytics. Engineered for those who move<br />
            before the market.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="px-8 py-[14px] bg-[var(--overlay-light)] border border-[var(--border-lighter)] hover:bg-[var(--overlay-lighter)] transition-colors">
              <span className="font-jetbrains text-[var(--text-primary)] text-xs font-bold">Take a look</span>
            </button>
            <button className="px-8 py-[14px] bg-[var(--text-primary)] hover:opacity-90 transition-opacity">
              <span className="font-jetbrains text-[var(--bg-primary)] text-xs font-bold">Build-in &gt;&gt;&gt;</span>
            </button>
          </div>
        </div>

        {/* Hero Figure - Musashi Image */}
        <div className="absolute right-0 top-0 w-[860px] h-[860px] pointer-events-none">
          <div className="relative w-full h-full">
            {/* Musashi samurai image */}
            <div className="absolute -left-[50px] top-0 w-[860px] h-[860px]">
              <Image
                src="/images/generated-1771830449125.png"
                alt="Miyamoto Musashi"
                fill
                className="object-cover opacity-65"
                priority
                unoptimized
              />
            </div>

            {/* Gradient overlays - fade to background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] from-0% via-[#0C0C0C] via-10% to-transparent to-45%" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-70% to-[#0C0C0C] to-100%" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent from-85% to-[#0C0C0C] to-100%" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent from-70% via-[#0C0C0C80] via-85% to-[#0C0C0C] to-100%" />
          </div>
        </div>

        {/* Status Bar */}
        <div className="absolute bottom-0 left-0 w-full px-[80px] py-2 border-t border-[var(--border-lightest)] flex justify-between z-10">
          <span className="font-jetbrains text-[10px] font-medium text-[#FFFFFF30]">ALL SYSTEMS NOMINAL</span>
          <span className="font-jetbrains text-[10px] font-medium text-[#FFFFFF20]">FEED LATENCY 12ms</span>
          <span className="font-jetbrains text-[10px] font-medium text-[#FFFFFF20]">MUSASHI PROTOCOL v2.4.1</span>
          <span className="font-jetbrains text-[10px] font-medium text-[#FFFFFF20]">UTC 02:47:33</span>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="flex flex-col items-center gap-12 w-full px-[80px] py-[100px] bg-[var(--bg-primary)]">
        <div className="flex flex-col items-center gap-4">
          <span className="font-jetbrains text-[var(--text-lighter)] text-[11px] font-bold tracking-[2px]">
            // SEE THE DIFFERENCE
          </span>
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
            <span className="font-jetbrains text-[var(--text-lighter)] text-[11px] font-bold tracking-[2px]">
              // HOW IT WORKS
            </span>
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
          <span className="font-jetbrains text-[var(--text-lighter)] text-[11px] font-bold tracking-[2px]">
            // BUILT FOR TRADERS
          </span>
          <h2 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
            Everything Happens Inline
          </h2>
          <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] text-center w-[660px]">
            No popups, no sidebars, no context switching. Market data appears right where you need it — inside Twitter.
          </p>
        </div>

        {/* Feature Cards - Row 1 */}
        <div className="flex gap-6 w-full">
          <div className="flex-1 flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13h2v8H3v-8zm4-8h2v16H7V5zm4 4h2v12h-2V9zm4-4h2v16h-2V5zm4 7h2v9h-2v-9z"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
              LIVE PRICE UPDATES
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              Yes/No odds refresh every 30 seconds with flash animations on price movement. See exactly where the market is moving.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 000 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1 1 0 000-.8zM12 18c-3.17 0-6.17-2.29-7.9-6C5.83 8.29 8.83 6 12 6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
              SMART MATCHING
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              500+ synonym expansions, n-gram analysis, and confidence scoring ensure you only see the most relevant markets for each tweet.
            </p>
          </div>
        </div>

        {/* Feature Cards - Row 2 */}
        <div className="flex gap-6 w-full">
          <div className="flex-1 flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
              DARK MODE NATIVE
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              Automatically detects Twitter&apos;s theme and adapts. Cards blend seamlessly into your feed whether you use light or dark mode.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <svg className="w-7 h-7 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 6l-9.5 9.5-5-5L1 18l1.5 1.5 6-6.01 5 5L22 8.5z"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-lg font-semibold">
              SENTIMENT DETECTION
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              Each card shows bullish or bearish sentiment based on the tweet&apos;s language. Understand market direction at a glance with color-coded indicators.
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
            <span className="font-jetbrains text-[var(--text-muted)] text-[13px] font-medium">[500+ MARKETS]</span>
            <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-normal">// LIVE PRICE POLLING EVERY 30S</span>
          </div>

          <div className="flex-1 flex flex-col items-center gap-3 px-12 py-8 bg-[var(--bg-tertiary)] border border-[var(--border-primary)]">
            <span className="font-grotesk text-[var(--text-primary)] text-[22px] font-bold">Kalshi</span>
            <span className="font-jetbrains text-[var(--text-muted)] text-[13px] font-medium">[150+ MARKETS]</span>
            <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-normal">// CFTC-REGULATED EXCHANGE</span>
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
              // YOUR EDGE ON PREDICTION MARKETS
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
