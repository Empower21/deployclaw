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
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted text-sm leading-relaxed">
          <p><strong>Last updated:</strong> March 14, 2026</p>

          <h2 className="text-foreground text-lg font-bold mt-8">1. Services</h2>
          <p>
            DeployClaw, operated by AMDR Automate (&ldquo;we,&rdquo; &ldquo;us&rdquo;), provides
            white-glove deployment, configuration, and managed care services for OpenClaw, an
            open-source AI assistant. We deploy OpenClaw on infrastructure you own or that we
            provision on your behalf.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">2. Payment &amp; Refunds</h2>
          <p>
            All deployment fees are one-time charges due before work begins. Managed Care plans
            are billed monthly. We offer a 14-day satisfaction guarantee on all deployment tiers
            &mdash; if you are not satisfied, we will issue a full refund of the deployment fee.
            Hardware costs and third-party infrastructure fees are non-refundable.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">3. Your Data</h2>
          <p>
            OpenClaw runs on infrastructure you control. We do not store, access, or retain your
            data after deployment is complete, except as needed to provide Managed Care services
            you have opted into. We may access your server during hypercare and support windows
            with your explicit permission.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">4. Liability</h2>
          <p>
            DeployClaw provides deployment and configuration services on an &ldquo;as-is&rdquo; basis.
            We are not responsible for data loss, downtime, or actions taken by your OpenClaw agent
            after deployment. Our total liability is limited to the fees you paid for the specific
            service in question.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">5. Termination</h2>
          <p>
            Either party may terminate Managed Care with 30 days written notice. Upon termination,
            we will provide a handoff document and revoke our access to your infrastructure. Your
            OpenClaw instance continues to operate independently.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">6. Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of our services after
            changes are posted constitutes acceptance of the updated terms.
          </p>

          <p className="mt-8 text-muted/40">
            Contact: hello@amdrautomate.ai
          </p>
        </div>
      </div>
    </div>
  );
}
