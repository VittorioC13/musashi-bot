export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full bg-[var(--bg-primary)] min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-[80px] py-4 bg-[var(--bg-primary)] border-b border-[var(--border-primary)] gap-10">
        <a href="/" className="font-jetbrains text-[var(--text-primary)] text-[22px] font-bold tracking-[1px]">
          MUSASHI
        </a>
        <nav className="flex items-center gap-8">
          <a href="/" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">MARKETS</a>
          <a href="/" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">SIGNALS</a>
          <a href="/" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">TERMINAL</a>
          <a href="/ai" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">DOCS</a>
          <a href="/privacy" className="font-jetbrains text-[var(--text-primary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">PRIVACY</a>
        </nav>
        <a href="/install" className="px-5 py-[10px] border border-[#FFFFFF40] bg-transparent hover:bg-[var(--overlay-light)] transition-colors">
          <span className="font-jetbrains text-[var(--text-primary)] text-xs font-bold">Install</span>
        </a>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full px-[80px] py-[60px]">
        <div className="w-full max-w-[900px]">
          {/* Title */}
          <div className="border-l-4 border-[var(--text-primary)] pl-4 mb-8">
            <h1 className="font-jetbrains text-[var(--text-primary)] text-[48px] font-bold tracking-[-1px]">
              Privacy Policy
            </h1>
          </div>

          <p className="font-jetbrains text-[var(--text-tertiary)] text-sm mb-10">
            Last Updated: February 25, 2026
          </p>

          {/* TL;DR Box */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--text-primary)] border-l-4 p-6 mb-12">
            <h3 className="font-jetbrains text-[var(--text-primary)] text-lg font-bold mb-4">
              TL;DR - The Important Stuff
            </h3>
            <ul className="font-jetbrains text-[var(--text-secondary)] text-sm space-y-2 pl-5 list-disc">
              <li><strong>We don&apos;t collect or store your personal data</strong></li>
              <li><strong>No user accounts, no tracking, no analytics</strong></li>
              <li><strong>All processing happens locally in your browser</strong></li>
              <li><strong>We only send data to DeepSeek AI when you explicitly request sentiment analysis</strong></li>
              <li><strong>100% free, no ads, no data monetization</strong></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-jetbrains text-[var(--text-primary)] text-[28px] font-bold uppercase tracking-[2px] mb-5">
              1. Introduction
            </h2>
            <p className="font-jetbrains text-[var(--text-secondary)] text-sm leading-[1.8] mb-4">
              Musashi (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a Chrome browser extension that provides AI-powered sentiment analysis and prediction market signals on Twitter/X. This Privacy Policy explains how we handle data when you use our extension.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-jetbrains text-[var(--text-primary)] text-[28px] font-bold uppercase tracking-[2px] mb-5">
              2. Information We Collect
            </h2>

            <h3 className="font-jetbrains text-[var(--text-primary)] text-lg font-semibold mb-3">
              2.1 Data We DO Collect
            </h3>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] p-6 mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border-primary)]">
                    <th className="font-jetbrains text-[var(--text-primary)] text-xs font-bold text-left pb-3 pr-4">Data Type</th>
                    <th className="font-jetbrains text-[var(--text-primary)] text-xs font-bold text-left pb-3 pr-4">Purpose</th>
                    <th className="font-jetbrains text-[var(--text-primary)] text-xs font-bold text-left pb-3">Storage</th>
                  </tr>
                </thead>
                <tbody className="font-jetbrains text-[var(--text-secondary)] text-xs">
                  <tr className="border-b border-[var(--border-primary)]">
                    <td className="py-3 pr-4">Market data</td>
                    <td className="py-3 pr-4">Match markets to tweets</td>
                    <td className="py-3">Local browser only</td>
                  </tr>
                  <tr className="border-b border-[var(--border-primary)]">
                    <td className="py-3 pr-4">Tweet content (on request)</td>
                    <td className="py-3 pr-4">AI sentiment analysis</td>
                    <td className="py-3">Sent to DeepSeek, not stored</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">User preferences</td>
                    <td className="py-3 pr-4">Save settings</td>
                    <td className="py-3">Local browser only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-jetbrains text-[var(--text-primary)] text-lg font-semibold mb-3">
              2.2 Data We DO NOT Collect
            </h3>
            <ul className="font-jetbrains text-[var(--text-secondary)] text-sm space-y-2 pl-5 list-disc mb-6">
              <li>Your Twitter/X username or account information</li>
              <li>Your browsing history</li>
              <li>Your personal information (name, email, address, etc.)</li>
              <li>Your IP address or location</li>
              <li>Analytics or tracking data</li>
              <li>Cookies or fingerprinting data</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-jetbrains text-[var(--text-primary)] text-[28px] font-bold uppercase tracking-[2px] mb-5">
              3. How We Use Data
            </h2>

            <h3 className="font-jetbrains text-[var(--text-primary)] text-lg font-semibold mb-3">
              3.1 Tweet Content Processing
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-sm leading-[1.8] mb-3">
              When you browse Twitter/X, Musashi:
            </p>
            <ol className="font-jetbrains text-[var(--text-secondary)] text-sm space-y-2 pl-5 list-decimal mb-6">
              <li><strong>Reads tweet text</strong> to automatically detect mentions of prediction markets</li>
              <li><strong>Displays matching markets</strong> from Polymarket and Kalshi directly on tweets</li>
              <li><strong>Does NOT send tweet content anywhere</strong> unless you explicitly click to analyze sentiment</li>
            </ol>

            <h3 className="font-jetbrains text-[var(--text-primary)] text-lg font-semibold mb-3">
              3.2 AI Sentiment Analysis (Optional)
            </h3>
            <p className="font-jetbrains text-[var(--text-secondary)] text-sm leading-[1.8] mb-3">
              When you <strong>explicitly request</strong> sentiment analysis:
            </p>
            <ol className="font-jetbrains text-[var(--text-secondary)] text-sm space-y-2 pl-5 list-decimal mb-6">
              <li>Tweet/text is sent to <strong>DeepSeek API</strong> for AI analysis</li>
              <li>DeepSeek returns sentiment analysis with confidence scores</li>
              <li>Results are displayed and cached locally</li>
              <li>We do NOT store your requests (we don&apos;t have servers!)</li>
            </ol>

            <div className="bg-[var(--bg-secondary)] border border-[var(--text-primary)] border-l-4 p-6 mb-6">
              <h3 className="font-jetbrains text-[var(--text-primary)] text-base font-bold mb-3">
                Important: DeepSeek AI Processing
              </h3>
              <p className="font-jetbrains text-[var(--text-secondary)] text-sm leading-[1.8]">
                When you request sentiment analysis, tweet content is sent to DeepSeek&apos;s API. DeepSeek&apos;s privacy policy applies to this data processing. DeepSeek may use this data to improve their AI models.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-jetbrains text-[var(--text-primary)] text-[28px] font-bold uppercase tracking-[2px] mb-5">
              4. Third-Party Services
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-jetbrains text-[var(--text-primary)] text-base font-semibold mb-2">
                  4.1 DeepSeek AI
                </h3>
                <p className="font-jetbrains text-[var(--text-secondary)] text-sm">
                  <strong>Purpose:</strong> Sentiment analysis<br />
                  <strong>Data shared:</strong> Tweet text (only when you request analysis)
                </p>
              </div>

              <div>
                <h3 className="font-jetbrains text-[var(--text-primary)] text-base font-semibold mb-2">
                  4.2 Polymarket API
                </h3>
                <p className="font-jetbrains text-[var(--text-secondary)] text-sm">
                  <strong>Purpose:</strong> Fetch prediction market data<br />
                  <strong>Data shared:</strong> None - we only fetch public market data
                </p>
              </div>

              <div>
                <h3 className="font-jetbrains text-[var(--text-primary)] text-base font-semibold mb-2">
                  4.3 Kalshi API
                </h3>
                <p className="font-jetbrains text-[var(--text-secondary)] text-sm">
                  <strong>Purpose:</strong> Fetch regulated prediction market data<br />
                  <strong>Data shared:</strong> None - we only fetch public market data
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-jetbrains text-[var(--text-primary)] text-[28px] font-bold uppercase tracking-[2px] mb-5">
              5. Data Sharing
            </h2>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] p-6">
              <p className="font-jetbrains text-[var(--text-secondary)] text-sm leading-[1.8] mb-3">
                <strong>We do NOT sell, rent, or share your data with third parties for marketing purposes.</strong>
              </p>
              <p className="font-jetbrains text-[var(--text-secondary)] text-sm leading-[1.8]">
                The only data sharing: Tweet content sent to DeepSeek API <strong>only when you explicitly request analysis</strong>.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-jetbrains text-[var(--text-primary)] text-[28px] font-bold uppercase tracking-[2px] mb-5">
              6. Your Rights
            </h2>

            <ul className="font-jetbrains text-[var(--text-secondary)] text-sm space-y-2 pl-5 list-disc">
              <li><strong>Access your data:</strong> All data is stored locally - inspect using Chrome DevTools</li>
              <li><strong>Delete your data:</strong> Uninstall the extension or clear browser storage</li>
              <li><strong>Opt-out of AI analysis:</strong> Don&apos;t click &quot;Analyze&quot; - it&apos;s entirely optional</li>
              <li><strong>Control data sharing:</strong> You decide when to request sentiment analysis</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-jetbrains text-[var(--text-primary)] text-[28px] font-bold uppercase tracking-[2px] mb-5">
              7. Security
            </h2>

            <ul className="font-jetbrains text-[var(--text-secondary)] text-sm space-y-2 pl-5 list-disc">
              <li>All API requests use HTTPS encryption</li>
              <li>No server-side storage (can&apos;t be hacked if we don&apos;t store it!)</li>
              <li>All processing happens locally in your browser</li>
              <li>Extension code is open for security audits</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="font-jetbrains text-[var(--text-primary)] text-[28px] font-bold uppercase tracking-[2px] mb-5">
              8. Contact Us
            </h2>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-4 border-l-[var(--text-primary)] p-6">
              <p className="font-jetbrains text-[var(--text-secondary)] text-sm mb-3">
                Questions about this Privacy Policy or Musashi&apos;s data practices:
              </p>
              <p className="font-jetbrains text-[var(--text-secondary)] text-sm">
                <strong>Email:</strong> support@musashi.bot<br />
                <strong>Website:</strong> <a href="https://musashi.bot" className="text-[var(--text-primary)] underline">https://musashi.bot</a><br />
                <strong>Response time:</strong> We aim to respond within 48 hours
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="font-jetbrains text-[var(--text-primary)] text-[28px] font-bold uppercase tracking-[2px] mb-5">
              9. Legal Compliance
            </h2>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] p-6 space-y-4">
              <div>
                <h3 className="font-jetbrains text-[var(--text-primary)] text-base font-semibold mb-2">
                  GDPR Compliance (European Users)
                </h3>
                <p className="font-jetbrains text-[var(--text-secondary)] text-sm">
                  We are a &quot;data processor&quot; only when you request sentiment analysis. Since we don&apos;t collect or store personal data ourselves, most GDPR obligations don&apos;t apply to Musashi directly.
                </p>
              </div>

              <div>
                <h3 className="font-jetbrains text-[var(--text-primary)] text-base font-semibold mb-2">
                  CCPA Compliance (California Users)
                </h3>
                <p className="font-jetbrains text-[var(--text-secondary)] text-sm">
                  We do NOT sell your personal information. We do NOT share personal information for cross-context behavioral advertising.
                </p>
              </div>

              <div>
                <h3 className="font-jetbrains text-[var(--text-primary)] text-base font-semibold mb-2">
                  Chrome Web Store Requirements
                </h3>
                <p className="font-jetbrains text-[var(--text-secondary)] text-sm">
                  This privacy policy complies with Chrome Web Store&apos;s Program Policies and User Data FAQ.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-8 w-full px-[120px] py-12 bg-[var(--bg-secondary)] border-t border-[var(--border-primary)] mt-auto">
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
            <a href="/" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">HOME</a>
            <a href="/install" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">INSTALL</a>
            <a href="/ai" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">AI DOCS</a>
            <a href="/privacy" className="font-jetbrains text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">PRIVACY</a>
          </nav>
        </div>

        <div className="w-full h-[1px] bg-[var(--border-primary)]" />

        <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-normal">
          © 2026 MUSASHI. ALL RIGHTS RESERVED.
        </span>
      </footer>
    </div>
  );
}
