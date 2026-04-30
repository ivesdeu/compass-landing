import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./hooks/useReducedMotion.js";
import {
  ChartColumn,
  Circle,
  Clock,
  LayoutGrid,
  MessagesSquare,
  Settings,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
import SiteFooter from "./components/SiteFooter.jsx";
import TransitionLink from "./components/TransitionLink.jsx";
import {
  applyFlyIn,
  clearFlyIn,
  clamp,
  scrollRevealProgress,
} from "./utils/scrollReveal.js";

function useScrollRevealMocks({
  heroMockRef,
  productMockRef,
  layoutMockRef,
  customersMockRef,
  advisorMockRef,
  stepRefs,
  featureCardRefs,
  reducedMotion,
}) {
  useEffect(() => {
    const clearAll = () => {
      [
        heroMockRef,
        productMockRef,
        layoutMockRef,
        customersMockRef,
        advisorMockRef,
      ].forEach((r) => clearFlyIn(r.current));
      stepRefs.current.forEach((el) => clearFlyIn(el));
      featureCardRefs.current.forEach((el) => clearFlyIn(el));
    };

    if (reducedMotion) {
      clearAll();
      return;
    }

    let ticking = false;

    const run = () => {
      ticking = false;
      const vh = window.innerHeight;

      if (heroMockRef.current) {
        const r = heroMockRef.current.getBoundingClientRect();
        const t = scrollRevealProgress(r, vh);
        applyFlyIn(heroMockRef.current, t, {
          fromX: 0,
          fromY: 32,
          scale0: 0.97,
          scale1: 1,
        });
      }

      if (productMockRef.current) {
        const r = productMockRef.current.getBoundingClientRect();
        const t = scrollRevealProgress(r, vh);
        applyFlyIn(productMockRef.current, t, {
          fromX: 28,
          fromY: 20,
          scale0: 0.97,
          scale1: 1,
        });
      }

      if (layoutMockRef.current) {
        const r = layoutMockRef.current.getBoundingClientRect();
        const t = scrollRevealProgress(r, vh);
        applyFlyIn(layoutMockRef.current, t, {
          fromX: 0,
          fromY: 34,
          scale0: 0.97,
          scale1: 1,
        });
      }

      if (customersMockRef.current) {
        const r = customersMockRef.current.getBoundingClientRect();
        const t = scrollRevealProgress(r, vh);
        applyFlyIn(customersMockRef.current, t, {
          fromX: 24,
          fromY: 22,
          scale0: 0.97,
          scale1: 1,
        });
      }

      if (advisorMockRef.current) {
        const r = advisorMockRef.current.getBoundingClientRect();
        const t = scrollRevealProgress(r, vh);
        applyFlyIn(advisorMockRef.current, t, {
          fromX: -24,
          fromY: 22,
          scale0: 0.97,
          scale1: 1,
        });
      }

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        let t = scrollRevealProgress(r, vh);
        t = clamp(t - i * 0.11, 0, 1);
        applyFlyIn(el, t, {
          fromX: i % 2 === 0 ? -20 : 20,
          fromY: 24,
          scale0: 0.97,
          scale1: 1,
        });
      });

      featureCardRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        let t = scrollRevealProgress(r, vh);
        t = clamp(t - (i % 3) * 0.065 - Math.floor(i / 3) * 0.08, 0, 1);
        const col = i % 3;
        applyFlyIn(el, t, {
          fromX: col === 1 ? 0 : col === 0 ? -16 : 16,
          fromY: 22,
          scale0: 0.97,
          scale1: 1,
        });
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearAll();
    };
  }, [
    reducedMotion,
    heroMockRef,
    productMockRef,
    layoutMockRef,
    customersMockRef,
    advisorMockRef,
    stepRefs,
    featureCardRefs,
  ]);
}

