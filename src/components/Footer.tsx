import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

const services = [
  'Digital Marketing',
  'Website Development',
  'AI Automation',
  'Branding & Design',
  'SEO Optimization',
  'Business System Dev',
];

const company = [
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Blog', href: '#' },
  { label: 'Karir', href: '#' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter/X' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-15" />

      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-600/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <img
                src="/WhatsApp_Image_2026-04-16_at_10.56.41.jpeg"
                alt="DDW Labs Indonesia"
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-white/45 text-sm leading-relaxed">
              Mitra transformasi digital terpercaya untuk UMKM, startup, dan korporat Indonesia.
              Kami mengubah visi bisnis Anda menjadi solusi digital yang nyata.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass-card-light border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:border-electric-600/40 transition-all duration-300 hover:glow-blue-sm"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@ddwlabs.id"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-electric-600/12 border border-electric-600/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-electric-400" />
                </div>
                hello@ddwlabs.id
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-electric-600/12 border border-electric-600/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-electric-400" />
                </div>
                +62 812-3456-7890
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <div className="w-8 h-8 rounded-lg bg-electric-600/12 border border-electric-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-electric-400" />
                </div>
                <span>Jakarta Selatan, DKI Jakarta,<br />Indonesia 12190</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-electric-600" />
              Layanan
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/45 hover:text-white text-sm flex items-center gap-1.5 group transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-electric-500 transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-gold-500" />
              Perusahaan
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-white/45 hover:text-white text-sm flex items-center gap-1.5 group transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-gold-500 transition-colors" />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-electric-600" />
              Konsultasi Gratis
            </h4>
            <p className="text-white/45 text-sm mb-5 leading-relaxed">
              Ceritakan kebutuhan digital bisnis Anda dan dapatkan solusi custom dari tim ahli kami.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 w-full justify-center"
              style={{
                background: 'linear-gradient(135deg, #0a70ff, #0055e0)',
                boxShadow: '0 4px 20px rgba(10,112,255,0.3)',
              }}
            >
              Chat via WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="mt-6 glass-card rounded-xl p-4 border border-gold-500/15">
              <div className="text-gold-400 text-xs font-semibold mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping-slow" />
                Response Time
              </div>
              <div className="text-white text-sm font-bold">Under 2 Hours</div>
              <div className="text-white/40 text-xs">Senin - Sabtu, 08.00 - 21.00 WIB</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} PT DDW Labs Indonesia. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
