export interface Tier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  cta: string;
}

export const TIERS: Tier[] = [
  {
    id: "hosted",
    name: "Hosted Setup",
    price: "$3,000",
    description: "Managed VPS deployment — we host, harden + 14-day hypercare",
    badge: "Recommended",
    features: [
      "Cloud VPS provisioning & security hardening",
      "Composio OAuth middleware setup",
      "Email and calendar integration",
      "Up to 3 workflows",
      "Documentation + 14-day hypercare",
    ],
    cta: "Book Hosted Setup",
  },
  {
    id: "macmini-remote",
    name: "Mac Mini Setup",
    price: "$5,000",
    description: "Remote — iMessage integration + local hardware",
    features: [
      "Everything in Hosted Setup",
      "Mac Mini configuration (you provide or we source at cost)",
      "iMessage integration",
      "Network security audit",
      "30-day hypercare",
    ],
    cta: "Book Mac Mini Setup",
  },
  {
    id: "macmini-onsite",
    name: "Mac Mini In-Person",
    price: "$6,000",
    description: "Atlanta, Miami, or Kingston — on-site setup + iMessage",
    features: [
      "Everything in Mac Mini Setup",
      "In-person deployment & team training",
      "Executive briefing for leadership",
      "Network & security walkthrough",
      "60-day hypercare",
    ],
    highlight: true,
    cta: "Book In-Person Setup",
  },
];

export const CLAWCARE: Tier = {
  id: "clawcare",
  name: "Managed Care",
  price: "$497",
  description: "Ongoing monitoring, updates, and priority support. We don't just deploy and disappear.",
  features: [
    "24/7 system monitoring",
    "Automatic OpenClaw updates",
    "Priority support (< 2hr response)",
    "Monthly performance reports",
    "Quarterly strategy calls",
  ],
  cta: "Add Managed Care",
};

export const CALENDLY_URL = "https://calendly.com/amdrautomate/deployclaw";
