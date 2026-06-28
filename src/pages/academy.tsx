
import {
  Video,
  FileText,
  Award,
  Infinity as InfinityIcon,
  BookOpen,
  Users,
  GraduationCap,
  Briefcase,
  Factory,
  UserCheck,
  Rocket,
  Home as HomeIcon,
  ArrowRight,
  Download,
  MessageCircle,
  CheckCircle2,
  Globe2,
  ShoppingCart,
  Search,
  Wheat,
  Ship,
  Megaphone,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
// import { InquiryForm } from "@/components/site/InquiryForm";
import academyHero from "@/assets/academy-hero.jpg";
     import { CheckCircle, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const learningPaths = [
  {
    type: "Online Course",
    desc: "Learn from anywhere with an internet connection",
    price: "₹10,500",
    original: "₹15,500",
    cta: "Start Online Learning",
    color: "border-accent",
    badge: "Most Popular",
    schedule: { day: "Every Sunday", duration: "4 hours", total: "Duration: 6 Sundays" },
    features: [
      "Live Online Lectures on Zoom",
      "Study Materials",
      "Copy of Document Templates",
      "Buyers Communication Templates",
      "Online Mentor Support",
      "Lifetime EXIM Updates/News",
      "Certificate of Completion",
      "Post-course mentorship to guide your first export",
      "Free Lifetime Helpdesk Support on Email",
      "Guidance for Job in Export Import Industry",
      "Free Assistance for Website & Digital Marketing",
      "Free Latest Updates on Export Import",
      "Live Searching Exporter-Importer (Buyers) Data",
    ],
  },
  {
    type: "Offline Course",
    desc: "Intensive classroom training with hands-on practice",
    price: "₹15,000",
    original: "₹20,000",
    cta: "Join Classroom Training",
    color: "border-primary",
    badge: "Hands-On",
    schedule: { day: "Every Sunday", duration: "4 hours", total: "Duration: 6 Sundays" },
    features: [
      "Face to Face Classroom Training with Expert Faculty",
      "Printed Study Materials & Document Kits",
      "Buyers Communication Practice Sessions",
      "Mock Export-Import Documentation Practice",
      "Personal Mentor Support",
      "Lifetime EXIM Updates",
      "Certificate of Completion",
      "Post-course mentorship to guide your first export",
      "Free Lifetime Helpdesk Support on Email",
      "Guidance for Job in Export Import Industry",
      "Free Assistance for Website & Digital Marketing",
      "Free Latest Updates on Export-Import",
      "Live Searching Exporter-Importer (Buyers) Data",
    ],
  },
];


// export const Route = createFileRoute("/academy")({
//   head: () => ({
//     meta: [
//       { title: "ORCEA International Academy — Import Export Training Institute" },
//       {
//         name: "description",
//         content:
//           "Learn import export business from industry experts. Live classes, certification, buyer-finding, documentation, logistics & global marketing training — online & offline.",
//       },
//       { property: "og:title", content: "ORCEA International Academy" },
//       {
//         property: "og:description",
//         content:
//           "India's premium import-export training institute. 1000+ students trained, 100+ export startups created, 25+ countries connected.",
//       },
//       { property: "og:image", content: academyHero },
//       { property: "og:url", content: "/academy" },
//     ],
//     links: [{ rel: "canonical", href: "/academy" }],
//   }),
//   component: Academy,
// });

const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "100+", label: "Export Startups Created" },
  { value: "25+", label: "Countries Connected" },
  { value: "500+", label: "Business Consultations" },
];

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    points: ["Career in Export Industry", "International Business Opportunities", "Job-Oriented Training"],
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    points: ["Expand Business Globally", "Find International Buyers", "Increase Revenue"],
  },
  {
    icon: Factory,
    title: "Manufacturers",
    points: ["Export Products Worldwide", "Market Expansion", "Export Documentation"],
  },
  {
    icon: UserCheck,
    title: "Working Professionals",
    points: ["Career Growth", "Logistics & Supply Chain Knowledge", "Export Management Skills"],
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    points: ["Start Export Business", "Build Global Brand", "Learn Trade Operations"],
  },
  {
    icon: HomeIcon,
    title: "Housewives",
    points: ["Home-Based Export Business", "Flexible Business Opportunities", "Step-by-step mentorship"],
  },
];


