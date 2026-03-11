'use client';

import Image from 'next/image';

interface InstallCodeRevealProps {
  showCode: boolean;
}

export default function InstallCodeReveal({ showCode }: InstallCodeRevealProps) {
  return (
    <div className="absolute right-0 top-0 w-[860px] h-[860px]">
      {/* Removed buttons, just the visual display */}

      {/* Musashi Image (default) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          showCode ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="relative w-full h-full bg-black">
          <Image
            src="/images/generated-1771830449125.png"
            alt="Miyamoto Musashi"
            fill
            className="object-cover object-right opacity-65"
            priority
            unoptimized
          />

          {/* Floating Market Data Cards */}
          <div className="absolute top-[120px] left-[60px] px-4 py-3 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md">
            <div className="flex flex-col gap-1">
              <span className="font-jetbrains text-[#666] text-[9px] font-medium">POLYMARKET</span>
              <span className="font-jetbrains text-white text-[11px] font-semibold leading-tight">Trump wins 2024?</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="font-jetbrains text-[#00FF88] text-sm font-bold">YES</span>
                  <span className="font-jetbrains text-white text-sm font-bold">89%</span>
                </div>
                <span className="font-jetbrains text-[#00FF88] text-[10px]">+12%</span>
              </div>
            </div>
          </div>

          <div className="absolute top-[80px] right-[140px] px-3 py-2 bg-[#0A0A0A]/90 border border-[#FF4444]/30 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 fill-[#FF4444]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
              <span className="font-jetbrains text-[#FF4444] text-lg font-bold">-23%</span>
            </div>
          </div>

          <div className="absolute top-[320px] left-[40px] px-3 py-2 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md">
            <div className="flex flex-col gap-1">
              <span className="font-jetbrains text-[#666] text-[9px]">24H VOL</span>
              <span className="font-jetbrains text-white text-sm font-bold">$2.4M</span>
            </div>
          </div>

          <div className="absolute top-[280px] right-[80px] px-4 py-3 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md max-w-[200px]">
            <div className="flex flex-col gap-1">
              <span className="font-jetbrains text-[#666] text-[9px] font-medium">KALSHI</span>
              <span className="font-jetbrains text-white text-[11px] font-semibold leading-tight">BTC above $100k?</span>
              <div className="flex items-center gap-2">
                <span className="font-jetbrains text-[#00FF88] text-sm font-bold">67%</span>
                <div className="flex-1 h-1 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full w-[67%] bg-[#00FF88]" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[180px] left-[90px] px-3 py-2 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md">
            <span className="font-jetbrains text-white text-xs font-bold">900+ MARKETS</span>
          </div>

          <div className="absolute bottom-[140px] right-[120px] px-4 py-3 bg-[#0A0A0A]/90 border border-[#00FF88]/30 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 fill-[#00FF88]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
              <span className="font-jetbrains text-[#00FF88] text-xs font-bold">TRENDING</span>
            </div>
          </div>

          <div className="absolute top-[480px] right-[50px] px-3 py-2 bg-[#0A0A0A]/90 border border-[#FFFFFF15] backdrop-blur-md">
            <div className="flex flex-col items-end gap-1">
              <span className="font-jetbrains text-[#00FF88] text-xs">YES 34¢</span>
              <span className="font-jetbrains text-[#FF4444] text-xs">NO 66¢</span>
            </div>
          </div>

          <svg className="absolute inset-0 w-full h-full opacity-20" style={{ mixBlendMode: 'screen' }}>
            <line x1="180" y1="150" x2="320" y2="280" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="140" y1="340" x2="280" y2="420" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="720" y1="110" x2="640" y2="310" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      {/* Code Block (shown on Install click) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          showCode ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full h-full bg-[#0a0a0a] p-12 overflow-auto">
          {/* API Endpoints Table */}
          <div className="mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="font-jetbrains text-white text-sm font-bold pb-3">Endpoint</th>
                  <th className="font-jetbrains text-white text-sm font-bold pb-3">Expected Response Time</th>
                  <th className="font-jetbrains text-white text-sm font-bold pb-3">Notes</th>
                </tr>
              </thead>
              <tbody className="font-jetbrains text-[13px]">
                <tr className="border-b border-[#222]">
                  <td className="py-3 text-[#ddd]">/api/health</td>
                  <td className="py-3 text-[#ddd]">&lt; 500ms</td>
                  <td className="py-3 text-[#888]">Cold start: ~2s</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-3 text-[#ddd]">/api/analyze-text</td>
                  <td className="py-3 text-[#ddd]">&lt; 200ms</td>
                  <td className="py-3 text-[#888]">With cached markets</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-3 text-[#ddd]">/api/markets/arbitrage</td>
                  <td className="py-3 text-[#ddd]">&lt; 1s</td>
                  <td className="py-3 text-[#888]">First request slower (cache miss)</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-3 text-[#ddd]">/api/markets/movers</td>
                  <td className="py-3 text-[#ddd]">&lt; 500ms</td>
                  <td className="py-3 text-[#888]">Requires price history</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-3 text-[#ddd]">/api/feed</td>
                  <td className="py-3 text-[#ddd]">&lt; 200ms</td>
                  <td className="py-3 text-[#888]">Returns from KV</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* How to Test */}
          <div>
            <h3 className="font-jetbrains text-white text-base font-bold mb-4">How to Test:</h3>
            <div className="bg-[#111] border border-[#222] rounded p-4">
              <pre className="font-mono text-[13px] leading-relaxed">
                <code>
                  <div className="text-[#6a9955]"># Add -w to see response time</div>
                  <div className="text-[#ddd]">curl -w <span className="text-[#ce9178]">"\nTime: %{'{'}time_total{'}'}\n"</span> <span className="text-[#ce9178]">"https://musashi-api.vercel.app/api/health"</span></div>
                  <div className="mt-3"></div>
                  <div className="text-[#ddd]">curl -i https://musashi-api.vercel.app/api/health</div>
                  <div className="text-[#ddd]">curl -i <span className="text-[#ce9178]">"https://musashi-api.vercel.app/api/feed?limit=5"</span></div>
                  <div className="text-[#ddd]">curl -i https://musashi-api.vercel.app/api/feed/stats</div>
                  <div className="text-[#ddd]">curl -i <span className="text-[#ce9178]">"https://musashi-api.vercel.app/api/markets/arbitrage?minSpread=0.05"</span></div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
