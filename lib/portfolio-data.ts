import {
  Scale,
  Layers,
  BarChart3,
  TrendingUp,
  Trash2,
  Store,
  Code2,
  Smartphone,
  PenTool,
  Cpu,
  Rocket,
  Megaphone,
} from "lucide-react";

// Company Metadata
export const COMPANY_INFO = {
  name: "Nawacraft Pvt. Ltd.",
  tagline: "We craft software that runs businesses.",
  location: "Mahalaxmisthan, Lalitpur, Nepal",
  email: "nawacraftsolution@gmail.com",
  // Each number doubles as a WhatsApp / Viber contact.
  phones: [
    { display: "986-0675235", tel: "+9779860675235", whatsapp: "9779860675235" },
    { display: "981-7306165", tel: "+9779817306165", whatsapp: "9779817306165" },
  ],
  copyrightYear: 2026,
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "X (Twitter)", href: "https://x.com" },
  ],
};

// Founding Team
export const TEAM_MEMBERS: {
  name: string;
  role: string;
  expertise: string;
  image?: string;
}[] = [
    {
      name: "Sudip Bhandari",
      role: "Senior Software Engineer (Backend)",
      expertise: "Architects scalable distributed APIs and secure database pipelines.",
      image: "/team/sudip-bhandari.png",
    },
    {
      name: "Aashish Khanal",
      role: "Fullstack Engineer",
      expertise: "Builds end-to-end features across frontend and backend with equal depth.",
      image: "/team/aashish-khanal.png",
    },
    {
      name: "Basanta Sunuwar",
      role: "Project Manager",
      expertise: "Keeps delivery on schedule and client requirements translated into execution.",
      image: "/team/basanta-sunuwar.png",
    },
    {
      name: "Prakash Tamu",
      role: "Fullstack Engineer",
      expertise: "Ships reliable, tested features across the full product stack.",
      image: "/team/prakash-tamu.png",
    },
    {
      name: "Sahil Ramjali",
      role: "Mobile Developer",
      expertise: "Delivers cross-platform iOS and Android apps with native performance.",
      image: "/team/sahil-ramjali.png",
    },
    {
      name: "Ram Katwal",
      role: "UI/UX Designer",
      expertise: "Designs clean design systems and effortless user journeys.",
      image: "/team/ram-katwal.png",
    },
    {
      name: "Anup Acharya",
      role: "Business Development Manager",
      expertise: "Drives sales and partnership growth across the Nepalese market.",
      // No photo yet — TeamSection falls back to an initials avatar.
    },
  ];

// 6 Core Services
export const SERVICES = [
  {
    title: "Web Development",
    desc: "Fast, accessible web applications engineered for seamless customer self-service.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    desc: "Reliable iOS and Android apps connected in real time to your backend.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    desc: "Calm, deliberate interfaces built around how people actually work.",
    icon: PenTool,
  },
  {
    title: "Custom Software Systems",
    desc: "Tailored software that automates manual bookkeeping, stock, and shop operations.",
    icon: Cpu,
  },
  {
    title: "Product Development",
    desc: "End-to-end execution from initial concept validation to production launch.",
    icon: Rocket,
  },
  {
    title: "Digital Marketing",
    desc: "Targeted campaigns and clear positioning that convert visitors into buyers.",
    icon: Megaphone,
  },
];

// Flagship Meat Management System Features
export const FLAGSHIP_FEATURES = [
  { text: "Direct machine-to-server weighing", icon: Scale },
  { text: "Automatic inventory management", icon: Layers },
  { text: "Live sales management", icon: BarChart3 },
  { text: "Smart sales forecasting", icon: TrendingUp },
  { text: "Actionable waste tracking", icon: Trash2 },
  { text: "Per-shop dashboard and control", icon: Store },
];
