import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bot,
  ChevronDown,
  Crown,
  Menu,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import TransitionLink from "./TransitionLink.jsx";

function NavItem({ id, children, hasCaret = false }) {
  const { pathname } = useLocation();
  const className =
    "inline-flex items-center gap-1 text-[13px] font-medium text-[#2A2A2A] transition hover:text-ink";
  if (pathname === "/") {
    return (
      <a href={`#${id}`} className={className}>
        {children}
        {hasCaret && <ChevronDown className="h-3.5 w-3.5 text-muted" strokeWidth={1.75} aria-hidden />}
      </a>
    );
  }
  return (
    <Link to={{ pathname: "/", hash: `#${id}` }} className={className}>
      {children}
      {hasCaret && <ChevronDown className="h-3.5 w-3.5 text-muted" strokeWidth={1.75} aria-hidden />}
    </Link>
  );
}

const drawerLinkClass =
  "block rounded-xl px-3 py-3 text-base font-semibold text-ink transition hover:bg-card";
const megaSolutionItems = [
  {
    title: "Shared Workspace",
    description: "One URL for your firm with role-based access and team invites.",
    icon: Workflow,
    href: "#product",
  },
  {
    title: "Dashboard & Insights",
    description: "Track KPI performance, cash, AR, and trends in one view.",
    icon: Sparkles,
    href: "#features",
  },
  {
    title: "Advisor Recaps",
    description: "Generate concise summaries and quick answers from workspace data.",
    icon: Bot,
    href: "#advisor",
  },
  {
    title: "Customer Profitability",
    description: "Review margin, allocation, and client health side by side.",
    icon: Crown,
    href: "#faq",
  },
];
const megaPlatformItems = [
  { name: "Customers & CRM", to: "/platform/customers-crm" },
  { name: "Income & AR", to: "/platform/income-ar" },
  { name: "Expenses & Budget", to: "/platform/expenses-budget" },
  { name: "Timesheet Tracking", to: "/platform/timesheet-tracking" },
  { name: "Integrations", to: "/platform/integrations" },
];
const featureMegaColumns = [
  {
    title: "Learn",
    description: "Level up your sales mastery and Compass know-how",
    links: [
      "Academy",
      "Events",
      "Magazine",
      "Books & Guides",
      "Templates",
      "Webinars",
      "Videos",
      "Knowledge Base",
      "Onboarding",
    ],
  },
  {
    title: "Connect",
    description: "Find out how others are driving growth with Compass",
    links: ["Join the Community", "Customer Stories", "Reviews", "Compass for Startups"],
  },
  {
    title: "Partner",
    description: "Explore opportunities to partner and grow together",
    links: [
      "Affiliate Partners",
      "Solutions Partners",
      "Technology Partners",
      "Data Reseller Partners",
      "Find a Certified Partner",
    ],
  },
  {
    title: "Careers",
    description: "Build your career helping transform B2B sales",
    links: ["See Open Positions", "Our Story", "Life at Compass", "Teams", "Tech Blog"],
  },
];
const HEADER_LOGO_SRC = "/compass-logo.png";
const SOLUTIONS_WHATS_NEW_SRC = "/solutions-whats-new.png";
const SHOW_FEATURES_DROPDOWN = false;

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

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const [featuresMenuOpen, setFeaturesMenuOpen] = useState(false);
  const featuresCloseTimerRef = useRef(null);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const clearFeaturesCloseTimer = () => {
    if (!featuresCloseTimerRef.current) return;
    window.clearTimeout(featuresCloseTimerRef.current);
    featuresCloseTimerRef.current = null;
  };

  const openFeaturesMenu = () => {
    clearFeaturesCloseTimer();
    setFeaturesMenuOpen(true);
    setSolutionsMenuOpen(false);
  };

  const closeFeaturesMenuSoon = () => {
    clearFeaturesCloseTimer();
    featuresCloseTimerRef.current = window.setTimeout(() => {
      setFeaturesMenuOpen(false);
      featuresCloseTimerRef.current = null;
    }, 150);
  };

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
    setSolutionsMenuOpen(false);
    setFeaturesMenuOpen(false);
  }, [pathname]);

  useEffect(
    () => () => {
      clearFeaturesCloseTimer();
    },
    [],
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div
        className={`pointer-events-auto relative mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 ${mobileMenuOpen ? "z-[110]" : ""}`}
      >
        <div className="flex items-center gap-8">
          <TransitionLink to="/" className="inline-flex items-center">
            <img src={HEADER_LOGO_SRC} alt="Compass" className="h-8 w-auto" />
          </TransitionLink>
          <nav className="hidden items-center gap-7 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => {
                setSolutionsMenuOpen(true);
                setFeaturesMenuOpen(false);
              }}
              onMouseLeave={() => setSolutionsMenuOpen(false)}
            >
              <NavItem id="product" hasCaret>
                Solutions
              </NavItem>
              {solutionsMenuOpen && (
                <div className="pointer-events-auto absolute left-0 top-full z-[120] pt-4">
                  <div className="grid w-[980px] grid-cols-[2.05fr_1.1fr_1.1fr] gap-10 rounded-2xl border border-black/[0.08] bg-white p-8 shadow-2xl">
                    <div>
                      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                        Solutions
                      </p>
                      <div className="grid grid-cols-2 gap-5">
                        {megaSolutionItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              className="rounded-xl border border-transparent p-3.5 transition hover:border-black/[0.08] hover:bg-card/50"
                            >
                              <div className="mb-2 flex items-center gap-2">
                                <Icon className="h-4 w-4 text-ink" strokeWidth={1.8} aria-hidden />
                                <p className="text-[15px] font-semibold text-ink">{item.title}</p>
                              </div>
                              <p className="text-sm leading-snug text-muted">{item.description}</p>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                        Platform
                      </p>
                      <div className="space-y-1">
                        {megaPlatformItems.map((item) => (
                          <TransitionLink
                            key={item.name}
                            to={item.to}
                            className="block rounded-lg px-2 py-1.5 text-[15px] font-medium text-ink transition hover:bg-card/60"
                          >
                            {item.name}
                          </TransitionLink>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                        What&apos;s new
                      </p>
                      <a
                        href="#features"
                        className="block overflow-hidden rounded-xl border border-black/[0.08] transition hover:opacity-95"
                      >
                        <img
                          src={SOLUTIONS_WHATS_NEW_SRC}
                          alt="Get Access - Never lose a lead - Beta available now"
                          className="h-auto w-full"
                        />
                      </a>
                      <TransitionLink
                        to="/contact"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink/80 underline decoration-ink/30 underline-offset-2 transition hover:text-ink"
                      >
                        Learn more
                        <Bot className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                      </TransitionLink>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {SHOW_FEATURES_DROPDOWN && (
              <div
                className="relative"
                onMouseEnter={openFeaturesMenu}
                onMouseLeave={closeFeaturesMenuSoon}
              >
                <NavItem id="features" hasCaret>
                  Features
                </NavItem>
                {featuresMenuOpen && (
                  <div
                    className="pointer-events-auto fixed left-1/2 top-14 z-[120] -translate-x-1/2 pt-2"
                    onMouseEnter={openFeaturesMenu}
                    onMouseLeave={closeFeaturesMenuSoon}
                  >
                    <div className="w-[min(960px,calc(100vw-2rem))] rounded-2xl border border-black/[0.08] bg-white p-8 shadow-2xl">
                      <div className="grid grid-cols-4 gap-9">
                        {featureMegaColumns.map((column) => (
                          <div key={column.title}>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                              {column.title}
                            </p>
                            <p className="mt-4 max-w-[14rem] text-[13px] leading-[1.4] text-muted">
                              {column.description}
                            </p>
                            <div className="mt-6 space-y-2">
                              {column.links.map((link) => (
                                <a
                                  key={link}
                                  href="#features"
                                  className="block rounded-md py-0.5 text-[15px] font-medium text-ink transition hover:text-accent"
                                >
                                  {link}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <NavItem id="pricing">Pricing</NavItem>
            <NavItem id="faq">FAQ</NavItem>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 lg:flex-none">
          <a
            href="https://compass-login.ivesdeu.com/"
            className="hidden rounded-md border border-black/[0.14] bg-white px-3 py-1.5 text-[12px] font-medium text-[#2A2A2A] transition hover:border-black/[0.2] lg:inline-flex"
          >
            Sign in
          </a>
          <TransitionLink
            to="/contact"
            className="inline-flex rounded-md bg-ink px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-ink/90"
          >
            Start for free
          </TransitionLink>
          <button
            type="button"
            id="mobile-nav-trigger"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-black/[0.12] bg-white text-ink transition hover:bg-card lg:hidden"
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
                Solutions
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
              <a
                href="https://compass-login.ivesdeu.com/"
                className={drawerLinkClass}
                onClick={closeMobileMenu}
              >
                Sign in
              </a>
              <MobileDrawerRoute to="/contact" onNavigate={closeMobileMenu}>
                Start for free
              </MobileDrawerRoute>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
