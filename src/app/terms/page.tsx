import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | DeployClaw",
};

export default function Terms() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-muted/50 text-sm hover:text-foreground transition-colors mb-8 inline-block">
          &larr; Back to DeployClaw
        </a>
        <h1 className="text-3xl font-black mb-8">Terms of Service</h1>
        <div className="space-y-6 text-muted text-sm leading-relaxed">
          <p><strong className="text-foreground">Last updated:</strong> March 14, 2026</p>

          <h2 className="text-foreground text-lg font-bold mt-8">1. Overview</h2>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the services provided
            by DeployClaw, operated by AMDR Automate (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;), including remote and on-site OpenClaw installation, configuration,
            security hardening, and post-deployment support (collectively, the &ldquo;Services&rdquo;).
            By purchasing or using our Services, you (&ldquo;Customer&rdquo; or &ldquo;you&rdquo;)
            agree to be bound by these Terms.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">2. Services Provided</h2>
          <p>DeployClaw provides:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Remote or on-site (Atlanta, Miami, Caribbean) installation and configuration of the open-source OpenClaw software on Customer-provided or DeployClaw-provisioned infrastructure.</li>
            <li>Security hardening, Composio OAuth middleware setup, integration configuration, and custom workflow development.</li>
            <li>A hypercare period following deployment (14–60 days depending on tier) for issues directly related to the setup performed.</li>
            <li>Optional ongoing Managed Care plans for monitoring, updates, and continued support (billed monthly, subject to separate terms).</li>
          </ul>
          <p>
            On-site Services are currently available in Atlanta, Miami, and the Caribbean
            (Jamaica, Bahamas, Trinidad, Barbados). Remote Services are available worldwide.
            We reserve the right to modify the scope, pricing, and availability of Services
            at any time.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">3. Payment &amp; Refunds</h2>
          <p>
            Implementation fees are one-time charges processed through Stripe. Managed Care fees
            are recurring monthly charges. Prices are listed on our website and are subject to
            change. We offer a 14-day satisfaction guarantee &mdash; if you are not satisfied
            with the deployment within 14 days, we will issue a full refund of the deployment fee.
            If you cancel before the scheduled deployment, we will issue a full refund. Managed
            Care plans may be cancelled with 30 days written notice. If we are unable to complete
            the deployment due to circumstances within our control, we will reschedule at no
            additional cost or issue a full refund at your request.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">4. Customer Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong className="text-foreground">Backups:</strong> You are solely responsible for
              backing up all data, files, and configurations on your systems before any deployment.
              DeployClaw is not responsible for any data loss that may occur during or after setup.
            </li>
            <li>
              <strong className="text-foreground">Access:</strong> You must provide timely access
              to your server, necessary credentials, network access, and any hardware required
              for the deployment.
            </li>
            <li>
              <strong className="text-foreground">Accuracy:</strong> You are responsible for
              ensuring that any information you provide (e.g., server specifications, network
              details, integration credentials) is accurate and complete.
            </li>
            <li>
              <strong className="text-foreground">Compliance:</strong> You are responsible for
              ensuring that your use of OpenClaw and any connected services complies with all
              applicable laws and third-party terms of service.
            </li>
          </ul>

          <h2 className="text-foreground text-lg font-bold mt-8">5. Third-Party Software Disclaimer</h2>
          <p>
            OpenClaw is open-source software developed and maintained by third parties. DeployClaw
            is not the developer, owner, or maintainer of OpenClaw. We do not guarantee the
            functionality, security, availability, or continued development of OpenClaw or any
            third-party integrations. Any issues arising from the OpenClaw software itself, its
            updates, or its third-party integrations are outside the scope of our Services and
            liability. Use of third-party software is at your own risk and subject to their
            respective licenses and terms.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">6. Hardware Disclaimer</h2>
          <p>
            If DeployClaw procures hardware on your behalf (e.g., Mac Mini), it is provided as-is
            with the manufacturer&apos;s standard warranty. DeployClaw is not responsible for
            hardware defects, failures, or damage occurring after delivery. If you provide your
            own hardware, you are responsible for ensuring it meets the minimum requirements for
            running OpenClaw. We are not liable for any damage to Customer-provided hardware
            during or after setup, except in cases of gross negligence.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">7. Limitation of Liability</h2>
          <p className="uppercase text-xs text-muted/60 leading-relaxed">
            To the maximum extent permitted by applicable law, DeployClaw and its owners,
            employees, and contractors shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to: loss of data, loss
            of revenue, loss of profits, business interruption, unauthorized access to your
            systems or data, security breaches, or damages arising from third-party software or
            hardware failures, regardless of the cause of action or the theory of liability.
          </p>
          <p className="uppercase text-xs text-muted/60 leading-relaxed">
            Our total aggregate liability for any claims arising out of or related to these Terms
            or the Services shall not exceed the amount you paid to DeployClaw for the specific
            service giving rise to the claim.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">8. Disclaimer of Warranties</h2>
          <p className="uppercase text-xs text-muted/60 leading-relaxed">
            The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, whether express, implied, or statutory, including but not
            limited to implied warranties of merchantability, fitness for a particular purpose,
            and non-infringement. We do not warrant that the setup will be error-free, that
            OpenClaw will operate without interruption, or that the software will meet your
            specific requirements.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless DeployClaw and its owners, employees,
            and contractors from and against any and all claims, damages, losses, liabilities,
            costs, and expenses (including reasonable attorneys&apos; fees) arising out of or
            related to: (a) your use of the Services or the OpenClaw software after setup;
            (b) your violation of these Terms; (c) your violation of any applicable law or
            regulation; or (d) any claim by a third party related to your use of OpenClaw or
            connected services.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">10. Data &amp; Security</h2>
          <p>
            During the deployment process, we may need temporary access to your server, network,
            accounts, or devices. We will not intentionally access, copy, or retain any personal
            data beyond what is necessary to complete the deployment. However, we cannot guarantee
            the security of data on your systems or network. You are responsible for changing any
            credentials shared with us after the setup is complete. See our{" "}
            <a href="/privacy" className="text-accent-light underline underline-offset-2">
              Privacy Policy
            </a>{" "}
            for more information on how we handle data.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">11. Post-Deployment Support</h2>
          <p>
            The hypercare period covers issues directly caused by the initial deployment. It does
            not cover: software updates or upgrades to OpenClaw, new feature requests, issues
            caused by changes you make after deployment, third-party service outages, hardware
            failures, or network changes at your location. Ongoing support, monitoring, and
            maintenance beyond hypercare require a Managed Care plan.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">12. Dispute Resolution</h2>
          <p>
            Any disputes arising out of or relating to these Terms or the Services shall first be
            attempted to be resolved through good-faith negotiation. If the dispute cannot be
            resolved informally within 30 days, it shall be resolved through binding arbitration
            administered in Atlanta, Georgia, in accordance with the rules of the American
            Arbitration Association. Each party shall bear its own costs. You agree that any
            dispute resolution proceedings will be conducted on an individual basis and not as
            a class action.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the
            State of Georgia, without regard to its conflict of laws principles.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">14. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will be posted on this
            page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the
            Services after any changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">15. Contact</h2>
          <p>
            If you have questions about these Terms, contact us at{" "}
            <a href="mailto:hello@amdrautomate.ai" className="text-accent-light underline underline-offset-2">
              hello@amdrautomate.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
