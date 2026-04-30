import { Navigate, useParams } from "react-router-dom";
import SiteFooter from "./components/SiteFooter.jsx";
import TransitionLink from "./components/TransitionLink.jsx";

const platformPages = {
  "customers-crm": {
    label: "Customers & CRM",
    eyebrow: "Platform",
    title: "Customers & CRM that keeps every relationship current.",
    intro:
      "Track lead status, priorities, notes, and communication preferences in one shared client view.",
    bullets: [
      "Move clients through Lead, Active, Inactive, and Churned stages with clear ownership.",
      "Keep account notes, reminders, and recent touchpoints in timeline order.",
      "Hand off relationships cleanly across founders, operators, and client teams.",
    ],
    workflows: [
      {
        title: "Pipeline hygiene",
        description:
          "Identify stale leads and inactive accounts quickly so your team always knows who needs attention next.",
      },
      {
        title: "Relationship continuity",
        description:
          "Store calls, context, and responsibilities in one place so transitions between teammates stay smooth.",
      },
      {
        title: "Prioritized outreach",
        description:
          "Surface high-impact follow-ups first based on status, recency, and account importance.",
      },
    ],
    outcomes: [
      "Faster lead-to-client conversion",
      "Cleaner handoffs between roles",
      "Higher follow-up consistency",
    ],
    bestFor: [
      "Agency founders managing growth",
      "Client success teams",
      "Revenue operations workflows",
    ],
  },
  "income-ar": {
    label: "Income & AR",
    eyebrow: "Platform",
    title: "Income & AR visibility for faster billing decisions.",
    intro:
      "See invoice and receivable status alongside client context so teams can follow up with confidence.",
    bullets: [
      "Track sent vs paid invoice state without leaving your workspace.",
      "Spot outstanding AR by client and prioritize follow-ups that unlock cash.",
      "Export income and related records when finance needs deeper analysis.",
    ],
    workflows: [
      {
        title: "Cash collection focus",
        description:
          "Build live lists of overdue invoices and total outstanding balances by client so collection work stays focused.",
      },
      {
        title: "Billing confidence",
        description:
          "Review invoice state beside account history before outreach so follow-ups are specific and timely.",
      },
      {
        title: "Finance-ready exports",
        description:
          "Package income and receivables data for downstream accounting review without manual spreadsheet cleanup.",
      },
    ],
    outcomes: [
      "Lower days sales outstanding (DSO)",
      "Faster follow-up cycles",
      "Clearer receivable visibility by account",
    ],
    bestFor: [
      "Operators managing billing",
      "Founders tracking cash flow",
      "Teams with recurring retainers",
    ],
  },
  "expenses-budget": {
    label: "Expenses & Budget",
    eyebrow: "Platform",
    title: "Expenses & budget controls that connect to client profitability.",
    intro:
      "Compare actual spend to budget and tie expenses back to the customers they support.",
    bullets: [
      "Review category and vendor trends without spreadsheet cleanup.",
      "See variance quickly so operators can correct spend in-cycle.",
      "Use allocation context to understand margin impact per client.",
    ],
    workflows: [
      {
        title: "Budget variance monitoring",
        description:
          "Catch category spikes early with side-by-side actual vs planned views and adjust before month-end surprises.",
      },
      {
        title: "Client-level cost insight",
        description:
          "Tag and allocate expenses to clients or projects to reveal true margin and service economics.",
      },
      {
        title: "Operator decision support",
        description:
          "Pair spend trends with revenue and utilization data so cost decisions are tied to business outcomes.",
      },
    ],
    outcomes: [
      "Improved budget adherence",
      "More reliable margin analysis",
      "Better spend decisions in-cycle",
    ],
    bestFor: [
      "Finance-aware operations teams",
      "Client service businesses with variable costs",
      "Teams scaling headcount carefully",
    ],
  },
  "timesheet-tracking": {
    label: "Timesheet Tracking",
    eyebrow: "Platform",
    title: "Timesheet tracking aligned to delivery and revenue.",
    intro:
      "Capture time by client or project and keep delivery activity tied to business outcomes.",
    bullets: [
      "Log work where teams already manage client operations.",
      "Link effort to account context for cleaner planning and prioritization.",
      "Support handoffs with clear visibility into current and recent work.",
    ],
    workflows: [
      {
        title: "Worklog consistency",
        description:
          "Capture time in the same operating system where tasks and client updates already live, reducing missing entries.",
      },
      {
        title: "Capacity planning",
        description:
          "Understand where time is going across clients and projects so staffing decisions are grounded in real usage.",
      },
      {
        title: "Revenue alignment",
        description:
          "Connect effort to deliverables and billing context to improve scope control and profitability.",
      },
    ],
    outcomes: [
      "Higher timesheet completion rates",
      "Clearer utilization trends",
      "Stronger link between effort and margin",
    ],
    bestFor: [
      "Delivery teams with multiple accounts",
      "Ops leaders planning workload",
      "Firms balancing project and retainer work",
    ],
  },
  integrations: {
    label: "Integrations",
    eyebrow: "Platform",
    title: "Integrations that connect communication, calendar, and payments.",
    intro:
      "Bring Gmail, calendar workflows, and Stripe-powered payments into Compass so execution stays in one system.",
    bullets: [
      "Connect Google for email and calendar-aware planning.",
      "Send outreach and follow-ups without switching between disconnected tools.",
      "Accept Stripe payments while tracking invoice status in the same workspace.",
    ],
    workflows: [
      {
        title: "Unified communication flow",
        description:
          "Keep email and calendar context inside client workflows so scheduling and follow-up happen in one rhythm.",
      },
      {
        title: "Payment operations",
        description:
          "Accept Stripe payments and keep invoice status synced so cash events are visible without context switching.",
      },
      {
        title: "Cross-tool reliability",
        description:
          "Standardize core integrations across your team to reduce one-off workarounds and missed handoffs.",
      },
    ],
    outcomes: [
      "Fewer tool switches per workflow",
      "Faster response and scheduling cycles",
      "Stronger billing-to-payment visibility",
    ],
    bestFor: [
      "Teams coordinating across inbox and calendar",
      "Operators reducing tool fragmentation",
      "Service businesses collecting online payments",
    ],
  },
};

