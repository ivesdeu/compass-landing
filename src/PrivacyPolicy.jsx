import SiteFooter from "./components/SiteFooter.jsx";
import TransitionLink from "./components/TransitionLink.jsx";

const PDF_HREF = "/compass_privacy_policy.pdf";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <main
        id="top"
        className="motion-reduce:animate-none animate-route-enter px-4 pb-20 pt-28 [animation-delay:0.05s] md:px-6 md:pb-24 md:pt-32"
      >
        <article className="mx-auto max-w-3xl">
          <header className="border-b border-black/[0.06] pb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Compass by IDM
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-base font-light text-muted md:text-lg">
              Compass Business Dashboard
            </p>
            <p className="mt-2 text-sm text-muted">
              Effective date: April 20, 2026 · compass.idm.com · Operator: Ives Deutschmann Management
              (IDM Agency) and its co-founders
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PDF_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-black/[0.08] bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:border-black/[0.12]"
              >
                Download PDF
              </a>
              <a
                href="mailto:contact@ivesdeu.com"
                className="inline-flex items-center text-sm font-semibold text-muted underline decoration-muted/40 underline-offset-4 transition hover:text-ink"
              >
                contact@ivesdeu.com
              </a>
            </div>
          </header>

          <p className="mt-8 text-muted">
            This Privacy Policy describes how Compass (the &quot;Service,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            collects, uses, discloses, and protects information when you use the Service. Please read it
            carefully before using Compass.
          </p>

          <div className="mt-10 space-y-10 text-base font-light leading-relaxed text-ink [&_h2]:scroll-mt-28 [&_strong]:font-semibold [&_strong]:text-ink">
            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">1. Who we are</h2>
              <p className="mt-3 text-muted">
                The Service is operated by Ives Deutschmann Management (IDM Agency) and its
                co-founders (collectively, &quot;Operators&quot;). References to &quot;we&quot; or &quot;us&quot; include Operators
                unless context requires otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                2. Information we collect
              </h2>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-muted">
                2.1 Account and authentication
              </h3>
              <p className="mt-2 text-muted">
                When you register or sign in, we (via our service providers) may process:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>Email address and authentication identifiers</li>
                <li>Session tokens and security-related data needed to keep your account secure</li>
                <li>Profile or account metadata our authentication system stores</li>
              </ul>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                2.2 Content and data you provide
              </h3>
              <p className="mt-2 text-muted">
                The Service is built for managing business information. Depending on how you use it,
                you may store or process:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>Client or contact details (e.g., names, companies, email, phone, notes)</li>
                <li>
                  Financial or operational records you enter (e.g., transactions, projects, invoices,
                  timesheets, campaigns, settings, and related notes or metadata)
                </li>
                <li>Integrations or imports you connect, if applicable</li>
              </ul>
              <p className="mt-4 text-muted">
                You are responsible for ensuring you have the right to provide this information and that
                your use complies with applicable laws.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                2.3 Payment information
              </h3>
              <p className="mt-2 text-muted">
                Payments may be processed by third-party processors (e.g., Stripe). We generally do not
                receive or store full payment card numbers on our own systems. We may receive limited
                billing-related metadata such as invoice or subscription status, customer identifiers,
                or transaction references.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                2.4 Technical and usage information
              </h3>
              <p className="mt-2 text-muted">We may automatically collect or derive:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>IP address, device or browser type, and general log data</li>
                <li>Timestamps and error or diagnostic data related to operating the Service</li>
                <li>Aggregated or de-identified usage statistics where permitted</li>
              </ul>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                2.5 Communications
              </h3>
              <p className="mt-2 text-muted">
                If you contact us, we process the content of those messages and related contact details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                3. How we use information
              </h2>
              <p className="mt-3 text-muted">We use information to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>Provide, operate, secure, and improve the Service</li>
                <li>
                  Authenticate users and enforce access controls (including row-level security aligned
                  with your account)
                </li>
                <li>Process payments and fulfill subscriptions through our payment partners</li>
                <li>Run integrations, backups, and infrastructure the Service depends on</li>
                <li>Respond to support requests and communicate about the Service</li>
                <li>Detect, prevent, or address fraud, abuse, security, or technical issues</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
              <p className="mt-4 text-muted">
                We do not sell your personal information as that term is commonly understood in U.S.
                state privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                4. Legal bases (EEA, UK, Switzerland)
              </h2>
              <p className="mt-3 text-muted">
                Where GDPR or similar laws apply, we rely on one or more of the following:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>Performance of a contract — providing the Service you request</li>
                <li>
                  Legitimate interests — securing the Service, improving features, and limited analytics,
                  balanced against your rights
                </li>
                <li>Legal obligation — where the law requires processing</li>
                <li>
                  Consent — where we ask for it (you may withdraw consent at any time where processing
                  is consent-based)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                5. How we share information
              </h2>
              <p className="mt-3 text-muted">We share information only as needed to run the Service:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>
                  Infrastructure and database providers — e.g., hosting, database, and authentication
                  (such as Supabase) that store and process Service data under our instructions
                </li>
                <li>Payment processors — e.g., Stripe, subject to their policies</li>
                <li>Integration partners — only to the extent you connect or authorize integrations</li>
                <li>Professional advisers — lawyers, accountants, or insurers when required</li>
                <li>
                  Legal and safety — if we believe disclosure is required by law, regulation, legal
                  process, or to protect rights, safety, or security
                </li>
              </ul>
              <p className="mt-4 text-muted">
                We may transfer information in connection with a merger, acquisition, or sale of assets,
                with notice as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                6. International transfers
              </h2>
              <p className="mt-3 text-muted">
                Your information may be processed in the United States and other countries where we or
                our subprocessors operate. Where required, we use appropriate safeguards (such as
                standard contractual clauses) for cross-border transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">7. Retention</h2>
              <p className="mt-3 text-muted">
                We retain information for as long as your account is active and as needed to provide
                the Service, comply with law, resolve disputes, and enforce agreements. You may request
                deletion of your account or certain data as described below, subject to legal retention
                needs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">8. Security</h2>
              <p className="mt-3 text-muted">
                We implement reasonable technical and organizational measures designed to protect your
                information. No method of transmission or storage is completely secure; you use the
                Service at your own risk regarding security beyond what reasonable measures can address.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                9. Your rights and choices
              </h2>
              <p className="mt-3 text-muted">
                Depending on where you live, you may have rights to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>Access, correct, or delete certain personal information</li>
                <li>Object to or restrict certain processing</li>
                <li>Data portability</li>
                <li>Withdraw consent where processing is consent-based</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-4 text-muted">
                To exercise these rights, contact{" "}
                <a
                  href="mailto:contact@ivesdeu.com"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                >
                  contact@ivesdeu.com
                </a>
                . We may need to verify your identity before responding.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                10. California residents (CCPA/CPRA summary)
              </h2>
              <p className="mt-3 text-muted">
                If the California Consumer Privacy Act applies, this policy describes our collection and
                use of personal information. We do not &quot;sell&quot; or &quot;share&quot; personal information for
                cross-context behavioral advertising as defined under California law. California
                residents may have additional rights; contact us at the email above.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">11. Children</h2>
              <p className="mt-3 text-muted">
                The Service is not directed at children under 16 (or the applicable age in your
                jurisdiction). We do not knowingly collect personal information from children. If you
                believe we have, contact us and we will delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                12. No professional advice; your business decisions
              </h2>
              <p className="mt-3 text-muted">
                The Service provides software tools and displays information you and integrated systems
                supply. It is not accounting, tax, legal, investment, or other professional advice.
              </p>
              <p className="mt-4 text-muted">
                You alone are responsible for your business, financial, tax, compliance, and
                operational decisions — including decisions you make using or relying on the Service,
                any summaries, charts, exports, reminders, or integrations. Operators (including
                co-founders) do not assume any duty of care, advisory relationship, or fiduciary role
                toward you.
              </p>
              <p className="mt-4 text-muted">
                You agree that any business outcomes — including profits, losses, tax positions,
                regulatory outcomes, disputes with third parties, or missed opportunities — resulting
                from your use of or reliance on the Service are solely your responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                13. Limitation of liability
              </h2>
              <div className="mt-4 rounded-xl border border-black/[0.06] bg-white p-4 text-sm leading-relaxed text-muted shadow-card md:p-5">
                <p className="font-medium text-ink">To the fullest extent permitted by applicable law:</p>
                <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-accent">
                  <li>
                    The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
                    whether express or implied, including implied warranties of merchantability, fitness
                    for a particular purpose, title, and non-infringement.
                  </li>
                  <li>
                    In no event shall Operators, co-founders, employees, contractors, or affiliates be
                    liable for any indirect, incidental, special, consequential, exemplary, or punitive
                    damages, or for lost profits, revenues, goodwill, or data, arising out of or related
                    to the Service, even if advised of the possibility of such damages.
                  </li>
                  <li>
                    Total liability for any claim shall not exceed the greater of (a) the amount you
                    paid us in the twelve (12) months before the claim, or (b) one hundred U.S. dollars
                    (USD $100), except where prohibited by law.
                  </li>
                </ul>
                <p className="mt-4">
                  Some jurisdictions do not allow certain limitations; in those jurisdictions, our
                  liability is limited to the maximum extent permitted.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                14. Third-party services
              </h2>
              <p className="mt-3 text-muted">
                The Service may link to or rely on third-party services (including Supabase, Stripe, and
                others). Their collection and use of information is governed by their respective privacy
                policies. We are not responsible for third-party practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                15. Changes to this policy
              </h2>
              <p className="mt-3 text-muted">
                We may update this Privacy Policy from time to time. We will post the revised version and
                update the &quot;Effective date&quot; above. If changes are material, we will provide additional
                notice as required by law. Continued use of the Service after the effective date
                constitutes acceptance of the updated Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">16. Contact</h2>
              <p className="mt-3 text-muted">
                Questions about this Policy:{" "}
                <a
                  href="mailto:contact@ivesdeu.com"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                >
                  contact@ivesdeu.com
                </a>
              </p>
              <p className="mt-2 text-muted">
                Website:{" "}
                <a
                  href="https://compass.idm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                >
                  compass.idm.com
                </a>
              </p>
            </section>
          </div>

          <p className="mt-14">
            <TransitionLink
              to="/"
              className="text-sm font-semibold text-muted underline decoration-muted/40 underline-offset-4 transition hover:text-ink"
            >
              Back to home
            </TransitionLink>
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
