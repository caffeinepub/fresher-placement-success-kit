import {
  CheckCircle2,
  Leaf,
  MapPin,
  Phone,
  ShoppingBag,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiGooglemaps, SiInstagram, SiWhatsapp } from "react-icons/si";

/* ─── Constants ─── */
const WHATSAPP_ORDER_URL =
  "https://wa.me/919080984169?text=Hi%20I%20want%20to%20order%20fruits%20from%20ATCHAYA%20FRUIT%20SHOP";
const WHATSAPP_BASE_URL = "https://wa.me/919080984169";
const PHONE_NUMBER = "9080984169";
const INSTAGRAM_URL = "https://www.instagram.com/atchaya_fruits_shop";
const GOOGLE_MAPS_URL = "https://share.google/s7jqR1nbzMwoRMfh6";
const CURRENT_YEAR = new Date().getFullYear();

/* ─── Fruit data ─── */
const FRUITS = [
  {
    emoji: "🍎",
    name: "Apple",
    desc: "Crisp & sweet, fresh daily from the orchard",
    color: "#ef4444",
    bg: "#fef2f2",
  },
  {
    emoji: "🍌",
    name: "Banana",
    desc: "Naturally sweet and full of energy",
    color: "#eab308",
    bg: "#fefce8",
  },
  {
    emoji: "🍊",
    name: "Orange",
    desc: "Juicy citrus bursting with vitamin C",
    color: "#f97316",
    bg: "#fff7ed",
  },
  {
    emoji: "🍇",
    name: "Grapes",
    desc: "Plump and sweet, handpicked with care",
    color: "#9333ea",
    bg: "#faf5ff",
  },
  {
    emoji: "🥭",
    name: "Mango",
    desc: "King of fruits — tropical and delicious",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    emoji: "🍉",
    name: "Watermelon",
    desc: "Cool, refreshing slices for hot days",
    color: "#22c55e",
    bg: "#f0fdf4",
  },
];

const WHY_CHOOSE = [
  {
    icon: <Leaf className="w-6 h-6" />,
    emoji: "🌿",
    title: "Fresh Fruits Daily",
    desc: "New stock arrives every morning",
    bg: "from-green-500 to-emerald-600",
  },
  {
    icon: <Star className="w-6 h-6" />,
    emoji: "⭐",
    title: "Best Quality",
    desc: "Hand-selected premium produce",
    bg: "from-yellow-400 to-orange-500",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    emoji: "💰",
    title: "Affordable Price",
    desc: "Market-best prices guaranteed",
    bg: "from-orange-500 to-red-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    emoji: "⚡",
    title: "Fast Customer Service",
    desc: "Quick response, same-day delivery",
    bg: "from-blue-500 to-cyan-500",
  },
];

