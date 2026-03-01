import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0B1C2D' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/assets/generated/aks-hero-bg-dark.dim_1920x1080.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(11,28,45,0.88) 0%, rgba(11,28,45,0.72) 60%, rgba(11,28,45,0.85) 100%)' }}
      />

      {/* Subtle gold bokeh glow top-right */}
      <div
        className="absolute top-16 right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,180,0,0.12) 0%, transparent 70%)' }}
      />
      {/* Subtle blue glow bottom-left */}
      <div
        className="absolute bottom-24 left-8 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(11,28,45,0.6) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-28 sm:py-36 w-full">
        <div className="max-w-3xl mx-auto text-center">

          {/* Location badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm"
            style={{
              background: 'rgba(244,180,0,0.15)',
              border: '1px solid rgba(244,180,0,0.4)',
              color: '#F4B400',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#F4B400' }}
            />
            Thoothukudi, Tamil Nadu · Digital Marketing Agency
          </div>

          {/* Main Heading */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
            style={{ color: '#FFFFFF' }}
          >
            Grow Your Business{' '}
            <span style={{ color: '#F4B400' }}>Online</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide mb-4"
            style={{ color: '#F4B400' }}
          >
            Digital Marketing Agency in Thoothukudi
          </p>

          {/* Tagline */}
          <p
            className="text-base sm:text-lg md:text-xl font-medium italic mb-12 tracking-wide"
            style={{ color: '#FFFFFF', opacity: 0.9 }}
          >
            Turning Clicks Into Clients
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-lg shadow-cta hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center"
              style={{ backgroundColor: '#F4B400', color: '#0B1C2D' }}
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center backdrop-blur-sm"
              style={{
                border: '2px solid #F4B400',
                color: '#FFFFFF',
                background: 'rgba(244,180,0,0.08)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(244,180,0,0.18)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(244,180,0,0.08)';
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: '100+', label: 'Clients Served' },
              { value: '5+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display font-black text-2xl sm:text-3xl"
                  style={{ color: '#F4B400' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs sm:text-sm font-medium mt-1"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave — matches the next section's background */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="oklch(0.99 0 0)" />
        </svg>
      </div>
    </section>
  );
}
