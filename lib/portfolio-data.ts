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
  email: "contact@nawacraft.com",
  phone: "+977 1-5500000 / +977 9800000000",
  copyrightYear: 2026,
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "X (Twitter)", href: "https://x.com" },
  ],
};

// All 9 Founding Specialists
export const TEAM_MEMBERS = [
  {
    name: "Aayush Adhikari",
    role: "Frontend Engineer",
    expertise: "Builds fast, responsive web interfaces with fluid user experience.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Rohan Shrestha",
    role: "Backend Engineer",
    expertise: "Architects scalable distributed APIs and secure database pipelines.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Pooja Sharma",
    role: "UI/UX Designer",
    expertise: "Designs clean design systems and effortless user journeys.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Bibek Thapa",
    role: "Mobile Developer",
    expertise: "Delivers cross-platform iOS and Android apps with native performance.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Suman Joshi",
    role: "Product Developer",
    expertise: "Translates business problems into functional, tested product specs.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Kripa Maharjan",
    role: "Marketing Lead",
    expertise: "Drives product positioning, organic growth, and customer acquisition.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Anish Karki",
    role: "Business Development Officer",
    expertise: "Forges retail partnerships and scales enterprise client pipelines.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Prabin Tamang",
    role: "DevOps & Cloud Engineer",
    expertise: "Automates zero-downtime deployments and manages hardware telemetry.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
  },
  {
    name: "Sneha Basnet",
    role: "QA & Reliability Engineer",
    expertise: "Guarantees zero hardware synchronization errors and robust data security.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
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
