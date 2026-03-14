import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CityPage } from "@/components/CityPage";

interface CityData {
  name: string;
  region: string;
  tag: string;
  description: string;
  highlights: string[];
}

const CITIES: Record<string, CityData> = {
  atlanta: {
    name: "Atlanta, GA",
    region: "East Coast",
    tag: "In-person & remote",
    description:
      "On-site OpenClaw deployment in the Atlanta metro area. We come to your office in Buckhead, Midtown, or anywhere in the metro — deploy your AI assistant, train your team, and go live same day.",
    highlights: [
      "Same-day in-person setup anywhere in Atlanta metro",
      "Team training at your office (up to 10 people)",
      "Network security audit included",
      "60-day post-deploy hypercare",
      "Ongoing Managed Care available",
    ],
  },
  miami: {
    name: "Miami, FL",
    region: "East Coast",
    tag: "In-person & remote",
    description:
      "On-site OpenClaw deployment across South Florida. From Brickell to Coral Gables, we set up your AI assistant in person, harden security, and get your team productive in under 48 hours.",
    highlights: [
      "In-person setup across South Florida",
      "Bilingual support (English & Spanish)",
      "LATAM-connected teams welcome",
      "60-day post-deploy hypercare",
      "Ongoing Managed Care available",
    ],
  },
  kingston: {
    name: "Kingston, Jamaica",
    region: "Caribbean",
    tag: "In-person & remote",
    description:
      "The only OpenClaw deployment service with on-the-ground presence in Jamaica. We fly to Kingston (or Montego Bay) and deploy your private AI assistant with full security hardening.",
    highlights: [
      "On-site deployment anywhere in Jamaica",
      "Caribbean business context built in",
      "First and only OpenClaw deployer in the region",
      "90-day post-deploy hypercare",
      "Ongoing Managed Care available",
    ],
  },
};

const VALID_CITIES = Object.keys(CITIES);

export function generateStaticParams() {
  return VALID_CITIES.map((city) => ({ city }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  // Note: generateMetadata receives params as a Promise in Next.js 15+
  return params.then(({ city }) => {
    const data = CITIES[city];
    if (!data) return { title: "DeployClaw" };
    return {
      title: `OpenClaw Deployment in ${data.name} | DeployClaw`,
      description: data.description,
      openGraph: {
        title: `OpenClaw Deployment in ${data.name} | DeployClaw`,
        description: data.description,
      },
    };
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = CITIES[city];
  if (!data) notFound();

  return <CityPage city={data.name} data={data} />;
}
