import { Metadata } from "next";
import { CALENDLY_URL } from "@/data/pricing";

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
          Earn 20% from every sale you refer.
        </p>

        <div className="bg-surface rounded-2xl border border-white/[0.06] p-8 text-left mb-10">
          <h2 className="font-bold text-lg mb-4">How It Works</h2>
          <div className="space-y-4 text-muted text-sm leading-relaxed">
            <div className="flex gap-4">
              <span className="text-accent-light/30 text-2xl font-black">1</span>
              <p>
                <strong className="text-foreground">Sign up.</strong> DM us on
                Instagram{" "}
                <a
                  href="https://instagram.com/amdrautomate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light underline underline-offset-2"
                >
                  @amdrautomate
                </a>{" "}
                or book a call to join the program. We&apos;ll set you up with a
                unique referral link.
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
                referral books and pays, you earn 20% of the deployment fee.
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
              <span className="text-foreground font-bold">You earn $299</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Growth ($2,997) referral</span>
              <span className="text-foreground font-bold">You earn $599</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Full Concierge ($4,997) referral</span>
              <span className="text-foreground font-bold">You earn $999</span>
            </div>
          </div>
        </div>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
        >
          Join the Affiliate Program &rarr;
        </a>

        <p className="text-muted/40 text-xs mt-6">
          Questions? DM{" "}
          <a
            href="https://instagram.com/amdrautomate"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            @amdrautomate
          </a>{" "}
          on Instagram
        </p>
      </div>
    </div>
  );
}
