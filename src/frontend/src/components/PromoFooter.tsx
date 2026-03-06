export default function PromoFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "#0a0a0a" }}
      className="py-10 px-6 text-center border-t border-white/10"
    >
      {/* Shop name */}
      <p
        className="font-playfair font-bold mb-2"
        style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
          color: "#FFD700",
          textShadow: "0 0 12px rgba(255,215,0,0.3)",
        }}
      >
        🍎 ATCHAYA FRUIT SHOP
      </p>

      {/* Descriptor */}
      <p className="font-outfit text-white/60 text-sm mb-1 tracking-wide">
        Only Thoothukudi District &nbsp;|&nbsp; Fresh • Healthy • Affordable
      </p>

      {/* Contact */}
      <p className="font-outfit text-white/50 text-xs mb-6">📞 9080984169</p>

      {/* Divider */}
      <div className="flex justify-center mb-6">
        <span
          style={{
            display: "block",
            width: "60px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)",
          }}
        />
      </div>

      {/* Caffeine attribution */}
      <p className="font-outfit text-white/30 text-xs">
        © {year}. Built with <span style={{ color: "#FFD700" }}>♥</span> using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/60 transition-colors underline underline-offset-2"
          style={{ color: "rgba(255,215,0,0.4)" }}
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