/* ─── Scroll reveal hook ─── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    for (const el of document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    )) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}

/* ─── Mobile menu state ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Home", "About", "Products", "Gallery", "Contact"];

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-section"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 font-display font-black text-lg text-gray-900 hover:text-brand-green transition-colors"
          >
            <span className="text-2xl">🍎</span>
            <span>
              <span className="text-brand-green">ATCHAYA</span>{" "}
              <span className="text-gray-800 text-base font-bold">
                FRUIT SHOP
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                type="button"
                data-ocid="nav.link"
                onClick={() => scrollTo(link)}
                className="nav-link text-sm font-semibold text-gray-700 hover:text-brand-green"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold text-sm px-5 py-2.5 rounded-full hover:scale-105 hover:brightness-110 transition-all duration-200 shadow-whatsapp-glow"
            >
              <SiWhatsapp className="w-4 h-4" />
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-gray-800 mb-1.5 transition-all" />
            <div className="w-5 h-0.5 bg-gray-800 mb-1.5 transition-all" />
            <div className="w-5 h-0.5 bg-gray-800 transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4 space-y-2">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              data-ocid="nav.link"
              onClick={() => scrollTo(link)}
              className="block w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-brand-green hover:bg-green-50 rounded-lg transition-colors"
            >
              {link}
            </button>
          ))}
          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-whatsapp text-white font-bold text-sm px-5 py-3 rounded-full mt-2 justify-center hover:brightness-110"
          >
            <SiWhatsapp className="w-4 h-4" />
            Order on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with Ken Burns */}
      <div
        className="ken-burns absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-fruits.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-16">
        {/* Badge */}
        <div className="animate-fade-in delay-100 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Thoothukudi District's Finest Fruit Shop
        </div>

        {/* Main heading */}
        <h1
          className="animate-fade-in-up delay-200 font-display font-black text-white text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
        >
          Welcome to
          <br />
          <span className="text-gradient-green-orange">ATCHAYA</span>
          <br />
          FRUIT SHOP
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up delay-300 text-xl sm:text-2xl lg:text-3xl font-semibold mb-10 flex items-center justify-center flex-wrap gap-3">
          <span className="text-green-400">Fresh</span>
          <span className="text-white/50 text-lg">•</span>
          <span className="text-yellow-300">Healthy</span>
          <span className="text-white/50 text-lg">•</span>
          <span className="text-orange-400">Affordable</span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.primary_button"
            className="btn-whatsapp"
          >
            <SiWhatsapp className="w-5 h-5 shrink-0" />
            Order on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            data-ocid="hero.secondary_button"
            className="btn-call"
          >
            <Phone className="w-5 h-5 shrink-0" />
            Call Now – {PHONE_NUMBER}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-700 mt-16 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent animate-float" />
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal-left">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{
                  background: "linear-gradient(135deg, #16a34a, #ea580c)",
                  filter: "blur(20px)",
                }}
              />
              <img
                src="/assets/generated/about-fruits.dim_800x600.jpg"
                alt="Fresh fruit display at ATCHAYA FRUIT SHOP"
                className="relative w-full rounded-2xl shadow-section object-cover"
                style={{ maxHeight: "420px" }}
                loading="lazy"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-brand-green text-white font-display font-black text-sm px-5 py-3 rounded-2xl shadow-green-glow">
                🌿 100% Fresh
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-display font-black text-gray-900 text-3xl sm:text-4xl lg:text-5xl mt-3 mb-6">
              <span className="section-heading">About Us</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              ATCHAYA Fruit Shop provides fresh, hygienic and high quality
              fruits directly to customers. We ensure daily fresh stock and
              affordable prices, serving the people of Thoothukudi District with
              the finest tropical and seasonal fruits.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Every fruit in our shop is handpicked and quality-checked to
              guarantee freshness. We believe healthy eating starts with the
              best ingredients — and we bring them right to your doorstep.
            </p>

            {/* Stat badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Daily Fresh Stock", emoji: "🌅" },
                { label: "Hygienic Quality", emoji: "✨" },
                { label: "Affordable Prices", emoji: "💚" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-fruit-bg border border-brand-green/20 text-brand-green-dark font-semibold text-sm px-4 py-2.5 rounded-full"
                >
                  <span>{badge.emoji}</span>
                  {badge.label}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold text-sm px-6 py-3 rounded-full hover:scale-105 hover:bg-green-700 transition-all duration-200 shadow-green-glow"
              >
                <SiWhatsapp className="w-4 h-4" />
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Products Section ─── */
function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-fruit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-display font-black text-gray-900 text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            Our Fresh <span className="text-gradient-green-orange">Fruits</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Handpicked and delivered fresh every day — the best of nature's
            bounty
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {FRUITS.map((fruit, i) => (
            <div
              key={fruit.name}
              data-ocid={`products.item.${i + 1}`}
              className="fruit-card glass-card rounded-2xl p-6 sm:p-8 text-center reveal"
              style={{
                animationDelay: `${i * 0.08}s`,
                background: `${fruit.bg}cc`,
                backdropFilter: "blur(10px)",
                border: `1px solid ${fruit.color}22`,
              }}
            >
              <div
                className="text-5xl sm:text-6xl mb-4 animate-float"
                style={{ animationDelay: `${i * 0.5}s` }}
                aria-label={fruit.name}
              >
                {fruit.emoji}
              </div>
              <h3
                className="font-display font-black text-lg sm:text-xl mb-2"
                style={{ color: fruit.color }}
              >
                {fruit.name}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {fruit.desc}
              </p>
              <div
                className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ background: fruit.color }}
              >
                Available Daily
              </div>
            </div>
          ))}
        </div>

        {/* CTA under grid */}
        <div className="text-center mt-12 reveal">
          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-white font-bold px-8 py-4 rounded-full hover:scale-105 hover:bg-green-700 transition-all duration-200 shadow-green-glow text-lg"
          >
            <SiWhatsapp className="w-5 h-5" />
            Order Any Fruit on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Special Highlight Section ─── */
