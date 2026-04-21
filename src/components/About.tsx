import { useInView } from '../hooks/useInView';
import { CheckCircle2, Lightbulb, Target, Rocket } from 'lucide-react';

const pillars = [
  { icon: Lightbulb, title: 'Inovasi Berkelanjutan', desc: 'Selalu mengadopsi teknologi terbaru untuk solusi terdepan.' },
  { icon: Target, title: 'Berbasis Data', desc: 'Setiap keputusan didukung data dan analitik yang akurat.' },
  { icon: Rocket, title: 'Eksekusi Cepat', desc: 'Dari konsep ke live dalam waktu yang efisien dan terukur.' },
];

const highlights = [
  'Digital Marketing & Growth Strategy',
  'Website & App Development',
  'AI Automation & Integration',
  'Branding & Visual Identity',
  'SEO & Content Marketing',
  'Business System Development',
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-40" />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4a832, transparent 70%)' }}
      />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image / visual */}
          <div className={`reveal ${inView ? 'in-view' : ''}`}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-electric-600/20 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="DDW Labs Team"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              </div>

              {/* Stats card overlay */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 border-glow max-w-xs">
                <div className="text-white/40 text-xs mb-3 uppercase tracking-widest">Impact Overview</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: '100+', lbl: 'Project Done' },
                    { val: '50+', lbl: 'Happy Clients' },
                    { val: '3+', lbl: 'Years Active' },
                    { val: '24/7', lbl: 'Support' },
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div className="text-gradient-blue font-display font-bold text-xl">{s.val}</div>
                      <div className="text-white/50 text-xs">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating tag */}
              <div className="absolute -top-4 -left-4 glass-card-light rounded-xl px-4 py-2.5 border border-gold-500/25">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping-slow" />
                  <span className="text-gold-400 text-xs font-semibold">PT DDW Labs Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-8">
            <div className={`reveal reveal-delay-1 ${inView ? 'in-view' : ''}`}>
              <span className="section-label">
                <span className="w-4 h-px bg-electric-600" />
                Tentang Kami
              </span>
            </div>

            <div className={`reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
              <h2 className="font-display text-4xl xl:text-5xl font-bold text-white leading-tight">
                Mitra Digital untuk{' '}
                <span className="text-gradient-gold">Transformasi Bisnis</span> Anda
              </h2>
            </div>

            <div className={`reveal reveal-delay-3 ${inView ? 'in-view' : ''}`}>
              <p className="text-white/60 text-lg leading-relaxed">
                PT DDW Labs Indonesia adalah perusahaan teknologi yang berfokus membantu{' '}
                <strong className="text-white">UMKM, startup, dan korporat</strong> melakukan transformasi digital
                secara menyeluruh. Kami menggabungkan kecerdasan buatan, desain premium, dan strategi berbasis data
                untuk mengakselerasi pertumbuhan bisnis Anda.
              </p>
            </div>

            <div className={`reveal reveal-delay-4 ${inView ? 'in-view' : ''}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-electric-500 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillars */}
            <div className={`reveal reveal-delay-5 ${inView ? 'in-view' : ''} grid gap-3`}>
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-4 glass-card-light rounded-xl p-4 border border-white/5 hover:border-electric-600/25 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-600/20 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{p.title}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
