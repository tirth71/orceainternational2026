import { Link } from "react-router-dom";
import { DivisionLayout } from "@/components/DivisionLayout";
import { Section, SectionHeading } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { BarChart3, Users, LineChart, FileText, Search, Globe2, Target, TrendingUp, CheckCircle2, Quote, Database, Package, MapPin, Award, Building2, Layers, ShieldCheck, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

// export const Route = createFileRoute("/trade-intelligence")({
//   head: () => ({
//     meta: [
//       { title: "ORCEA Trade Intelligence — Global Trade Data & Research" },
//       { name: "description", content: "Data-driven insights for smarter global trade decisions — shipment data, verified buyers, market research and trade reports." },
//       { property: "og:title", content: "ORCEA Trade Intelligence" },
//       { property: "og:description", content: "Data-driven insights for smarter global trade decisions." },
//       { property: "og:url", content: "https://orcea-global-hub.lovable.app/trade-intelligence" },
//     ],
//     links: [{ rel: "canonical", href: "https://orcea-global-hub.lovable.app/trade-intelligence" }],
//   }),
//   component: TradeIntel,
// });

const serviceGroups = [
  {
    icon: Database,
    title: "Export–Import Data Intelligence",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    tag: "Core Service",
    desc: "Access real-time shipment data from 100+ countries — identify trade volumes, routes, and competitive pricing across any product category.",
    items: [
      "Global Shipment Data (HS Code level)",
      "Importer & Exporter Databases",
      "Product-Wise Trade Volume Analysis",
      "Country-Wise Import/Export Reports",
      "Customs Records & Bill of Lading Data",
      "Market Opportunity Gap Reports",
    ],
  },
  {
    icon: Users,
    title: "Buyer Discovery & Verification",
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600",
    tag: "High Demand",
    desc: "Stop cold-calling strangers. We source and verify genuine international buyers actively importing your exact product category right now.",
    items: [
      "Verified International Buyer Lists",
      "Direct Contact Research (Name + Email + Phone)",
      "Buyer Purchase Volume & Frequency",
      "Buyer Qualification by Category & Volume",
      "Market-Specific Curated Buyer Databases",
      "Lead Validation & De-duplication",
    ],
  },
  {
    icon: LineChart,
    title: "Market Research & Competitive Analysis",
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    tag: "Strategic",
    desc: "Know exactly which markets are growing, which competitors are winning, and where the price points are before you invest a single rupee.",
    items: [
      "Global Industry Trend Analysis",
      "Competitor Shipment Tracking",
      "Product Demand Forecasting",
      "Price Benchmarking Across Markets",
      "Emerging Market Identification",
      "Regulatory & Tariff Analysis",
    ],
  },
  {
    icon: FileText,
    title: "Trade Reports & Outlook",
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    tag: "Research",
    desc: "Professionally researched reports you can present to investors, banks, and partners — covering product outlooks, trade forecasts, and sector analysis.",
    items: [
      "Monthly Global Trade Summary Reports",
      "Product-Specific Export Reports",
      "Country Market Entry Reports",
      "Industry Outlook & Forecast Reports",
      "Trade Finance & Risk Analysis",
      "Annual Sector Intelligence Reports",
    ],
  },
];

const industries = [
  { name: "Agriculture & Agri-Commodities", icon: Package },
  { name: "Textiles & Garments",             icon: Layers   },
  { name: "Chemicals & Petrochemicals",      icon: Zap      },
  { name: "Food Products & FMCG",            icon: ShieldCheck },
  { name: "Engineering Goods",               icon: Building2 },
  { name: "Pharmaceuticals",                 icon: Award    },
  { name: "Metals & Minerals",               icon: Database  },
  { name: "Spices & Herbs",                  icon: Globe2   },
];

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Scoping",
    desc: "We define your target product (HS code level), destination markets, buyer profile, and competitive landscape you want mapped.",
    duration: "Day 1–2",
  },
  {
    icon: Database,
    step: "02",
    title: "Data Collection",
    desc: "We aggregate shipment data, customs records, importer databases, and live market signals from 100+ country sources.",
    duration: "Day 2–5",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Analysis & Modelling",
    desc: "Our analysts build trend models, competitor tracking maps, price benchmarks, and demand forecasts specific to your product.",
    duration: "Day 5–8",
  },
  {
    icon: FileText,
    step: "04",
    title: "Report Delivery",
    desc: "You receive an actionable intelligence report with verified buyer lists, pricing data, market rankings, and next-step recommendations.",
    duration: "Day 8–10",
  },
];

