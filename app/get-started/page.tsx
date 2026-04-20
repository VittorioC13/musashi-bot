'use client';

import { useState } from 'react';
import Link from 'next/link';

type Method = 'mcp' | 'api';
type MCPTab = 'paid' | 'free';
type CodeTab = 'curl' | 'typescript' | 'python';

// ─── Copy button ──────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="flex items-center gap-1.5 font-jetbrains text-[10px] uppercase tracking-[0.1em] text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
    >
      {copied ? (
        <>
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          copied
        </>
      ) : (
        <>
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
            <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
            <path d="M2 8V2h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          copy
        </>
      )}
    </button>
  );
}

// ─── Inline code block ────────────────────────────────────────────────────────

function CodeBlock({
  code,
  language = 'bash',
}: {
  code: string;
  language?: string;
}) {
  return (
    <div className="border border-[var(--border-primary)] bg-[#03070D]">
      <div className="flex items-center justify-between border-b border-[var(--border-primary)] px-4 py-2">
        <span className="font-jetbrains text-[10px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
          {language}
        </span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-4 font-jetbrains text-[12px] leading-[1.8] text-[var(--text-secondary)]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ─── Field row with copy ──────────────────────────────────────────────────────

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--border-primary)] bg-[#03070D] px-5 py-4">
      <div className="flex items-center justify-between">
        <span className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
          {label}
        </span>
        <CopyButton text={value} />
      </div>
      <code className="mt-2 block font-jetbrains text-[13px] text-[var(--text-primary)]">
        {value}
      </code>
    </div>
  );
}

// ─── Step number ──────────────────────────────────────────────────────────────

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center border border-[#00FF88]/40 font-jetbrains text-[11px] font-bold text-[#00FF88]">
        {n}
      </span>
      <div className="flex-1 space-y-3 pt-0.5">{children}</div>
    </div>
  );
}

function StepLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-jetbrains text-[13px] font-semibold text-[var(--text-primary)]">
      {children}
    </p>
  );
}

