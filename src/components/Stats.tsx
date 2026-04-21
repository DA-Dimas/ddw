import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { FolderOpen, Smile as SmileIcon, CalendarCheck, Headphones } from 'lucide-react';

const stats = [
  { icon: FolderOpen, value: 100, suffix: '+', label: 'Project Selesai', desc: 'Delivered on time & on budget', accent: '#0a70ff' },
  { icon: SmileIcon, value: 50, suffix: '+', label: 'Klien Puas', desc: 'Tingkat kepuasan 98%', accent: '#d4a832' },
  { icon: CalendarCheck, value: 3, suffix: '+', label: 'Tahun Pengalaman', desc: 'Terpercaya sejak 2021', accent: '#22d3ee' },
  { icon: Headphones, value: 24, suffix: '/7', label: 'Support', desc: 'Siap membantu kapanpun', accent: '#4ade80' },
];

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient separator */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #030b18 0%, #071426 50%, #030b18 100%)' }} />
      <div className="absolute inset-0 tech-grid-bg opacity-20" />

      {/* Horizontal glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-600/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-600/30 to-transparent" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group text-center glass-card rounded-2xl p-8 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-${i + 1} ${inView ? 'in-view' : ''}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${s.accent}12`,
                  border: `1px solid ${s.accent}28`,
                  boxShadow: `0 0 24px ${s.accent}15`,
                }}
              >
                <s.icon className="w-6 h-6" style={{ color: s.accent }} />
              </div>

              <div
                className="font-display text-4xl xl:text-5xl font-bold mb-2 leading-none"
                style={{ color: s.accent }}
              >
                <Counter target={s.value} suffix={s.suffix} inView={inView} />
              </div>

              <div className="text-white font-semibold text-base mb-1">{s.label}</div>
              <div className="text-white/40 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