// const reports = [
//   { title: "India Spices Export Outlook 2026 — Top 15 Importing Countries",    tag: "Country Market",   pages: "48 pages" },
//   { title: "Basmati Rice: Verified Buyer Database — UAE, Saudi & UK",          tag: "Buyer Intelligence", pages: "32 pages" },
//   { title: "Global Pulses Trade Intelligence — Q1 2026 Forecast",              tag: "Industry Outlook",  pages: "56 pages" },
//   { title: "Sesame Seeds: Price Benchmarking & Competitor Shipment Analysis",  tag: "Competitive Intel", pages: "40 pages" },
// ];

const cases = [
  {
    client: "Agri Commodity Exporter, Gujarat",
    product: "Sesame Seeds & Groundnuts",
    result: "Identified 42 verified buyers across UAE & EU within 10 days. Client closed 3 Letters of Intent within 60 days of receiving the buyer list.",
    metric: "3 LOIs in 60 days",
    icon: Target,
  },
  {
    client: "Spice Manufacturer, Kerala",
    product: "Cardamom & Black Pepper",
    result: "Competitor shipment analysis revealed pricing gaps and untapped German & Polish buyers. Customer acquisition cost reduced by 38% within one quarter.",
    metric: "38% lower CAC",
    icon: TrendingUp,
  },
  {
    client: "Textile SME, Surat",
    product: "Synthetic Fabrics & Yarn",
    result: "Market entry report for East Africa identified 2 viable markets with low competition. Launched successfully into Ethiopia and Tanzania within 4 months.",
    metric: "2 new markets",
    icon: MapPin,
  },
];

const audience = [
  { label: "Exporters",            desc: "Find buyers, benchmark prices, track competitors."   },
  { label: "Manufacturers",        desc: "Identify new geographies and demand pockets."         },
  { label: "Importers",            desc: "Source suppliers and monitor pricing trends."         },
  { label: "Trade Investors",      desc: "Evaluate sectors and countries before committing."    },
  { label: "Startups",             desc: "Launch into export markets with data-backed plans."   },
  { label: "Business Consultants", desc: "Arm your clients with verified intelligence."         },
];

const testimonials = [
  {
    quote: "ORCEA's trade intelligence turned guesswork into a clear, actionable export roadmap. Within 90 days we had our first overseas customer.",
    author: "Founder",
    company: "Agri Commodities Export, Ahmedabad",
    stars: 5,
  },
  {
    quote: "The verified buyer lists alone paid for the entire engagement more than 10 times over. Every buyer had accurate contact details and was actively importing our category.",
    author: "Director",
    company: "Food Processing & Exports Co., Pune",
    stars: 5,
  },
];

const stats = [
  { value: "100+",  label: "Countries Covered"       },
  { value: "50K+",  label: "Verified Buyers Database" },
  { value: "10–14", label: "Day Delivery"             },
  { value: "500+",  label: "Reports Delivered"        },
];


