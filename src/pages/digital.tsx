import { DivisionLayout } from "../components/DivisionLayout";
import { Section, SectionHeading } from "../components/Section";
import { InquiryForm } from "../components/InquiryForm";
import { Globe, Search, Megaphone, Share2, Palette, Target, TrendingUp, CheckCircle2, Quote, ChevronDown } from "lucide-react";
import { useEffect } from "react";

// export const Route = createFileRoute("/digital")({
//   head: () => ({
//     meta: [
//       { title: "ORCEA Digital Marketing — Driving Growth Through Digital Excellence" },
//       { name: "description", content: "Website development, SEO, paid ads, social media, branding and lead generation — data-driven marketing for measurable growth." },
//       { property: "og:title", content: "ORCEA Digital Marketing" },
//       { property: "og:description", content: "Driving business growth through digital excellence." },
//       { property: "og:url", content: "https://orcea-global-hub.lovable.app/digital" },
//     ],
//     links: [{ rel: "canonical", href: "https://orcea-global-hub.lovable.app/digital" }],
//   }),
//   component: Digital,
// });

const serviceGroups = [
  { icon: Globe, title: "Website Development", items: ["Corporate Websites", "Export Company Websites", "E-commerce Stores", "Landing Pages"] },
  { icon: Search, title: "Search Engine Optimization", items: ["Technical SEO", "On-Page SEO", "Off-Page SEO", "Local SEO"] },
  { icon: Megaphone, title: "Paid Advertising", items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads"] },
  { icon: Share2, title: "Social Media Marketing", items: ["Content Creation", "Social Media Management", "Community Engagement"] },
  { icon: Palette, title: "Branding Solutions", items: ["Logo Design", "Brand Identity", "Corporate Brochures", "Marketing Collateral"] },
  { icon: Target, title: "Lead Generation", items: ["B2B Lead Generation", "Export Lead Generation", "Sales Funnel Optimization"] },
];

const portfolio = [
  { name: "Agro Exports", metric: "+312% leads in 90 days" },
  { name: "FreshFruits Co.", metric: "Entered 4 markets in 6 months" },
  { name: "BrandLabs", metric: "5.4x ROAS on Meta Ads" },
  { name: "TextilePro", metric: "Top-3 SEO for 18 keywords" },
];

const cases = [
  {
    client: "Global Spice Exporter",
    growth: "+320%",
    metric: "Organic Traffic",
    result:
      "SEO and content strategy generated consistent buyer inquiries from USA, UAE and Europe."
  },
  {
    client: "Industrial Manufacturer",
    growth: "4.8X",
    metric: "Pipeline ROI",
    result:
      "Google Ads and LinkedIn campaigns delivered qualified B2B leads and increased sales opportunities."
  },
  {
    client: "D2C Consumer Brand",
    growth: "5.4X",
    metric: "ROAS",
    result:
      "Meta Ads scaling strategy increased monthly revenue while reducing acquisition costs."
  },
];

const process = [
  { title: "Audit", desc: "Baseline performance, gaps and opportunities." },
  { title: "Strategy", desc: "Channel mix, messaging and KPI plan." },
  { title: "Execution", desc: "Build, launch and ship campaigns." },
  { title: "Optimization", desc: "Continuous testing and iteration." },
  { title: "Scaling", desc: "Compound winners; expand to new channels." },
];

const testimonials = [
  { quote: "ORCEA rebuilt our export website and SEO — buyer inquiries went up 6x.", author: "MD, Spice Exporter" },
  { quote: "Best agency we've worked with. Real strategy, real numbers.", author: "Founder, D2C Brand" },
];

const faqs = [
  { q: "Do you specialize in export businesses?", a: "Yes — we've built and marketed dozens of export-focused websites and lead funnels." },
  { q: "What is your typical engagement?", a: "Project-based for websites & branding; monthly retainers for SEO, ads and social media." },
  { q: "Do you handle international markets?", a: "Absolutely. We run multi-country Google, Meta and LinkedIn campaigns across the US, EU, GCC and APAC." },
];

export default function Digital() {
   useEffect(() => {
      document.title = "Digital Marketing | ORCEA International";
    }, []);
  return (
    <DivisionLayout
      slug="digital"
      heroTitle="Driving business growth through digital excellence."
      heroDescription="ORCEA Digital Marketing helps businesses build their online presence, generate quality leads and achieve measurable growth through data-driven marketing strategies."
    >
     <Section>
  <SectionHeading
    eyebrow="Services"
    title="Full-Funnel Digital Growth"
    center
  />

  <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {serviceGroups.map((g, index) => (
      <div
        key={g.title}
        className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-xl"
      >
        {/* Number */}
        <div className="absolute right-6 top-6 text-5xl font-black text-slate-100">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F4EA] transition-all duration-300 group-hover:bg-[#D4AF37]">
          <g.icon className="h-8 w-8 text-[#0A2C5A]" />
        </div>

        {/* Title */}
        <h3 className="mt-5 text-2xl font-bold leading-tight text-[#0A2C5A]">
          {g.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Strategic digital marketing solutions designed to increase
          visibility, generate quality leads and accelerate business growth.
        </p>

        {/* Services List */}
        <ul className="mt-5 space-y-3">
          {g.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-slate-700"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#D4AF37]">
                <CheckCircle2 className="h-3 w-3 text-[#D4AF37]" />
              </div>

              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="mt-6 border-t border-slate-200 pt-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0057D9]">
            {g.items.length} Services
          </span>
        </div>
      </div>
    ))}
  </div>
</Section>
      {/* <Section surface>
        <SectionHeading eyebrow="Portfolio" title="Real results across industries." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15"><TrendingUp className="h-5 w-5 text-accent-foreground" /></div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold text-secondary">{p.metric}</p>
            </div>
          ))}
        </div>
      </Section> */}

     <Section className="bg-slate-50">
  <SectionHeading
    eyebrow="Success Stories"
    title="Real Results. Measurable Growth."
    center
  />

  <div className="mt-14 grid gap-8 md:grid-cols-3">
    {cases.map((c) => (
      <div
        key={c.client}
        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        {/* Top Metric */}
        <div className="mb-6">
          <div className="text-5xl font-black text-[#D4AF37]">
            {c.growth}
          </div>

          <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
            {c.metric}
          </div>
        </div>

        {/* Client */}
        <h3 className="text-xl font-bold text-[#0A2C5A]">
          {c.client}
        </h3>

        {/* Result */}
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {c.result}
        </p>

        {/* Bottom */}
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0057D9]">
          <TrendingUp className="h-4 w-4" />
          Growth Achieved
        </div>

        {/* Accent Line */}
        <div className="mt-6 h-1 w-16 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
      </div>
    ))}
  </div>
</Section>

      <Section surface>
        <SectionHeading eyebrow="Process" title="A repeatable growth engine." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {process.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-4xl font-extrabold text-gradient-gold">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3 font-display text-base font-bold text-primary">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Testimonials" title="Loved by founders & marketers." center />
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
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions." center />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-primary">
                {f.q}
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
{/* 
      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <SectionHeading eyebrow="Contact Form" title="Start a project." center />
          <div className="mt-8">
            <InquiryForm subject="Digital Marketing Inquiry" fields={["name", "company", "email", "phone", "message"]} />
          </div>
        </div>
      </Section> */}
    </DivisionLayout>
  );
}
