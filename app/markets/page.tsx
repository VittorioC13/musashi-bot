export default function Markets() {
  const categories = [
    {
      name: 'US Politics',
      slug: 'us_politics',
      description: 'Elections, Congress, Presidential actions, legislation',
      icon: '🏛️',
      count: '120+',
    },
    {
      name: 'Crypto',
      slug: 'crypto',
      description: 'Bitcoin, Ethereum, ETFs, price predictions, regulation',
      icon: '₿',
      count: '95+',
    },
    {
      name: 'Economics',
      slug: 'economics',
      description: 'Inflation, recession, unemployment, GDP, markets',
      icon: '💰',
      count: '85+',
    },
    {
      name: 'Technology',
      slug: 'technology',
      description: 'AI regulation, tech earnings, market caps, launches',
      icon: '💻',
      count: '75+',
    },
    {
      name: 'Sports',
      slug: 'sports',
      description: 'Super Bowl, NBA, NFL, major championships, playoffs',
      icon: '⚽',
      count: '65+',
    },
    {
      name: 'Entertainment',
      slug: 'entertainment',
      description: 'Oscars, Grammys, box office, streaming, awards',
      icon: '🎬',
      count: '60+',
    },
    {
      name: 'Geopolitics',
      slug: 'geopolitics',
      description: 'International conflicts, peace deals, summits, treaties',
      icon: '🌍',
      count: '45+',
    },
    {
      name: 'Monetary Policy',
      slug: 'monetary_policy',
      description: 'Fed rates, FOMC decisions, central bank actions',
      icon: '🏦',
      count: '40+',
    },
    {
      name: 'Climate',
      slug: 'climate',
      description: 'Temperature records, climate policy, emissions',
      icon: '🌡️',
      count: '30+',
    },
    {
      name: 'Gaming',
      slug: 'gaming',
      description: 'Esports, game releases, tournaments, streaming',
      icon: '🎮',
      count: '28+',
    },
    {
      name: 'Music',
      slug: 'music',
      description: 'Album releases, chart performance, tours, awards',
      icon: '🎵',
      count: '25+',
    },
    {
      name: 'Science',
      slug: 'science',
      description: 'Space, medical breakthroughs, research, discoveries',
      icon: '🔬',
      count: '20+',
    },
    {
      name: 'Lifestyle',
      slug: 'lifestyle',
      description: 'Culture, trends, social movements, consumer behavior',
      icon: '✨',
      count: '15+',
    },
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
      <main className="flex flex-col items-center w-full px-[80px] lg:px-[120px] py-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[1200px] mb-16">
          <h1 className="font-grotesk text-[var(--text-primary)] text-[56px] font-bold tracking-[-2px] text-center leading-[1.1]">
            650+ Markets Across 13 Categories
          </h1>
          <p className="font-jetbrains text-[var(--text-secondary)] text-[15px] font-normal leading-[1.7] text-center max-w-[600px]">
            Real-time prediction markets from Polymarket and Kalshi.<br />
            Every market shown inline on Twitter as events unfold.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="flex flex-col gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--border-lighter)] transition-colors rounded-lg group"
            >
              {/* Icon & Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-grotesk text-[var(--text-primary)] text-xl font-semibold">
                    {category.name}
                  </h3>
                </div>
                <span className="font-jetbrains text-[var(--text-tertiary)] text-xs font-medium">
                  {category.count}
                </span>
              </div>

              {/* Description */}
              <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                {category.description}
              </p>

              {/* Market Count Badge */}
              <div className="flex items-center gap-2 pt-2 border-t border-[var(--border-primary)]">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 fill-[#00FF88]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-medium">
                    Live markets
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 fill-[#00FF88]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-medium">
                    Real-time updates
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[800px] mt-16 pt-16 border-t border-[var(--border-primary)]">
          <h2 className="font-grotesk text-[var(--text-primary)] text-[32px] font-bold tracking-[-1px] text-center">
            See These Markets Inline on Twitter
          </h2>
          <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal text-center max-w-[500px]">
            Install Musashi to see relevant prediction markets appear automatically as you browse Twitter. No manual searching required.
          </p>
          <a href="/install" className="px-12 py-5 bg-[var(--text-primary)] hover:opacity-90 transition-opacity rounded-full">
            <span className="font-jetbrains text-[var(--bg-primary)] text-sm font-bold">INSTALL ON CHROME — FREE</span>
          </a>
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
