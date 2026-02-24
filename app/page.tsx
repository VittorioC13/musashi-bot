import Image from "next/image";

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
            <div className="p-5 pt-14 pb-4 bg-[var(--tweet-bg)] flex flex-col gap-3 h-full">
              {/* Pinned indicator */}
              <div className="flex items-center gap-[6px] pl-[50px] w-full">
                <svg className="w-3 h-3 fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"/>
                </svg>
                <span className="font-inter text-[#71767B] text-[13px] font-bold">Pinned</span>
              </div>

              {/* Tweet Header */}
              <div className="flex items-start justify-between gap-[10px] w-full">
                <div className="flex items-start gap-[10px] flex-1">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/images/generated-1771892787267.png"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="flex items-center gap-1">
                      <span className="font-inter text-[var(--tweet-text)] text-[15px] font-bold">Elon Musk</span>
                      <svg className="w-4 h-4 fill-[#1D9BF0]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.52 3.59a.75.75 0 011.06 0l1.42 1.42 1.06-1.06c1.36-1.36 3.58-1.36 4.94 0l2.83 2.83c1.36 1.36 1.36 3.58 0 4.94l-1.06 1.06 1.42 1.42a.75.75 0 010 1.06l-8.66 8.66a.75.75 0 01-1.06 0l-1.42-1.42-1.06 1.06c-1.36 1.36-3.58 1.36-4.94 0L.36 19.73c-1.36-1.36-1.36-3.58 0-4.94l1.06-1.06L.0 12.31a.75.75 0 010-1.06L8.52 3.59zM12 6.94L6.94 12 12 17.06 17.06 12 12 6.94z"/>
                      </svg>
                      <span className="font-inter text-[#71767B] text-[15px] font-normal">@elonmusk</span>
                      <span className="font-inter text-[#71767B] text-[15px] font-normal">· 23h</span>
                    </div>
                  </div>
                </div>
                <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/>
                </svg>
              </div>

              {/* Tweet Body */}
              <p className="font-inter text-[var(--tweet-text)] text-[15px] leading-[1.5] w-full">
                Grok 4.20 is BASED.<br /><br />
                The only AI that doesn&apos;t equivocate when asked if America is on stolen land.<br /><br />
                The others are weak sauce.
              </p>

              {/* Market Card */}
              <div className="flex flex-col gap-3 p-4 px-5 bg-[var(--tweet-card)] border border-[var(--tweet-border)] rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.08)] w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="font-inter text-[#71767B] text-xs font-normal">Prediction Market</span>
                    <span className="font-inter text-[#71767B] text-xs font-normal">·</span>
                    <span className="font-inter text-[#71767B] text-xs font-normal">Polymarket</span>
                  </div>
                  <span className="font-jetbrains text-[#8B8B8B] text-[11px] font-bold">100% match</span>
                </div>
                <span className="font-inter text-[var(--tweet-text)] text-sm font-semibold leading-[1.4] w-full">
                  Will xAI have the best AI model at the end of February 2026?
                </span>
                <div className="flex items-center gap-4 w-full">
                  <div className="flex gap-2">
                    <span className="font-inter text-[#71767B] text-xs font-bold">YES</span>
                    <span className="font-inter text-[var(--tweet-text)] text-xl font-bold">2%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-inter text-[#71767B] text-xs font-bold">NO</span>
                    <span className="font-inter text-[#FF4444] text-xl font-bold">98%</span>
                    <svg className="w-[14px] h-[14px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                  <span className="font-inter text-[#71767B] text-[13px] font-semibold">-0.4%</span>
                </div>
                <div className="relative w-full h-1 bg-[#2F3336] rounded-sm overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-[2%] bg-[#00CC66] rounded-sm" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-inter text-[#8B8B8B] text-xs font-normal">Resolves Feb 28</span>
                  <span className="font-inter text-[#71767B] text-xs font-normal">$350K</span>
                </div>
              </div>

              {/* Tweet Actions */}
              <div className="flex items-center justify-between w-full pt-2">
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/>
                  </svg>
                  <span className="font-inter text-[#71767B] text-xs font-normal">12.4K</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                  </svg>
                  <span className="font-inter text-[#71767B] text-xs font-normal">8.2K</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>
                  </svg>
                  <span className="font-inter text-[#71767B] text-xs font-normal">95K</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Without Musashi - Right Side */}
          <div className="absolute right-0 top-0 w-[600px] h-full bg-black overflow-hidden">
            <div className="p-5 pt-14 pb-4 bg-[var(--tweet-bg)] flex flex-col gap-3 h-full">
              {/* Pinned indicator */}
              <div className="flex items-center gap-[6px] pl-[50px] w-full">
                <svg className="w-3 h-3 fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"/>
                </svg>
                <span className="font-inter text-[#71767B] text-[13px] font-bold">Pinned</span>
              </div>

              {/* Tweet Header */}
              <div className="flex items-start justify-between gap-[10px] w-full">
                <div className="flex items-start gap-[10px] flex-1">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/images/generated-1771892787267.png"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="flex items-center gap-1">
                      <span className="font-inter text-[var(--tweet-text)] text-[15px] font-bold">Elon Musk</span>
                      <svg className="w-4 h-4 fill-[#1D9BF0]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.52 3.59a.75.75 0 011.06 0l1.42 1.42 1.06-1.06c1.36-1.36 3.58-1.36 4.94 0l2.83 2.83c1.36 1.36 1.36 3.58 0 4.94l-1.06 1.06 1.42 1.42a.75.75 0 010 1.06l-8.66 8.66a.75.75 0 01-1.06 0l-1.42-1.42-1.06 1.06c-1.36 1.36-3.58 1.36-4.94 0L.36 19.73c-1.36-1.36-1.36-3.58 0-4.94l1.06-1.06L.0 12.31a.75.75 0 010-1.06L8.52 3.59zM12 6.94L6.94 12 12 17.06 17.06 12 12 6.94z"/>
                      </svg>
                      <span className="font-inter text-[#71767B] text-[15px] font-normal">@elonmusk</span>
                      <span className="font-inter text-[#71767B] text-[15px] font-normal">· 23h</span>
                    </div>
                  </div>
                </div>
                <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/>
                </svg>
              </div>

              {/* Tweet Body */}
              <p className="font-inter text-[var(--tweet-text)] text-[15px] leading-[1.5] w-full">
                Grok 4.20 is BASED.<br /><br />
                The only AI that doesn&apos;t equivocate when asked if America is on stolen land.<br /><br />
                The others are weak sauce.
              </p>

              {/* Tweet Actions */}
              <div className="flex items-center justify-between w-full pt-2">
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/>
                  </svg>
                  <span className="font-inter text-[#71767B] text-xs font-normal">12.4K</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                  </svg>
                  <span className="font-inter text-[#71767B] text-xs font-normal">8.2K</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>
                  </svg>
                  <span className="font-inter text-[#71767B] text-xs font-normal">95K</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-[6px]">
                  <svg className="w-[18px] h-[18px] fill-[#71767B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
                  </svg>
                </div>
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
          <div className="absolute left-6 top-5 px-[14px] py-[6px] bg-[var(--overlay-light)] border border-[var(--border-lighter)] rounded-md z-10">
            <span className="font-jetbrains text-[#FFFFFF60] text-[11px] font-bold tracking-[1px]">With Musashi</span>
          </div>
          <div className="absolute right-6 top-5 px-[14px] py-[6px] bg-[var(--overlay-light)] border border-[var(--border-lighter)] rounded-md z-10">
            <span className="font-jetbrains text-[#FFFFFF60] text-[11px] font-bold tracking-[1px]">Without Musashi</span>
          </div>

          {/* Divider Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[var(--text-primary)] opacity-60 shadow-[0_0_20px_rgba(255,255,255,0.4)] -translate-x-1/2 z-20" />

          {/* Slider Handle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--text-primary)] rounded-full flex items-center justify-center shadow-[0_2px_16px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing z-30">
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
