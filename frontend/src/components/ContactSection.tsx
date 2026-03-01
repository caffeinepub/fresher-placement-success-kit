import { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold-dark text-sm font-bold tracking-wide uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-4">
            Let's Grow Your Business Today 🚀
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to take your business to new heights? Reach out to us and get a free consultation today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="bg-blue-pale rounded-2xl p-6 sm:p-8 border border-blue-light">
              <h3 className="font-display font-bold text-navy text-xl mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-display font-bold text-navy text-lg mb-2">Message Sent!</h4>
                  <p className="text-navy/60 text-sm mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-blue-primary transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-blue-light bg-white text-navy placeholder:text-navy/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl border border-blue-light bg-white text-navy placeholder:text-navy/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business and goals..."
                      className="w-full px-4 py-3 rounded-xl border border-blue-light bg-white text-navy placeholder:text-navy/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white font-bold text-base hover:bg-blue-primary transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-blue-glow"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 delay-200 flex flex-col gap-6">
            {/* Info cards */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-pale border border-blue-light hover:border-gold/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-navy text-base mb-1">Our Location</div>
                <div className="text-navy/60 text-sm">Thoothukudi, Tamil Nadu, India</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-pale border border-blue-light hover:border-gold/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-navy text-base mb-1">Email Us</div>
                <a
                  href="mailto:atchayapandian52@gmail.com"
                  className="text-blue-primary hover:text-gold text-sm font-medium transition-colors break-all"
                >
                  atchayapandian52@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-[oklch(0.52_0.17_145)] hover:bg-[oklch(0.45_0.17_145)] text-white font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-[0_4px_20px_0_oklch(0.52_0.17_145_/_0.35)] hover:shadow-[0_8px_32px_0_oklch(0.52_0.17_145_/_0.50)]"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>

            {/* Business hours */}
            <div className="p-5 rounded-2xl bg-navy text-white">
              <div className="font-display font-bold text-base mb-3 text-gold">Business Hours</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Monday – Friday</span>
                  <span className="font-semibold">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Saturday</span>
                  <span className="font-semibold">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Sunday</span>
                  <span className="text-white/50">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
