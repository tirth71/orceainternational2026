import { DivisionLayout } from "../components/DivisionLayout";
import { Section, SectionHeading } from "../components/Section";
import { InquiryForm } from "../components/InquiryForm";
import {
  Globe, Search, Megaphone, Share2, Palette, Target,
  TrendingUp, CheckCircle2, Quote, ChevronDown, Star,
  ArrowRight, BarChart3, Zap, Users, Award, MousePointer,
  LineChart, Layers,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Clients Served"      },
  { value: "5.4x", label: "Average ROAS"        },
  { value: "320%", label: "Avg Traffic Growth"  },
  { value: "30+",  label: "Countries Reached"   },
];

const serviceGroups = [
  {
    icon: Globe,
    title: "Website Development",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    tag: "Foundation",
    desc: "High-converting export company websites, e-commerce stores, and landing pages — built fast, optimized for leads.",
    items: ["Corporate & Export Websites", "E-commerce Stores", "Landing Pages", "Website Audit & Redesign"],
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600",
    tag: "Long-Term",
    desc: "Rank on Google for buyer intent keywords — technical, on-page, and off-page SEO that compounds over time.",
    items: ["Technical & On-Page SEO", "Off-Page Link Building", "Local & International SEO", "Content Strategy"],
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    tag: "Fast ROI",
    desc: "Performance campaigns across Google, Meta, LinkedIn, and YouTube — built to maximize ROAS from day one.",
    items: ["Google Search & Display Ads", "Meta (Facebook & Instagram)", "LinkedIn B2B Campaigns", "YouTube Video Ads"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    tag: "Brand Building",
    desc: "Consistent, strategic content across platforms — building brand authority and driving organic engagement.",
    items: ["Content Creation & Scheduling", "Platform Management", "Community Engagement", "Influencer Collaboration"],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    color: "bg-rose-50 border-rose-100",
    iconColor: "text-rose-600",
    tag: "Identity",
    desc: "Complete brand identity — logo, colors, typography, and marketing collateral that positions you globally.",
    items: ["Logo & Brand Identity", "Corporate Brochures", "Export Marketing Kits", "Packaging Design"],
  },
  {
    icon: Target,
    title: "Lead Generation",
    color: "bg-cyan-50 border-cyan-100",
    iconColor: "text-cyan-600",
    tag: "B2B Focus",
    desc: "Qualified B2B and export leads delivered through multi-channel funnels — not just traffic, but buyers.",
    items: ["B2B & Export Lead Gen", "Sales Funnel Design", "CRM Integration", "Lead Nurturing Sequences"],
  },
];

const results = [
  {
    client: "Global Spice Exporter",
    industry: "Agriculture & Exports",
    growth: "+320%",
    metric: "Organic Traffic",
    period: "6 months",
    result: "SEO and content strategy targeting buyer-intent keywords generated consistent inquiries from USA, UAE, and Europe — reducing paid ad dependency by 60%.",
    icon: TrendingUp,
    color: "text-green-600 bg-green-50",
  },
  {
    client: "Industrial Manufacturer",
    industry: "Engineering Goods",
    growth: "4.8x",
    metric: "Pipeline ROI",
    period: "3 months",
    result: "Google Ads and LinkedIn campaigns delivered 120+ qualified B2B leads per month. Sales team conversion rate improved from 8% to 22% with better lead quality.",
    icon: BarChart3,
    color: "text-blue-600 bg-blue-50",
  },
  {
    client: "D2C Consumer Brand",
    industry: "FMCG & Retail",
    growth: "5.4x",
    metric: "ROAS",
    period: "4 months",
    result: "Meta Ads scaling strategy — creative testing, audience segmentation, and retargeting — increased monthly revenue 3x while cutting cost-per-acquisition by 44%.",
    icon: LineChart,
    color: "text-amber-600 bg-amber-50",
  },
  {
    client: "Export Training Academy",
    industry: "Education",
    growth: "8x",
    metric: "Enrollments",
    period: "2 months",
    result: "YouTube + Google Ads campaign targeting export aspirants drove 8x more course enrollments vs the previous quarter at 60% lower cost per lead.",
    icon: Users,
    color: "text-purple-600 bg-purple-50",
  },
];

const process = [
  {
    icon: Search,
    step: "01",
    title: "Digital Audit",
    desc: "Full analysis of your current digital presence — website, SEO, ads, social — identifying gaps and quick wins.",
    duration: "Week 1",
    output: "Audit Report",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy Build",
    desc: "Custom channel mix, messaging framework, audience targeting plan, and monthly KPI targets.",
    duration: "Week 1–2",
    output: "Growth Plan",
  },
  {
    icon: Zap,
    step: "03",
    title: "Execution",
    desc: "Campaigns built, content created, ads launched, and tracking pixels deployed.",
    duration: "Week 2–4",
    output: "Live Campaigns",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Optimization",
    desc: "Weekly data review — A/B testing creatives, bidding adjustments, content iteration.",
    duration: "Ongoing",
    output: "Weekly Reports",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Scaling",
    desc: "Double down on winning channels, expand to new markets, compound results month over month.",
    duration: "Month 3+",
    output: "Growth Flywheel",
  },
];

const packages = [
  {
    name: "Starter",
    price: "₹15,000",
    period: "/month",
    desc: "Perfect for small businesses starting their digital journey.",
    features: [
      "Website Audit & Fixes",
      "Basic SEO (10 keywords)",
      "Google My Business Setup",
      "2x Social Media Posts/week",
      "Monthly Report",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "₹35,000",
    period: "/month",
    desc: "For businesses ready to scale leads and digital presence.",
    features: [
      "Everything in Starter",
      "Google Ads Management",
      "Meta Ads (FB + Instagram)",
      "Advanced SEO (30 keywords)",
      "Content Creation (8 posts)",
      "Weekly Performance Reports",
      "Dedicated Account Manager",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Full-service digital marketing for ambitious global brands.",
    features: [
      "Everything in Growth",
      "LinkedIn B2B Campaigns",
      "YouTube Video Ads",
      "Brand Identity & Design",
      "Export Lead Generation",
      "CRM Integration",
      "Daily Reporting Dashboard",
    ],
    cta: "Talk to Us",
    featured: false,
  },
];

const testimonials = [
  {
    quote: "ORCEA rebuilt our export website and ran SEO for 6 months — buyer inquiries from international markets went up by 6x. Best investment we've made.",
    author: "Managing Director",
    company: "Spice Exporter, Kerala",
    stars: 5,
  },
  {
    quote: "We'd tried 3 agencies before ORCEA. The difference is they understand export businesses — their targeting for international buyers is unmatched.",
    author: "Founder",
    company: "Agri Commodity Exports, Gujarat",
    stars: 5,
  },
  {
    quote: "Their Meta Ads team delivered 5.4x ROAS consistently for 4 months. Real strategy, real numbers — not vanity metrics.",
    author: "CEO",
    company: "D2C Consumer Brand, Mumbai",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Do you specialize in export and international businesses?",
    a: "Yes — a large portion of our clients are exporters, manufacturers, and trade companies. We understand export buyer behavior, international SEO, and how to generate B2B leads from overseas markets like USA, UAE, EU, and Southeast Asia.",
  },
  {
    q: "What is your typical engagement model?",
    a: "We offer project-based engagements for one-time work (website development, branding) and monthly retainers for ongoing services (SEO, paid ads, social media). Most growth clients start with a 3-month commitment to see compound results.",
  },
  {
    q: "How soon will I see results from digital marketing?",
    a: "Paid ads (Google, Meta) typically show results within 2–4 weeks. SEO takes 3–6 months to compound. Social media builds brand presence within 60–90 days. We set realistic expectations during the audit phase.",
  },
  {
    q: "Do you handle multi-country and multi-language campaigns?",
    a: "Absolutely. We run campaigns across USA, UK, EU (Germany, Netherlands, France), GCC (UAE, Saudi, Qatar), and Southeast Asia. Language-specific ad copy and geo-targeting are standard practice for our international clients.",
  },
  {
    q: "Can you help with both B2B and B2C marketing?",
    a: "Yes. We have dedicated playbooks for B2B (LinkedIn, Google Search, content marketing) and B2C (Meta Ads, influencer, D2C e-commerce). Many of our export clients need both — B2B for buyers and B2C for end-market brand building.",
  },
];

export default function Digital() {
  useEffect(() => {
    document.title = "Digital Marketing | ORCEA International";
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <DivisionLayout
      slug="digital"
      heroTitle="Data-driven digital marketing that turns clicks into customers."
      heroDescription="ORCEA Digital Marketing helps exporters, manufacturers, and consumer brands build powerful online presence, generate qualified leads, and achieve measurable revenue growth through performance marketing."
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
          eyebrow="Services"
          title="Full-funnel digital growth — from brand to buyer."
          description="Six integrated service lines that work together to build your online presence, generate qualified leads, and convert them into customers."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-elegant hover:border-accent/20 transition-all duration-300"
            >
              <div className="h-1 w-full gradient-hero" />
              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl border ${g.color}`}>
                    <g.icon className={`h-6 w-6 ${g.iconColor}`} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-3xl font-extrabold text-border group-hover:text-accent/20 transition-colors select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3">
                  {g.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{g.desc}</p>
                <div className="h-px bg-border mb-5" />
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Case Studies ── */}
      <Section surface>
        <SectionHeading
          eyebrow="Success Stories"
          title="Real results. Measurable growth."
          description="Every number below represents a real client campaign — no inflated metrics, no vanity stats."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {results.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-elegant hover:border-accent/20 transition-all"
            >
              <div className="h-1 w-full gradient-hero" />
              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${c.color}`}>
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.industry} · {c.period}</span>
                    <h3 className="font-display text-base font-bold text-primary">{c.client}</h3>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-3xl font-extrabold text-primary">{c.growth}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.metric}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.result}</p>
                <div className="mt-5 pt-4 border-t border-border flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-xs font-semibold text-primary">Growth Achieved in {c.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Process ── */}
      <Section>
        <SectionHeading
          eyebrow="Our Process"
          title="A repeatable growth engine — built for your business."
          description="Five phases that take you from digital audit to a compounding revenue machine."
          center
        />
        <div className="mt-14 relative">
          <div className="absolute top-10 left-[8%] right-[8%] h-px bg-border hidden lg:block" />
          <div className="grid gap-6 lg:grid-cols-5">
            {process.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex flex-col rounded-3xl border border-border bg-card p-5 hover:shadow-soft transition-all text-center"
              >
                <div className="relative z-10 mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full gradient-hero shadow-soft">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="inline-block rounded-full bg-accent/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                  {s.duration}
                </span>
                <h3 className="font-display text-base font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 pt-3 border-t border-border">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Output: </span>
                  <span className="text-[10px] font-semibold text-primary">{s.output}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Packages ── */}
      <Section surface>
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent packages. No hidden fees."
          description="Choose the engagement that fits your growth stage — or contact us for a custom plan."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-3xl border-2 bg-card shadow-soft transition-all hover:shadow-elegant ${
                p.featured ? "border-primary" : "border-border"
              }`}
            >
              {p.featured && (
                <div className="bg-primary py-2 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    ⭐ Most Popular
                  </span>
                </div>
              )}
              {!p.featured && <div className="h-1 w-full gradient-hero" />}
              <div className="flex flex-col flex-1 p-7">
                <h3 className="font-display text-xl font-bold text-primary mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-5">{p.desc}</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-foreground">{p.price}</span>
                  <span className="text-sm text-muted-foreground mb-1">{p.period}</span>
                </div>
                <div className="h-px bg-border mb-5" />
                <ul className="space-y-3 flex-1 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition hover:scale-[1.02] ${
                    p.featured
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-muted text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  }`}
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by founders & marketers."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="h-7 w-7 text-accent/40 mb-3" />
              <p className="text-sm text-foreground/85 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-hero font-display text-sm font-extrabold text-primary-foreground shrink-0">
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

      {/* ── FAQ ── */}
      <Section surface>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions."
          center
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-primary text-sm md:text-base">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-5 border-t border-border"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed pt-4">{f.a}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── Contact Form ── */}
     

    </DivisionLayout>
  );
}