function HeroDashboardMock() {
  const nav = [
    "Dashboard",
    "Customers",
    "Income",
    "Expenses",
    "Timesheet",
    "Analytics",
    "Advisor",
    "Team",
    "Settings",
  ];
  return (
    <div className="overflow-hidden rounded-[18px] border border-black/[0.06] bg-white shadow-mock">
      <div className="flex h-9 items-center gap-2 border-b border-black/[0.06] bg-[#F3F4F6] px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FCA5A5]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FCD34D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#86EFAC]" />
        <span className="ml-2 flex-1 truncate rounded-md bg-white px-2 py-0.5 text-[10px] text-muted shadow-sm">
          app.compass.work / northline-advisors
        </span>
      </div>
      <div className="flex min-h-[320px] md:min-h-[380px]">
        <aside className="hidden w-44 shrink-0 border-r border-black/[0.06] bg-[#FAFAFA] py-4 text-[11px] font-medium text-muted sm:block">
          <div className="px-3 pb-3 text-[10px] font-semibold uppercase tracking-wider text-muted/80">
            Workspace
          </div>
          <nav className="space-y-0.5 px-2">
            {nav.map((item) => (
              <div
                key={item}
                className={`rounded-lg px-2 py-1.5 ${
                  item === "Dashboard"
                    ? "bg-white text-ink shadow-sm ring-1 ring-black/[0.04]"
                    : "hover:bg-white/80"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>
        <main className="min-w-0 flex-1 p-4 md:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-ink md:text-base">Business Performance</h3>
            <span className="rounded-full bg-card px-3 py-1 text-[10px] font-semibold text-muted ring-1 ring-black/[0.06]">
              Q1 2026 · Accrual
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {[
              { label: "Total Revenue", value: "$142,300", delta: "+12%" },
              { label: "Outstanding AR", value: "$18,400", delta: "4 invoices" },
              { label: "Active Customers", value: "24", delta: "retainers" },
              { label: "Net Margin", value: "31%", delta: "vs budget" },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-xl border border-black/[0.06] bg-card p-3 shadow-sm"
              >
                <p className="text-[10px] font-medium text-muted">{k.label}</p>
                <p className="mt-1 text-lg font-extrabold tracking-tight text-ink md:text-xl">
                  {k.value}
                </p>
                <p className="mt-0.5 text-[10px] text-accent">{k.delta}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-sm lg:col-span-2">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-bold text-ink">Revenue trend</span>
                <span className="text-[10px] text-muted">Last 6 mo</span>
              </div>
              <div className="flex h-24 items-end gap-1">
                {[40, 55, 48, 62, 58, 72].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-accent/25 to-accent/45"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted">
                  This week
                </span>
                {["Lead sync", "QBR prep", "Invoice review"].map((ev) => (
                  <span
                    key={ev}
                    className="rounded-lg bg-accent/20 px-2.5 py-1 text-[10px] font-medium text-ink ring-1 ring-accent/15"
                  >
                    {ev}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-sm">
              <p className="text-xs font-bold text-ink">Your team</p>
              <p className="mt-1 text-[10px] text-muted">3 active · 1 viewing</p>
              <div className="mt-3 flex -space-x-2">
                {["SJ", "MR", "KL"].map((i) => (
                  <span
                    key={i}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E5E7EB] text-[10px] font-bold text-ink"
                  >
                    {i}
                  </span>
                ))}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-muted/40 bg-card text-[10px] text-muted">
                  +1
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function TeamMockCard() {
  return (
    <div className="rounded-[18px] border border-black/[0.06] bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-ink">Team</h3>
        <button
          type="button"
          className="rounded-full bg-navy px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white"
        >
          + Invite member
        </button>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between rounded-xl bg-amber-50 px-3 py-2.5 ring-1 ring-amber-100">
          <div>
            <p className="font-semibold text-ink">alex@clientfirm.com</p>
            <p className="text-[10px] text-amber-800/80">Pending invite · Viewer</p>
          </div>
          <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-amber-900 ring-1 ring-amber-200">
            Resend
          </span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-card px-3 py-2.5 ring-1 ring-black/[0.04]">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-[10px] font-bold text-accent">
              MR
            </span>
            <div>
              <p className="font-semibold text-ink">Morgan Rivera</p>
              <p className="text-[10px] text-muted">morgan@northline.com</p>
            </div>
          </div>
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
            Admin
          </span>
        </div>
      </div>
    </div>
  );
}

function ColumnPickerMock() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-wider text-muted">
          Default
        </p>
        <div className="overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-sm">
          <div className="border-b border-black/[0.06] bg-card px-3 py-2 text-[10px] font-bold text-ink">
            Customers
          </div>
          <div className="divide-y divide-black/[0.04] text-[10px]">
            {["Acme Co", "Brightline", "Cedar"].map((c) => (
              <div key={c} className="flex justify-between px-3 py-2 text-muted">
                <span className="font-medium text-ink">{c}</span>
                <span>$42k</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-wider text-muted">
          Your setup
        </p>
        <div className="overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-sm">
          <div className="flex border-b border-black/[0.06] bg-card">
            <div className="flex-1 px-3 py-2 text-[10px] font-bold text-ink">Customers</div>
            <div className="w-[44%] border-l border-black/[0.06] bg-white px-3 py-2 text-[10px] font-bold text-accent">
              Columns
            </div>
          </div>
          <div className="flex min-h-[120px]">
            <div className="flex-1 divide-y divide-black/[0.04] text-[10px] opacity-40">
              <div className="px-3 py-2">Acme Co</div>
              <div className="px-3 py-2">Brightline</div>
            </div>
            <div className="w-[44%] space-y-2 border-l border-black/[0.06] bg-[#FAFAFA] p-3">
              {["Revenue", "Margin %", "Last touch"].map((x) => (
                <label key={x} className="flex items-center gap-2 text-[10px] text-ink">
                  <span className="h-3 w-3 rounded border border-accent bg-accent shadow-sm" />
                  {x}
                </label>
              ))}
              {["Cost", "Tags"].map((x) => (
                <label key={x} className="flex items-center gap-2 text-[10px] text-muted">
                  <span className="h-3 w-3 rounded border border-muted/40 bg-white" />
                  {x}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendBars({ heights }) {
  return (
    <div className="flex h-6 items-end gap-px">
      {heights.map((h, i) => (
        <div key={i} className="w-1 rounded-sm bg-accent/70" style={{ height: `${h}px` }} />
      ))}
    </div>
  );
}

function CustomersRowMock() {
  const rows = [
    {
      client: "Northline Advisory",
      revenue: "$84,200",
      cost: "$31,400",
      margin: "37%",
      bars: [12, 18, 14, 22, 19, 28, 24, 30],
    },
    {
      client: "Brightline Media",
      revenue: "$52,900",
      cost: "$24,100",
      margin: "29%",
      bars: [10, 14, 16, 15, 20, 22, 21, 26],
    },
    {
      client: "Cedar & Co.",
      revenue: "$38,400",
      cost: "$19,800",
      margin: "24%",
      bars: [8, 10, 12, 11, 14, 13, 17, 19],
    },
    {
      client: "Harbor Systems",
      revenue: "$61,750",
      cost: "$27,320",
      margin: "31%",
      bars: [14, 16, 18, 20, 19, 24, 26, 28],
    },
    {
      client: "Signal Foundry",
      revenue: "$44,200",
      cost: "$21,650",
      margin: "28%",
      bars: [9, 11, 13, 12, 16, 18, 17, 22],
    },
  ];

  return (
    <div className="flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[18px] border border-black/[0.06] bg-white shadow-card md:min-h-0">
      <div className="shrink-0 border-b border-black/[0.06] bg-card px-4 py-2.5 text-xs font-bold text-ink">
        Customers
      </div>
      <div className="min-h-0 flex-1 overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-[11px]">
          <thead>
            <tr className="text-muted">
              <th className="px-4 py-2.5 font-medium">Client</th>
              <th className="px-4 py-2.5 font-medium">Revenue</th>
              <th className="px-4 py-2.5 font-medium">Cost</th>
              <th className="px-4 py-2.5 font-medium">Margin</th>
              <th className="px-4 py-2.5 font-medium">Trend</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.client}
                className={`border-t border-black/[0.06] ${idx % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"}`}
              >
                <td className="px-4 py-3.5 font-semibold text-ink">{row.client}</td>
                <td className="px-4 py-3.5 font-medium">{row.revenue}</td>
                <td className="px-4 py-3.5 text-muted">{row.cost}</td>
                <td className="px-4 py-3.5 font-semibold text-accent">{row.margin}</td>
                <td className="px-4 py-3.5">
                  <TrendBars heights={row.bars} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="shrink-0 border-t border-black/[0.06] bg-card px-4 py-3 text-[10px] text-muted">
        <span className="font-medium text-ink">5 active</span> · AR aging &amp; tags roll up to
        this view
      </div>
    </div>
  );
}

function AdvisorChatMock() {
  return (
    <div className="space-y-4">
      <div className="rounded-[18px] border border-black/[0.06] bg-white p-4 shadow-card">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-lg bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
            Advisor
          </span>
          <span className="text-[10px] text-muted">Workspace context on</span>
        </div>
        <div className="space-y-3 text-xs">
          <div className="ml-auto max-w-[92%] rounded-2xl rounded-br-md bg-card px-3 py-2 font-medium text-ink ring-1 ring-black/[0.06]">
            Why did margins drop in March?
          </div>
          <div className="max-w-[95%] rounded-2xl rounded-bl-md bg-accent-soft px-3 py-2 text-muted leading-relaxed ring-1 ring-accent/10">
            <span className="font-semibold text-ink">Advisor:</span> March blended margin fell
            mainly because two large expenses were tagged to core clients before revenue
            recognition landed in April. Net impact is timing, not a structural change.
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-full rounded-[18px] border border-black/[0.06] bg-card px-4 py-4 text-left shadow-sm transition hover:bg-white"
      >
        <p className="text-xs font-bold text-ink">Recap</p>
        <p className="mt-1 text-[11px] text-muted">
          Generate a one-click summary of cash, AR, and client touchpoints for leadership.
        </p>
        <span className="mt-3 inline-flex rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-white">
          Generate recap
        </span>
      </button>
    </div>
  );
}

const faqItems = [
  {
    id: "q1",
    q: "How do organization invites work and what can each role do?",
    a: "Owners can invite by email or share a scoped invite link. Members sign into the same organization with roles that control billing, settings, exports, and Advisor usage. Viewers can follow along without changing core accounting data.",
  },
  {
    id: "q2",
    q: "Where does my data live?",
    a: "Your workspace data is stored in Compass infrastructure designed for teams. You control access through roles and invites; exports are available whenever you need a local copy.",
  },
  {
    id: "q3",
    q: "What does 'allocated cost' on a customer mean?",
    a: "Allocated cost sums expenses you have tagged to that client or project. It is a simple way to approximate client-level economics next to recognized revenue, not a formal cost accounting allocation.",
  },
  {
    id: "q4",
    q: "How does Advisor get context, and what happens if it's unavailable?",
    a: "Advisor reads structured workspace context you already see in tables and KPIs, plus session-safe prompts you provide. If the model or network is unavailable, you can still use dashboards, exports, and manual workflows.",
  },
  {
    id: "q5",
    q: "Can I export my data?",
    a: "Yes. Income, customers, and related tables support CSV export for offline analysis or handoff to your finance stack.",
  },
  {
    id: "q6",
    q: "Is this accounting software?",
    a: "Compass is operational visibility and reporting for your firm, not a CPA substitute. It helps your firm see performance and clients together; your team remains responsible for filings, audits, and final books.",
  },
];

const featureCards = [
  {
    title: "Personable CRM",
    body: "Track client records with Lead/Active/Inactive/Churned statuses, priorities, notes, and communication preferences so handoffs stay clear.",
    glyph: "dashboard",
    tone: "blue",
  },
  {
    title: "Scheduling",
    body: "Plan appointments in timeline context with reminders and calendar-aware sequencing so teams stop missing follow-ups.",
    glyph: "customers",
    tone: "rose",
  },
  {
    title: "Invoicing & Payments",
    body: "Create and send invoices, track sent vs paid status, and accept Stripe payments in one workflow.",
    glyph: "income",
    tone: "blue",
  },
  {
    title: "Gmail & Calendar Integrations",
    body: "Connect Google accounts to send email and sync calendar workflows without context switching.",
    glyph: "expenses",
    tone: "rose",
  },
  {
    title: "Team Workspaces",
    body: "Run owner/admin/member roles in a shared workspace so everyone works from the same context.",
    glyph: "timesheet",
    tone: "blue",
  },
  {
    title: "AI Advisor",
    body: "Draft client updates, suggest CRM improvements, and compose outreach using your live workspace context.",
    glyph: "analytics",
    tone: "rose",
  },
];

/** Lucide icons (same family as [Notion Icons](https://notionicons.so/) “Lucide” set). */
const LUCIDE_FEATURE_ICONS = {
  dashboard: LayoutGrid,
  customers: Users,
  income: TrendingUp,
  expenses: Wallet,
  timesheet: Clock,
  analytics: ChartColumn,
  advisor: MessagesSquare,
  team: UserPlus,
  settings: Settings,
};

function FeatureIcon({ tone, glyph }) {
  const isCoral = tone === "blue";
  const Icon = LUCIDE_FEATURE_ICONS[glyph] ?? Circle;
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
        isCoral ? "bg-accent/15 text-accent" : "bg-navy/10 text-navy"
      }`}
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
    </span>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const reducedMotion = useReducedMotion();

  const heroMockRef = useRef(null);
  const productMockRef = useRef(null);
  const layoutMockRef = useRef(null);
  const customersMockRef = useRef(null);
  const advisorMockRef = useRef(null);
  const stepRefs = useRef([]);
  const featureCardRefs = useRef([]);

  useScrollRevealMocks({
    heroMockRef,
    productMockRef,
    layoutMockRef,
    customersMockRef,
    advisorMockRef,
    stepRefs,
    featureCardRefs,
    reducedMotion,
  });

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <main
        id="top"
        className="motion-reduce:animate-none animate-route-enter [animation-delay:0.05s]"
      >
        {/* Hero */}
        <section
          id="hero"
          className="border-b border-black/[0.06] bg-canvas pb-16 pt-28 md:pb-24 md:pt-32"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
                Run your full client lifecycle in one operating system.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg font-light leading-relaxed text-muted md:text-[18px]">
                Compass combines CRM, scheduling, invoices, workflow automations, and AI Advisor
                so service teams close work faster and stay organized.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <TransitionLink
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-ink px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-ink/90 sm:w-auto"
                >
                  Book a demo
                </TransitionLink>
                <TransitionLink
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-black/[0.12] bg-white px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-card sm:w-auto"
                >
                  Start free
                </TransitionLink>
              </div>
            </div>
            <div
              ref={heroMockRef}
              className="mx-auto mt-12 max-w-5xl will-change-[transform,opacity] md:mt-16"
            >
              <HeroDashboardMock />
            </div>
          </div>
        </section>

        {/* Section A */}
        <section id="product" className="scroll-mt-28 border-b border-black/[0.06] bg-canvas py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" aria-hidden />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Collaboration
                </p>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
                Invite your team to one workspace
              </h2>
              <ul className="mt-8 space-y-4 text-base font-light leading-relaxed text-ink md:text-[17px]">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Invite by email, assign a role, or generate a shareable invite link
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Everyone signs into the same organization with one shared ledger and one
                    dashboard
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    A bookmarkable workspace URL for your firm&apos;s Compass, not a generic account
                  </span>
                </li>
              </ul>
            </div>
            <div ref={productMockRef} className="will-change-[transform,opacity]">
              <TeamMockCard />
            </div>
          </div>
        </section>

        {/* Section B */}
        <section className="border-b border-black/[0.06] bg-card/40 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-accent" aria-hidden />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Workflow & Automation
                </p>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
                Build reliable trigger-action workflows for client operations.
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-muted md:text-lg">
                Automate follow-up, reminders, and status changes with run tracking and
                idempotent execution so repeated triggers do not create duplicate actions.
              </p>
            </div>
            <div className="mx-auto mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  t: "Trigger Conditions",
                  d: "Start workflows from stage changes, schedule windows, or task events.",
                  icon: "⏱",
                },
                {
                  t: "Action Steps",
                  d: "Send outreach, create tasks, or update status automatically.",
                  icon: "☷",
                },
                {
                  t: "Run Tracking",
                  d: "Review each automation run with timestamps and result visibility.",
                  icon: "⇅",
                },
                {
                  t: "Reliable Execution",
                  d: "Idempotent processing keeps client operations consistent under retries.",
                  icon: "⊞",
                },
              ].map((f) => (
                <div
                  key={f.t}
                  className="rounded-[18px] border border-black/[0.06] bg-white p-5 shadow-card"
                >
                  <span className="text-xl text-accent">{f.icon}</span>
                  <h3 className="mt-3 text-sm font-semibold text-ink">{f.t}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted">{f.d}</p>
                </div>
              ))}
            </div>
            <div
              ref={layoutMockRef}
              className="mx-auto mt-14 max-w-4xl rounded-[18px] border border-black/[0.06] bg-white p-5 shadow-card will-change-[transform,opacity] md:p-8"
            >
              <ColumnPickerMock />
            </div>
          </div>
        </section>

        {/* Section C */}
        <section className="border-b border-black/[0.06] bg-white/40 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:items-stretch md:gap-16 md:px-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" aria-hidden />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Reporting & Operations Visibility
                </p>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
                See recap, revenue, profitability, and activity in one place.
              </h2>
              <ul className="mt-8 space-y-4 text-base font-light leading-relaxed text-ink md:text-[17px]">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Business recap views summarize what changed this week so operators can act
                    quickly without digging across tools.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Revenue and profitability context sits next to customer activity, giving founders
                    and account leads one operational picture.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Task and timeline visibility keeps assignments, follow-ups, and client touchpoints
                    from slipping between teammates.
                  </span>
                </li>
              </ul>
            </div>
            <div
              ref={customersMockRef}
              className="flex min-h-[22rem] will-change-[transform,opacity] md:min-h-0 md:h-full"
            >
              <CustomersRowMock />
            </div>
          </div>
        </section>

        {/* Section D */}
        <section className="border-b border-black/[0.06] bg-white/50 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" aria-hidden />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Trust & Platform
                </p>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
                Built for real operations, not a toy CRM.
              </h2>
              <ul className="mt-8 space-y-4 text-base font-light leading-relaxed text-ink md:text-[17px]">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Multi-tenant workspace isolation keeps each organization&apos;s data scoped and
                    separated by design.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Role-based access controls keep owner, admin, and member permissions clear.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Integration credentials are handled securely so teams can connect email,
                    calendar, and payments with confidence.
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-sm italic leading-relaxed text-muted">
                Compass is designed for daily operating cadence across delivery, billing, and client
                communication.
              </p>
            </div>
            <div ref={advisorMockRef} className="will-change-[transform,opacity]">
              <AdvisorChatMock />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-black/[0.06] bg-canvas py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-accent" aria-hidden />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Why Teams Switch
                </p>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
                Teams switch to Compass for speed and clarity.
              </h2>
            </div>
            <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-5 md:flex-row md:items-stretch md:justify-center md:gap-4 lg:gap-5">
              {[
                {
                  n: "01",
                  label: "Fewer tools",
                  t: "CRM, scheduling, invoicing, collaboration, and automation live in one workspace.",
                },
                {
                  n: "02",
                  label: "Less switching",
                  t: "Context stays connected, so teams stop jumping between inboxes, calendars, and spreadsheets.",
                },
                {
                  n: "03",
                  label: "Faster response",
                  t: "Client updates, handoffs, and follow-through happen faster with cleaner ownership.",
                },
              ].map((s, idx) => (
                <div
                  key={s.n}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  className="relative flex min-h-0 flex-1 flex-col rounded-[18px] border border-black/[0.06] bg-white p-6 shadow-card will-change-[transform,opacity] md:p-7"
                >
                  <div className="flex shrink-0 items-start justify-between gap-3">
                    <span className="text-3xl font-extrabold tabular-nums tracking-tight text-ink md:text-4xl">
                      {s.n}
                    </span>
                    <span className="rounded-full bg-navy px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                      {s.label}
                    </span>
                  </div>
                  <p className="mt-5 flex-1 text-sm font-light leading-relaxed text-muted md:text-[15px]">
                    {s.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section
          id="features"
          className="scroll-mt-28 border-t border-black/[0.06] bg-card/30 py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-accent" aria-hidden />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  What Compass Does
                </p>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
                AI-assisted CRM + operations hub for client-based businesses.
              </h2>
              <p className="mt-4 text-base font-light text-muted md:text-lg">
                Built for founders, operators, and client service teams who need one place to run
                work end to end.
              </p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((c, i) => (
                <div
                  key={c.title}
                  ref={(el) => {
                    featureCardRefs.current[i] = el;
                  }}
                  className="rounded-[18px] border border-black/[0.06] bg-white p-6 shadow-card will-change-[transform,opacity] transition-colors hover:border-black/[0.1]"
                >
                  <FeatureIcon tone={c.tone} glyph={c.glyph} />
                  <h3 className="mt-4 text-lg font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Advisor */}
        <section id="advisor" className="scroll-mt-28 border-b border-black/[0.06] bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" aria-hidden />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  AI Advisor
                </p>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
                Ask one question, get a clear next move.
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-muted md:text-[17px]">
                Advisor reads your live workspace context and turns raw activity into concise answers
                your team can act on immediately, including building targeted lists in seconds.
              </p>
              <ul className="mt-8 space-y-4 text-base font-light leading-relaxed text-ink md:text-[17px]">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Build smart lists like “at-risk accounts,” “late invoices,” or “no-contact
                    clients” from your live workspace data.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Generate prioritized follow-up lists with recommended next steps, owners, and
                    due dates for each account.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Turn any list into assignable tasks so execution stays visible across the team.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-[18px] border border-black/[0.06] bg-card/40 p-6 shadow-card md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Advisor session
                </p>
                <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold text-white">
                  Live context
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="ml-auto max-w-[95%] rounded-2xl rounded-br-md bg-white px-4 py-2.5 text-ink ring-1 ring-black/[0.06]">
                  What changed with Brightline this week?
                </div>
                <div className="max-w-[95%] rounded-2xl rounded-bl-md bg-accent-soft px-4 py-2.5 text-muted ring-1 ring-accent/10">
                  Brightline is up <span className="font-semibold text-ink">$6.2k</span> in billed
                  work, but follow-up on invoice #442 is overdue by 9 days. Suggestion: send a
                  payment nudge and schedule a QBR reminder for next Tuesday. I can also create a
                  “late invoices this week” list for your team.
                </div>
              </div>
              <div className="mt-5 grid gap-2 text-xs md:grid-cols-2">
                <span className="rounded-lg bg-white px-3 py-2 font-medium text-ink ring-1 ring-black/[0.06]">
                  Create payment reminder
                </span>
                <span className="rounded-lg bg-white px-3 py-2 font-medium text-ink ring-1 ring-black/[0.06]">
                  Add QBR task
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-28 border-b border-black/[0.06] bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" aria-hidden />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    Pricing
                  </p>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
                  Free for approved beta workspaces.
                </h2>
                <p className="mt-6 text-base font-light leading-relaxed text-muted md:text-[17px]">
                  During our beta testing period, Compass is free for anyone whose organization is
                  approved after you contact our team for access. We review each request so we can
                  onboard firms thoughtfully, stay close to product feedback, and keep the beta
                  cohort manageable while we ship improvements quickly.
                </p>
                <ul className="mt-8 space-y-4 text-base font-light leading-relaxed text-ink md:text-[17px]">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      Start with the contact flow—tell us about your firm and how you&apos;d like to
                      use Compass. We&apos;ll follow up with timing, eligibility, and onboarding steps.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      Approved organizations receive the full workspace at no charge for the duration
                      of the beta program, including team invites, dashboards, exports, and Advisor.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      Anyone who participates as an approved beta tester receives one year of
                      Enterprise access free after official launch—a $1,500 value—as thanks for
                      helping us refine the product before general availability.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      No credit card required. When we introduce paid plans, we&apos;ll give you clear
                      notice and time to decide before anything changes on your bill.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-[18px] border border-black/[0.06] bg-card/40 p-8 shadow-card md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      Beta
                    </p>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
                      $0
                    </p>
                    <p className="mt-1 text-sm font-light text-muted">
                      per organization during the beta period
                    </p>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Active
                  </span>
                </div>
                <p className="mt-6 rounded-xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-ink">
                  <span className="font-semibold">After launch:</span> Beta testers get one year of
                  Enterprise access free ($1,500 value).
                </p>
                <ul className="mt-8 space-y-3 border-t border-black/[0.06] pt-8 text-sm font-light leading-relaxed text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>Full product access for your approved org</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>Roles, invites, and shared workspace URL</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>Advisor, exports, and the features you see on this page</span>
                  </li>
                </ul>
                <TransitionLink
                  to="/contact"
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-ink/90"
                >
                  Request access
                </TransitionLink>
                <p className="mt-4 text-center text-xs text-muted">
                  We&apos;ll confirm approval and help you get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 border-b border-black/[0.06] bg-canvas py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                FAQ
              </p>
            </div>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
              Common questions.
            </h2>
            <div className="mt-10 divide-y divide-black/[0.08] rounded-[18px] border border-black/[0.06] bg-white px-1 shadow-card">
              {faqItems.map((item) => {
                const open = openFaq === item.id;
                return (
                  <div key={item.id} className="px-4 py-1">
                    <button
                      type="button"
                      id={`faq-trigger-${item.id}`}
                      onClick={() => setOpenFaq(open ? null : item.id)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={open}
                      aria-controls={`faq-panel-${item.id}`}
                    >
                      <span className="text-sm font-bold text-ink md:text-base">{item.q}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-muted ring-1 ring-black/[0.06] transition-transform duration-300 ease-out motion-reduce:transition-none ${
                          open ? "rotate-180 text-accent" : ""
                        }`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      aria-hidden={!open}
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="pb-4 text-sm leading-relaxed text-muted">{item.a}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section id="cta" className="scroll-mt-28 bg-canvas py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                Get started
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
              Ready to run your client operations in one place?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-muted md:text-lg">
              Keep CRM, scheduling, invoices, and execution in one operating rhythm.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TransitionLink
                to="/contact"
                className="inline-flex rounded-full border border-transparent bg-ink px-10 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-ink/90"
              >
                Book a demo
              </TransitionLink>
              <TransitionLink
                to="/contact"
                className="inline-flex rounded-full border border-black/[0.12] bg-white px-10 py-4 text-sm font-semibold text-ink transition hover:bg-card"
              >
                Start free
              </TransitionLink>
            </div>
            <p className="mt-4 text-xs text-muted">No credit card required.</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
