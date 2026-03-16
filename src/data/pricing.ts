export interface Tier {
  id: string;
  name: string;
  price: string;
  suffix?: string;
  description: string;
  features: string[];
  badge?: string;
}

export const TIERS: Tier[] = [
  {
    id: "quickdeploy",
    name: "QuickDeploy",
    price: "$497",
    description: "Your first AI agent, live on a hardened cloud server in under 24 hours. Ideal for solo founders ready to test the waters.",
    features: [
      "Cloud VPS deployed + security hardened",
      "Email + calendar connected",
      "1 integration of your choice",
      "7-day direct support (Slack or WhatsApp)",
      "Handoff documentation",
    ],
  },
  {
    id: "turnkey",
    name: "TurnKey",
    price: "$1,497",
    badge: "Most Popular",
    description: "The full done-for-you package. Your AI agent configured for your business, not a generic install. Built for teams of 2–15.",
    features: [
      "Everything in QuickDeploy",
      "3 custom automation workflows",
      "CRM or project tool integration (HubSpot, Notion, etc.)",
      "Team onboarding session (up to 5 users)",
      "30-day direct support + check-in calls",
    ],
  },
  {
    id: "concierge",
    name: "Concierge",
    price: "$2,997",
    description: "White-glove deployment with custom agents, on-site option, and hands-on executive training. For teams that want it done right the first time.",
    features: [
      "Everything in TurnKey",
      "Up to 6 custom workflows",
      "On-site setup available (Atlanta, Miami, Kingston)",
      "2 purpose-built AI agents (Sales, Ops, Finance, etc.)",
      "Executive 1-on-1 training",
      "60-day support + monthly strategy calls",
    ],
  },
];

export const ADDONS = [
  { name: "Additional AI agent", price: "+$997", note: "Sales, Finance, Ops — each role gets its own agent" },
  { name: "Caribbean on-site deployment", price: "+$1,500", note: "Jamaica, Bahamas, Trinidad, Barbados — we fly to you" },
  { name: "Additional workflow", price: "+$297", note: "New automation added after initial setup" },
  { name: "Extra tool integration", price: "+$197", note: "Connect another app to your agent" },
];

export interface Careplan {
  name: string;
  price: string;
  description: string;
}

export const MANAGED_CARE: Careplan[] = [
  {
    name: "ClawCare Lite",
    price: "$147/mo",
    description: "Monitoring, updates, 2 support tickets/month, uptime guarantee",
  },
  {
    name: "ClawCare Pro",
    price: "$297/mo",
    description: "Everything in Lite + 1 new workflow/month, priority support, monthly optimization report",
  },
  {
    name: "Fractional AI Lead",
    price: "$1,497/mo",
    description: "8 hrs/month strategic AI consulting, agent development, quarterly AI roadmap for your business",
  },
];

export const CALENDLY_URL = "https://calendly.com/amdrautomate/deployclaw";
