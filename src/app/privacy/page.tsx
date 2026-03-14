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
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted text-sm leading-relaxed">
          <p><strong>Last updated:</strong> March 14, 2026</p>

          <h2 className="text-foreground text-lg font-bold mt-8">What We Collect</h2>
          <p>
            When you book a call or contact us, we collect your name, email address, and any
            information you voluntarily share about your business needs. We use Calendly for
            scheduling, which has its own privacy policy.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">What We Don&apos;t Collect</h2>
          <p>
            We do not collect, store, or process data from your OpenClaw instance. Your AI agent
            runs on infrastructure you control. The entire point of on-premise AI is that your
            data stays yours.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">How We Use Your Information</h2>
          <p>
            We use your contact information to communicate about our services, schedule
            deployments, and provide support. We do not sell, rent, or share your information
            with third parties for marketing purposes.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">Analytics</h2>
          <p>
            This website uses Vercel Analytics to understand traffic patterns. No personally
            identifiable information is collected through analytics. No cookies are used for
            tracking.
          </p>

          <h2 className="text-foreground text-lg font-bold mt-8">Your Rights</h2>
          <p>
            You can request deletion of your personal information at any time by emailing us.
            We will comply within 30 days.
          </p>

          <p className="mt-8 text-muted/40">
            Contact: hello@amdrautomate.ai
          </p>
        </div>
      </div>
    </div>
  );
}
