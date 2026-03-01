import { useEffect, useRef } from 'react';
import { Search, Share2, Megaphone, Users, Globe, Palette } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your search rankings and drive organic traffic with our proven SEO strategies tailored for your business.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build a powerful social presence and engage your audience across Facebook, Instagram, LinkedIn, and more.',
  },
  {
    icon: Megaphone,
    title: 'Google & Meta Ads',
    description: 'Maximize ROI with targeted paid advertising campaigns on Google and Meta platforms that convert.',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Generate high-quality leads that convert into paying customers through strategic digital funnels.',
  },
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Create stunning, fast, and mobile-responsive websites that make a lasting impression on your visitors.',
  },
  {
    icon: Palette,
    title: 'Branding Strategy',
    description: 'Build a memorable brand identity that resonates with your target audience and stands out from competitors.',
  },
];

export default function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 sm:py-28 bg-blue-pale overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold-dark text-sm font-bold tracking-wide uppercase mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to grow your business and maximize your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="scroll-animate opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-blue-light hover:shadow-card-hover hover:-translate-y-2 hover:border-gold/30 transition-all duration-300 group cursor-default h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Content */}
                  <h3 className="font-display font-bold text-navy text-lg mb-3">{service.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{service.description}</p>
                  {/* Bottom accent */}
                  <div className="mt-5 w-8 h-0.5 bg-gold rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