export default function PlatformPage() {
  const { slug } = useParams();
  const page = slug ? platformPages[slug] : null;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <main
        key={slug}
        id="top"
        className="motion-reduce:animate-none animate-route-enter px-4 pb-20 pt-28 [animation-delay:0.05s] md:px-6 md:pb-24 md:pt-32"
      >
        <article className="mx-auto max-w-3xl">
          <header className="border-b border-black/[0.06] pb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{page.eyebrow}</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl md:leading-tight">
              {page.title}
            </h1>
            <p className="mt-4 text-base font-light leading-relaxed text-muted md:text-lg">{page.intro}</p>
          </header>

          <section className="mt-10 rounded-[18px] border border-black/[0.06] bg-white p-6 shadow-card md:p-8">
            <h2 className="text-lg font-semibold text-ink">What teams can do with {page.label}</h2>
            <ul className="mt-6 space-y-4 text-base font-light leading-relaxed text-ink">
              {page.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-[18px] border border-black/[0.06] bg-white p-6 shadow-card md:p-8">
            <h2 className="text-lg font-semibold text-ink">Common workflows</h2>
            <div className="mt-6 space-y-5">
              {page.workflows.map((workflow) => (
                <div key={workflow.title} className="rounded-xl bg-card/60 p-4 ring-1 ring-black/[0.04]">
                  <h3 className="text-base font-semibold text-ink">{workflow.title}</h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-muted md:text-[15px]">
                    {workflow.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border border-black/[0.06] bg-white p-6 shadow-card md:p-7">
              <h3 className="text-base font-semibold text-ink">Outcomes teams report</h3>
              <ul className="mt-4 space-y-3 text-sm font-light leading-relaxed text-ink md:text-[15px]">
                {page.outcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[18px] border border-black/[0.06] bg-white p-6 shadow-card md:p-7">
              <h3 className="text-base font-semibold text-ink">Best for</h3>
              <ul className="mt-4 space-y-3 text-sm font-light leading-relaxed text-ink md:text-[15px]">
                {page.bestFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-10 rounded-[18px] border border-black/[0.06] bg-card/40 p-6 md:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight text-ink">Explore this with your team.</h3>
            <p className="mt-3 text-base font-light leading-relaxed text-muted">
              We&apos;ll walk through how Compass fits your current workflow and where this capability adds immediate value.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TransitionLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
              >
                Book a demo
              </TransitionLink>
              <TransitionLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/[0.12] bg-white px-7 py-3 text-sm font-semibold text-ink transition hover:bg-card"
              >
                Start free
              </TransitionLink>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
