import { useInView } from '../hooks/useInView';
import { MessageCircle, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function CTABanner() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #050d1a 0%, #071426 40%, #0a1a32 60%, #050d1a 100%)',
        }}
      />
      <div className="absolute inset-0 tech-grid-bg opacity-40" />

      {/* Glow blobs */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #0a70ff, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #d4a832, transparent 70%)' }}
      />

      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-600/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className={`reveal ${inView ? 'in-view' : ''} flex justify-center mb-6`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-light border border-gold-500/25">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">Mulai Transformasi Digital Anda</span>
          </div>
        </div>

        {/* Headline */}
        <div className={`reveal reveal-delay-1 ${inView ? 'in-view' : ''}`}>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Siap Membawa Bisnis Anda{' '}
            <span className="text-gradient-gold">Naik Level?</span>
          </h2>
        </div>

        <div className={`reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Jangan biarkan kompetitor Anda selangkah lebih maju. Konsultasikan kebutuhan digital bisnis Anda
            dengan tim ahli kami — gratis, tanpa komitmen.
          </p>
        </div>

        {/* CTAs */}
        <div className={`reveal reveal-delay-3 ${inView ? 'in-view' : ''} flex flex-col sm:flex-row gap-4 justify-center`}>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #25d366, #128c7e)',
              boxShadow: '0 4px 30px rgba(37,211,102,0.3)',
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi via WhatsApp
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105 border-glow hover:glow-blue"
            style={{
              background: 'linear-gradient(135deg, #0a70ff, #0055e0)',
              boxShadow: '0 4px 30px rgba(10,112,255,0.35)',
            }}
          >
            <Calendar className="w-5 h-5" />
            Jadwalkan Meeting
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Trust row */}
        <div className={`reveal reveal-delay-4 ${inView ? 'in-view' : ''} flex flex-wrap items-center justify-center gap-6 mt-12 pt-10 border-t border-white/5`}>
          {[
            { label: 'Konsultasi Gratis', sub: '0 biaya di awal' },
            { label: 'Response < 2 jam', sub: 'Hari kerja & weekend' },
            { label: 'Garansi Kepuasan', sub: 'Revisi tanpa batas' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-electric-500" />
              <div className="text-left">
                <div className="text-white text-sm font-semibold">{b.label}</div>
                <div className="text-white/40 text-xs">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