export default function TradeIntelligence() {
  return (
    <DivisionLayout
      slug="trade-intelligence"
      heroTitle="Stop guessing. Start exporting with verified market intelligence."
      heroDescription="ORCEA Trade Intelligence gives exporters, manufacturers, and investors the shipment data, verified buyer lists, market research, and trade reports they need to make confident global decisions — delivered in 10–14 working days."
    >

      {/* ── Stats Bar ── */}
      <section className="relative overflow-hidden gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="font-display text-4xl font-extrabold text-accent">{s.value}</div>
                <div className="mt-1.5 text-[11px] uppercase tracking-widest text-primary-foreground/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <Section>
        <SectionHeading
          eyebrow="Services Overview"
          title="Four pillars of trade intelligence."
          description="Every engagement draws from one or more of these core capabilities — scoped to your product, market, and business objective."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-elegant hover:border-accent/20 transition-all duration-300"
            >
              <div className="h-1 w-full gradient-hero" />
              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl border ${g.color}`}>
                    <g.icon className={`h-6 w-6 ${g.iconColor}`} />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {g.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{g.desc}</p>
                <div className="h-px bg-border mb-5" />
                <ul className="grid gap-2 sm:grid-cols-2 flex-1">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Industries ── */}
      <Section surface>
        <SectionHeading
          eyebrow="Industries Served"
          title="Deep sector coverage across global trade."
          description="Our databases and analyst expertise span the most actively traded commodity and manufacturing categories."
          center
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 hover:border-accent/30 hover:shadow-soft transition-all"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10">
                <ind.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary leading-snug">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Process ── */}
      <Section>
        <SectionHeading
          eyebrow="Our Process"
          title="From brief to actionable intelligence in 10 days."
          description="A structured research methodology that delivers verified, decision-ready outputs — not raw data dumps."
          center
        />
        <div className="mt-14 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-border hidden lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative flex flex-col rounded-3xl border border-border bg-card p-6 hover:shadow-soft transition-all"
              >
                {/* Step circle */}
                <div className="relative z-10 mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full gradient-hero shadow-soft">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                    {s.duration}
                  </span>
                  <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Sample Reports ── */}
      {/* <Section surface>
        <SectionHeading eyebrow="Sample Reports" title="The quality of intelligence you receive." center />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reports.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-elegant hover:border-secondary/30 transition-all duration-300 cursor-default"
            >
              <div className="h-1 w-full gradient-hero" />
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between mb-5">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <FileText className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-3xl font-extrabold text-border group-hover:text-secondary/20 transition-colors select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="inline-flex w-fit items-center rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">
                  {r.tag}
                </span>
                <h3 className="font-display text-sm font-bold text-primary leading-snug flex-1">{r.title}</h3>
                <div className="my-4 h-px bg-border group-hover:bg-secondary/20 transition-colors" />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{r.pages}</span>
                  <div className="grid h-7 w-7 place-items-center rounded-full border border-border bg-muted group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section> */}

      {/* ── Case Studies ── */}
      <Section>
        <SectionHeading
          eyebrow="Case Studies"
          title="Real results from real clients."
          description="Every engagement is measured by one thing — did the client make a better business decision because of our intelligence?"
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant hover:border-accent/20 transition-all"
            >
              <div className="h-1 w-full gradient-hero" />
              <div className="flex flex-col flex-1 p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 mb-5">
                  <c.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.product}</span>
                </div>
                <h3 className="font-display text-base font-bold text-primary mb-3">{c.client}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.result}</p>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Outcome</span>
                  <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">{c.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Who We Serve ── */}
      <Section surface>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built for global decision-makers."
          description="Whether you're a first-time exporter or a seasoned trade professional, our intelligence adapts to your objectives."
          center
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card px-5 py-5 hover:border-accent/30 hover:shadow-soft transition-all"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/10">
                <Globe2 className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-primary text-sm">{a.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section>
        <SectionHeading eyebrow="Testimonials" title="Trusted by exporters worldwide." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-accent/40 mb-3" />
              <p className="text-base text-foreground/85 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-hero font-display text-sm font-extrabold text-primary-foreground">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Inquiry Form ── */}
      {/* <Section surface>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <SectionHeading
            eyebrow="Request a Report"
            title="Get trade intelligence tailored to your product and market."
            center
          />
          <p className="text-center text-sm text-muted-foreground -mt-4 mb-8">
            Tell us your product (HS code if known), target markets, and what decision you're trying to make — we'll scope the right engagement and get back within 24 hours.
          </p>
          <InquiryForm
            subject="Trade Intelligence Report Request"
            fields={["name", "company", "email", "phone", "message"]}
          />
        </div>
      </Section> */}

    </DivisionLayout>
  );
}