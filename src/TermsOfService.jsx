import SiteFooter from "./components/SiteFooter.jsx";
import TransitionLink from "./components/TransitionLink.jsx";

const PDF_HREF = "/compass_terms_of_service.pdf";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <main
        id="top"
        className="motion-reduce:animate-none animate-route-enter px-4 pb-20 pt-28 [animation-delay:0.05s] md:px-6 md:pb-24 md:pt-32"
      >
        <article className="mx-auto max-w-3xl">
          <header className="border-b border-black/[0.06] pb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Compass
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-muted">Last updated: April 2026 · compass.idm.com</p>
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

          <div className="mt-10 space-y-10 text-base font-light leading-relaxed text-ink [&_h2]:scroll-mt-28 [&_strong]:font-semibold [&_strong]:text-ink">
            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                1. Parties and agreement
              </h2>
              <p className="mt-3 text-muted">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of Compass (the
                &quot;Service&quot;), including the web application, APIs, integrations, and related materials
                available at compass.idm.com and operated by IDM Agency (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;). The Service is operated by IDM Agency and its co-founders Mark Deutschmann
                and Otto Ives in their capacities as owners, officers, directors, employees, agents, or
                representatives of the entity, as applicable (collectively, the &quot;Operators&quot;).
              </p>
              <p className="mt-4 text-muted">
                By accessing or using the Service, you agree to these Terms. If you do not agree, do
                not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                2. Eligibility and accounts
              </h2>
              <p className="mt-3 text-muted">
                You represent that you are legally able to enter into these Terms and that all
                information you provide is accurate. You are responsible for safeguarding your
                account credentials and for all activity that occurs under your account. Notify us
                promptly at{" "}
                <a
                  href="mailto:contact@ivesdeu.com"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                >
                  contact@ivesdeu.com
                </a>{" "}
                if you believe your account has been compromised.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">3. The Service</h2>
              <p className="mt-3 text-muted">
                Compass is a multi-tenant CRM and financial workspace designed for professional
                services firms. The Service may provide tools including but not limited to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>Client relationship management and contact tracking</li>
                <li>Revenue, pipeline, and financial dashboards</li>
                <li>Project and task management</li>
                <li>Google and Microsoft email and calendar integrations</li>
                <li>Invoice creation and payment processing via Stripe</li>
                <li>AI-assisted insights via the Compass Advisor feature</li>
              </ul>
              <p className="mt-4 text-muted">
                Features may be added, modified, suspended, or discontinued at any time. We do not
                guarantee uninterrupted, error-free, or continuously available operation of the
                Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                4. No professional advice; your business decisions are yours alone
              </h2>
              <p className="mt-3 text-muted">
                The Service is not financial, legal, tax, accounting, investment, insurance, or other
                professional advice. Nothing in the Service — including summaries, charts, alerts,
                projections, AI-generated outputs, templates, or automated data — constitutes a
                recommendation to take or refrain from any action.
              </p>
              <p className="mt-4 text-muted">
                You are solely responsible for all business, financial, operational, and strategic
                decisions you make in connection with or after using the Service, including decisions
                based on data displayed in the Service, exports, integration outputs, or any
                interpretation of information provided. You should consult qualified professionals
                where appropriate.
              </p>
              <p className="mt-4 text-muted">
                We and the Operators disclaim any duty or obligation to advise you on the
                suitability, legality, profitability, or prudence of any business decision,
                transaction, investment, or strategy. Reliance on the Service for any such purpose
                is at your sole risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                5. User content and data
              </h2>
              <p className="mt-3 text-muted">
                You retain ownership of the data and content you submit to the Service. You grant us
                a non-exclusive, worldwide license to host, process, transmit, display, and use your
                data as reasonably necessary to operate and improve the Service. You represent that
                you have the rights to provide that data and that it does not violate applicable law
                or any third-party rights.
              </p>
              <p className="mt-4 text-muted">
                You are responsible for the accuracy, quality, and legality of your data. We strongly
                recommend maintaining backups of any data important to your business outside the
                Service. We are not liable for data loss resulting from user error, account
                termination, or service interruption.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                6. Acceptable use
              </h2>
              <p className="mt-3 text-muted">You agree not to misuse the Service. Prohibited conduct includes:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>
                  Attempting unauthorized access to any part of the Service, other accounts, or our
                  infrastructure
                </li>
                <li>Interfering with or disrupting the Service or related systems</li>
                <li>Uploading or transmitting content that violates applicable law or third-party rights</li>
                <li>
                  Using the Service to store or transmit personal data in violation of applicable
                  privacy laws
                </li>
                <li>Reverse engineering, scraping, or attempting to extract source code</li>
              </ul>
              <p className="mt-4 text-muted">
                We may suspend or terminate your access at any time for conduct that violates these
                Terms or poses a risk to the Service or other users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                7. Third-party services
              </h2>
              <p className="mt-3 text-muted">
                The Service integrates with third-party products and platforms, including Supabase,
                Netlify, Stripe, Google, and Microsoft. Your use of those integrations is also
                governed by the respective third party&apos;s terms and privacy policies. We are not
                responsible for the availability, accuracy, or conduct of third-party services.
              </p>
              <p className="mt-4 text-muted">
                Stripe processes payments on your behalf. Your use of payment features is subject to
                Stripe&apos;s Connected Account Agreement and Stripe&apos;s Services Agreement. We are not a
                party to transactions processed through your connected Stripe account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">8. Disclaimers</h2>
              <div className="mt-4 rounded-xl border border-black/[0.06] bg-white p-4 text-sm leading-relaxed text-muted shadow-card md:p-5">
                <p className="font-medium uppercase tracking-wide text-ink">
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTIES OF ANY
                  KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, TO
                  THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.
                </p>
                <p className="mt-4">We do not warrant that:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent">
                  <li>The Service will meet your specific requirements or business needs</li>
                  <li>
                    Data, outputs, projections, or AI-generated content will be accurate or reliable
                  </li>
                  <li>The Service will be uninterrupted, timely, or free of errors</li>
                  <li>Defects or errors will be corrected</li>
                </ul>
                <p className="mt-4">
                  No advice or information you receive from us or through the Service creates any
                  warranty not expressly stated in these Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                9. Limitation of liability
              </h2>
              <div className="mt-4 rounded-xl border border-black/[0.06] bg-white p-4 text-sm leading-relaxed text-muted shadow-card md:p-5">
                <p className="font-medium uppercase tracking-wide text-ink">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW: (a) IN NO EVENT WILL IDM AGENCY,
                  THE OPERATORS, OR OUR AFFILIATES, CONTRACTORS, OR SUPPLIERS BE LIABLE FOR ANY
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR
                  ANY LOSS OF PROFITS, REVENUE, GOODWILL, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT
                  OF OR RELATED TO THESE TERMS OR THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF
                  SUCH DAMAGES. (b) IN NO EVENT WILL OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATING
                  TO THE SERVICE EXCEED THE GREATER OF (i) THE AMOUNTS YOU PAID US FOR THE SERVICE IN
                  THE TWELVE (12) MONTHS BEFORE THE CLAIM OR (ii) USD $100, IF YOU HAVE NOT PAID US.
                  (c) THESE LIMITATIONS APPLY WHETHER LIABILITY IS ASSERTED IN CONTRACT, TORT
                  (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER THEORY, AND WHETHER OR NOT
                  DAMAGES WERE FORESEEABLE.
                </p>
                <p className="mt-4">
                  Some jurisdictions do not allow certain liability limitations. In those cases, our
                  liability is limited to the fullest extent still permitted by applicable law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                10. Release and assumption of risk
              </h2>
              <p className="mt-3 text-muted">
                To the fullest extent permitted by applicable law, you release, waive, and discharge
                IDM Agency and the Operators from any and all claims, demands, and damages of every
                kind and nature, known and unknown, arising out of or in any way connected with:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>Your business decisions made using information from the Service</li>
                <li>Outcomes of actions you take or fail to take in reliance on the Service</li>
                <li>
                  Decisions related to finances, contracts, hiring, pricing, operations, investments,
                  or compliance
                </li>
              </ul>
              <p className="mt-4 text-muted">
                You assume all risk associated with using the Service for any business or commercial
                purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                11. Indemnification
              </h2>
              <p className="mt-3 text-muted">
                You will defend, indemnify, and hold harmless IDM Agency, the Operators, and our
                affiliates, contractors, and suppliers from and against any claims, liabilities,
                damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising
                out of or related to: (a) your use of the Service; (b) your data or content; (c) your
                violation of these Terms or applicable law; or (d) your business decisions or dealings
                with third parties in connection with the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">12. Termination</h2>
              <p className="mt-3 text-muted">
                We may suspend or terminate your access to the Service at any time, with or without
                cause or notice, including for violation of these Terms. You may stop using the
                Service at any time. Upon termination, your right to access the Service ends
                immediately.
              </p>
              <p className="mt-4 text-muted">
                Sections 4, 8, 9, 10, 11, and 13 through 16 survive termination of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                13. Dispute resolution; governing law
              </h2>
              <p className="mt-3 text-muted">
                These Terms are governed by the laws of the State of Wisconsin, without regard to its
                conflict-of-law rules, except where prohibited by applicable law.
              </p>
              <p className="mt-4 text-muted">
                Any dispute arising from or relating to these Terms or the Service should first be
                raised informally by contacting us at{" "}
                <a
                  href="mailto:contact@ivesdeu.com"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                >
                  contact@ivesdeu.com
                </a>
                . We will make a good-faith effort to resolve it. If informal resolution fails,
                disputes shall be resolved as determined by counsel in accordance with applicable
                law.
              </p>
              <p className="mt-4 text-sm italic text-muted">
                Note to counsel: Insert your preferred dispute resolution clause here, including any
                arbitration agreement, class action waiver, and venue selection, consistent with
                your entity&apos;s jurisdiction and user base.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                14. Changes to these Terms
              </h2>
              <p className="mt-3 text-muted">
                We may modify these Terms at any time by posting an updated version at compass.idm.com
                or by notifying you via the Service or email. The updated Terms are effective on the
                date posted. Your continued use of the Service after the effective date constitutes
                your acceptance of the revised Terms. If you do not agree to the changes, stop using
                the Service before the effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">15. General</h2>
              <p className="mt-3 text-muted">
                If any provision of these Terms is found unenforceable, the remaining provisions
                remain in full effect. Failure to enforce any provision of these Terms is not a waiver
                of the right to enforce it later. These Terms, along with any separate written agreement
                you have signed with us, constitute the entire agreement between you and IDM Agency
                regarding the Service and supersede all prior agreements or understandings on the
                subject.
              </p>
              <p className="mt-4 text-muted">
                You may not assign your rights or obligations under these Terms without our prior
                written consent. We may assign ours without restriction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">16. Contact</h2>
              <p className="mt-3 text-muted">
                For legal inquiries, support, or questions about these Terms:
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                <li className="font-semibold text-ink">Ives Deutschmann Management</li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:contact@ivesdeu.com"
                    className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                  >
                    contact@ivesdeu.com
                  </a>
                </li>
                <li>
                  Website:{" "}
                  <a
                    href="https://compass.idm.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                  >
                    compass.idm.com
                  </a>
                </li>
              </ul>
              <p className="mt-8 text-xs text-muted">
                Last updated: April 2026 · Compass is a product of IDM Agency
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