const features = [
  { icon: Video, title: "Live Online Classes", desc: "Interactive Zoom sessions with industry experts." },
  { icon: Users, title: "Offline Classroom Training", desc: "Face-to-face learning at our Mumbai centre." },
  { icon: BookOpen, title: "Recorded Sessions", desc: "Lifetime access to every live class recording." },
  { icon: FileText, title: "Study Materials", desc: "PDF notes, templates & documentation formats." },
  { icon: ClipboardCheck, title: "Practical Assignments", desc: "Hands-on work on real business cases." },
  { icon: UserCheck, title: "Mentor Support", desc: "Expert guidance & lifetime community access." },
  { icon: Globe2, title: "Networking", desc: "Connect with exporters across 25+ countries." },
  { icon: Award, title: "Certification", desc: "Industry-recognised course completion certificate." },
  { icon: InfinityIcon, title: "Lifetime Access", desc: "All updates and new modules — forever free." },
];

const curriculum = [
  "Global Trade Foundation",
  "Business Setup & Compliance",
  "Product Selection",
  "Market Research",
  "Buyer Finding",
  "International Marketing",
  "Export Costing",
  "Pricing Strategy",
  "Shipping & Logistics",
  "Documentation",
  "Payment Terms & Finance",
  "Government Schemes & Incentives",
];

const outcomes = [
  "Start your own Export Business",
  "Find International Buyers",
  "Handle Export Documentation",
  "Manage Logistics end-to-end",
  "Negotiate International Deals",
  "Build Export Marketing Strategy",
  "Scale Business Globally",
];

const testimonials = [
  {
    name: "Rahul Mehta",
    city: "Ahmedabad",
    type: "Spices Exporter",
    quote: "Within 3 months of completing the program, I shipped my first container of turmeric to Dubai.",
    achievement: "First International Buyer",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    type: "Home-Based Entrepreneur",
    quote: "ORCEA helped me start a handicraft export business right from my home. The mentorship was unmatched.",
    achievement: "Started Export Business",
  },
  {
    name: "Arjun Patel",
    city: "Surat",
    type: "Textile Manufacturer",
    quote: "Documentation training alone saved us months of trial and error. We now export to 6 countries.",
    achievement: "Expanded Manufacturing",
  },
  {
    name: "Neha Singh",
    city: "Delhi",
    type: "MBA Graduate",
    quote: "Got placed as Export Executive at a leading agri-export company straight after the foundation course.",
    achievement: "Secured Export Job",
  },
];

// const careers = [
//   "Export Executive",
//   "Import Executive",
//   "Documentation Executive",
//   "Logistics Coordinator",
//   "Supply Chain Executive",
//   "International Marketing Executive",
//   "Export Manager",
//   "Trade Analyst",
// ];

