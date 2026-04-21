import { ArrowRight, MessageCircle, Play, TrendingUp, Users, Globe, Cpu } from 'lucide-react';

const metrics = [
  { label: 'Revenue Growth', value: '+43.2%', width: '78%', color: '#0a70ff' },
  { label: 'Campaign ROI', value: '+128%', width: '92%', color: '#d4a832' },
  { label: 'Lead Conversion', value: '+67%', width: '62%', color: '#22d3ee' },
];

const floatingBadges = [
  { icon: TrendingUp, text: 'AI Analytics', sub: 'Live Dashboard', x: '-left-4 top-8', color: '#0a70ff' },
  { icon: Users, text: '1,247 Leads', sub: 'This Month', x: '-right-4 top-24', color: '#d4a832' },
  { icon: Globe, text: '28 Websites', sub: 'Delivered', x: '-left-4 bottom-16', color: '#22d3ee' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Grid background */}
      <div className="absolute inset-0 tech-grid-bg" />

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(10,112,255,0.4) 0%, rgba(10,112,255,0.05) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full opacity-10 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #0a70ff, transparent 70%)' }} />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full opacity-8 animate-float"
        style={{ background: 'radial-gradient(circle, #d4a832, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card-light border border-electric-600/30">
              <span className="w-2 h-2 rounded-full bg-electric-500 animate-ping-slow" />
              <span className="text-sm text-electric-400 font-medium tracking-wide">
                Digital Innovation Partner
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
                <span className="block text-white">We Drive</span>
                <span className="block text-gradient-blue">Growth Through</span>
                <span className="block text-white">Digital Innovation</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              PT DDW Labs Indonesia membantu bisnis berkembang melalui teknologi, AI, website modern,
              dan strategi digital yang terukur — dari UMKM hingga korporat.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary text-base animate-pulse-glow">
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis
              </a>
              <a href="#portfolio" className="btn-outline text-base">
                <Play className="w-4 h-4 fill-current" />
                Lihat Portofolio
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {[
                { label: '100+ Project', sub: 'Selesai' },
                { label: '50+ Klien', sub: 'Puas' },
                { label: '3+ Tahun', sub: 'Pengalaman' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <div className="w-1 h-8 rounded-full bg-electric-600" />
                  <div>
                    <div className="text-white font-bold text-sm">{b.label}</div>
                    <div className="text-white/40 text-xs">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Animated Dashboard */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            {/* Main dashboard card */}
            <div className="relative w-full max-w-md">
              <div className="glass-card rounded-2xl p-6 border-glow animate-pulse-glow">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-electric-600/20 border border-electric-600/30 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-electric-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">AI Performance Hub</div>
                      <div className="text-white/40 text-xs">Real-time Analytics</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping-slow" />
                    <span className="text-emerald-400 text-xs font-medium">LIVE</span>
                  </div>
                </div>

                {/* Metrics bars */}
                <div className="space-y-4 mb-6">
                  {metrics.map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-white/60 text-xs">{m.label}</span>
                        <span className="text-sm font-bold" style={{ color: m.color }}>{m.value}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: m.width,
                            background: `linear-gradient(90deg, ${m.color}88, ${m.color})`,
                            boxShadow: `0 0 10px ${m.color}66`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { icon: TrendingUp, label: 'AI Tasks', value: '142', color: '#0a70ff' },
                    { icon: Globe, label: 'Websites', value: '28', color: '#d4a832' },
                    { icon: Users, label: 'New Leads', value: '1.8K', color: '#22d3ee' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center border border-white/5">
                      <s.icon className="w-4 h-4 mx-auto mb-1.5" style={{ color: s.color }} />
                      <div className="text-white font-bold text-base leading-tight">{s.value}</div>
                      <div className="text-white/40 text-[10px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-1.5 h-14 mt-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        background: i === 11
                          ? 'linear-gradient(180deg, #0a70ff, #0055e0)'
                          : `rgba(10,112,255,${0.15 + i * 0.02})`,
                        boxShadow: i === 11 ? '0 0 12px rgba(10,112,255,0.6)' : 'none',
                      }}
                    />
                  ))}
                </div>
                <div className="text-center mt-2">
                  <span className="text-white/30 text-[10px] tracking-widest uppercase">Performance 12 Months</span>
                </div>
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -left-10 top-6 glass-card-light rounded-xl px-3.5 py-2.5 border border-electric-600/20 animate-float-delayed shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-electric-600/20 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-electric-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">ROI +128%</div>
                    <div className="text-white/40 text-[10px]">Campaign Result</div>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -right-8 bottom-12 glass-card-light rounded-xl px-3.5 py-2.5 border border-gold-500/20 animate-float shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">50+ Klien</div>
                    <div className="text-white/40 text-[10px]">Trusted Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-electric-600/60 to-transparent" />
      </div>
    </section>
  );
}
