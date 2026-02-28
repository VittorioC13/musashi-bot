export default function Markets() {
  const categories = [
    { name: 'US Politics', count: '120+', color: '#4A90E2' },
    { name: 'Crypto', count: '95+', color: '#F5A623' },
    { name: 'Economics', count: '85+', color: '#50E3C2' },
    { name: 'Technology', count: '75+', color: '#B8E986' },
    { name: 'Sports', count: '65+', color: '#E94B3C' },
    { name: 'Entertainment', count: '60+', color: '#BD10E0' },
    { name: 'Geopolitics', count: '45+', color: '#7ED321' },
    { name: 'Monetary Policy', count: '40+', color: '#00FF88' },
    { name: 'Climate', count: '30+', color: '#417505' },
    { name: 'Gaming', count: '28+', color: '#9013FE' },
    { name: 'Music', count: '25+', color: '#FF6B6B' },
    { name: 'Science', count: '20+', color: '#4ECDC4' },
    { name: 'Lifestyle', count: '15+', color: '#FFE66D' },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-[80px] py-4 bg-[var(--bg-primary)] border-b border-[var(--border-primary)] gap-10">
        <a href="/" className="font-jetbrains text-[var(--text-primary)] text-[22px] font-bold tracking-[1px]">
          MUSASHI
        </a>
        <nav className="flex items-center gap-8">
          <a href="/markets" className="font-jetbrains text-[var(--text-primary)] text-xs font-medium">MARKETS</a>
          <a href="/ai" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">DOCS</a>
          <a href="/pricing" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">PRICING</a>
          <a href="/privacy" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">PRIVACY</a>
        </nav>
        <a href="/install" className="px-5 py-[10px] border border-[#FFFFFF40] bg-transparent hover:bg-[var(--overlay-light)] transition-colors">
          <span className="font-jetbrains text-[var(--text-primary)] text-xs font-bold">Install</span>
        </a>
      </header>

      {/* Markets Content */}
      <main className="flex flex-col items-center w-full px-[80px] lg:px-[120px] py-[120px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 w-full max-w-[600px] mb-20">
          <h1 className="font-grotesk text-[var(--text-primary)] text-[48px] font-bold tracking-[-2px] text-center leading-[1.1]">
            Markets
          </h1>
          <p className="font-jetbrains text-[var(--text-tertiary)] text-[13px] font-normal text-center">
            650+ active markets
          </p>
        </div>

        {/* Category List */}
        <div className="flex flex-col w-full max-w-[700px] gap-0">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="flex items-center justify-between py-6 border-b border-[var(--border-primary)] hover:bg-[var(--overlay-light)] transition-colors px-8 group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-1 h-8 rounded-full transition-all group-hover:h-10"
                  style={{ backgroundColor: category.color }}
                />
                <span className="font-grotesk text-[var(--text-primary)] text-lg font-medium">
                  {category.name}
                </span>
              </div>
              <span className="font-jetbrains text-[var(--text-tertiary)] text-xs font-normal">
                {category.count}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="flex flex-col items-center gap-3 mt-20">
          <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-normal">
            Polymarket • Kalshi • Real-time updates
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-6 w-full px-[120px] py-12 bg-[var(--bg-secondary)] border-t border-[var(--border-primary)] mt-auto">
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
