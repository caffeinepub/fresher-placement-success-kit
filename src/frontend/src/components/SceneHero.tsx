import { useEffect, useRef } from "react";

const FRUITS = [
  {
    id: "apple-1",
    emoji: "🍎",
    left: "8%",
    delay: "0s",
    duration: "13s",
    sway: "25px",
    rot: "20deg",
  },
  {
    id: "orange-1",
    emoji: "🍊",
    left: "18%",
    delay: "2.5s",
    duration: "10s",
    sway: "-30px",
    rot: "-25deg",
  },
  {
    id: "mango-1",
    emoji: "🥭",
    left: "32%",
    delay: "1.2s",
    duration: "14s",
    sway: "35px",
    rot: "15deg",
  },
  {
    id: "grape-1",
    emoji: "🍇",
    left: "47%",
    delay: "3.8s",
    duration: "11s",
    sway: "-20px",
    rot: "-10deg",
  },
  {
    id: "melon-1",
    emoji: "🍉",
    left: "60%",
    delay: "0.7s",
    duration: "15s",
    sway: "28px",
    rot: "30deg",
  },
  {
    id: "lemon-1",
    emoji: "🍋",
    left: "72%",
    delay: "4.5s",
    duration: "9s",
    sway: "-35px",
    rot: "-18deg",
  },
  {
    id: "straw-1",
    emoji: "🍓",
    left: "85%",
    delay: "2.0s",
    duration: "12s",
    sway: "22px",
    rot: "12deg",
  },
  {
    id: "peach-1",
    emoji: "🍑",
    left: "93%",
    delay: "5.5s",
    duration: "11s",
    sway: "-28px",
    rot: "-22deg",
  },
  {
    id: "grape-2",
    emoji: "🍇",
    left: "24%",
    delay: "6.0s",
    duration: "13s",
    sway: "18px",
    rot: "8deg",
  },
  {
    id: "orange-2",
    emoji: "🍊",
    left: "54%",
    delay: "7.2s",
    duration: "10s",
    sway: "-25px",
    rot: "-15deg",
  },
];

export default function SceneHero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Subtle parallax on scroll
    const onScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        el.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      data-ocid="hero.section"
      className="scene-section"
      style={{ minHeight: "100vh" }}
    >
      {/* Background with Ken Burns */}
      <div
        className="scene-bg ken-burns"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-fruits-falling.dim_1920x1080.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div
        className="scene-overlay"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.70) 100%)",
        }}
      />

      {/* Floating fruit emojis */}
      {FRUITS.map((f) => (
        <span
          key={f.id}
          className="float-emoji"
          style={
            {
              left: f.left,
              "--duration": f.duration,
              "--delay": f.delay,
              "--sway": f.sway,
              "--rot": f.rot,
            } as React.CSSProperties
          }
        >
          {f.emoji}
        </span>
      ))}

      {/* Center content */}
      <div className="scene-content text-center px-6" ref={scrollRef}>
        {/* Cinematic letterbox top bar */}
        <div className="hero-label mb-6 flex flex-col items-center gap-3">
          <span className="font-outfit text-white/70 uppercase tracking-[0.4em] text-xs">
            ✦ &nbsp;Welcome to&nbsp; ✦
          </span>
        </div>

        {/* Main title — two-line dramatic stack */}
        <h1
          data-ocid="hero.title"
          className="hero-title font-playfair text-white font-bold"
          style={{ lineHeight: 0.95 }}
        >
          {/* Anchor word — maximum size */}
          <span
            className="block"
            style={{
              fontSize: "clamp(3.6rem, 11vw, 9rem)",
              letterSpacing: "-0.01em",
              textShadow: "0 6px 40px rgba(0,0,0,0.55)",
            }}
          >
            ATCHAYA
          </span>
          {/* Shimmer accent word — slightly smaller, letter-spaced */}
          <span
            className="text-shimmer block"
            style={{
              fontSize: "clamp(1.8rem, 5.5vw, 4.8rem)",
              letterSpacing: "0.22em",
              marginTop: "0.15em",
            }}
          >
            FRUIT SHOP
          </span>
        </h1>

        {/* Decorative gold line with diamond */}
        <div className="hero-divider my-7 flex justify-center">
          <span className="gold-divider" />
        </div>

        {/* Tagline */}
        <p
          className="hero-tagline font-playfair italic text-gold"
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
            textShadow: "0 2px 20px rgba(255,215,0,0.45)",
            letterSpacing: "0.04em",
          }}
        >
          "Freshness You Can Trust"
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase font-outfit">
          Scroll
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gold"
          role="img"
          aria-label="Scroll down"
        >
          <title>Scroll down</title>
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
