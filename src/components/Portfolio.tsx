import { useInView } from '../hooks/useInView';
import { ExternalLink, Globe, BarChart2, ShoppingBag, Building2, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Company Profile Website',
    category: 'Web Development',
    desc: 'Website company profile premium untuk perusahaan manufaktur dengan desain modern dan animasi halus.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Globe,
    tags: ['React', 'Tailwind', 'SEO'],
    accent: '#0a70ff',
  },
  {
    title: 'Sistem Absensi Online',
    category: 'Business System',
    desc: 'Platform HR digital dengan fitur absensi real-time, laporan otomatis, dan integrasi payroll.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Building2,
    tags: ['Dashboard', 'Real-time', 'Mobile'],
    accent: '#d4a832',
  },
  {
    title: 'Dashboard Penjualan',
    category: 'AI Analytics',
    desc: 'Dashboard analitik bisnis dengan visualisasi data real-time, forecasting AI, dan laporan otomatis.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: BarChart2,
    tags: ['Analytics', 'AI', 'Reporting'],
    accent: '#22d3ee',
  },
  {
    title: 'Landing Page Produk',
    category: 'Landing Page',
    desc: 'Landing page produk FMCG dengan conversion rate optimization dan A/B testing terintegrasi.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: ShoppingBag,
    tags: ['Conversion', 'A/B Test', 'Fast Load'],
    accent: '#4ade80',
  },
  {
    title: 'Branding Kit Perusahaan',
    category: 'Branding & Design',
    desc: 'Identitas merek lengkap: logo, brand guideline, template dokumen, dan visual kit untuk startup fintech.',
    image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Layers,
    tags: ['Logo', 'Brand Guide', 'Visual Kit'],
    accent: '#f472b6',
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView();

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #030b18 0%, #050d1a 100%)' }}>
      <div className="absolute inset-0 tech-grid-bg opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-electric-600/40 pointer-events-none"
      />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${inView ? 'in-view' : ''}`}>
          <span className="section-label justify-center mb-4">
            <span className="w-4 h-px bg-electric-600" />
            Portofolio
            <span className="w-4 h-px bg-electric-600" />
          </span>
          <h2 className="font-display text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            Karya Terbaik{' '}
            <span className="text-gradient-blue">yang Berbicara</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Beragam project sukses yang telah kami kerjakan untuk klien dari berbagai industri.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group glass-card rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-400 hover:-translate-y-2 cursor-pointer reveal reveal-delay-${Math.min(i + 1, 6)} ${inView ? 'in-view' : ''}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: `${p.accent}22`, color: p.accent, border: `1px solid ${p.accent}35`, backdropFilter: 'blur(8px)' }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center glass-card-light border border-white/10">
                  <p.icon className="w-4 h-4 text-white/70" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full glass-card border border-white/20 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-gradient-blue transition-all">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium"
                      style={{ background: `${p.accent}10`, color: p.accent, border: `1px solid ${p.accent}20` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className={`group glass-card-light rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-electric-600/15 hover:border-electric-600/35 transition-all duration-300 cursor-pointer reveal reveal-delay-6 ${inView ? 'in-view' : ''}`}>
            <div className="w-16 h-16 rounded-2xl bg-electric-600/15 border border-electric-600/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <ExternalLink className="w-7 h-7 text-electric-400" />
            </div>
            <h3 className="font-display font-bold text-white text-base mb-2">Lihat Semua Project</h3>
            <p className="text-white/40 text-sm mb-4">Temukan lebih banyak karya terbaik kami</p>
            <span className="text-electric-400 text-sm font-semibold flex items-center gap-1">
              View All <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