// const resources = [
//   "Complete Export Guide",
//   "Export Readiness Checklist",
//   "Documentation Templates",
//   "Product Selection Guide",
//   "Buyer Search Playbook",
//   "Export Cost Calculator",
//   "Country Market Reports",
// ];
const careerProfiles = [
  {
    profile: "Students & Fresh Graduates",
    color: "text-blue-600 bg-blue-50 border-blue-100",
    benefits: [
      "Skip traditional job hunting — Enter the high-growth global trade sector directly",
      "Master real-world business skills that universities don't teach",
      "Land lucrative positions as Export/Import Executive or Trade Finance Assistant",
      "Entry-level positions typically offer ₹3–6 LPA for course graduates",
    ],
  },
  {
    profile: "Working Professionals",
    color: "text-purple-600 bg-purple-50 border-purple-100",
    benefits: [
      "Weekend learning — Flexible schedule that fits your current job",
      "Become a logistics, customs & compliance specialist in high demand",
      "Double your income potential with trade finance & international sales expertise",
      "Position yourself for senior management roles in global companies",
    ],
  },
  {
    profile: "Business Owners & Entrepreneurs",
    color: "text-amber-600 bg-amber-50 border-amber-100",
    benefits: [
      "10x your market reach — Access 195+ countries as potential customers",
      "Reduce financing costs using government export incentives & subsidies",
      "Reduce dependency on domestic market fluctuations",
      "Build a recession-proof business with global diversification",
    ],
  },
  {
    profile: "Homemakers & Aspiring Entrepreneurs",
    color: "text-green-600 bg-green-50 border-green-100",
    benefits: [
      "Start with zero investment — Build a global business from your laptop",
      "No experience needed — We teach you everything from scratch",
      "Achieve financial independence while maintaining family priorities",
      "Earn ₹25,000–75,000/month working flexible hours",
    ],
  },
];

const careerPaths = [
  {
    category: "Corporate Careers",
    icon: Briefcase,
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    salary: "₹4–25 LPA",
    opportunities: [
      "Export/Import Executive — Lead international trade operations",
      "Documentation Specialist — High-demand compliance expert",
      "Logistics Coordinator — Manage global supply chains",
      "Customs Compliance Officer — Navigate complex regulations",
      "Trade Finance Executive — Handle million-dollar transactions",
      "International Marketing Manager — Build global brand presence",
      "Export Manager — Drive company's international expansion",
      "Freight Forwarder — Own a critical link in global trade",
      "Earn up to ₹25 LPA + International Opportunities",
    ],
  },
  {
    category: "Build Your Own Empire",
    icon: TrendingUp,
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    salary: "Unlimited",
    opportunities: [
      "Launch your export-import venture with minimal startup costs",
      "Master compliance & documentation to avoid costly mistakes",
      "Connect with verified global buyers using our proven methods",
      "Build efficient logistics networks for maximum profitability",
      "Scale to ₹1+ crore annual revenue within 2–3 years",
    ],
  },
  {
    category: "Leadership & Consulting",
    icon: Award,
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    salary: "₹12–50 LPA",
    opportunities: [
      "Trade Analyst — Shape global trade policies and decisions",
      "Supply Chain Manager — Optimize multi-million dollar operations",
      "International Trade Consultant — Command ₹2,000–5,000/hour rates",
      "Indian Trade Service (ITS) — Prestigious government career",
      "DGFT & Policy Roles — Drive India's export strategy",
    ],
  },
  {
    category: "International Opportunities",
    icon: Globe2,
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600",
    salary: "Global Pay",
    opportunities: [
      "Work abroad in UAE, Singapore, Canada, Germany, SE Asia, Africa",
      "Earn international salaries & tax benefits",
      "Build a powerful global professional network",
      "Get visa sponsorship from international employers seeking your skills",
    ],
  },
];


const faqs = [
  { q: "Do I need prior experience?", a: "No. Our foundation program is designed for absolute beginners." },
  { q: "Is this suitable for students?", a: "Yes — students get job-oriented training and career placement support." },
  { q: "Is certification provided?", a: "Yes. You receive an industry-recognised course completion certificate." },
  { q: "Online or Offline?", a: "Both. Choose live online cohorts or classroom training at our Mumbai centre." },
  { q: "Will I learn buyer finding?", a: "Yes — dedicated masterclasses cover importer search, verification and follow-up." },
  { q: "Will I get mentor support?", a: "Yes. Lifetime community access plus one-to-one mentor sessions." },
  { q: "Can I start my own export business?", a: "Absolutely — many of our alumni launch within 3–6 months." },
];

