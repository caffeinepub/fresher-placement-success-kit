import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    id: "shop.card.1" as const,
    icon: "🌿",
    text: "Fresh • Healthy • Affordable",
    size: "large",
    delay: 0,
  },
  {
    id: "shop.card.2" as const,
    icon: "📱",
    text: "Online Order Available",
    size: "medium",
    delay: 150,
  },
  {
    id: "shop.card.3" as const,
    icon: "📍",
    text: "Only Thoothukudi District",
    size: "medium",
    delay: 300,
  },
];

function ShopCard({
  id,
  icon,
  text,
  size,
  delay,
  visible,
}: {
  id: string;
  icon: string;
  text: string;
  size: string;
  delay: number;
  visible: boolean;
}) {
  const isLarge = size === "large";
  return (
    <div
      data-ocid={id}
      className={`glass-card px-6 md:px-10 py-6 md:py-8 text-center w-full max-w-xl mx-auto ${
        visible ? "scene-visible" : "scene-enter"
      }`}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      <span className="text-3xl md:text-4xl mb-3 block">{icon}</span>
      <p
        className={`font-playfair font-bold text-white leading-snug ${
          isLarge ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"
        }`}
        style={
          isLarge
            ? { fontSize: "clamp(1.4rem, 4vw, 2.6rem)" }
            : { fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "#FFD700" }
        }
      >
        {text}
      </p>
    </div>
  );
}

export default function SceneShop() {
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
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      data-ocid="shop.section"
      ref={sectionRef}
      className="scene-section"
      style={{ minHeight: "100vh" }}
    >
      {/* Background */}
      <div
        className="scene-bg"
        style={{
          backgroundImage:
            "url('/assets/generated/shop-display.dim_1920x1080.jpg')",
          backgroundPosition: "center center",
        }}
      />

      {/* Warm cinematic overlay */}
      <div
        className="scene-overlay"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,10,0,0.65) 0%, rgba(10,5,0,0.50) 50%, rgba(20,10,0,0.70) 100%)",
        }}
      />

      {/* Decorative vignette */}
      <div
        className="scene-overlay"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="scene-content px-6 py-16">
        {/* Section heading */}
        <div
          className={`text-center mb-10 md:mb-14 ${visible ? "scene-visible" : "scene-enter"}`}
          style={{ transitionDelay: visible ? "0ms" : "0ms" }}
        >
          {/* Cinematic letterbox sweep bar */}
          <span
            className={`letterbox-bar mx-auto mb-5 ${visible ? "bar-visible" : ""}`}
          />
          <p className="font-outfit text-white/60 uppercase tracking-[0.3em] text-xs md:text-sm mb-3">
            Our Promise
          </p>
          <span className="gold-divider block mx-auto mb-0" />
        </div>

        {/* Cards stacked */}
        <div className="flex flex-col gap-5 md:gap-6 max-w-2xl mx-auto">
          {CARDS.map((card) => (
            <ShopCard key={card.id} {...card} visible={visible} />
          ))}
        </div>

        {/* Bottom accent */}
        <div
          className={`text-center mt-12 ${visible ? "scene-visible" : "scene-enter"}`}
          style={{ transitionDelay: visible ? "500ms" : "0ms" }}
        >
          <p
            className="font-playfair italic"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              color: "rgba(255,215,0,0.75)",
            }}
          >
            Delivered fresh to your doorstep 🚚
          </p>
        </div>
      </div>
    </section>
  );
}
