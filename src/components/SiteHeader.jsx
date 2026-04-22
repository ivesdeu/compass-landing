import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import CompassMark from "./CompassMark.jsx";
import TransitionLink from "./TransitionLink.jsx";

function NavItem({ id, children }) {
  const { pathname } = useLocation();
  const className = "transition hover:text-ink";
  if (pathname === "/") {
    return (
      <a href={`#${id}`} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={{ pathname: "/", hash: `#${id}` }} className={className}>
      {children}
    </Link>
  );
}

const drawerLinkClass =
  "block rounded-xl px-3 py-3 text-base font-semibold text-ink transition hover:bg-card";

function MobileDrawerLink({ id, children, onNavigate }) {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return (
      <a href={`#${id}`} className={drawerLinkClass} onClick={onNavigate}>
        {children}
      </a>
    );
  }
  return (
    <Link
      to={{ pathname: "/", hash: `#${id}` }}
      className={drawerLinkClass}
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}

function MobileDrawerRoute({ to, children, onNavigate }) {
  return (
    <TransitionLink to={to} className={drawerLinkClass} onClick={onNavigate}>
      {children}
    </TransitionLink>
  );
}

const SCROLL_CONDENSE = 72;

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [condensed, setCondensed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ignoreScrollUntil = useRef(0);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useLayoutEffect(() => {
    setCondensed(window.scrollY > SCROLL_CONDENSE);
    ignoreScrollUntil.current = performance.now() + 120;
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (performance.now() < ignoreScrollUntil.current) return;
      setCondensed(window.scrollY > SCROLL_CONDENSE);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <div
        className={`pointer-events-auto relative mx-auto flex w-full items-center justify-between gap-2 rounded-full border border-black/[0.06] bg-white/90 px-3 py-2 shadow-nav backdrop-blur-md transition-[max-width] duration-300 ease-out sm:gap-3 sm:px-4 sm:py-2.5 md:px-6 ${
          condensed ? "max-w-4xl" : "max-w-6xl"
        } ${mobileMenuOpen ? "z-[110]" : ""}`}
      >
        <CompassMark />
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm font-semibold text-muted lg:flex lg:gap-8">
          <NavItem id="product">Product</NavItem>
          <NavItem id="features">Features</NavItem>
          <NavItem id="pricing">Pricing</NavItem>
          <NavItem id="faq">FAQ</NavItem>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2 lg:flex-none">
          <TransitionLink
            to="/contact"
            className="rounded-full bg-ink px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-ink/90 sm:px-5 sm:py-2 sm:text-sm"
          >
            Get Access
          </TransitionLink>
          <button
            type="button"
            id="mobile-nav-trigger"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white text-ink shadow-sm transition hover:bg-card lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="pointer-events-auto fixed inset-0 z-[100] lg:hidden"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
            onClick={closeMobileMenu}
          />
          <nav
            id="mobile-nav-panel"
            aria-labelledby="mobile-nav-trigger"
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-black/[0.06] bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition hover:bg-card hover:text-ink"
              >
                <X className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
            </div>
            <div className="flex flex-col gap-1 px-3 py-4">
              <MobileDrawerLink id="product" onNavigate={closeMobileMenu}>
                Product
              </MobileDrawerLink>
              <MobileDrawerLink id="features" onNavigate={closeMobileMenu}>
                Features
              </MobileDrawerLink>
              <MobileDrawerLink id="pricing" onNavigate={closeMobileMenu}>
                Pricing
              </MobileDrawerLink>
              <MobileDrawerLink id="faq" onNavigate={closeMobileMenu}>
                FAQ
              </MobileDrawerLink>
              <hr className="my-3 border-black/[0.06]" />
              <MobileDrawerRoute to="/privacy" onNavigate={closeMobileMenu}>
                Privacy Policy
              </MobileDrawerRoute>
              <MobileDrawerRoute to="/terms" onNavigate={closeMobileMenu}>
                Terms of Service
              </MobileDrawerRoute>
              <MobileDrawerRoute to="/contact" onNavigate={closeMobileMenu}>
                Contact
              </MobileDrawerRoute>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
