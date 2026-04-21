import { useInView } from '../hooks/useInView';
import {
  BarChart3, Code2, Bot, Palette, Search, Settings2,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'Strategi pemasaran digital terukur: Google Ads, Meta Ads, social media management, hingga email marketing yang mengkonversi.',
    accent: '#0a70ff',
    tags: ['Google Ads', 'Social Media', 'Email Campaign'],
  },
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'Pengembangan website profesional, company profile, toko online, dan web app dengan teknologi terkini dan performa tinggi.',
    accent: '#d4a832',
    tags: ['React / Next.js', 'WordPress', 'E-Commerce'],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Otomatisasi proses bisnis menggunakan kecerdasan buatan: chatbot cerdas, automasi laporan, dan integrasi AI ke sistem Anda.',
    accent: '#22d3ee',
    tags: ['Chatbot AI', 'Process Automation', 'Data Intelligence'],
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Identitas merek yang kuat dan berkesan: logo, brand guideline, visual kit, hingga konten kreatif yang menonjol.',
    accent: '#f472b6',
    tags: ['Logo & Identity', 'Brand Guideline', 'Visual Design'],
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Tingkatkan visibilitas organik di mesin pencari dengan teknik SEO on-page, off-page, dan technical SEO yang terstruktur.',
    accent: '#4ade80',
    tags: ['On-Page SEO', 'Link Building', 'Technical SEO'],
  },
  {
    icon: Settings2,
    title: 'Business System Dev',
    desc: 'Pengembangan sistem bisnis custom: sistem absensi, dashboard penjualan, ERP sederhana, dan solusi otomasi internal.',
    accent: '#a78bfa',
    tags: ['Dashboard', 'Attendance System', 'Custom ERP'],
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #030b18 0%, #050d1a 50%, #030b18 100%)' }}>
      <div className="absolute inset-0 tech-grid-bg opacity-30" />

      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(10,112,255,0.06) 0%, transparent 70%)' }} />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${inView ? 'in-view' : ''}`}>
          <span className="section-label justify-center mb-4">
            <span className="w-4 h-px bg-electric-600" />
            Layanan Kami
            <span className="w-4 h-px bg-electric-600" />
          </span>
          <h2 className="font-display text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            Solusi Digital{' '}
            <span className="text-gradient-blue">Lengkap & Terukur</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Dari branding hingga AI automation, kami hadirkan solusi komprehensif untuk mendorong pertumbuhan bisnis Anda secara signifikan.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card group glass-card rounded-2xl p-7 hover:border-white/15 transition-all duration-400 cursor-pointer reveal reveal-delay-${Math.min(i + 1, 6)} ${inView ? 'in-view' : ''}`}
              style={{ '--tw-border-opacity': 1 } as React.CSSProperties}
            >
              {/* Icon */}
              <div
                className="service-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: `${s.accent}15`,
                  border: `1px solid ${s.accent}30`,
                }}
              >
                <s.icon className="w-6 h-6" style={{ color: s.accent }} />
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-gradient-blue transition-all">
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                    style={{ background: `${s.accent}15`, color: s.accent, border: `1px solid ${s.accent}25` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <div className="flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" style={{ color: s.accent }}>
                Pelajari lebih lanjut <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
