'use client';

import { useEffect, useState, useRef } from 'react';

export default function TerminalDemo() {
  const [visibleLinesLeft, setVisibleLinesLeft] = useState(0);
  const [visibleLinesRight, setVisibleLinesRight] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Left column has 10 lines
  const leftLines = 10;
  // Right column has 13 lines
  const rightLines = 13;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasStarted) return;

    let leftInterval: NodeJS.Timeout | null = null;
    let rightInterval: NodeJS.Timeout | null = null;

    // Intersection Observer to detect when section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            
            // Show left column lines one by one
            leftInterval = setInterval(() => {
              setVisibleLinesLeft((prev) => {
                if (prev >= leftLines) {
                  if (leftInterval) clearInterval(leftInterval);
                  return prev;
                }
                return prev + 1;
              });
            }, 300);

            // Show right column lines one by one
            rightInterval = setInterval(() => {
              setVisibleLinesRight((prev) => {
                if (prev >= rightLines) {
                  if (rightInterval) clearInterval(rightInterval);
                  return prev;
                }
                return prev + 1;
              });
            }, 300);
          }
        });
      },
      {
        threshold: 0.2, // Start animation when 20% of the section is visible
        rootMargin: '0px',
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (leftInterval) clearInterval(leftInterval);
      if (rightInterval) clearInterval(rightInterval);
    };
  }, [hasStarted, leftLines, rightLines]);

  return (
    <section ref={sectionRef} className="flex flex-col items-center gap-12 w-full px-[120px] py-[100px] bg-[var(--bg-primary)]">
      <div className="flex flex-col items-center gap-4 w-full">
        <span className="font-jetbrains text-[var(--text-lighter)] text-[11px] font-bold tracking-[2px]">
          // FOR AGENTS
        </span>
        <h2 className="font-grotesk text-[var(--text-primary)] text-[42px] font-bold tracking-[-1px] text-center">
          Stop Searching. Start Asking.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full max-w-[1400px]">
        {/* WITHOUT MUSASHI */}
        <div className="terminal-column flex flex-col gap-6 p-8 bg-[#111] border border-[#222] rounded-lg">
          <div className="flex items-center gap-3 pb-4 border-b border-[#222]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="font-jetbrains text-[#ff5f56] text-lg font-bold uppercase tracking-[1px]">
              Without Musashi
            </div>
          </div>
          <div className="font-jetbrains text-[13px] leading-[1.8] space-y-2">
            <div className={`text-[#888] transition-opacity duration-300 ${visibleLinesLeft >= 1 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-[#888]">$</span> <span className="text-[#4a9eff]">trading-agent</span> <span className="text-[#e0e0e0]">is running...</span>
            </div>
            <div className={`text-[#666] italic transition-opacity duration-300 ${visibleLinesLeft >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              Fresh install. No Musashi. No connected agentware.
            </div>
            <div className={`text-[#e0e0e0] transition-opacity duration-300 ${visibleLinesLeft >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              The agent does not know what it can reach.
            </div>
            <div className={`text-[#e0e0e0] transition-opacity duration-300 ${visibleLinesLeft >= 4 ? 'opacity-100' : 'opacity-0'}`}>
              No Twitter sentiment. No Kalshi. No Polymarket.
            </div>
            <div className={`text-[#e0e0e0] transition-opacity duration-300 ${visibleLinesLeft >= 5 ? 'opacity-100' : 'opacity-0'}`}>
              It behaves like a normal chat assistant.
            </div>
            <div className={`mt-5 transition-opacity duration-300 ${visibleLinesLeft >= 6 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-[#888]">Human:</span> <span className="text-[#e0e0e0]">&quot;What&apos;s the sentiment on Bitcoin right now?&quot;</span>
            </div>
            <div className={`text-[#ff5f56] transition-opacity duration-300 ${visibleLinesLeft >= 7 ? 'opacity-100' : 'opacity-0'}`}>
              No map. No flow. No action.
            </div>
            <div className={`text-[#ff5f56] transition-opacity duration-300 ${visibleLinesLeft >= 8 ? 'opacity-100' : 'opacity-0'}`}>
              Just waiting for prompts it cannot turn into reality.
            </div>
            <div className={`mt-4 text-[#666] italic transition-opacity duration-300 ${visibleLinesLeft >= 9 ? 'opacity-100' : 'opacity-0'}`}>
              // expensive intelligence, trapped in a box
            </div>
            <div className={`mt-5 transition-opacity duration-300 ${visibleLinesLeft >= 10 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-[#888]">Human:</span> <span className="text-[#e0e0e0]">&quot;So... it still does nothing.&quot;</span>
            </div>
          </div>
        </div>

        {/* WITH MUSASHI */}
        <div className="terminal-column flex flex-col gap-6 p-8 bg-[#111] border border-[#222] rounded-lg">
          <div className="flex items-center gap-3 pb-4 border-b border-[#222]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="font-jetbrains text-[#27c93f] text-lg font-bold uppercase tracking-[1px]">
              With Musashi
            </div>
          </div>
          <div className="font-jetbrains text-[13px] leading-[1.8] space-y-2">
            <div className={`text-[#888] transition-opacity duration-300 ${visibleLinesRight >= 1 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-[#888]">$</span> <span className="text-[#4a9eff]">trading-agent</span> <span className="text-[#e0e0e0]">is running...</span> <span className="text-[#27c93f]">musashi active</span>
            </div>
            <div className={`text-[#e0e0e0] transition-opacity duration-300 ${visibleLinesRight >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              Musashi mapped your world: Twitter sentiment, Kalshi, Polymarket, and more are ready.
            </div>
            <div className={`text-[#e0e0e0] transition-opacity duration-300 ${visibleLinesRight >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              This is not a chat box anymore. It is an operator that can move across agentware.
            </div>
            <div className={`mt-4 transition-opacity duration-300 ${visibleLinesRight >= 4 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-[#888]">querying</span> <span className="text-[#4a9eff]">musashi</span> <span className="text-[#e0e0e0]">→ mapped sources + market signals + live sentiment</span>
            </div>
            <div className={`flex items-center gap-3 p-4 bg-[#1a1a1a] border border-[#333] rounded mt-4 transition-opacity duration-300 ${visibleLinesRight >= 5 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xl">📊</div>
              <div className="flex-1">
                <div className="text-[#ffbd2e]">twitter + kalshi + polymarket</div>
                <div className="text-[11px] text-[#888] mt-1">connected • live market flow</div>
              </div>
              <div className="text-[#27c93f] text-xs animate-pulse">●</div>
            </div>
            <div className={`mt-4 text-[#e0e0e0] transition-opacity duration-300 ${visibleLinesRight >= 6 ? 'opacity-100' : 'opacity-0'}`}>
              Analyzing Twitter sentiment on Bitcoin, matching to prediction markets, and generating trading signals now.
            </div>
            <div className={`text-[#27c93f] transition-opacity duration-300 ${visibleLinesRight >= 7 ? 'opacity-100' : 'opacity-0'}`}>
              Found 3 high-confidence signals:
            </div>
            <div className={`ml-5 text-[#4a9eff] space-y-1 transition-opacity duration-300 ${visibleLinesRight >= 8 ? 'opacity-100' : 'opacity-0'}`}>
              <div>• Bitcoin $100k by 2025: <span className="text-[#27c93f]">BULLISH</span> (confidence: 0.87)</div>
              <div className={`transition-opacity duration-300 ${visibleLinesRight >= 9 ? 'opacity-100' : 'opacity-0'}`}>• Fed rate cut Q1 2025: <span className="text-[#27c93f]">BULLISH</span> (confidence: 0.82)</div>
              <div className={`transition-opacity duration-300 ${visibleLinesRight >= 10 ? 'opacity-100' : 'opacity-0'}`}>• AI regulation by June: <span className="text-[#ffbd2e]">NEUTRAL</span> (confidence: 0.65)</div>
            </div>
            <div className={`mt-4 text-[#e0e0e0] transition-opacity duration-300 ${visibleLinesRight >= 11 ? 'opacity-100' : 'opacity-0'}`}>
              Executing trades on Kalshi and Polymarket based on sentiment analysis.
            </div>
            <div className={`text-[#e0e0e0] transition-opacity duration-300 ${visibleLinesRight >= 12 ? 'opacity-100' : 'opacity-0'}`}>
              One intent in. Multiple systems connected. Context keeps flowing.
            </div>
            <div className={`mt-5 transition-opacity duration-300 ${visibleLinesRight >= 13 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-[#888]">Human:</span> <span className="text-[#e0e0e0]">&quot;Wait. It can actually do all of that?&quot;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 w-full max-w-[1000px] mt-12">
        <div className="flex flex-col items-center gap-3 p-8 bg-[#111] border border-[#222] rounded-lg">
          <div className="font-grotesk text-[#4a9eff] text-[48px] font-bold tracking-[-1px]">
            1,400+
          </div>
          <div className="font-jetbrains text-[#888] text-xs uppercase tracking-[1px]">
            Markets
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 p-8 bg-[#111] border border-[#222] rounded-lg">
          <div className="font-grotesk text-[#4a9eff] text-[48px] font-bold tracking-[-1px]">
            4
          </div>
          <div className="font-jetbrains text-[#888] text-xs uppercase tracking-[1px]">
            API Endpoints
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 p-8 bg-[#111] border border-[#222] rounded-lg">
          <div className="font-grotesk text-[#4a9eff] text-[48px] font-bold tracking-[-1px]">
            2
          </div>
          <div className="font-jetbrains text-[#888] text-xs uppercase tracking-[1px]">
            Platforms
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
