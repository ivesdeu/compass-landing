import SiteFooter from "./components/SiteFooter.jsx";
import TransitionLink from "./components/TransitionLink.jsx";

const PDF_HREF = "/compass_trust_security.pdf";

export default function TrustSecurity() {
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
              Trust &amp; Security
            </h1>
            <p className="mt-3 text-base font-light text-muted md:text-lg">
              How Compass protects your data, your clients, and your business.
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

          <div className="mt-10 space-y-10 text-base font-light leading-relaxed text-ink [&_h2]:scroll-mt-28 [&_strong]:font-semibold [&_strong]:text-ink">
            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">1. Overview</h2>
              <p className="mt-3 text-muted">
                Compass is a multi-tenant CRM and financial workspace built for professional
                services firms. Security is treated as a first-class product concern, not an
                afterthought. Our approach rests on three principles:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-muted marker:text-accent">
                <li>
                  <strong>Defense in depth.</strong> Each layer of the stack enforces access
                  independently — database, API gateway, application logic, and transport all
                  validate authorization separately.
                </li>
                <li>
                  <strong>Least privilege.</strong> Credentials, service accounts, and API keys are
                  scoped to the minimum access they need. Edge functions use a service-role key
                  only where required; user-facing routes use the per-session JWT.
                </li>
                <li>
                  <strong>Tenant isolation by design.</strong> Your organization&apos;s data is
                  logically separated from every other organization&apos;s data at the database
                  level via Row Level Security and database triggers. No application-layer filtering is
                  required to enforce this boundary.
                </li>
              </ul>
              <p className="mt-4 text-muted">
                Compass is built on Supabase (data &amp; auth), Netlify (hosting &amp; CDN), and
                Stripe (payments). Where infrastructure-level compliance assurances matter to you —
                SOC 2, PCI, GDPR processors — please consult each provider&apos;s trust
                documentation linked in the Subprocessors section at the end of this document.
                Compass itself does not hold independent SOC 2 or HIPAA certification at this time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                2. Authentication &amp; Authorization
              </h2>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-muted">
                Supabase Auth
              </h3>
              <p className="mt-2 text-muted">
                All user sessions are managed by Supabase Auth. Session tokens are short-lived JWTs.
                Supabase enforces token expiry and refresh; we do not roll our own token logic.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Organization roles
              </h3>
              <p className="mt-2 text-muted">
                Every user belongs to one or more organizations via the organization_members table.
                Roles are scoped per organization:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>
                  <strong>owner</strong> — full access including destructive workspace deletion
                </li>
                <li>
                  <strong>admin</strong> — manage members, settings, and integrations
                </li>
                <li>
                  <strong>member</strong> — standard operational access
                </li>
                <li>
                  <strong>viewer</strong> — read-only access
                </li>
              </ul>
              <p className="mt-4 text-muted">
                Role checks are enforced at the database layer via Row Level Security policies, not
                only in the UI.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Row Level Security (RLS)
              </h3>
              <p className="mt-2 text-muted">
                Core tables have RLS enabled in Postgres. Policies are defined per table and per role
                — for example, organization_stripe_connections allows members to SELECT their own
                organization&apos;s row but restricts INSERT and UPDATE to service-role-authenticated
                Edge Functions only. This means even a correctly authenticated user cannot escalate
                access by calling the Supabase PostgREST API directly.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Owner-only destructive actions
              </h3>
              <p className="mt-2 text-muted">
                The delete_workspace_as_owner database function is SECURITY DEFINER and restricted
                to the owner role. Executing it removes the organization and cascades deletion of all
                org-scoped data. This is the intended path for full data removal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                3. Data isolation
              </h2>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-muted">
                Organization scoping
              </h3>
              <p className="mt-2 text-muted">
                Every data record in Compass is tagged with an organization_id. Row Level Security
                policies ensure that authenticated users can only read and write records that belong
                to their organization. This scoping is enforced at the Postgres level regardless of
                how the application queries the data.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Cross-organization integrity triggers
              </h3>
              <p className="mt-2 text-muted">
                As a second layer of defense, database triggers enforce referential integrity across
                organizational boundaries. Tables including workspace_tasks, crm_activities,
                transactions, and projects cannot reference a client, campaign, or project that
                belongs to a different organization — even if application code incorrectly assigns an
                ID from another org. This guards against cross-tenant data leakage caused by bugs in
                application logic.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Workspace deletion &amp; data removal
              </h3>
              <p className="mt-2 text-muted">
                When an owner deletes a workspace, the delete_workspace_as_owner function runs a
                cascading delete that removes the organization record and all dependent data across
                org-scoped tables. Owners have full control over this action; it cannot be triggered
                by lower-privileged roles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                4. Integrations
              </h2>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-muted">
                OAuth token storage
              </h3>
              <p className="mt-2 text-muted">
                When you connect a Google or Microsoft account, Compass stores OAuth access and
                refresh tokens in the integration_credentials table. This table has RLS enabled with
                no policies for normal authenticated API clients — meaning tokens are never exposed
                as a standard PostgREST resource. Only service-role Edge Functions have SELECT and
                INSERT access to this table.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Token encryption at rest
              </h3>
              <p className="mt-2 text-muted">
                If the INTEGRATION_TOKEN_ENCRYPTION_KEY environment variable is set in production,
                Edge Function code encrypts refresh tokens using AES-256-GCM before writing them to
                the database. This is the recommended configuration for production deployments.
                Tokens are decrypted in-memory by Edge Functions only when needed to make API calls
                on your behalf.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                OAuth hardening
              </h3>
              <p className="mt-2 text-muted">
                OAuth flows use a signed state parameter (OAUTH_STATE_SECRET) to prevent CSRF during
                the authorization redirect. Redirect URIs are explicitly configured and validated. For
                browser-invoked Edge Functions, DASHBOARD_ALLOWED_ORIGINS can be set to restrict
                CORS origins. A separate INTEGRATION_WORKER_SECRET authenticates scheduled
                integration-sync jobs so they cannot be triggered externally without the secret.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                JWT verification on Edge Functions
              </h3>
              <p className="mt-2 text-muted">
                User-facing Edge Functions — including oauth-google-start, gmail-send,
                create-stripe-checkout-session, and the Stripe Connect start/disconnect flows —
                require a valid Supabase session JWT at the API gateway level (verify_jwt = true).
                OAuth callback functions (oauth-google-callback, oauth-microsoft-callback) use
                verify_jwt = false at the gateway because the provider redirect cannot carry a
                Supabase JWT; however, the OAuth code exchange itself is secured by the
                provider&apos;s redirect flow and the signed state parameter. Additionally, some
                endpoints perform explicit in-function JWT validation using auth.getUser() as a
                secondary check, independent of the gateway setting.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">5. Payments</h2>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-muted">
                Stripe Checkout
              </h3>
              <p className="mt-2 text-muted">
                Invoice checkout sessions are created by an Edge Function
                (create-stripe-checkout-session) that requires a valid Supabase session JWT.
                Unauthenticated callers cannot initiate a checkout session.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Webhook verification
              </h3>
              <p className="mt-2 text-muted">
                Stripe sends payment events to a webhook endpoint. This endpoint uses verify_jwt =
                false at the gateway (Stripe cannot send a Supabase JWT), but the handler validates
                the Stripe-Signature header against STRIPE_WEBHOOK_SECRET using the standard Stripe
                webhook verification method. Events that fail signature verification are rejected.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Stripe Connect
              </h3>
              <p className="mt-2 text-muted">
                Organizations that enable connected account functionality are linked via Stripe
                Connect Express. The connection state is tracked in organization_stripe_connections.
                Onboarding and account update events are processed via the Stripe Connect webhook,
                keeping billing state authoritative on the server side.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Idempotent revenue recording
              </h3>
              <p className="mt-2 text-muted">
                Transactions include a unique index on (organization_id, stripe_payment_intent_id)
                where a payment intent ID is present. This reduces the risk of duplicate transaction
                records from webhook retries.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                6. File storage
              </h2>
              <p className="mt-3 text-muted">
                Brand assets and logo files are stored in a private Supabase Storage bucket
                (brand-assets). The bucket is not publicly accessible. Storage policies restrict access
                to members of the owning organization. Files are served to the application via signed
                URLs generated server-side, so the underlying storage URL is not directly exposed to
                end users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">7. AI features</h2>
              <p className="mt-3 text-muted">
                Usage data for the Compass AI assistant (Advisor) is stored in per-user tables:
                ai_usage_events, ai_feedback, and ai_action_outcomes. Row Level Security on each
                table restricts access to auth.uid() = user_id — meaning only the individual user can
                read or write their own AI usage metadata. This data is not shared across the
                workspace by default and is not visible to other members, including org admins, under
                the current configuration.
              </p>
              <p className="mt-4 text-sm italic text-muted">
                Note: If a future release adds org-level AI analytics for admins, this section will be
                updated to reflect that change.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                8. Transport &amp; security headers
              </h2>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-muted">
                HTTPS everywhere
              </h3>
              <p className="mt-2 text-muted">
                All traffic between your browser and Compass is encrypted in transit. The frontend is
                served over HTTPS by Netlify. Communication with Supabase APIs uses HTTPS and WSS
                (WebSockets over TLS).
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Security headers
              </h3>
              <p className="mt-2 text-muted">
                The following HTTP response headers are applied to all pages:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                <li>
                  <strong>X-Frame-Options: DENY</strong> — prevents Compass from being embedded in
                  iframes on other origins.
                </li>
                <li>
                  <strong>X-Content-Type-Options: nosniff</strong> — prevents browsers from
                  MIME-sniffing responses.
                </li>
                <li>
                  <strong>Referrer-Policy: strict-origin-when-cross-origin</strong> — limits referrer
                  information sent to third-party origins.
                </li>
                <li>
                  <strong>Permissions-Policy</strong> — disables access to sensors and payment APIs
                  not used by the application.
                </li>
              </ul>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Content Security Policy (report-only mode)
              </h3>
              <p className="mt-2 text-muted">
                Compass currently runs a Content Security Policy in report-only mode. This means CSP
                violations are logged and monitored but do not block page loads. The policy allows
                connections only to Supabase and the configured OAuth providers (GitHub, Google,
                Microsoft). We are actively tightening the CSP toward enforcement mode. Please do not
                interpret report-only mode as equivalent to a blocking CSP.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                9. Operational practices
              </h2>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-muted">
                CI pipeline
              </h3>
              <p className="mt-2 text-muted">
                All pull requests and merges to main run through a GitHub Actions CI pipeline that
                executes npm ci and npm run build. A separate CI job runs deno check type-checking
                against all Supabase Edge Function source files. Note: the Edge Function typecheck
                job currently runs with continue-on-error: true, meaning CI may still pass if type
                errors are present. We recommend changing this to a hard gate as the codebase
                matures.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Structured logging &amp; request IDs
              </h3>
              <p className="mt-2 text-muted">
                Edge Functions use structured logging with a unique x-request-id assigned to every
                request and returned in response headers. Uncaught errors return a 500 JSON response
                without stack traces in the body — internal error detail stays in logs, not in API
                responses. Log guidelines specify that logs should not contain PII, OAuth tokens, or
                full payment payloads.
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">
                Secrets management
              </h3>
              <p className="mt-2 text-muted">
                Application secrets (Supabase service role key, Stripe webhook secret, OAuth client
                secrets, integration encryption key) are stored in Supabase Edge Function secrets and
                Netlify environment variables. They are not embedded in client-side bundles or
                committed to source control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                10. What we do not do
              </h2>
              <p className="mt-3 text-muted">We aim to be honest about what Compass is and is not:</p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-muted marker:text-accent">
                <li>
                  We are not a certified HIPAA offering. Compass should not be used to store
                  protected health information unless you have assessed your own compliance
                  obligations and implemented additional controls.
                </li>
                <li>
                  We do not hold an independent SOC 2 attestation. Infrastructure-level assurances
                  come from our subprocessors (Netlify, Supabase, Stripe), each of which publishes
                  their own compliance documentation.
                </li>
                <li>
                  We do not claim &quot;military-grade&quot; encryption or marketing-speak. We describe what
                  we actually do: AES-256-GCM for refresh token encryption at rest when configured,
                  TLS in transit, RLS at the database layer.
                </li>
                <li>CSP is not yet in enforcement mode. Violations are monitored, not blocked.</li>
                <li>
                  The security posture described in this document depends on correct deployment —
                  secrets set, RLS migrations applied, webhook secrets rotated, and least-privilege
                  service accounts in use. A misconfigured deployment may not provide the guarantees
                  described here.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                11. Subprocessors
              </h2>
              <p className="mt-3 text-muted">
                Compass relies on the following third-party subprocessors. Each publishes its own
                trust and security documentation:
              </p>
              <div className="mt-6 overflow-x-auto rounded-[18px] border border-black/[0.06] bg-white shadow-card">
                <table className="w-full min-w-[280px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/[0.06] bg-card/40">
                      <th className="px-4 py-3 font-semibold text-ink">Subprocessor</th>
                      <th className="px-4 py-3 font-semibold text-ink">Role</th>
                      <th className="px-4 py-3 font-semibold text-ink">Trust / security docs</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-black/[0.06]">
                      <td className="px-4 py-3 font-medium text-ink">Netlify</td>
                      <td className="px-4 py-3">Hosting, CDN, build pipeline</td>
                      <td className="px-4 py-3">
                        <a
                          href="https://www.netlify.com/trust/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                        >
                          netlify.com/trust
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-black/[0.06]">
                      <td className="px-4 py-3 font-medium text-ink">Supabase</td>
                      <td className="px-4 py-3">
                        Database (Postgres), auth, storage, edge functions
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href="https://supabase.com/security"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                        >
                          supabase.com/security
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-black/[0.06]">
                      <td className="px-4 py-3 font-medium text-ink">Stripe</td>
                      <td className="px-4 py-3">
                        Payment processing; Stripe Connect for connected org accounts
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href="https://stripe.com/docs/security"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                        >
                          stripe.com/docs/security
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-ink">Google / Microsoft</td>
                      <td className="px-4 py-3">
                        Email &amp; calendar integrations (only when connected by user)
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href="https://safety.google/security/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                        >
                          Google Security
                        </a>
                        <span className="mx-1 text-muted/50">·</span>
                        <a
                          href="https://www.microsoft.com/en-us/trust-center"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                        >
                          Microsoft Trust Center
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-muted">
                Customer-connected integrations (Google, Microsoft) are authorized by the customer
                and are only active when the customer explicitly completes the OAuth flow. Compass
                does not access those accounts without an active OAuth credential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">12. Contact</h2>
              <p className="mt-3 text-muted">
                For security questions, responsible disclosure, or data requests, please reach out:{" "}
                <a
                  href="mailto:contact@ivesdeu.com"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-2"
                >
                  contact@ivesdeu.com
                </a>
              </p>
              <p className="mt-4 text-muted">
                If you believe you have found a security vulnerability in Compass, please contact us
                before disclosing publicly. We are committed to responding promptly and working with
                you to address any valid issues.
              </p>
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
