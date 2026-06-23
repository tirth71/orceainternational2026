import { DivisionLayout } from "../components/DivisionLayout";
import { Section, SectionHeading } from "../components/Section";
import { InquiryForm } from "../components/InquiryForm";
import { Globe, Search, Megaphone, Share2, Palette, Target, TrendingUp, CheckCircle2, Quote, ChevronDown } from "lucide-react";

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
  { client: "Spice Exporter", result: "Built export-ready website + SEO — 60+ inbound buyer inquiries/month." },
  { client: "Engineering OEM", result: "Google Ads + LinkedIn funnels delivered 4.8x pipeline ROI in 6 months." },
  { client: "D2C Brand", result: "Meta Ads scaled from ₹3L to ₹40L/month at 5.4x ROAS." },
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
  return (
    <DivisionLayout
      slug="digital"
      heroTitle="Driving business growth through digital excellence."
      heroDescription="ORCEA Digital Marketing helps businesses build their online presence, generate quality leads and achieve measurable growth through data-driven marketing strategies."
    >
      <Section>
        <SectionHeading eyebrow="Services" title="Full-funnel digital growth." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15"><g.icon className="h-6 w-6 text-accent-foreground" /></div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{g.title}</h3>
              <ul className="mt-4 grid gap-2">
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
      </Section>

      <Section>
        <SectionHeading eyebrow="Case Studies" title="From audit to scale." center />
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

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <SectionHeading eyebrow="Contact Form" title="Start a project." center />
          <div className="mt-8">
            <InquiryForm subject="Digital Marketing Inquiry" fields={["name", "company", "email", "phone", "message"]} />
          </div>
        </div>
      </Section>
    </DivisionLayout>
  );
}
