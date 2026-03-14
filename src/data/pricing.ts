export interface Tier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  cta: string;
}

export const TIERS: Tier[] = [
  {
    id: "remote",
    name: "Remote Deploy",
    price: "$3,997",
    description: "We ship a pre-configured Mac Mini to your door and set everything up remotely.",
    features: [
      "Mac Mini with OpenClaw pre-installed",
      "48-hour remote deployment",
      "Video call onboarding session",
      "30-day post-deploy support",
      "Ships anywhere in the US & Caribbean",
    ],
    cta: "Book Remote Deploy",
  },
  {
    id: "onsite",
    name: "On-Site Deploy",
    price: "$4,997",
    description: "We come to your office and deploy OpenClaw in person. Hands-on setup and training.",
    features: [
      "Everything in Remote Deploy",
      "In-person setup & configuration",
      "Team training session (up to 10 people)",
      "Network security audit",
      "60-day post-deploy support",
    ],
    highlight: true,
    badge: "Most Popular",
    cta: "Book On-Site Deploy",
  },
  {
    id: "island",
    name: "Island Deploy",
    price: "$5,997",
    description: "Full white-glove deployment across the Caribbean. We fly to you.",
    features: [
      "Everything in On-Site Deploy",
      "Caribbean on-site deployment",
      "JA, Bahamas, Cayman, TT, Barbados, Bermuda",
      "Executive briefing for leadership",
      "90-day post-deploy support",
    ],
    cta: "Book Island Deploy",
  },
];

export const CLAWCARE: Tier = {
  id: "clawcare",
  name: "ClawCare",
  price: "$497",
  period: "/mo",
  description: "Ongoing monitoring, updates, and priority support. We don't just deploy and disappear.",
  features: [
    "24/7 system monitoring",
    "Automatic OpenClaw updates",
    "Priority support (< 2hr response)",
    "Monthly performance reports",
    "Quarterly strategy calls",
  ],
  cta: "Add ClawCare",
};

export const CALENDLY_URL = "https://calendly.com/amdrautomate/deployclaw";
