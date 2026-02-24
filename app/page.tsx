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
          <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">CHAIN DATA</a>
          <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">TERMINAL</a>
          <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">DOCS</a>
          <a href="#" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">PROTOCOL</a>
        </nav>
        <button className="px-5 py-[10px] border border-[#FFFFFF40] bg-transparent hover:bg-[var(--overlay-light)] transition-colors">
          <span className="font-jetbrains text-[var(--text-primary)] text-xs font-bold">Install</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[860px] bg-[var(--bg-primary)]">
        {/* Hero Content */}
        <div className="absolute left-[80px] top-[100px] w-[500px] flex flex-col gap-7">
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

        {/* Hero Figure - Placeholder for Musashi image */}
        <div className="absolute right-0 top-0 w-[860px] h-[860px] overflow-hidden">
          <div className="relative w-full h-full">
            {/* Image placeholder - dark background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)] opacity-65" />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-[#0C0C0C80] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[var(--bg-primary)]" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[var(--bg-primary)]" />
          </div>
        </div>

        {/* Status Bar */}
        <div className="absolute bottom-0 left-0 w-full px-[80px] py-2 border-t border-[var(--border-lightest)] flex justify-between">
          <span className="font-jetbrains text-[10px] font-medium text-[#FFFFFF30]">ALL SYSTEMS NOMINAL</span>
          <span className="font-jetbrains text-[10px] font-medium text-[#FFFFFF20]">FEED LATENCY 12ms</span>
          <span className="font-jetbrains text-[10px] font-medium text-[#FFFFFF20]">MUSASHI PROTOCOL v2.4.1</span>
          <span className="font-jetbrains text-[10px] font-medium text-[#FFFFFF20]">UTC 02:47:33</span>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="flex flex-col items-center gap-12 w-full px-[120px] py-[100px] bg-[var(--bg-primary)]">
        <span className="font-jetbrains text-[var(--text-lighter)] text-[11px] font-bold tracking-[2px]">
          // SEE THE DIFFERENCE
        </span>
        <h2 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
          Musashi Fills the Gap between Talks and Trades
        </h2>

        {/* Comparison Area */}
        <div className="relative w-full h-[520px] border border-[var(--border-light)] rounded-xl overflow-hidden">
          {/* With Musashi - Left Side */}
          <div className="absolute left-0 top-0 w-[600px] h-full bg-black overflow-hidden">
            <div className="p-4 pt-14 pb-4 px-5 bg-[var(--tweet-bg)] flex flex-col gap-3 h-full">
              {/* Tweet content placeholder */}
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[var(--border-primary)]"></div>
                  <div className="flex flex-col gap-1">
                    <span className="font-inter text-[var(--tweet-text)] text-[15px] font-semibold">@elonmusk</span>
                    <span className="font-inter text-[var(--text-secondary)] text-xs">2h ago</span>
                  </div>
                </div>
                <p className="font-inter text-[var(--tweet-text)] text-[15px] leading-[1.5]">
                  Grok 4.20 is BASED.<br /><br />
                  The only AI that doesn&apos;t equivocate when asked if America is on stolen land.<br /><br />
                  The others are weak sauce.
                </p>
                {/* Market Card */}
                <div className="flex flex-col gap-3 p-4 px-5 bg-[var(--tweet-card)] border border-[var(--tweet-border)] rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.08)]">
                  <div className="flex items-center justify-between">
                    <span className="font-jetbrains text-[var(--text-primary)] text-sm font-semibold">Will Grok 4.20 release in Q1 2026?</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 px-3 py-2 bg-[#1a4d2e] border border-[#2d6a4f] rounded">
                      <span className="font-jetbrains text-[#4ade80] text-xs font-bold">YES 98¢</span>
                    </div>
                    <div className="flex-1 px-3 py-2 bg-[#4d1a1a] border border-[#6a2d2d] rounded">
                      <span className="font-jetbrains text-[#f87171] text-xs font-bold">NO 2¢</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-jetbrains text-[var(--text-tertiary)]">Vol: $350K</span>
                    <span className="font-jetbrains text-[#4ade80]">+12% (24h)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Without Musashi - Right Side */}
          <div className="absolute right-0 top-0 w-[600px] h-full bg-black overflow-hidden">
            <div className="p-4 pt-14 pb-4 px-5 bg-[var(--tweet-bg)] flex flex-col gap-3 h-full">
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[var(--border-primary)]"></div>
                  <div className="flex flex-col gap-1">
                    <span className="font-inter text-[var(--tweet-text)] text-[15px] font-semibold">@elonmusk</span>
                    <span className="font-inter text-[var(--text-secondary)] text-xs">2h ago</span>
                  </div>
                </div>
                <p className="font-inter text-[var(--tweet-text)] text-[15px] leading-[1.5]">
                  Grok 4.20 is BASED.<br /><br />
                  The only AI that doesn&apos;t equivocate when asked if America is on stolen land.<br /><br />
                  The others are weak sauce.
                </p>
              </div>
              {/* Missed Opportunity Banner */}
              <div className="flex flex-col items-center justify-center gap-3 py-12 px-5 bg-[var(--tweet-missed-bg)] border-t border-[var(--tweet-missed-border)] mt-auto">
                <svg className="w-10 h-10 fill-[var(--tweet-missed-icon)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8.5 5.5a7.029 7.029 0 002.79-.588zM5.21 3.088A7.028 7.028 0 018 2.5c5.5 0 8.5 5.5 8.5 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L5.21 3.089z"/><path d="M5.525 7.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-jetbrains text-[var(--tweet-missed-text)] text-[15px] font-bold leading-[1.6] text-center">
                    You scrolled past a<br />tradeable market
                  </span>
                  <span className="font-jetbrains text-[var(--tweet-missed-sub)] text-[13px] font-normal text-center">
                    98% NO at $350K volume
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute left-6 top-5 px-[14px] py-[6px] bg-[var(--overlay-light)] border border-[var(--border-lighter)] rounded-md">
            <span className="font-jetbrains text-[#FFFFFF60] text-[11px] font-bold tracking-[1px]">With Musashi</span>
          </div>
          <div className="absolute right-6 top-5 px-[14px] py-[6px] bg-[var(--overlay-light)] border border-[var(--border-lighter)] rounded-md">
            <span className="font-jetbrains text-[#FFFFFF60] text-[11px] font-bold tracking-[1px]">Without Musashi</span>
          </div>

          {/* Divider Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[var(--text-primary)] opacity-60 shadow-[0_0_20px_rgba(255,255,255,0.4)] -translate-x-1/2" />

          {/* Slider Handle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--text-primary)] rounded-full flex items-center justify-center shadow-[0_2px_16px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing">
            <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 13.5l-1.5 1.5L2 10l5-5 1.5 1.5L5.5 9.5h13l-3-3L17 5l5 5-5 5-1.5-1.5 3-3h-13l3 3z"/>
            </svg>
          </div>
        </div>

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
      </section>

      {/* How It Works Section */}
      <section className="flex flex-col items-center gap-16 w-full px-[120px] py-[100px] bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="font-jetbrains text-[var(--text-lighter)] text-[11px] font-bold tracking-[2px]">
            // HOW IT WORKS
          </span>
          <h2 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
            From Tweet to Trade in Seconds
          </h2>
          <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] text-center w-[700px]">
            Musashi runs silently in the background. No setup, no dashboards — just scroll Twitter like you normally do.
          </p>
        </div>

        <div className="flex gap-10 w-full">
          {/* Step 1 */}
          <div className="flex-1 flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <div className="flex items-center justify-center w-12 h-12 bg-[var(--text-primary)]">
              <span className="font-jetbrains text-[var(--bg-primary)] text-xl font-bold">1</span>
            </div>
            <svg className="w-8 h-8 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-xl font-semibold">
              SCROLL TWITTER
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              Browse your feed as usual. Musashi automatically scans every tweet for prediction market relevance using keyword matching and synonym expansion.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <div className="flex items-center justify-center w-12 h-12 bg-[var(--text-primary)]">
              <span className="font-jetbrains text-[var(--bg-primary)] text-xl font-bold">2</span>
            </div>
            <svg className="w-8 h-8 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13h2v8H3v-8zm4-8h2v16H7V5zm4 11h2v5h-2v-5zm4-7h2v12h-2V9zm4 3h2v9h-2v-9z"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-xl font-semibold">
              SEE LIVE ODDS
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              Market cards appear inline below relevant tweets — showing live Yes/No prices, 24h change, volume, and confidence scores. Updated every 30 seconds.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 flex flex-col gap-4 p-8 bg-[var(--bg-tertiary)] border-l-2 border-r border-b border-t border-[var(--border-primary)]">
            <div className="flex items-center justify-center w-12 h-12 bg-[var(--text-primary)]">
              <span className="font-jetbrains text-[var(--bg-primary)] text-xl font-bold">3</span>
            </div>
            <svg className="w-8 h-8 fill-[var(--text-primary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/>
            </svg>
            <h3 className="font-grotesk text-[var(--text-primary)] text-xl font-semibold">
              TRADE INSTANTLY
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] w-full">
              Click any market card to jump straight to Polymarket or Kalshi. One click from discovery to execution — no copy-pasting, no searching.
            </p>
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