function StepBody({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-jetbrains text-[13px] leading-[1.75] text-[var(--text-secondary)]">
      {children}
    </p>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function GetStartedPage() {
  const [method, setMethod] = useState<Method | null>(null);
  const [mcpTab, setMcpTab] = useState<MCPTab>('paid');
  const [codeTab, setCodeTab] = useState<CodeTab>('curl');

  const mcpConfigCode = `{
  "mcpServers": {
    "musashi": {
      "command": "npx",
      "args": ["-y", "musashi-mcp"]
    }
  }
}`;

  const apiExamples: Record<CodeTab, string> = {
    curl: `curl -X POST https://musashi-api.vercel.app/api/analyze-text \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Fed announces surprise rate cut!"}'`,
    typescript: `import { MusashiAgent } from './src/sdk/musashi-agent';

const agent = new MusashiAgent();

const signal = await agent.analyzeText('Fed announces surprise rate cut!');
console.log(signal.urgency, signal.suggested_action);

// Arbitrage
const arbs = await agent.getArbitrage({ minSpread: 0.05 });

// Market movers
const movers = await agent.getMovers({ timeframe: '1h', minChange: 0.10 });`,
    python: `import requests

BASE = "https://musashi-api.vercel.app"

# Analyze text
res = requests.post(f"{BASE}/api/analyze-text", json={
    "text": "Fed announces surprise rate cut!"
})
print(res.json()["data"]["suggested_action"])

# Arbitrage
arbs = requests.get(f"{BASE}/api/markets/arbitrage",
    params={"minSpread": 0.05}).json()

# Market movers
movers = requests.get(f"{BASE}/api/markets/movers",
    params={"timeframe": "1h", "minChange": 0.10}).json()`,
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-primary)]">

      {/* ── Header ── */}
      <header className="flex w-full items-center justify-between gap-4 border-b border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 py-4 sm:px-6 lg:px-[80px]">
        <Link
          href="/"
          className="font-jetbrains text-xl font-bold tracking-[1px] text-[var(--text-primary)]"
        >
          MUSASHI
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/get-started" className="font-jetbrains text-xs font-medium text-[var(--text-primary)]">
            GET STARTED
          </Link>
          <a
            href="https://musashitechnologiesllc.mintlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            DOCS
          </a>
          <Link href="/ai" className="font-jetbrains text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
            API
          </Link>
        </nav>
        <Link
          href="/"
          className="border border-[#FFFFFF40] bg-transparent px-4 py-[9px] transition-colors hover:bg-[var(--overlay-light)]"
        >
          <span className="font-jetbrains text-xs font-bold text-[var(--text-primary)]">← Home</span>
        </Link>
      </header>

      <main className="flex flex-1 flex-col">

        {/* ── Landing: choose method ── */}
        {!method && (
          <section className="flex flex-1 flex-col items-center px-4 py-20 sm:px-6 lg:py-28">
            <div className="mb-14 flex flex-col items-center gap-4 text-center">
              <h1 className="font-grotesk text-[42px] font-bold tracking-[-1.5px] text-[var(--text-primary)] sm:text-[52px]">
                Get Started
              </h1>
              <p className="max-w-[420px] font-jetbrains text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                Choose how you want to access Musashi prediction market intelligence.
              </p>
            </div>

            <div className="grid w-full max-w-[880px] grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Claude MCP card */}
              <button
                type="button"
                onClick={() => setMethod('mcp')}
                className="group flex flex-col gap-6 border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-7 text-left transition-all hover:border-[#00FF88]/50 hover:bg-[var(--bg-secondary)]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[26px]">🤖</span>
                  <div className="flex items-center gap-3">
                    <span className="font-grotesk text-[20px] font-bold text-[var(--text-primary)]">
                      Claude MCP
                    </span>
                    <span className="border border-[#00FF88]/40 bg-[#00FF88]/10 px-2 py-0.5 font-jetbrains text-[10px] font-bold uppercase tracking-[0.1em] text-[#00FF88]">
                      Recommended
                    </span>
                  </div>
                </div>

                <p className="font-jetbrains text-[13px] leading-[1.8] text-[var(--text-secondary)]">
                  Connect Musashi directly to Claude. Ask your AI about market signals, arbitrage
                  opportunities, and smart money flows — no code required.
                </p>

                {/* Mini preview */}
                <div className="border border-[var(--border-primary)] bg-[#03070D] p-4">
                  <p className="font-jetbrains text-[11px] text-[var(--text-tertiary)]">
                    // Ask Claude naturally
                  </p>
                  <p className="mt-2 font-jetbrains text-[12px] leading-[1.7] text-[var(--text-secondary)]">
                    <span className="text-[#00FF88]">You:</span> What are the top arbitrage
                    opportunities right now?
                  </p>
                  <p className="mt-1 font-jetbrains text-[12px] leading-[1.7] text-[var(--text-secondary)]">
                    <span className="text-[#60A5FA]">Claude:</span> I found 3 opportunities.
                    The largest is a 7% spread on BTC $100k between Polymarket (63%) and
                    Kalshi (70%)…
                  </p>
                </div>

                <div className="flex items-center gap-2 font-jetbrains text-[13px] font-bold text-[var(--text-primary)] transition-transform group-hover:translate-x-1">
                  Get Started →
                </div>
              </button>

              {/* Direct API card */}
              <button
                type="button"
                onClick={() => setMethod('api')}
                className="group flex flex-col gap-6 border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-7 text-left transition-all hover:border-[#60A5FA]/50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[26px]">⚡</span>
                  <span className="font-grotesk text-[20px] font-bold text-[var(--text-primary)]">
                    Direct API
                  </span>
                </div>

                <p className="font-jetbrains text-[13px] leading-[1.8] text-[var(--text-secondary)]">
                  Call the REST API from your code. No auth required during beta.
                  Works with curl, TypeScript, Python — first call in under a minute.
                </p>

                <div className="border border-[var(--border-primary)] bg-[#03070D] px-4 py-3">
                  <code className="font-jetbrains text-[11px] leading-[1.8] text-[var(--text-secondary)]">
                    <span className="text-[#00FF88]">curl</span> -X POST \{'\n'}
                    {'  '}https://musashi-api.vercel.app/\{'\n'}
                    {'  '}api/analyze-text \{'\n'}
                    {'  '}-d{' '}
                    <span className="text-[#A7F3D0]">'{'{'}"text":"..."{'}'}'</span>
                  </code>
                </div>

                <div className="space-y-1">
                  {['curl, Python, JS', 'No API key needed', 'First call in &lt;1 min'].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#60A5FA]" />
                      <span
                        className="font-jetbrains text-[12px] text-[var(--text-secondary)]"
                        dangerouslySetInnerHTML={{ __html: f }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-jetbrains text-[13px] font-bold text-[var(--text-primary)] transition-transform group-hover:translate-x-1">
                  Get Started →
                </div>
              </button>
            </div>

            <a
              href="https://musashitechnologiesllc.mintlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex w-full max-w-[880px] flex-col gap-5 border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6 text-left transition-all hover:border-[#FFFFFF40] hover:bg-[#171722]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[24px]">📚</span>
                    <div className="flex flex-col gap-1">
                      <span className="font-grotesk text-[20px] font-bold text-[var(--text-primary)]">
                        Full Docs
                      </span>
                      <span className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                        Guides, API reference, examples
                      </span>
                    </div>
                  </div>

                  <p className="max-w-[620px] font-jetbrains text-[13px] leading-[1.8] text-[var(--text-secondary)]">
                    Want the complete setup guide, endpoint reference, and implementation examples?
                    Open the full Mintlify documentation.
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start font-jetbrains text-[13px] font-bold text-[var(--text-primary)] transition-transform group-hover:translate-x-1">
                  Open Docs →
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Quickstart', 'MCP setup', 'REST API', 'Code examples'].map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--border-primary)] bg-[#03070D] px-3 py-2 font-jetbrains text-[11px] text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </a>
          </section>
        )}

        {/* ── MCP setup ── */}
        {method === 'mcp' && (
          <section className="mx-auto w-full max-w-[780px] px-4 py-16 sm:px-6">

            {/* Back + step header */}
            <div className="mb-10 flex flex-col gap-6">
              <button
                type="button"
                onClick={() => setMethod(null)}
                className="flex w-fit items-center gap-2 font-jetbrains text-[12px] text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              >
                ← Back
              </button>
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-[#00FF88]/40 font-jetbrains text-[15px] font-bold text-[#00FF88]">
                  1
                </span>
                <div>
                  <h1 className="font-grotesk text-[28px] font-bold tracking-[-0.8px] text-[var(--text-primary)]">
                    Claude MCP Setup
                  </h1>
                  <p className="font-jetbrains text-[13px] text-[var(--text-secondary)]">
                    Connect Musashi to Claude in a few steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex border-b border-[var(--border-primary)]">
              {[
                { id: 'paid' as MCPTab, label: 'Claude Pro / Team / Enterprise' },
                { id: 'free' as MCPTab, label: 'Claude Free  (Desktop only)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMcpTab(tab.id)}
                  className={`px-5 py-3 font-jetbrains text-[12px] font-semibold transition-colors ${
                    mcpTab === tab.id
                      ? 'border-b-2 border-[#00FF88] text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Claude Paid */}
            {mcpTab === 'paid' && (
              <div className="space-y-8">
                <Step n={1}>
                  <StepLabel>Open Claude integrations</StepLabel>
                  <StepBody>
                    Go to{' '}
                    <a
                      href="https://claude.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-primary)] underline underline-offset-2"
                    >
                      claude.ai
                    </a>{' '}
                    → Settings → Integrations → Add MCP server.
                  </StepBody>
                </Step>

                <Step n={2}>
                  <StepLabel>Enter the server details</StepLabel>
                  <StepBody>Copy and paste the server name and URL below.</StepBody>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <FieldRow label="Server name" value="Musashi" />
                    <FieldRow label="MCP URL" value="https://musashi-mcp.up.railway.app/mcp" />
                  </div>
                </Step>

                <Step n={3}>
                  <StepLabel>Authenticate</StepLabel>
                  <StepBody>
                    On your first MCP request in chat, Claude will prompt you to authorize.
                    Complete the OAuth flow — it takes about 10 seconds.
                  </StepBody>
                </Step>

                <Step n={4}>
                  <StepLabel>Start asking</StepLabel>
                  <StepBody>You're live. Try one of these prompts in Claude:</StepBody>
                  <div className="space-y-2">
                    {[
                      'What are the top arbitrage opportunities right now?',
                      'Give me a market brief on BTC $100k by end of year.',
                      'Which markets have smart money flowing in?',
                      'Show me markets that moved more than 10% in the last hour.',
                    ].map((prompt) => (
                      <div
                        key={prompt}
                        className="flex items-start gap-3 border border-[var(--border-primary)] bg-[var(--bg-secondary)] px-4 py-3"
                      >
                        <span className="mt-0.5 font-jetbrains text-[11px] text-[#00FF88]">→</span>
                        <span className="font-jetbrains text-[12px] leading-[1.65] text-[var(--text-secondary)]">
                          {prompt}
                        </span>
                      </div>
                    ))}
                  </div>
                </Step>
              </div>
            )}

            {/* Claude Free / Desktop */}
            {mcpTab === 'free' && (
              <div className="space-y-8">
                <Step n={1}>
                  <StepLabel>Quit Claude Desktop</StepLabel>
                  <StepBody>
                    Fully quit the Claude desktop app before editing the config file.
                  </StepBody>
                </Step>

                <Step n={2}>
                  <StepLabel>Open the config file</StepLabel>
                  <StepBody>The config file location depends on your OS:</StepBody>
                  <div className="space-y-2">
                    <div className="border border-[var(--border-primary)] bg-[#03070D] px-4 py-3">
                      <p className="font-jetbrains text-[10px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">macOS</p>
                      <code className="mt-1 block font-jetbrains text-[12px] text-[var(--text-secondary)]">
                        ~/Library/Application Support/Claude/claude_desktop_config.json
                      </code>
                    </div>
                    <div className="border border-[var(--border-primary)] bg-[#03070D] px-4 py-3">
                      <p className="font-jetbrains text-[10px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">Windows</p>
                      <code className="mt-1 block font-jetbrains text-[12px] text-[var(--text-secondary)]">
                        %APPDATA%\Claude\claude_desktop_config.json
                      </code>
                    </div>
                  </div>
                </Step>

                <Step n={3}>
                  <StepLabel>Add the Musashi MCP server</StepLabel>
                  <StepBody>
                    Paste the following into your config file (merge with existing servers if any):
                  </StepBody>
                  <CodeBlock code={mcpConfigCode} language="json" />
                </Step>

                <Step n={4}>
                  <StepLabel>Restart Claude Desktop</StepLabel>
                  <StepBody>
                    Relaunch the app. You should see a{' '}
                    <span className="font-semibold text-[var(--text-primary)]">🔧 Tools</span> icon
                    in the chat input — that means Musashi is connected.
                  </StepBody>
                </Step>

                <Step n={5}>
                  <StepLabel>Start asking</StepLabel>
                  <StepBody>Try one of these prompts:</StepBody>
                  <div className="space-y-2">
                    {[
                      'What are the top arbitrage opportunities right now?',
                      'Give me a market brief on BTC $100k by end of year.',
                      'Which markets have smart money flowing in?',
                    ].map((prompt) => (
                      <div
                        key={prompt}
                        className="flex items-start gap-3 border border-[var(--border-primary)] bg-[var(--bg-secondary)] px-4 py-3"
                      >
                        <span className="mt-0.5 font-jetbrains text-[11px] text-[#00FF88]">→</span>
                        <span className="font-jetbrains text-[12px] leading-[1.65] text-[var(--text-secondary)]">
                          {prompt}
                        </span>
                      </div>
                    ))}
                  </div>
                </Step>
              </div>
            )}

            {/* Bottom links */}
            <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border-primary)] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-jetbrains text-[13px] text-[var(--text-secondary)]">
                Want to build a bot instead?
              </p>
              <button
                type="button"
                onClick={() => setMethod('api')}
                className="border border-[var(--border-primary)] bg-[var(--bg-secondary)] px-5 py-3 font-jetbrains text-[12px] font-bold text-[var(--text-primary)] transition-colors hover:bg-[var(--overlay-light)]"
              >
                Switch to Direct API →
              </button>
            </div>
          </section>
        )}

        {/* ── Direct API setup ── */}
        {method === 'api' && (
          <section className="mx-auto w-full max-w-[780px] px-4 py-16 sm:px-6">

            <div className="mb-10 flex flex-col gap-6">
              <button
                type="button"
                onClick={() => setMethod(null)}
                className="flex w-fit items-center gap-2 font-jetbrains text-[12px] text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              >
                ← Back
              </button>
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-[#60A5FA]/40 font-jetbrains text-[15px] font-bold text-[#60A5FA]">
                  1
                </span>
                <div>
                  <h1 className="font-grotesk text-[28px] font-bold tracking-[-0.8px] text-[var(--text-primary)]">
                    Direct API
                  </h1>
                  <p className="font-jetbrains text-[13px] text-[var(--text-secondary)]">
                    No auth, no signup. First call in under a minute.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">

              <Step n={1}>
                <StepLabel>Base URL</StepLabel>
                <FieldRow label="Base URL" value="https://musashi-api.vercel.app" />
              </Step>

              <Step n={2}>
                <StepLabel>Authentication</StepLabel>
                <div className="border border-[#00FF88]/30 bg-[#00FF88]/5 px-4 py-3">
                  <p className="font-jetbrains text-[13px] text-[var(--text-secondary)]">
                    <span className="font-semibold text-[#00FF88]">No API key required</span> during
                    beta. All endpoints are public and free.
                  </p>
                </div>
              </Step>

              <Step n={3}>
                <StepLabel>Make your first call</StepLabel>
                <StepBody>Pick your language and run the example below.</StepBody>

                {/* Language tabs */}
                <div className="border border-[var(--border-primary)] bg-[#03070D]">
                  <div className="flex items-center justify-between border-b border-[var(--border-primary)] px-3 py-2">
                    <div className="flex gap-1">
                      {(['curl', 'typescript', 'python'] as CodeTab[]).map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setCodeTab(tab)}
                          className={`px-3 py-1 font-jetbrains text-[10px] uppercase tracking-[0.1em] transition-colors ${
                            codeTab === tab
                              ? 'bg-[var(--overlay-light)] text-[var(--text-primary)]'
                              : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    <CopyButton text={apiExamples[codeTab]} />
                  </div>
                  <pre className="overflow-x-auto p-4 font-jetbrains text-[12px] leading-[1.8] text-[var(--text-secondary)]">
                    <code>{apiExamples[codeTab]}</code>
                  </pre>
                </div>
              </Step>

              <Step n={4}>
                <StepLabel>Explore all endpoints</StepLabel>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { method: 'POST', path: '/api/analyze-text',         desc: 'Text → trading signal' },
                    { method: 'GET',  path: '/api/markets/arbitrage',     desc: 'Cross-platform price gaps' },
                    { method: 'GET',  path: '/api/markets/movers',        desc: 'Markets with big price swings' },
                    { method: 'GET',  path: '/api/feed',                  desc: 'Pre-analyzed tweet feed' },
                  ].map(({ method: m, path, desc }) => (
                    <div
                      key={path}
                      className="border border-[var(--border-primary)] bg-[var(--bg-secondary)] px-4 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-jetbrains text-[10px] font-bold ${
                            m === 'POST' ? 'text-[#00FF88]' : 'text-[#60A5FA]'
                          }`}
                        >
                          {m}
                        </span>
                        <code className="font-jetbrains text-[11px] text-[var(--text-primary)]">
                          {path}
                        </code>
                      </div>
                      <p className="mt-1 font-jetbrains text-[11px] text-[var(--text-tertiary)]">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://musashitechnologiesllc.mintlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[var(--border-primary)] bg-[var(--bg-secondary)] px-5 py-3 font-jetbrains text-[12px] font-bold text-[var(--text-primary)] transition-colors hover:bg-[var(--overlay-light)]"
                  >
                    Full API Docs →
                  </a>
                  <Link
                    href="/ai"
                    className="border border-[var(--border-primary)] bg-transparent px-5 py-3 font-jetbrains text-[12px] font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    API Console
                  </Link>
                </div>
              </Step>

              <Step n={5}>
                <StepLabel>Build a polling bot</StepLabel>
                <StepBody>
                  Use the TypeScript SDK for built-in polling helpers. Clone the repo and copy{' '}
                  <code className="rounded bg-[var(--overlay-lighter)] px-1.5 py-0.5 font-jetbrains text-[11px] text-[var(--text-light)]">
                    src/sdk/musashi-agent.ts
                  </code>{' '}
                  into your project.
                </StepBody>
                <CodeBlock
                  code={`git clone https://github.com/VittorioC13/Musashi.git
cd Musashi && npm install
npx tsx test-sdk.ts   # smoke test against the live API`}
                  language="bash"
                />
              </Step>
            </div>

            <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border-primary)] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-jetbrains text-[13px] text-[var(--text-secondary)]">
                Want to use Claude instead?
              </p>
              <button
                type="button"
                onClick={() => setMethod('mcp')}
                className="border border-[var(--border-primary)] bg-[var(--bg-secondary)] px-5 py-3 font-jetbrains text-[12px] font-bold text-[var(--text-primary)] transition-colors hover:bg-[var(--overlay-light)]"
              >
                Switch to Claude MCP →
              </button>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}
