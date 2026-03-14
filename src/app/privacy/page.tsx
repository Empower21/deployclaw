import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DeployClaw",
};

export default function Privacy() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-muted/50 text-sm hover:text-foreground transition-colors mb-8 inline-block">
          &larr; Back to DeployClaw
        </a>
        <h1 className="text-3xl font-black mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted text-sm leading-relaxed">
          <p><strong className="text-foreground">Last updated:</strong> March 14, 2026</p>

          <h2 className="text-foreground text-lg font-bold mt-8">1. Introduction</h2>
          <p>
            DeployClaw, operated by AMDR Automate (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;), respects your privacy. This Privacy Policy explains how we
            collect, use, and protect information when you use our website (claw.amdrautomate.ai)
            and our deployment services.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">2. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong className="text-foreground">Booking information:</strong> Name, email address,
              phone number, and scheduling preferences collected through Calendly when you book an
              appointment.
            </li>
            <li>
              <strong className="text-foreground">Payment information:</strong> Payment details
              processed securely through Stripe. We do not store your credit card information on
              our servers.
            </li>
            <li>
              <strong className="text-foreground">Setup information:</strong> Network credentials,
              account details, and server information necessary to perform the deployment, which
              we access only during the setup and hypercare periods.
            </li>
            <li>
              <strong className="text-foreground">Website analytics:</strong> Anonymous usage data
              collected through Vercel Analytics to understand site traffic and improve the website.
            </li>
            <li>
              <strong className="text-foreground">Communications:</strong> Messages sent to us via
              email, Instagram, Slack, WhatsApp, or other channels during the hypercare and
              Managed Care support periods.
            </li>
          </ul>

          <h2 className="text-foreground text-lg font-bold mt-8">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>To schedule and perform your deployment.</li>
            <li>To process payments.</li>
            <li>To provide post-deployment support during the hypercare period and any Managed Care engagement.</li>
            <li>To communicate with you about your service.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">4. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong className="text-foreground">Stripe</strong> for payment processing. Subject
              to{" "}
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-light underline underline-offset-2">
                Stripe&apos;s Privacy Policy
              </a>.
            </li>
            <li>
              <strong className="text-foreground">Calendly</strong> for appointment scheduling.
              Subject to{" "}
              <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-light underline underline-offset-2">
                Calendly&apos;s Privacy Policy
              </a>.
            </li>
            <li>
              <strong className="text-foreground">Vercel Analytics</strong> for anonymous website
              analytics. Subject to{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-light underline underline-offset-2">
                Vercel&apos;s Privacy Policy
              </a>.
            </li>
          </ul>

          <h2 className="text-foreground text-lg font-bold mt-8">5. Data Handling During Setup</h2>
          <p>
            During the deployment process, we may need temporary access to your server, network,
            accounts, or devices. We commit to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Only accessing information strictly necessary for the deployment.</li>
            <li>Not copying, storing, or retaining any of your personal files, passwords, or data after the setup is complete.</li>
            <li>Not installing any software beyond what is required for OpenClaw to function.</li>
          </ul>
          <p>
            We strongly recommend that you change any passwords or credentials shared with us
            immediately after the setup is complete.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">6. Data Retention</h2>
          <p>
            We retain your booking and contact information for as long as necessary to provide
            our services and support. Payment records are retained as required by applicable tax
            and accounting laws. You may request deletion of your data by contacting us.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">7. Data Security</h2>
          <p>
            We take reasonable measures to protect your information, but no method of transmission
            or storage is 100% secure. We cannot guarantee the absolute security of your data.
            OpenClaw is designed to run on your own infrastructure &mdash; your data stays on your
            machine and is not transmitted to DeployClaw after the setup is complete.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">8. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Object to or restrict processing of your data.</li>
          </ul>
          <p>To exercise any of these rights, contact us using the information below.</p>

          <h2 className="text-foreground text-lg font-bold mt-8">9. Cookies</h2>
          <p>
            Our website uses minimal cookies necessary for functionality. We do not use advertising
            cookies or trackers. Vercel Analytics collects anonymous, aggregated data and does not
            use cookies to track individual users.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">10. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect
            personal information from children.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated date. Continued use of our services after changes constitutes
            acceptance.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">12. Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href="mailto:hello@amdrautomate.ai" className="text-accent-light underline underline-offset-2">
              hello@amdrautomate.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
