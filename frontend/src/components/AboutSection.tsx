import { useEffect, useRef } from 'react';
import { Target, Eye, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold-dark text-sm font-bold tracking-wide uppercase">
            Who We Are
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy mb-6 leading-tight">
              About{' '}
              <span className="text-gradient-gold">AKS Digital</span>{' '}
              Media Solutions
            </h2>
            <p className="text-navy/70 text-base sm:text-lg leading-relaxed mb-8">
              AKS Digital Media Solutions is a Thoothukudi-based digital marketing agency helping businesses grow online. We specialize in SEO, Social Media Marketing, Lead Generation, and Branding. Our mission is to help local and national brands increase visibility, generate quality leads, and drive real business growth.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Target, title: 'Mission', desc: 'Drive real business growth for every client' },
                { icon: Eye, title: 'Vision', desc: 'Be the most trusted digital partner in South India' },
                { icon: TrendingUp, title: 'Approach', desc: 'Data-driven strategies with measurable results' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-4 rounded-xl bg-blue-pale border border-blue-light hover:border-gold/40 transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center mb-3 group-hover:bg-gold transition-colors">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-display font-bold text-navy text-sm mb-1">{title}</div>
                  <div className="text-navy/60 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 delay-200">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-gold/15 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-navy/10 -z-10" />
              <img
                src="/assets/generated/aks-about.dim_800x600.png"
                alt="AKS Digital Media Solutions Team"
                className="w-full h-auto rounded-2xl shadow-[0_20px_60px_0_oklch(0.30_0.18_255_/_0.20)] object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="hidden w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy to-blue-bright items-center justify-center shadow-[0_20px_60px_0_oklch(0.30_0.18_255_/_0.20)]"
              >
                <div className="text-center text-white p-8">
                  <div className="font-display font-black text-4xl text-gold mb-2">AKS</div>
                  <div className="font-display font-bold text-xl">Digital Media Solutions</div>
                  <div className="text-white/60 text-sm mt-2">Thoothukudi, Tamil Nadu</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-card px-4 py-3 border border-blue-light">
                <div className="font-display font-black text-2xl text-navy">5+</div>
                <div className="text-navy/60 text-xs font-medium">Years of Excellence</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-gold rounded-xl shadow-cta px-4 py-3">
                <div className="font-display font-black text-2xl text-navy">100+</div>
                <div className="text-navy text-xs font-bold">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
