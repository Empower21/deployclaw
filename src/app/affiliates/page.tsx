import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program | DeployClaw",
};

export default function Affiliates() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <a href="/" className="text-muted/50 text-sm hover:text-foreground transition-colors mb-8 inline-block">
          &larr; Back to DeployClaw
        </a>

        <h1 className="text-3xl md:text-4xl font-black mb-4">
          DeployClaw Affiliate Program
        </h1>
        <p className="text-muted text-lg mb-2">
          Refer businesses to DeployClaw and earn commissions on every closed deal.
        </p>
        <p className="text-accent-light font-bold text-xl mb-10">
          Earn 30% from every sale you refer.
        </p>

        <div className="bg-surface rounded-2xl border border-white/[0.06] p-8 text-left mb-10">
          <h2 className="font-bold text-lg mb-4">How It Works</h2>
          <div className="space-y-4 text-muted text-sm leading-relaxed">
            <div className="flex gap-4">
              <span className="text-accent-light/30 text-2xl font-black">1</span>
              <p>
                <strong className="text-foreground">Sign up.</strong> Email us at{" "}
                <a
                  href="mailto:hello@amdrautomate.ai"
                  className="text-accent-light underline underline-offset-2"
                >
                  hello@amdrautomate.ai
                </a>{" "}
                or DM on Instagram{" "}
                <a
                  href="https://instagram.com/amdrautomate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light underline underline-offset-2"
                >
                  @amdrautomate
                </a>{" "}
                and we&apos;ll send you a unique referral link.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-accent-light/30 text-2xl font-black">2</span>
              <p>
                <strong className="text-foreground">Share your link.</strong> Send
                it to founders, execs, or business owners who could benefit from
                a private AI assistant.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-accent-light/30 text-2xl font-black">3</span>
              <p>
                <strong className="text-foreground">Get paid.</strong> When your
                referral books and pays, you earn 30% of the deployment fee.
                Payouts via PayPal or bank transfer within 14 days of payment.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-2xl border border-white/[0.06] p-8 text-left mb-10">
          <h2 className="font-bold text-lg mb-4">Earnings Examples</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-muted">
              <span>Starter ($1,497) referral</span>
              <span className="text-foreground font-bold">You earn $449</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Growth ($2,997) referral</span>
              <span className="text-foreground font-bold">You earn $899</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Full Concierge ($4,997) referral</span>
              <span className="text-foreground font-bold">You earn $1,499</span>
            </div>
          </div>
        </div>

        <p className="text-muted text-sm mb-8">
          Ready to join? Email{" "}
          <a href="mailto:hello@amdrautomate.ai" className="text-accent-light underline underline-offset-2">
            hello@amdrautomate.ai
          </a>{" "}
          or DM{" "}
          <a
            href="https://instagram.com/amdrautomate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-light underline underline-offset-2"
          >
            @amdrautomate
          </a>{" "}
          on Instagram and we&apos;ll send your unique referral link.
        </p>
      </div>
    </div>
  );
}
