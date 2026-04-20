'use client';

import { useEffect, useRef, useState } from 'react';
import TerminalDemo from "./TerminalDemo";
import SmoothScrollLink from "./components/SmoothScrollLink";
import FAQ from "./components/FAQ";
import InstallCodeReveal from "./components/InstallCodeReveal";
import useCompactLayout from "./hooks/useCompactLayout";

const mobileInstallSteps = [
  {
    label: 'Clone',
    value: 'git clone https://github.com/VittorioC13/Musashi.git',
  },
  {
    label: 'Install',
    value: 'cd Musashi && npm install',
  },
  {
    label: 'Run',
    value: 'npm run agent',
  },
];

export default function Home() {
  const [showInstallCode, setShowInstallCode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pendingInstallScroll, setPendingInstallScroll] = useState(false);
  const isCompactLayout = useCompactLayout();
  const installSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!pendingInstallScroll) return;

    const frameId = window.requestAnimationFrame(() => {
      installSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setPendingInstallScroll(false);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pendingInstallScroll]);

  const handleInstallClick = () => {
    if (isCompactLayout) {
      setMobileMenuOpen(false);
      setPendingInstallScroll(true);
      return;
    }

    setShowInstallCode((current) => !current);
  };

  return (
    <div className="flex flex-col w-full bg-[#060A12]">
      <header className="relative z-50 flex items-center justify-between w-full gap-4 border-b border-[var(--border-primary)] bg-[#060A12] px-4 py-4 sm:px-6 lg:px-[80px]">
        <div className="font-jetbrains text-xl font-bold tracking-[1px] text-[var(--text-primary)] sm:text-[22px]">
          MUSASHI
        </div>
        <nav className={`${isCompactLayout ? 'hidden' : 'hidden md:flex'} items-center gap-8`}>
          <a href="/mission" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">MISSION</a>
          <a href="/get-started" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">GET STARTED</a>
          <a href="https://musashitechnologiesllc.mintlify.app/" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">DOCS</a>
          <a href="/ai" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">API</a>
          <a href="/pricing" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">PRICING</a>
          <a href="/privacy" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">PRIVACY</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleInstallClick}
            className="border border-[#FFFFFF40] bg-transparent px-4 py-[10px] transition-colors hover:bg-[var(--overlay-light)] sm:px-5"
          >
            <span className="font-jetbrains text-xs font-bold text-[var(--text-primary)]">
              {isCompactLayout ? 'Install' : showInstallCode ? 'Close' : 'Install'}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className={`flex h-10 w-10 items-center justify-center border border-[#FFFFFF24] bg-[#FFFFFF08] ${isCompactLayout ? '' : 'md:hidden'}`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="flex flex-col gap-[4px]">
              <span className={`block h-[1.5px] w-4 bg-white transition-transform ${mobileMenuOpen ? 'translate-y-[5.5px] rotate-45' : ''}`}></span>
              <span className={`block h-[1.5px] w-4 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-[1.5px] w-4 bg-white transition-transform ${mobileMenuOpen ? '-translate-y-[5.5px] -rotate-45' : ''}`}></span>
            </span>
          </button>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div className={`fixed inset-0 z-40 bg-[#060A12]/90 backdrop-blur-md ${isCompactLayout ? '' : 'md:hidden'}`}>
          <div className="absolute inset-x-4 top-[76px] rounded-[28px] border border-[#FFFFFF14] bg-[#060A12] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="mb-5 flex items-center justify-between border-b border-[#FFFFFF10] pb-4">
              <div>
                <div className="font-jetbrains text-[10px] uppercase tracking-[0.22em] text-[#8C99AD]">Mobile Menu</div>
                <div className="mt-2 font-grotesk text-[28px] leading-none text-white">Navigate fast.</div>
              </div>
              <span className="rounded-full border border-[#00FF88]/20 bg-[#00FF88]/10 px-3 py-1 font-jetbrains text-[10px] uppercase tracking-[0.16em] text-[#A7F3D0]">
                responsive
              </span>
            </div>

            <nav className="flex flex-col gap-3">
              <a href="/mission" onClick={() => setMobileMenuOpen(false)} className="border border-[#FFFFFF12] bg-[#FFFFFF06] px-4 py-4 font-jetbrains text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#FFFFFF10]">
                MISSION
              </a>
              <a href="/get-started" onClick={() => setMobileMenuOpen(false)} className="border border-[#FFFFFF12] bg-[#FFFFFF06] px-4 py-4 font-jetbrains text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#FFFFFF10]">
                GET STARTED
              </a>
              <a href="https://musashitechnologiesllc.mintlify.app/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="border border-[#FFFFFF12] bg-[#FFFFFF06] px-4 py-4 font-jetbrains text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#FFFFFF10]">
                DOCS
              </a>
              <a href="/ai" onClick={() => setMobileMenuOpen(false)} className="border border-[#FFFFFF12] bg-[#FFFFFF06] px-4 py-4 font-jetbrains text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#FFFFFF10]">
                API CONSOLE
              </a>
              <a href="/pricing" onClick={() => setMobileMenuOpen(false)} className="border border-[#FFFFFF12] bg-[#FFFFFF06] px-4 py-4 font-jetbrains text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#FFFFFF10]">
                PRICING
              </a>
              <a href="/privacy" onClick={() => setMobileMenuOpen(false)} className="border border-[#FFFFFF12] bg-[#FFFFFF06] px-4 py-4 font-jetbrains text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#FFFFFF10]">
                PRIVACY
              </a>
            </nav>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleInstallClick}
                className="bg-white px-4 py-4 text-center"
              >
                <span className="font-jetbrains text-[11px] font-bold text-[#060A12]">SETUP</span>
              </button>
              <SmoothScrollLink
                targetId="see-the-difference"
                className="border border-[#FFFFFF18] bg-transparent px-4 py-4 text-center transition-colors hover:bg-[#FFFFFF08]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-jetbrains text-[11px] font-bold text-white">DEMO</span>
              </SmoothScrollLink>
            </div>
          </div>
        </div>
      ) : null}

      <section className={`relative w-full overflow-hidden bg-[#060A12] ${isCompactLayout ? '' : 'lg:h-[860px]'}`}>

        <div className={`relative z-10 flex w-full max-w-[560px] flex-col gap-5 px-4 py-12 sm:px-6 sm:py-16 ${isCompactLayout ? '' : 'lg:absolute lg:left-[80px] lg:top-[100px] lg:w-[500px] lg:gap-7 lg:px-0 lg:py-0'}`}>
          <div className={`flex items-center gap-2 ${isCompactLayout ? '' : 'lg:hidden'}`}>
            <span className="h-2 w-2 rounded-full bg-[#00FF88]"></span>
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.22em] text-[#A7F3D0]">Agent-ready prediction market intel</span>
          </div>

          <h1 className="font-jetbrains text-[34px] font-normal leading-[1.02] tracking-[-2px] text-[var(--text-primary)] sm:text-[42px] lg:text-[52px]">
            Trade the <br />[Tweets]
          </h1>

          <p className="max-w-[27rem] font-jetbrains text-[14px] leading-[1.65] text-[var(--text-secondary)] sm:text-[15px] sm:leading-[1.7]">
            In the future, your agents scroll and trade for you.
          </p>

          <div className="flex w-full max-w-[368px] flex-col gap-3">
            {/* Row 1: Install + See Demo */}
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleInstallClick}
                className="w-full bg-[var(--text-primary)] px-8 py-[14px] text-center transition-opacity hover:opacity-90"
              >
                <span className="font-jetbrains text-xs font-bold text-[var(--bg-primary)]">
                  {isCompactLayout ? 'Install' : showInstallCode ? 'Hide Setup' : 'Install'}
                </span>
              </button>
              <SmoothScrollLink targetId="see-the-difference" className="w-full border border-[#FFFFFF20] bg-[#FFFFFF08] px-8 py-[14px] text-center transition-colors hover:bg-[#FFFFFF12]">
                <span className="font-jetbrains text-xs font-bold text-[var(--text-primary)]">See Demo</span>
              </SmoothScrollLink>
            </div>
            {/* Row 2: Get Started — full width matching row above */}
            <a
              href="/get-started"
              className="flex w-full items-center justify-center border border-[#00FF88]/35 bg-[#00FF88]/6 py-[14px] text-center transition-colors hover:border-[#00FF88]/60 hover:bg-[#00FF88]/10"
            >
              <span className="font-grotesk text-[15px] font-bold tracking-[-0.3px] text-[#00FF88]">Get Started →</span>
            </a>
            <span className="font-jetbrains text-[11px] font-normal text-[var(--text-tertiary)]">
              Free • No Rate Limits • REST API + Agent SDK
            </span>
          </div>

          <div className={`flex flex-wrap gap-2 ${isCompactLayout ? '' : 'lg:hidden'}`}>
            <span className="border border-[#FFFFFF14] bg-[#FFFFFF06] px-3 py-2 font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[#C4CCD8]">
              900+ markets live
            </span>
            <span className="border border-[#FFFFFF14] bg-[#FFFFFF06] px-3 py-2 font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[#C4CCD8]">
              71 tracked accounts
            </span>
            <span className="border border-[#FFFFFF14] bg-[#FFFFFF06] px-3 py-2 font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[#C4CCD8]">
              7 api endpoints
            </span>
          </div>

          <div className={`grid grid-cols-2 gap-3 ${isCompactLayout ? '' : 'lg:hidden'}`}>
            <div className="border border-[#FFFFFF15] bg-[#0A0A0A]/70 px-4 py-3 backdrop-blur-md">
              <span className="block font-jetbrains text-[10px] font-medium text-[#666]">LIVE MARKETS</span>
              <span className="block font-jetbrains text-sm font-bold text-white">659</span>
            </div>
            <div className="border border-[#FFFFFF15] bg-[#0A0A0A]/70 px-4 py-3 backdrop-blur-md">
              <span className="block font-jetbrains text-[10px] font-medium text-[#666]">TRACKED ACCOUNTS</span>
              <span className="block font-jetbrains text-sm font-bold text-white">71 sources</span>
            </div>
          </div>

          <div
            ref={installSectionRef}
            className={`rounded-[28px] border border-[#FFFFFF14] bg-[#060A12] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-5 ${isCompactLayout ? '' : 'lg:hidden'}`}
          >
            <div>
              <h2 className="font-grotesk text-[24px] font-semibold leading-none text-white sm:text-[26px]">
                Install Musashi
              </h2>
            </div>
            <p className="mt-4 font-jetbrains text-[13px] leading-[1.7] text-[var(--text-secondary)]">
              Clone the repo, install dependencies, then run <code className="font-jetbrains text-white">npm run agent</code>.
            </p>

            <div className="mt-5 space-y-3 border-t border-[#FFFFFF10] pt-5">
              {mobileInstallSteps.map((step) => (
                <div key={step.label} className="rounded-2xl border border-[#FFFFFF10] bg-[#03070D] px-4 py-3">
                  <div className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-[#6E7D93]">{step.label}</div>
                  <code className="mt-2 block whitespace-pre-wrap font-jetbrains text-[12px] leading-5 text-white">
                    {step.value}
                  </code>
                </div>
              ))}

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="/ai" className="border border-[#FFFFFF18] bg-[#FFFFFF08] px-4 py-3 text-center transition-colors hover:bg-[#FFFFFF10]">
                  <span className="font-jetbrains text-[11px] font-bold text-white">Open API Docs</span>
                </a>
                <a href="/install" className="border border-[#FFFFFF18] bg-transparent px-4 py-3 text-center transition-colors hover:bg-[#FFFFFF08]">
                  <span className="font-jetbrains text-[11px] font-bold text-white">Install Page</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={isCompactLayout ? 'hidden' : 'hidden lg:block'}>
          <InstallCodeReveal showCode={showInstallCode} />
        </div>
      </section>

      <div id="see-the-difference">
        <TerminalDemo compactLayout={isCompactLayout} />
      </div>

      {/* ── Unified features section ── */}
      <section className="flex w-full flex-col items-center gap-10 bg-[#060A12] px-4 py-16 sm:px-6 lg:px-[120px] lg:py-[80px]">
        <div className="flex w-full max-w-[1100px] flex-col items-center gap-3 text-center">
          <h2 className="font-grotesk text-[32px] font-bold tracking-[-1px] text-[var(--text-primary)] md:text-[42px]">
            Everything your agent needs
          </h2>
          <p className="max-w-[480px] font-jetbrains text-sm leading-[1.8] text-[var(--text-secondary)]">
            Real-time signals from social data — accessible via Claude, REST API, or SDK. No infrastructure required.
          </p>
        </div>

        <div className="flex w-full max-w-[1100px] flex-col gap-6">

          {/* MCP — flagship full-width card */}
          <div className="flex flex-col gap-0 border border-[#00FF88]/25 bg-[#060A12] lg:flex-row">
            <div className="flex flex-col justify-between gap-6 p-7 lg:w-[55%] lg:p-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="border border-[#00FF88]/30 bg-[#00FF88]/10 px-2 py-0.5 font-jetbrains text-[10px] font-bold uppercase tracking-[0.14em] text-[#00FF88]">New</span>
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[var(--text-tertiary)]">Native AI Integration</span>
                </div>
                <h3 className="font-grotesk text-[26px] font-bold leading-[1.1] tracking-[-0.5px] text-[var(--text-primary)] lg:text-[30px]">
                  Use Musashi directly inside Claude
                </h3>
                <p className="font-jetbrains text-sm leading-[1.8] text-[var(--text-secondary)]">
                  Connect the MCP server once, then ask Claude anything — arbitrage opportunities, market briefs, smart money flows, wallet positions. 14 tools, zero code required.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/get-started"
                  className="bg-[var(--text-primary)] px-5 py-3 font-jetbrains text-xs font-bold text-[var(--bg-primary)] transition-opacity hover:opacity-90"
                >
                  Connect to Claude →
                </a>
                <a
                  href="https://github.com/MusashiBot/musashi-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--border-primary)] bg-transparent px-5 py-3 font-jetbrains text-xs font-bold text-[var(--text-primary)] transition-colors hover:bg-[var(--overlay-light)]"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="border-t border-[#00FF88]/15 bg-[#03070D] p-6 lg:w-[45%] lg:border-l lg:border-t-0 lg:p-8">
              <div className="mb-4 font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[var(--text-tertiary)]">// Example conversation</div>
              <div className="space-y-4">
                {[
                  { role: 'you', text: 'What are the top arbitrage opportunities right now?' },
                  { role: 'claude', text: 'Found 3 opportunities. Largest: 7% spread on BTC $100k — Polymarket 63% vs Kalshi 70%. Suggested action: buy YES on Polymarket.' },
                  { role: 'you', text: 'Which crypto markets have smart money flowing in?' },
                  { role: 'claude', text: '4 markets showing institutional activity. Highest wallet concentration: ETH ETF approval (83% held by top 10 wallets).' },
                ].map((msg, i) => (
                  <div key={i} className="flex gap-3">
                    <span className={`flex-shrink-0 font-jetbrains text-[11px] font-bold ${msg.role === 'you' ? 'text-[var(--text-tertiary)]' : 'text-[#00FF88]'}`}>
                      {msg.role === 'you' ? 'You' : 'Claude'}
                    </span>
                    <p className="font-jetbrains text-[12px] leading-[1.7] text-[var(--text-secondary)]">{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-[var(--border-primary)] pt-5">
                <div className="border border-[var(--border-primary)] bg-[var(--overlay-lighter)] px-3 py-2">
                  <span className="block font-jetbrains text-[10px] text-[var(--text-tertiary)]">TOOLS</span>
                  <span className="font-jetbrains text-sm font-bold text-[var(--text-primary)]">14</span>
                </div>
                <div className="border border-[var(--border-primary)] bg-[var(--overlay-lighter)] px-3 py-2">
                  <span className="block font-jetbrains text-[10px] text-[var(--text-tertiary)]">AI CLIENTS</span>
                  <span className="font-jetbrains text-sm font-bold text-[var(--text-primary)]">Claude · GPT</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 signal feature cards — 2×2 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {/* Automated Feed */}
            <div className="flex flex-col gap-5 border border-[var(--border-primary)] bg-[#060A12] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 fill-[#00FF88]" viewBox="0 0 24 24"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/></svg>
                <h3 className="font-grotesk text-lg font-semibold text-[var(--text-primary)]">Automated Feed</h3>
              </div>
              <p className="font-jetbrains text-sm leading-[1.8] text-[var(--text-secondary)]">
                Monitors 71 high-signal accounts across 8 categories. Every tweet is matched to relevant markets and labeled with urgency — updated every 2 minutes.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['CRYPTO', 'POLITICS', 'ECONOMICS', 'TECH', 'SPORTS', 'GEOPOLITICS', 'FINANCE', 'BREAKING'].map(c => (
                  <span key={c} className="border border-[var(--border-primary)] bg-[var(--overlay-lighter)] px-2 py-1 font-jetbrains text-[10px] text-[var(--text-secondary)]">{c}</span>
                ))}
              </div>
            </div>

            {/* Trading Signals */}
            <div className="flex flex-col gap-5 border border-[var(--border-primary)] bg-[#060A12] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 fill-[#00FF88]" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                <h3 className="font-grotesk text-lg font-semibold text-[var(--text-primary)]">Trading Signals</h3>
              </div>
              <p className="font-jetbrains text-sm leading-[1.8] text-[var(--text-secondary)]">
                AI sentiment analysis returns direction, confidence, edge, and urgency for every market match. Plugs directly into your trading logic.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="border border-[var(--border-primary)] bg-[var(--overlay-lighter)] px-3 py-2 text-center">
                  <div className="font-jetbrains text-xs font-bold text-[#00FF88]">BULLISH</div>
                  <div className="mt-0.5 font-jetbrains text-[10px] text-[var(--text-tertiary)]">Long</div>
                </div>
                <div className="border border-[var(--border-primary)] bg-[var(--overlay-lighter)] px-3 py-2 text-center">
                  <div className="font-jetbrains text-xs font-bold text-[#FF4444]">BEARISH</div>
                  <div className="mt-0.5 font-jetbrains text-[10px] text-[var(--text-tertiary)]">Short</div>
                </div>
                <div className="border border-[var(--border-primary)] bg-[var(--overlay-lighter)] px-3 py-2 text-center">
                  <div className="font-jetbrains text-xs font-bold text-[#9CA3AF]">NEUTRAL</div>
                  <div className="mt-0.5 font-jetbrains text-[10px] text-[var(--text-tertiary)]">Hold</div>
                </div>
              </div>
            </div>

            {/* Arbitrage */}
            <div className="flex flex-col gap-5 border border-[var(--border-primary)] bg-[#060A12] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 fill-[#00FF88]" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                <h3 className="font-grotesk text-lg font-semibold text-[var(--text-primary)]">Arbitrage Detection</h3>
              </div>
              <p className="font-jetbrains text-sm leading-[1.8] text-[var(--text-secondary)]">
                Matches the same event across Polymarket and Kalshi in real time. Returns spread, direction, and profit potential — filtered by confidence and category.
              </p>
              <div className="flex items-center gap-2 border border-[var(--border-primary)] bg-[var(--overlay-lighter)] px-4 py-3">
                <span className="font-jetbrains text-xs text-[var(--text-secondary)]">Poly 63% → Kalshi 70%</span>
                <span className="ml-auto font-jetbrains text-xs font-bold text-[#00FF88]">7% spread</span>
              </div>
            </div>

            {/* Market Movers */}
            <div className="flex flex-col gap-5 border border-[var(--border-primary)] bg-[#060A12] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 fill-[#00FF88]" viewBox="0 0 24 24"><path d="M3 13h2v8H3v-8zm4-8h2v16H7V5zm4 4h2v12h-2V9zm4-4h2v16h-2V5zm4 7h2v9h-2v-9z"/></svg>
                <h3 className="font-grotesk text-lg font-semibold text-[var(--text-primary)]">Market Movers</h3>
              </div>
              <p className="font-jetbrains text-sm leading-[1.8] text-[var(--text-secondary)]">
                Surfaces markets with significant price movement over 1h or 24h windows using stored price history and real-time polling.
              </p>
              <div className="flex gap-3">
                <div className="flex-1 border border-[var(--border-primary)] bg-[var(--overlay-lighter)] px-3 py-2">
                  <span className="font-jetbrains text-[10px] text-[var(--text-tertiary)]">1H CHANGE</span>
                  <span className="ml-2 font-jetbrains text-sm font-bold text-[#00FF88]">+12%</span>
                </div>
                <div className="flex-1 border border-[var(--border-primary)] bg-[var(--overlay-lighter)] px-3 py-2">
                  <span className="font-jetbrains text-[10px] text-[var(--text-tertiary)]">24H CHANGE</span>
                  <span className="ml-2 font-jetbrains text-sm font-bold text-[#FF4444]">-8%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQ />

      <section className="flex w-full min-h-[360px] border border-[var(--border-primary)] bg-[#060A12] px-4 py-20 sm:px-6 lg:min-h-[500px] lg:px-[120px] lg:py-[120px]">
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-10">
          <h2 className="font-grotesk text-[42px] font-bold leading-[1.1] tracking-[-2px] text-[var(--text-primary)] text-center sm:text-[56px] lg:text-[72px]">
            Built for AI agents
          </h2>

          <a href="/ai" className="mx-auto bg-[var(--text-primary)] px-8 py-4 transition-opacity hover:opacity-90 sm:px-12 sm:py-5">
            <span className="font-jetbrains text-xs font-bold text-[var(--bg-primary)] sm:text-sm">START BUILDING — FREE</span>
          </a>
        </div>
      </section>

      <footer className="flex w-full flex-col gap-6 border-t border-[var(--border-primary)] bg-[#060A12] px-4 py-12 sm:px-6 lg:px-[120px]">
        <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-jetbrains text-base font-semibold tracking-[1px] text-[var(--text-primary)]">
              MUSASHI
            </span>
            <span className="max-w-[400px] font-jetbrains text-xs leading-relaxed text-[var(--text-tertiary)]">
              AI intelligence service for trading bots. Automated feed API with sentiment analysis and trading signals. Chrome extension for monitoring.
            </span>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-jetbrains text-[10px] font-bold uppercase tracking-[1.5px] text-[var(--text-muted)]">
                Product
              </span>
              <nav className="flex flex-col gap-2">
                <a href="/mission" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">Mission</a>
                <a href="/get-started" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">Get Started</a>
                <a href="https://musashitechnologiesllc.mintlify.app/" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">Docs</a>
                <a href="/ai" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">API Console</a>
                <a href="/pricing" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">Pricing</a>
                <a href="/privacy" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">Privacy</a>
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-jetbrains text-[10px] font-bold uppercase tracking-[1.5px] text-[var(--text-muted)]">
                Community
              </span>
              <nav className="flex flex-col gap-2">
                <a href="https://twitter.com/musashimarket" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">Twitter</a>
                <a href="https://github.com/VittorioC13/musashi-bot" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">GitHub</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[var(--border-primary)]" />

        <div className="flex w-full flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="font-jetbrains text-[11px] font-normal text-[var(--text-tertiary)]">
            © {new Date().getFullYear()} Musashi
          </span>
          <span className="font-jetbrains text-[11px] font-normal text-[var(--text-tertiary)]">
            Built for agents. Powered by prediction markets.
          </span>
        </div>
      </footer>
    </div>
  );
}
