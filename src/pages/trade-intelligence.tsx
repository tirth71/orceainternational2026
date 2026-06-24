import { Link } from "react-router-dom";
import { DivisionLayout } from "@/components/DivisionLayout";
import { Section, SectionHeading } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { BarChart3, Users, LineChart, FileText, Search, Globe2, Target, TrendingUp, CheckCircle2, Quote } from "lucide-react";

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
    icon: BarChart3,
    title: "Export Import Data Intelligence",
    items: ["Global Shipment Data", "Importer Database", "Exporter Database", "Product-Wise Trade Analysis", "Country-Wise Trade Reports", "Market Opportunity Reports"],
  },
  {
    icon: Users,
    title: "Buyer Discovery Services",
    items: ["Verified International Buyers", "Buyer Contact Research", "Buyer Qualification", "Lead Verification", "Market-Specific Buyer Lists"],
  },
  {
    icon: LineChart,
    title: "Market Research & Analysis",
    items: ["Industry Trends", "Competitor Analysis", "Product Demand Analysis", "Price Benchmarking", "Emerging Markets Identification"],
  },
  {
    icon: FileText,
    title: "Trade Reports",
    items: ["Monthly Trade Reports", "Product Export Reports", "Country Market Reports", "Industry Outlook Reports"],
  },
];

const industries = ["Agriculture", "Textile", "Chemicals", "Food Products", "Engineering", "Pharma", "FMCG", "Metals & Minerals"];

const processSteps = [
  { icon: Search, title: "Discovery", desc: "Define objectives, products and target geographies." },
  { icon: BarChart3, title: "Data Collection", desc: "Aggregate shipment data, customs records and market signals." },
  { icon: LineChart, title: "Analysis", desc: "Trend, competitor and demand modelling across markets." },
  { icon: FileText, title: "Reporting", desc: "Actionable reports with buyer lists and recommendations." },
];

const audience = ["Exporters", "Manufacturers", "Importers", "Investors", "Startups", "Business Consultants"];

const reports = [
  { title: "India Spices Export Report — 2026", tag: "Country Market" },
  { title: "Basmati Rice: Top 10 Buyer Markets", tag: "Product" },
  { title: "Global Pulses Outlook — Q1", tag: "Industry Outlook" },
  { title: "UAE Importer Database — Agri", tag: "Buyer List" },
];

const cases = [
  { client: "Agri Exporter, Gujarat", result: "Identified 42 verified buyers across UAE & EU; closed 3 LOIs in 60 days." },
  { client: "Spice Manufacturer, Kerala", result: "Competitor shipment analysis cut customer acquisition cost by 38%." },
  { client: "Textile SME, Surat", result: "Market entry report enabled launch into 2 new African markets." },
];

const testimonials = [
  { quote: "ORCEA's data turned guesswork into a clear export roadmap.", author: "Founder, Agri Exports" },
  { quote: "The verified buyer lists alone paid for the engagement 10x over.", author: "Director, Food Processing Co." },
];

export default function TradeIntel() {
  return (
    <DivisionLayout
      slug="trade-intelligence"
      heroTitle="Data-driven insights for smarter global trade decisions."
      heroDescription="ORCEA Trade Intelligence helps exporters, importers, manufacturers and investors make informed decisions through market research, trade analytics, buyer intelligence and industry reports."
    >
      <Section>
        <SectionHeading eyebrow="Services Overview" title="Four pillars of trade intelligence." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:shadow-elegant">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15"><g.icon className="h-6 w-6 text-accent-foreground" /></div>
                <h3 className="font-display text-xl font-bold text-primary">{g.title}</h3>
              </div>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Industries Served" title="Sector coverage across global markets." center />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-soft">{i}</span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Process" title="From data to decisions." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-4xl font-extrabold text-gradient-gold">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-3 grid h-10 w-10 place-items-center rounded-lg bg-accent/15"><s.icon className="h-5 w-5 text-accent-foreground" /></div>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Sample Reports" title="What you can expect." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reports.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <FileText className="h-6 w-6 text-secondary" />
              <div className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-secondary">{r.tag}</div>
              <h3 className="mt-1.5 font-display text-base font-bold text-primary">{r.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Case Studies" title="Results we've delivered." center />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.client} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Target className="h-6 w-6 text-accent-foreground" />
              <h3 className="mt-3 font-display text-base font-bold text-primary">{c.client}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.result}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Who We Serve" title="Built for global decision-makers." center />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-soft">
              <Globe2 className="h-5 w-5 text-secondary" />
              <span className="font-semibold text-primary">{a}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Testimonials" title="Trusted by exporters worldwide." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Quote className="h-7 w-7 text-accent" />
              <p className="mt-3 text-base text-foreground/85">"{t.quote}"</p>
              <div className="mt-3 text-sm font-semibold text-primary">— {t.author}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <SectionHeading eyebrow="Inquiry Form" title="Request a custom trade report." center />
          <div className="mt-8">
            <InquiryForm subject="Trade Intelligence Report Request" fields={["name", "company", "email", "phone", "message"]} />
          </div>
        </div>
      </Section>
    </DivisionLayout>
  );
}
