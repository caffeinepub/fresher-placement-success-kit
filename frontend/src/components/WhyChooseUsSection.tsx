import { useEffect, useRef } from 'react';
import { CheckSquare } from 'lucide-react';

const benefits = [
  {
    title: 'Result-Oriented Strategies',
    description:
      'Every campaign is backed by data and focused on delivering measurable results that directly impact your business growth.',
  },
  {
    title: 'Affordable Packages',
    description:
      'Premium digital marketing at competitive prices — making professional marketing accessible for businesses of all sizes.',
  },
  {
    title: 'Local Market Expertise (Thoothukudi Focus)',
    description:
      'Deep understanding of the Thoothukudi market helps us craft hyper-local strategies that resonate with your target audience.',
  },
  {
    title: 'Personalized Support',
    description:
      'We treat every client uniquely with dedicated one-on-one support, ensuring your goals are always our top priority.',
  },
];

export default function WhyChooseUsSection() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-20 sm:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #000000 0%, #0B1C2D 60%, #0a1520 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4"
            style={{
              background: 'rgba(244,180,0,0.15)',
              color: '#F4B400',
              border: '1px solid rgba(244,180,0,0.3)',
            }}
          >
            Our Advantage
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            Why Choose{' '}
            <span style={{ color: '#F4B400' }}>AKS Digital Media Solutions?</span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            We go beyond just delivering services — we become your dedicated growth partner.
          </p>
        </div>

        {/* Benefits Grid — 2 cols desktop, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="scroll-animate opacity-0 -translate-x-5 transition-all duration-700"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div
                className="flex gap-5 p-6 sm:p-8 rounded-2xl h-full group transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(244,180,0,0.25)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(244,180,0,0.6)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 4px 32px rgba(244,180,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(244,180,0,0.25)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
                }}
              >
                {/* Gold checkmark icon */}
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(244,180,0,0.15)',
                    border: '1px solid rgba(244,180,0,0.4)',
                  }}
                >
                  <CheckSquare
                    className="w-6 h-6"
                    style={{ color: '#F4B400' }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="font-display font-bold text-base sm:text-lg mb-2 leading-snug"
                    style={{ color: '#FFFFFF' }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip — dark themed */}
        <div
          className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 delay-300 mt-12 rounded-2xl p-8 sm:p-10 text-center"
          style={{
            background: 'rgba(244,180,0,0.08)',
            border: '1px solid rgba(244,180,0,0.3)',
          }}
        >
          <p
            className="font-display font-bold text-xl sm:text-2xl mb-4"
            style={{ color: '#FFFFFF' }}
          >
            Ready to take your business to the next level?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-cta"
            style={{ backgroundColor: '#F4B400', color: '#0B1C2D' }}
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