export default function Academy() {
   useEffect(() => {
      document.title = "Academy | ORCEA International";
    }, []);
  return (
    <>
      {/* HERO with background image */}
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <img
          src={academyHero}
          alt="ORCEA International Academy classroom"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
        <div className="container-x relative mx-auto max-w-7xl py-24 md:py-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            ORCEA International Academy
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Learn Import Export Business <span className="text-gradient-gold">From Industry Experts</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Build your career, start your export business, find international buyers, master documentation, and learn
            real-world global trade from experienced mentors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold"
            >
              Enroll Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#brochure"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-white/15"
            >
              <Download className="h-4 w-4" /> Download Brochure
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> Book Free Consultation
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="font-display text-3xl font-extrabold text-gradient-gold md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



 {/* PROGRAMS */}
 

    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Education Division</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Choose Your Learning Path</h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base">
            Select the format that best fits your schedule and learning preferences
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {learningPaths.map((plan, idx) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`relative rounded-3xl border-2 ${plan.color} bg-background flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {plan.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-lg font-extrabold text-foreground">{plan.type}</h3>
                  <p className="text-sm text-primary mt-0.5">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 bg-muted rounded-2xl px-4 py-3 mb-5">
                  <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{plan.original}</span>
                  <span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    Save ₹5,000
                  </span>
                </div>

                {/* Schedule */}
                <div className="bg-muted/60 rounded-2xl px-4 py-3 mb-5">
                  <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Schedule</p>
                  <div className="space-y-1.5">
                    {[
                      { icon: Calendar, text: plan.schedule.day },
                      { icon: Clock,    text: plan.schedule.duration },
                      { icon: BookOpen, text: plan.schedule.total },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="mt-auto w-full inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 hover:scale-[1.02] active:scale-100"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          🎓 Both courses include a Certificate of Completion & lifetime helpdesk support.{" "}
          <Link to="/contact" className="text-primary font-medium hover:underline">
            Have questions? Contact us →
          </Link>
        </motion.p>

      </div>
    </section>



      {/* WHO SHOULD JOIN */}
      <Section>
        <SectionHeading
          eyebrow="Who Should Join"
          title="Built for every kind of global trade ambition."
          description="From first-year students to seasoned manufacturers — our programs adapt to your starting point and your goals."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15">
                <a.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{a.title}</h3>
              <ul className="mt-3 space-y-2">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

     



<section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Course Benefits
          </p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Transform Your Career in Global Trade
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Discover the life-changing benefits of our export-import course and join thousands who've launched successful careers.
          </p>
        </motion.div>

        {/* ── Section 1: Designed For Your Success ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm font-bold text-foreground uppercase tracking-widest px-4 py-2 rounded-full border border-border bg-muted">
              Designed for Your Success Journey
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-[220px_1fr] gap-0 rounded-t-2xl overflow-hidden border border-border">
            <div className="bg-primary px-6 py-3">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Profile</p>
            </div>
            <div className="bg-primary px-6 py-3 border-l border-white/20">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Key Benefits</p>
            </div>
          </div>

          <div className="border border-border border-t-0 rounded-b-2xl overflow-hidden divide-y divide-border">
            {careerProfiles.map((row, i) => (
              <motion.div
                key={row.profile}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid md:grid-cols-[220px_1fr] gap-0 hover:bg-muted/40 transition-colors"
              >
                {/* Profile cell */}
                <div className={`px-6 py-5 flex items-start gap-3 border-r border-border`}>
                  <div className={`mt-0.5 h-2.5 w-2.5 rounded-full shrink-0 ${row.color.split(" ")[0].replace("text-", "bg-")}`} />
                  <p className="text-sm font-bold text-foreground leading-snug">{row.profile}</p>
                </div>
                {/* Benefits cell */}
                <div className="px-6 py-5">
                  <ul className="space-y-2">
                    {row.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Section 2: Career Paths ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm font-bold text-foreground uppercase tracking-widest px-4 py-2 rounded-full border border-border bg-muted">
              High-Paying Career Paths That Await You
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-[200px_1fr_120px] gap-0 rounded-t-2xl overflow-hidden border border-border">
            <div className="bg-primary px-6 py-3">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Category</p>
            </div>
            <div className="bg-primary px-6 py-3 border-l border-white/20">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Opportunities</p>
            </div>
            <div className="bg-primary px-6 py-3 border-l border-white/20">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Earning</p>
            </div>
          </div>

          <div className="border border-border border-t-0 rounded-b-2xl overflow-hidden divide-y divide-border">
            {careerPaths.map((path, i) => (
              <motion.div
                key={path.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-[200px_1fr_120px] hover:bg-muted/40 transition-colors"
              >
                {/* Category */}
                <div className="px-6 py-5 border-r border-border flex flex-col justify-start gap-3">
                  <div className={`w-fit rounded-xl p-2 border ${path.color}`}>
                    <path.icon className={`h-5 w-5 ${path.iconColor}`} />
                  </div>
                  <p className="text-sm font-bold text-foreground leading-snug">{path.category}</p>
                </div>
                {/* Opportunities */}
                <div className="px-6 py-5 border-r border-border">
                  <ul className="space-y-1.5">
                    {path.opportunities.map((o, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                        <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Earning */}
                <div className="px-6 py-5 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-base font-extrabold text-primary">{path.salary}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">potential</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            🎓 Join 1000+ professionals who transformed their careers with our EXIM course
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 text-sm font-semibold text-accent-foreground shadow-gold transition hover:scale-[1.03]"
          >
            Enroll Now & Transform Your Career
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

      </div>
    </section>




      {/* COURSE FEATURES */}
      <Section>
        <SectionHeading eyebrow="Course Features" title="Everything you need to learn, apply and grow." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15">
                <f.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-primary">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>






      {/* CURRICULUM & OUTCOMES */}
      <Section surface>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Master Curriculum" title="12 modules. End-to-end international trade." />
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {curriculum.map((m, i) => (
                <li
                  key={m}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-secondary/10 font-display text-sm font-bold text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-primary">{m}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Learning Outcomes" title="What you'll be able to do." />
            <ul className="mt-8 space-y-3">
              {outcomes.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm font-semibold text-primary">{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/10 to-accent/10 p-6">
              <div className="font-display text-lg font-bold text-primary">Certification on completion</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Every graduate receives an ORCEA International Academy certificate — recognised by exporters,
                logistics firms and trade bodies across India.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeading eyebrow="Success Stories" title="Real students. Real export businesses." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full gradient-hero font-display text-lg font-bold text-primary-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-base font-bold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.city} · {t.type}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground/80">"{t.quote}"</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent-foreground">
                <Award className="h-3.5 w-3.5" /> {t.achievement}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CAREERS + FREE RESOURCES */}
      {/* <Section surface>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Career Opportunities" title="Roles our alumni land." />
            <div className="mt-8 flex flex-wrap gap-3">
              {careers.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-primary"
                >
                  <Briefcase className="h-4 w-4 text-secondary" />
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div id="brochure">
            <SectionHeading eyebrow="Free Resources" title="Download practical tools to get started." />
            <ul className="mt-8 grid gap-3">
              {resources.map((r) => (
                <li
                  key={r}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-semibold text-primary">{r}</span>
                  </div>
                  <a
                    href="#enroll"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:underline"
                  >
                    Download <Download className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section> */}

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions, answered." center />
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <span className="font-display text-base font-bold text-primary">{f.q}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/15 text-accent-foreground transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ENROLLMENT */}
      {/* <Section surface id="enroll">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact & Enrollment"
              title="Take the first step toward your export career."
              description="Tell us your goals — our advisor will reach out within one business day with the right program for you."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href="#brochure"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-primary hover:bg-muted"
              >
                <Download className="h-4 w-4" /> Download Brochure
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-display text-2xl font-bold text-primary">Enroll Now</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill the form — we'll share course details, fees and the next batch date.
            </p>
            <div className="mt-6">
              <InquiryForm
                subject="Academy Enrollment Inquiry"
                fields={["name", "email", "phone", "company", "message"]}
              />
            </div>
          </div>
        </div>
      </Section> */}
    </>
  );
}
