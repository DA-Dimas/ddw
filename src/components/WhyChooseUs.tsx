import { useInView } from '../hooks/useInView';
import { Users, Zap, Sparkles, Database, Headphones as HeadphonesIcon, BadgeDollarSign } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Tim Profesional',
    desc: 'Didukung tim expert berpengalaman di bidangnya — developer, designer, marketer, dan AI specialist.',
    accent: '#0a70ff',
  },
  {
    icon: Zap,
    title: 'Solusi Cepat & Custom',
    desc: 'Kami tidak menawarkan template generik. Setiap solusi dirancang khusus sesuai kebutuhan dan target bisnis Anda.',
    accent: '#d4a832',
  },
  {
    icon: Sparkles,
    title: 'Desain Premium',
    desc: 'Output visual berkualitas tinggi yang merepresentasikan brand Anda secara profesional dan berkesan.',
    accent: '#22d3ee',
  },
  {
    icon: Database,
    title: 'Berbasis Data & AI',
    desc: 'Setiap strategi dan keputusan didukung oleh data analitik dan kecerdasan buatan untuk hasil yang optimal.',
    accent: '#4ade80',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support Berkelanjutan',
    desc: 'Kami tidak menghilang setelah project selesai. Tim support kami siap 24/7 untuk membantu Anda.',
    accent: '#f472b6',
  },
  {
    icon: BadgeDollarSign,
    title: 'Harga Kompetitif',
    desc: 'Kualitas premium dengan harga yang fair dan transparan. Tidak ada biaya tersembunyi, hasil yang terukur.',
    accent: '#a78bfa',
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section id="why" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-25" />

      {/* Decorative line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-80 bg-gradient-to-b from-transparent via-electric-600/40 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-80 bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <div className={`reveal ${inView ? 'in-view' : ''}`}>
              <span className="section-label mb-4">
                <span className="w-4 h-px bg-electric-600" />
                Mengapa Pilih Kami
              </span>
            </div>
            <div className={`reveal reveal-delay-1 ${inView ? 'in-view' : ''}`}>
              <h2 className="font-display text-4xl xl:text-5xl font-bold text-white leading-tight mt-4 mb-6">
                Bukan Sekadar{' '}
                <span className="text-gradient-gold">Vendor</span>,{' '}
                Kami Partner{' '}
                <span className="text-gradient-blue">Pertumbuhan</span> Anda
              </h2>
            </div>
            <div className={`reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                Kami berkomitmen penuh untuk memastikan investasi digital Anda menghasilkan ROI yang nyata
                dan pertumbuhan bisnis yang berkelanjutan.
              </p>
            </div>

            {/* Trust indicator */}
            <div className={`reveal reveal-delay-3 ${inView ? 'in-view' : ''} glass-card rounded-2xl p-6 border-glow max-w-sm`}>
              <div className="text-white/40 text-xs uppercase tracking-widest mb-4">Client Satisfaction</div>
              <div className="flex items-end gap-3 mb-3">
                <span className="font-display text-5xl font-bold text-gradient-blue">98%</span>
                <span className="text-white/50 text-sm mb-2">klien puas & repeat order</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-electric-600 to-electric-400 glow-blue-sm" />
              </div>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`group glass-card-light rounded-2xl p-6 border border-white/5 hover:border-white/12 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-${Math.min(i + 1, 6)} ${inView ? 'in-view' : ''}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${r.accent}12`,
                    border: `1px solid ${r.accent}28`,
                    boxShadow: `0 0 20px ${r.accent}10`,
                  }}
                >
                  <r.icon className="w-5 h-5" style={{ color: r.accent }} />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{r.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
