'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What is Musashi?',
    answer: 'Musashi is an AI intelligence service that automatically collects and analyzes tweets from 71 high-signal accounts every 2 minutes, matches them to 1000+ prediction markets, generates trading signals, and feeds structured data to AI trading bots via a polling API. The Chrome extension is just a monitoring dashboard (10% of the product) - the real product is the intelligence layer for automated trading.',
  },
  {
    question: 'Who is Musashi built for?',
    answer: 'Primarily for AI trading bots and developers building automated prediction market strategies. The Chrome extension lets humans monitor what the bots see, but the core product is the feed API that provides analyzed tweets with sentiment, urgency levels, confidence scores, and suggested trading actions.',
  },
  {
    question: 'How does the automated feed work?',
    answer: 'Every 2 minutes, Musashi collects tweets from 71 monitored accounts across 8 categories (crypto, politics, economics, tech, sports, geopolitics, finance, breaking news). Each tweet is analyzed using keyword matching, entity extraction, and sentiment analysis, then matched to relevant markets. Only tweets that match ≥1 market are stored in the feed for 48 hours.',
  },
  {
    question: 'What data do AI agents get?',
    answer: 'For each analyzed tweet: original author and text, 1-5 matched markets with confidence scores, sentiment (bullish/bearish/neutral), suggested action (YES/NO/HOLD with confidence + edge), urgency level (critical/high/medium/low), category, and reasoning. Everything your bot needs to make trading decisions.',
  },
  {
    question: 'How do I integrate Musashi into my trading bot?',
    answer: 'Use the Agent SDK (TypeScript/JavaScript) or call the REST API directly. Poll /api/feed every 30-60 seconds with filters (category, urgency, since timestamp). The SDK provides callback methods like onFeed() that handle polling automatically. Python, Node.js, and other language examples are in the docs.',
  },
  {
    question: 'What markets does Musashi cover?',
    answer: '1000+ markets from Polymarket (500+) and Kalshi (400+). Politics, economics, crypto, technology, sports, geopolitics, climate, and entertainment. Markets update every 60 seconds via Polymarket CLOB API polling. We track markets with >$10k volume and add new ones daily.',
  },
  {
    question: 'Is Musashi free?',
    answer: 'Yes, completely free. The feed API, Chrome extension, and SDK are all free with no rate limits currently. All infrastructure runs on free tiers (Vercel, Vercel KV, Twitter API). In the future, we may introduce premium features for high-frequency bots, but the core service will remain free.',
  },
  {
    question: 'What about arbitrage and market movers?',
    answer: 'Musashi detects cross-platform arbitrage opportunities (e.g., same market trading at 63% on Polymarket, 70% on Kalshi = 7% spread) and tracks markets with significant price changes (>5% in 1h or 24h windows). Access via /api/markets/arbitrage and /api/markets/movers endpoints.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col lg:flex-row items-start gap-12 w-full px-[80px] lg:px-[120px] py-[100px] bg-[var(--bg-secondary)] border-t border-[var(--border-primary)]">
      {/* Left: Pricing Card */}
      <div className="w-full lg:w-[400px] flex-shrink-0">
        <div className="sticky top-8 flex flex-col gap-8 p-8 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg">
          {/* Investment */}
          <div className="flex flex-col items-center justify-center gap-3 pb-6 border-b border-[var(--border-primary)] min-h-[140px]">
            <span className="font-jetbrains text-[var(--text-tertiary)] text-[11px] font-bold tracking-[2px] uppercase">
              Your Investment
            </span>
            <span className="font-grotesk text-[var(--text-primary)] text-[64px] font-bold tracking-[-2px] leading-none">
              Free
            </span>
          </div>

          {/* What You Get */}
          <div className="flex flex-col gap-4">
            <h3 className="font-grotesk text-[var(--text-primary)] text-xl font-semibold text-center">
              What You Get
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  Automated feed from 71 high-signal accounts
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  1000+ markets (Polymarket + Kalshi)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  AI sentiment analysis + trading signals
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  REST API + Agent SDK (TypeScript/JS)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  Arbitrage detection + market movers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  No rate limits, no API keys required
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right: FAQ Accordion */}
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px]">
            Common Questions
          </h2>
          <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal">
            Everything you need to know about Musashi
          </p>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[var(--border-primary)] last:border-b-0"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between py-6 text-left hover:opacity-80 transition-opacity"
              >
                <span className="font-grotesk text-[var(--text-primary)] text-lg font-medium pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 fill-[var(--text-primary)] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.7] pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
