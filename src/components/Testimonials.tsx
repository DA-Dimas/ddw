import { useInView } from '../hooks/useInView';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO, PT Maju Bersama Nusantara',
    company: 'Manufacturing',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'DDW Labs benar-benar mengubah wajah bisnis kami. Website company profile yang mereka buat profesional sekali, dan strategi SEO-nya berhasil meningkatkan traffic organik kami hingga 300% dalam 3 bulan. Sangat rekomendasikan!',
    rating: 5,
    accent: '#0a70ff',
  },
  {
    name: 'Sari Dewi Rahayu',
    role: 'Founder & CEO, Sakura Beauty Co.',
    company: 'Beauty & FMCG',
    image: 'https://images.pexels.com/photos/3768163/pexels-photo-3768163.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Sistem otomasi AI yang DDW Labs bangun untuk toko online kami luar biasa. Chatbot mereka mampu menangani 80% pertanyaan customer secara otomatis. Penjualan naik signifikan dan tim CS kami bisa fokus ke hal strategis.',
    rating: 5,
    accent: '#d4a832',
  },
  {
    name: 'Rizky Firmansyah',
    role: 'Head of Digital, Kopindo Group',
    company: 'Corporate Holding',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Kami mempercayakan transformasi digital seluruh grup perusahaan kepada DDW Labs. Dashboard bisnis terintegrasi yang mereka kembangkan memungkinkan management kami melihat performa real-time dari semua unit bisnis. Impresif!',
    rating: 5,
    accent: '#22d3ee',
  },
  {
    name: 'Andi Prasetyo',
    role: 'Director, StartupVenture ID',
    company: 'Tech Startup',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Branding kit yang DDW Labs buat untuk startup kami benar-benar world-class. Logo, brand guideline, dan seluruh visual identity terasa sangat premium. Investor kami pun terkesan dengan profesionalisme brand kami sekarang.',
    rating: 5,
    accent: '#4ade80',
  },
  {
    name: 'Maya Indrawati',
    role: 'Marketing Manager, RetailPro Indonesia',
    company: 'Retail Chain',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Campaign digital marketing yang dikelola DDW Labs memberikan ROI yang jauh melampaui ekspektasi kami. Cost per lead turun 45% sementara kualitas lead meningkat drastis. Mereka benar-benar paham bisnis retail.',
    rating: 5,
    accent: '#f472b6',
  },
  {
    name: 'Denny Kurniawan',
    role: 'Operations Director, LogisTech Solutions',
    company: 'Logistics & Tech',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Sistem absensi dan payroll yang DDW Labs bangun menghemat 15 jam kerja admin per minggu. Integrasi dengan aplikasi HR kami berjalan mulus. Support tim mereka juga responsif dan sangat membantu.',
    rating: 5,
    accent: '#a78bfa',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-25" />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0a70ff, transparent 70%)' }}
      />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${inView ? 'in-view' : ''}`}>
          <span className="section-label justify-center mb-4">
            <span className="w-4 h-px bg-electric-600" />
            Testimoni Klien
            <span className="w-4 h-px bg-electric-600" />
          </span>
          <h2 className="font-display text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            Apa Kata{' '}
            <span className="text-gradient-gold">Klien Kami</span>
          </h2>
          <p className="text-white/55 text-lg">
            Kepercayaan dan kepuasan klien adalah prioritas utama yang mendorong kami terus berinovasi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group glass-card rounded-2xl p-7 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-${Math.min(i + 1, 6)} ${inView ? 'in-view' : ''}`}
            >
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${t.accent}15`, border: `1px solid ${t.accent}30` }}
                >
                  <Quote className="w-4 h-4" style={{ color: t.accent }} />
                </div>
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>

              {/* Text */}
              <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2"
                  style={{ borderColor: `${t.accent}40` }}
                />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                  <div
                    className="text-[10px] font-medium mt-0.5"
                    style={{ color: t.accent }}
                  >
                    {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