function HighlightSection() {
  return (
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #16a34a 0%, #ea580c 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center reveal">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-black text-2xl sm:text-3xl px-8 py-5 rounded-2xl mb-8 shadow-section">
          <span className="text-4xl">🚀</span>
          Online Order Available
        </div>

        <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
          Delivering Freshness to Your Door
        </h2>
        <p className="text-white/85 text-lg sm:text-xl mb-4 font-semibold">
          🏠 Delivery Available Only in Thoothukudi District
        </p>
        <p className="text-white/70 text-base mb-10">
          Place your order on WhatsApp — just send us:
          <br />
          <span className="font-bold text-white">
            Fruit Name • Quantity • Delivery Address
          </span>
        </p>

        <a
          href={WHATSAPP_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-green-700 font-black text-lg px-10 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-200"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
        >
          <SiWhatsapp className="w-6 h-6 text-whatsapp" />
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ─── Gallery Section ─── */
function GallerySection() {
  const galleryTiles = [
    { emoji: "🥝", label: "Fresh Daily", color: "#16a34a" },
    { emoji: "🍑", label: "Premium Quality", color: "#f97316" },
    { emoji: "🍋", label: "Best Selection", color: "#eab308" },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">
            Our Shop
          </span>
          <h2 className="font-display font-black text-gray-900 text-3xl sm:text-4xl lg:text-5xl mt-3">
            Fresh From Our{" "}
            <span className="text-gradient-green-orange">Shop</span>
          </h2>
        </div>

        {/* Real shop photo */}
        <div className="mb-6 lg:mb-8 reveal">
          <div className="relative h-72 sm:h-80 lg:h-96 max-w-2xl mx-auto">
            <div
              className="absolute -inset-2 rounded-3xl opacity-15"
              style={{
                background: "linear-gradient(135deg, #4ade80, #fbbf24)",
                filter: "blur(16px)",
              }}
            />
            <img
              src="/assets/uploads/1731639406428-1.jpg"
              alt="Fresh grapes, pineapples and apples at ATCHAYA FRUIT SHOP"
              className="relative w-full h-full object-cover rounded-2xl shadow-section"
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)",
              }}
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-display font-black text-xl">
                Fresh Stock at Our Shop
              </p>
              <p className="text-white/80 text-sm">
                Grapes • Pineapples • Apples
              </p>
            </div>
            {/* Live badge */}
            <div className="absolute top-4 right-4">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white"
                style={{
                  background: "rgba(22,163,74,0.85)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Real Shop
              </span>
            </div>
          </div>
        </div>

        {/* Decorative tiles row */}
        <div className="grid sm:grid-cols-3 gap-5">
          {galleryTiles.map((tile, i) => (
            <div
              key={tile.label}
              className="reveal fruit-card rounded-2xl p-6 flex items-center gap-5 shadow-fruit-card"
              style={{
                background: `linear-gradient(135deg, ${tile.color}12, ${tile.color}06)`,
                border: `1px solid ${tile.color}25`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: `${tile.color}20` }}
              >
                {tile.emoji}
              </div>
              <div>
                <h3
                  className="font-display font-black text-lg mb-1"
                  style={{ color: tile.color }}
                >
                  {tile.label}
                </h3>
                <p className="text-gray-500 text-sm">
                  {i === 0
                    ? "New stock every morning for maximum freshness"
                    : i === 1
                      ? "Handpicked fruits that meet our high standards"
                      : "Wide variety of seasonal and tropical fruits"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us Section ─── */
function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-fruit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">
            Our Promise
          </span>
          <h2 className="font-display font-black text-gray-900 text-3xl sm:text-4xl lg:text-5xl mt-3">
            Why Choose <span className="text-gradient-green-orange">Us?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE.map((item, i) => (
            <div
              key={item.title}
              className="fruit-card glass-card rounded-2xl p-6 text-center reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center shadow-md`}
              >
                <span className="text-white text-2xl">{item.emoji}</span>
              </div>
              <h3 className="font-display font-black text-gray-900 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Order Form ─── */
function OrderForm() {
  const [fruitName, setFruitName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi I want to order from ATCHAYA FRUIT SHOP\nFruit: ${fruitName}\nQuantity: ${quantity}\nAddress: ${address}`,
    );
    window.open(`https://wa.me/919080984169?text=${text}`, "_blank");
    setSubmitted(true);
    setFruitName("");
    setQuantity("");
    setAddress("");
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <div
      className="reveal mb-10 rounded-2xl p-7 text-left"
      style={{
        background: "rgba(255,255,255,0.95)",
        boxShadow:
          "0 4px 24px rgba(22,163,74,0.12), 0 1px 4px rgba(22,163,74,0.08)",
        border: "1px solid rgba(22,163,74,0.18)",
      }}
    >
      <h3 className="font-display font-black text-gray-900 text-xl mb-1 flex items-center gap-2">
        <span>🛒</span> Place Your Order
      </h3>
      <p className="text-gray-500 text-sm mb-6">
        Fill in the details below — we'll confirm via WhatsApp instantly!
      </p>

      {submitted ? (
        <div
          data-ocid="order.success_state"
          className="flex flex-col items-center justify-center gap-3 py-8 rounded-xl text-center"
          style={{
            background: "linear-gradient(135deg, #16a34a, #15803d)",
            color: "#fff",
          }}
        >
          <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2} />
          <p className="font-bold text-lg leading-snug">
            Your order has been sent on WhatsApp!
          </p>
          <p className="text-green-100 text-sm">We'll confirm shortly. 🍎</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Fruit Name */}
          <div>
            <label
              htmlFor="order-fruit"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              🍎 Fruit Name
            </label>
            <input
              id="order-fruit"
              type="text"
              required
              value={fruitName}
              onChange={(e) => setFruitName(e.target.value)}
              placeholder="e.g. Apple, Mango, Grapes"
              data-ocid="order.fruit_name.input"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/25"
              autoComplete="off"
            />
          </div>

          {/* Quantity */}
          <div>
            <label
              htmlFor="order-quantity"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              📦 Quantity
            </label>
            <input
              id="order-quantity"
              type="text"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 1 kg, 2 dozen"
              data-ocid="order.quantity.input"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/25"
              autoComplete="off"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label
              htmlFor="order-address"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              📍 Delivery Address
            </label>
            <textarea
              id="order-address"
              required
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your delivery address in Thoothukudi District"
              data-ocid="order.address.textarea"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/25 resize-none"
              autoComplete="off"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            data-ocid="order.submit_button"
            className="mt-1 w-full inline-flex items-center justify-center gap-3 font-bold text-base text-white rounded-full py-4 px-8 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #16a34a, #15803d)",
              boxShadow: "0 4px 20px rgba(22,163,74,0.4)",
            }}
          >
            <SiWhatsapp className="w-5 h-5 shrink-0" />
            Send Order on WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}

/* ─── Contact Section ─── */
function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="reveal">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-gray-900 text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            Contact <span className="text-gradient-green-orange">Us</span>
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Ready to order? Reach us directly on WhatsApp or phone
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {/* Phone */}
          <div className="reveal glass-card rounded-2xl p-7 text-left">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="font-display font-black text-gray-900 text-lg mb-2">
              Call Us
            </h3>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-brand-orange font-black text-2xl hover:text-orange-600 transition-colors"
            >
              {PHONE_NUMBER}
            </a>
            <p className="text-gray-400 text-sm mt-1">Mon – Sun, 7AM – 8PM</p>
          </div>

          {/* Location */}
          <div
            className="reveal glass-card rounded-2xl p-7 text-left"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-brand-green" />
            </div>
            <h3 className="font-display font-black text-gray-900 text-lg mb-2">
              Location
            </h3>
            <p className="text-brand-green font-bold text-lg">
              Thoothukudi District
            </p>
            <p className="text-gray-400 text-sm mt-1">Tamil Nadu, India</p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.map_marker"
              className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-brand-green hover:text-green-700 transition-colors"
            >
              <SiGooglemaps className="w-4 h-4 text-red-500" />
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Order instruction */}
        <div
          className="reveal mb-10 rounded-2xl p-6 text-left"
          style={{
            background: "linear-gradient(135deg, #f0fdf4, #fff7ed)",
            border: "1px solid rgba(22,163,74,0.2)",
          }}
        >
          <h3 className="font-display font-black text-gray-900 text-lg mb-3 flex items-center gap-2">
            <span>📋</span> How to Order
          </h3>
          <div className="flex flex-wrap gap-3">
            {["🍎 Fruit Name", "📦 Quantity", "📍 Delivery Address"].map(
              (step) => (
                <div
                  key={step}
                  className="bg-white border border-brand-green/20 text-brand-green-dark font-semibold text-sm px-4 py-2 rounded-full"
                >
                  {step}
                </div>
              ),
            )}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Send these details on WhatsApp and we'll confirm your order
            immediately!
          </p>
        </div>

        {/* Order Form */}
        <OrderForm />

        {/* WhatsApp CTA */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.primary_button"
            className="btn-whatsapp text-lg px-10 py-5"
            style={{ fontSize: "1.1rem", padding: "20px 48px" }}
          >
            <SiWhatsapp className="w-6 h-6 shrink-0" />
            Order on WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.secondary_button"
            className="inline-flex items-center gap-2 font-bold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f9a825, #e1306c, #833ab4)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(225,48,108,0.35)",
              fontSize: "1.1rem",
              padding: "20px 40px",
            }}
          >
            <SiInstagram className="w-6 h-6 shrink-0" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      className="py-12 px-4 text-center"
      style={{ background: "#14532d" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-3xl">🍎</span>
          <span className="font-display font-black text-xl text-white">
            ATCHAYA FRUIT SHOP
          </span>
        </div>

        {/* Tagline */}
        <p className="text-green-200 font-semibold text-lg mb-6">
          Freshness You Can Trust 🍎
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 justify-center items-center mb-6">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 text-green-300 hover:text-white transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" />
            {PHONE_NUMBER}
          </a>
          <span className="text-green-600">•</span>
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-300 hover:text-white transition-colors font-semibold"
          >
            <SiWhatsapp className="w-4 h-4" />
            WhatsApp Us
          </a>
          <span className="text-green-600">•</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.link"
            className="inline-flex items-center gap-2 text-green-300 hover:text-white transition-colors font-semibold"
          >
            <SiInstagram className="w-4 h-4" />
            Instagram
          </a>
          <span className="text-green-600">•</span>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.map_marker"
            className="inline-flex items-center gap-2 text-green-300 hover:text-white transition-colors font-semibold"
          >
            <SiGooglemaps className="w-4 h-4 text-red-400" />
            Find Us
          </a>
        </div>

        <p className="text-green-400/70 text-sm mb-6">
          🏠 Delivering only in Thoothukudi District
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-green-700 mx-auto mb-6" />

        {/* Caffeine attribution */}
        <p className="text-green-600 text-xs">
          © {CURRENT_YEAR}. Built with ♥ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-200 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ─── Main App ─── */
export default function App() {
  const appRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  return (
    <div ref={appRef} className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <HighlightSection />
        <GallerySection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
