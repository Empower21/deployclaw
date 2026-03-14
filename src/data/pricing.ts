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
    id: "starter",
    name: "Starter",
    price: "$1,497",
    description: "For solo founders and small teams (1–10 people). Get your first AI agent live on a cloud server with core integrations.",
    features: [
      "Hardened cloud VPS deployment",
      "Email + calendar wired on day one",
      "1 custom automation workflow",
      "Documentation + video walkthrough",
      "14-day direct support via Slack or WhatsApp",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$2,997",
    badge: "Best Value",
    description: "For growing teams (10–25 people) that need multi-department coverage — sales, ops, and leadership each get their own workflows.",
    features: [
      "Everything in Starter",
      "Up to 3 custom automation workflows",
      "CRM or project tool integration (HubSpot, Notion, etc.)",
      "Team onboarding session (up to 5 users)",
      "30-day direct support",
    ],
  },
  {
    id: "concierge",
    name: "Full Concierge",
    price: "$4,997",
    suffix: "+",
    description: "For teams that want the full white-glove experience — on-site deployment, custom AI agents, and hands-on executive training.",
    features: [
      "Everything in Growth",
      "Up to 6 custom workflows",
      "On-site setup in Atlanta or Miami included",
      "Custom AI agent development (up to 2 agents)",
      "Executive 1-on-1 training",
      "60-day direct support + monthly strategy calls",
    ],
  },
];

export const ADDONS = [
  { name: "Additional AI agent", price: "$1,497", note: "CEO, Sales, Finance — each identity gets its own agent" },
  { name: "Caribbean on-site deployment", price: "+$2,500", note: "Jamaica, Bahamas, Trinidad, Barbados — we fly to you" },
  { name: "Additional workflow", price: "$497", note: "New automation after initial setup" },
  { name: "Extra tool integration", price: "$297", note: "Connect another app to your agent" },
];

export interface Careplan {
  name: string;
  price: string;
  description: string;
}

export const MANAGED_CARE: Careplan[] = [
  {
    name: "Essential",
    price: "$197/mo",
    description: "Monitoring, updates, 2 support tickets/month, uptime guarantee",
  },
  {
    name: "Professional",
    price: "$497/mo",
    description: "Everything in Essential + 1 new workflow/month, priority support, monthly optimization report",
  },
  {
    name: "Fractional AI Lead",
    price: "$1,997/mo",
    description: "8 hrs/month strategic AI consulting, new agent development, quarterly roadmap",
  },
];

export const CALENDLY_URL = "https://calendly.com/amdrautomate/deployclaw";
