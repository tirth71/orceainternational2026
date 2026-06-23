export type Division = {
  slug: string;
  name: string;
  short: string;
  description: string;
  services: string[];
  href: string;
  icon: string;
};

export const divisions: Division[] = [
  {
    slug: "academy",
    name: "ORCEA International Academy",
    short: "Academy",
    description: "Professional online & offline import-export training institute.",
    services: [
      "Import Export Courses",
      "Export Documentation Training",
      "International Trade Training",
      "Export Business Setup Training",
      "Agriculture Export Programs",
      "Corporate Workshops",
      "One-to-One Mentorship",
    ],
    href: "/academy",
    icon: "GraduationCap",
  },
  {
    slug: "trade-intelligence",
    name: "ORCEA Trade Intelligence",
    short: "Trade Intelligence",
    description: "Global market research & trade data solutions.",
    services: [
      "Export Import Data",
      "Buyer Database",
      "Competitor Analysis",
      "Market Research",
      "Trade Reports",
      "Industry Intelligence",
    ],
    href: "/trade-intelligence",
    icon: "BarChart3",
  },
  {
    slug: "consulting",
    name: "ORCEA Global Consulting",
    short: "Consulting",
    description: "International business consulting services.",
    services: [
      "Export Consulting",
      "Market Entry Strategy",
      "Business Registration Support",
      "Export Documentation Guidance",
      "International Expansion Consulting",
    ],
    href: "/consulting",
    icon: "Briefcase",
  },
  {
    slug: "logistics",
    name: "ORCEA Logistics Solutions",
    short: "Logistics",
    description: "Global logistics & supply chain management.",
    services: [
      "Sea Freight",
      "Air Freight",
      "Customs Clearance",
      "Warehousing",
      "Cargo Management",
      "International Shipping",
    ],
    href: "/logistics",
    icon: "Ship",
  },
  {
    slug: "digital",
    name: "ORCEA Digital Marketing",
    short: "Digital Marketing",
    description: "Business growth & digital marketing agency.",
    services: [
      "Website Development",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Lead Generation",
    ],
    href: "/digital",
    icon: "Megaphone",
  },
  {
    slug: "exports",
    name: "ORCEA Export Import Division",
    short: "Exports",
    description: "Export of agricultural & industrial products worldwide.",
    services: [
      "Spices",
      "Pulses",
      "Rice",
      "Wheat",
      "Fresh Vegetables",
      "Fruits",
      "Dehydrated Products",
      "Oil Seeds",
    ],
    href: "/exports",
    icon: "Wheat",
  },
];

export const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100+", label: "Consulting Clients" },
  { value: "50+", label: "Countries Served" },
  { value: "10+", label: "Years of Experience" },
];

export const countries = [
  "USA", "UK", "UAE", "Germany", "Australia", "Canada", "Singapore", "Saudi Arabia",
];
