import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Rajesh Textiles',
    location: 'Thoothukudi',
    quote: "AKS Digital Media Solutions transformed our online presence completely. Our website traffic increased by 300% in just 3 months, and we're getting quality leads every day. Highly recommended!",
    rating: 5,
    initials: 'RK',
  },
  {
    name: 'Priya Sundaram',
    role: 'Director, Sundaram Exports',
    location: 'Tamil Nadu',
    quote: 'The team at AKS is incredibly professional and result-oriented. Their social media campaigns helped us reach a wider audience and our sales have grown significantly. Best investment we made!',
    rating: 5,
    initials: 'PS',
  },
  {
    name: 'Mohammed Farhan',
    role: 'CEO, Farhan Constructions',
    location: 'Thoothukudi',
    quote: 'From branding to lead generation, AKS handled everything seamlessly. Their personalized approach and quick response time sets them apart. Our business has never been more visible online.',
    rating: 5,
    initials: 'MF',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
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
    <section id="testimonials" ref={sectionRef} className="py-20 sm:py-28 bg-blue-pale overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold-dark text-sm font-bold tracking-wide uppercase mb-4">
            Client Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="scroll-animate opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-blue-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gold/40" />
                </div>

                {/* Rating */}
                <StarRating count={testimonial.rating} />

                {/* Quote text */}
                <p className="text-navy/70 text-sm leading-relaxed mt-4 flex-1 italic">
                  "{testimonial.quote}"
                </p>

                {/* Client info */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-blue-light">
                  <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center shrink-0 shadow-sm">
                    <span className="font-display font-bold text-gold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy text-sm">{testimonial.name}</div>
                    <div className="text-navy/50 text-xs">{testimonial.role}</div>
                    <div className="text-gold text-xs font-medium">{testimonial.location}</div>
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
