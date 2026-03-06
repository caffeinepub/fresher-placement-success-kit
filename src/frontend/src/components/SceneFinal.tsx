import { useEffect, useRef, useState } from "react";

export default function SceneFinal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      data-ocid="final.section"
      ref={sectionRef}
      className="scene-section"
      style={{ minHeight: "100vh" }}
    >
      {/* Background with subtle blur via pseudo-layer */}
      <div
        className="scene-bg"
        style={{
          backgroundImage:
            "url('/assets/generated/closeup-fruits.dim_1920x1080.jpg')",
          backgroundPosition: "center center",
          filter: "blur(2px)",
          transform: "scale(1.04)", // compensate blur edge
        }}
      />

      {/* Dark overlay */}
      <div
        className="scene-overlay"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.70) 100%)",
        }}
      />

      {/* Radial vignette */}
      <div
        className="scene-overlay"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at center, transparent 30%, rgba(0,0,0,0.65) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="scene-content px-6 py-16 text-center">
        {/* Cinematic letterbox sweep bar */}
        <div className="flex justify-center mb-8">
          <span className={`letterbox-bar ${visible ? "bar-visible" : ""}`} />
        </div>

        {/* "Call / WhatsApp" label */}
        <p
          className={`font-outfit uppercase tracking-[0.35em] text-sm md:text-base mb-2 ${visible ? "scene-visible" : "scene-enter"}`}
          style={{
            color: "#FFD700",
            textShadow: "0 0 20px rgba(255,215,0,0.6)",
            transitionDelay: visible ? "0ms" : "0ms",
          }}
        >
          📞 Call / WhatsApp
        </p>

        {/* Big phone number */}
        <div
          className={`${visible ? "scene-visible" : "scene-enter"}`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          <p
            className="font-fraunces font-bold text-white glow-text"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 7rem)",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            9080984169
          </p>
        </div>

        {/* Divider */}
        <div
          className={`my-8 flex justify-center ${visible ? "scene-visible" : "scene-enter"}`}
          style={{ transitionDelay: visible ? "300ms" : "0ms" }}
        >
          <span className="gold-divider" />
        </div>

        {/* Buttons row */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 ${visible ? "scene-visible" : "scene-enter"}`}
          style={{ transitionDelay: visible ? "400ms" : "0ms" }}
        >
          <a
            data-ocid="whatsapp.primary_button"
            href="https://wa.me/919080984169"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            aria-label="Contact on WhatsApp: 9080984169"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Now
          </a>

          <a
            data-ocid="call.secondary_button"
            href="tel:+919080984169"
            className="btn-call"
            aria-label="Call: 9080984169"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Final tagline */}
        <div
          className={`${visible ? "scene-visible" : "scene-enter"}`}
          style={{ transitionDelay: visible ? "550ms" : "0ms" }}
        >
          <p
            className="font-playfair italic"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              color: "#FFD700",
              textShadow:
                "0 0 16px rgba(255,215,0,0.5), 0 0 32px rgba(255,215,0,0.25)",
            }}
          >
            ✨ "Freshness You Can Trust" ✨
          </p>
        </div>
      </div>
    </section>
  );
}
