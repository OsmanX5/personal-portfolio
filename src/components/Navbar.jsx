import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useResume } from "../context/ResumeContext";
import { navLinks } from "../Data/index.js";
import logoImg from "../assets/logos/VR_with_strap_128.png";

const Navbar = () => {
  const { resume } = useResume();
  const name = resume?.profile.fullName || "Osman Elfaki";
  const title = resume?.profile.jobTitle || "Software Engineer";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Condense the bar after a little scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const firstName = name.split(" ")[0];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-30 w-[min(1100px,92%)]">
      <div
        className={`glass flex items-center justify-between rounded-2xl px-4 sm:px-5 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="logo"
            className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="leading-tight">
            <p className="font-display font-bold text-ink text-sm sm:text-base">
              {firstName}
            </p>
            <p className="text-faint text-[10px] sm:text-xs hidden xs:block">
              {title}
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active === id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {title}
                {active === id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-2"
                  />
                )}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(10,132,255,0.8)] transition-transform hover:scale-[1.04]"
          >
            Let's talk
          </a>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass md:hidden mt-2 flex flex-col gap-1 rounded-2xl p-3"
          >
            {navLinks.map(({ id, title }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active === id
                      ? "bg-white/5 text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {title}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
