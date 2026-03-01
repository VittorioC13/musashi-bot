'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Is Musashi built for humans or AI agents?',
    answer: 'Both. Today, it\'s a Chrome extension that humans use to discover markets on Twitter. Tomorrow, it\'s the infrastructure layer for AI agents to turn social signals into trading opportunities for their users. We\'re building the bridge.',
  },
  {
    question: 'Is Musashi free?',
    answer: 'Yes, completely free right now. No account required, no credit card, no tracking. In the future, we may introduce paid features for power users and agents, but the core extension will remain free.',
  },
  {
    question: 'How do I use Musashi?',
    answer: 'Install the Chrome extension and browse Twitter as usual. When you see tweets about events with active prediction markets, Musashi will show you live odds, prices, and volume—right inline with the tweet. Click any market card to trade.',
  },
  {
    question: 'What markets does Musashi cover?',
    answer: '650+ active markets from Polymarket and Kalshi. Politics, crypto, economics, sports, tech, climate, and more. Markets update every 30 seconds and we add new ones daily.',
  },
  {
    question: 'Does Musashi work on mobile?',
    answer: 'Not yet. Musashi is a Chrome extension, so it only works on desktop browsers. Mobile support is on the roadmap, but we\'re focused on getting the desktop experience perfect first.',
  },
  {
    question: 'Can I build on top of Musashi?',
    answer: 'Absolutely. We have a public API that lets you analyze text and get matching markets. Perfect for AI agents, trading bots, or custom integrations. Check our API docs to get started.',
  },
  {
    question: 'Is my data private?',
    answer: 'Yes. We don\'t collect or store personal data. No tracking, no analytics, no accounts. All processing happens locally in your browser. Read our full privacy policy for details.',
  },
  {
    question: 'Do I need accounts on Polymarket or Kalshi?',
    answer: 'Only if you want to trade. Musashi shows you the markets and prices, but when you click to trade, you\'ll be redirected to Polymarket or Kalshi where you\'ll need an account to place bets.',
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
                  650+ markets from Polymarket and Kalshi
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  Price updates every 30 seconds
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  Inline market cards on Twitter/X
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  No account or login required
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  Complete privacy - no data collection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#00FF88] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="font-jetbrains text-[var(--text-secondary)] text-[13px] font-normal leading-[1.6]">
                  API access for AI agents and bots
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
