import { DivisionLayout } from "../components/DivisionLayout";
import { Section, SectionHeading } from "../components/Section";
import { InquiryForm } from "../components/InquiryForm";
import { Briefcase, Compass, Globe2, ShieldCheck, Rocket, CheckCircle2, Quote, ChevronDown } from "lucide-react";

// export const Route = createFileRoute("/consulting")({
//   head: () => ({
//     meta: [
//       { title: "ORCEA Global Consulting — Strategy for International Growth" },
//       { name: "description", content: "Strategic consulting for international business growth — export setup, market entry, expansion, compliance and transformation." },
//       { property: "og:title", content: "ORCEA Global Consulting" },
//       { property: "og:description", content: "Strategic consulting for international business growth." },
//       { property: "og:url", content: "https://orcea-global-hub.lovable.app/consulting" },
//     ],
//     links: [{ rel: "canonical", href: "https://orcea-global-hub.lovable.app/consulting" }],
//   }),
//   component: Consulting,
// });

const serviceGroups = [
  { icon: Briefcase, title: "Export Business Setup", items: ["Business Registration Guidance", "IEC Assistance", "APEDA Guidance", "Product Selection", "Market Selection"] },
  { icon: Compass, title: "Market Entry Strategy", items: ["International Expansion Planning", "Country Analysis", "Distribution Network Planning", "Go-To-Market Strategy"] },
  { icon: Globe2, title: "International Business Consulting", items: ["Business Model Development", "Growth Planning", "Partnership Development", "Joint Venture Consulting"] },
  { icon: ShieldCheck, title: "Compliance & Documentation", items: ["Export Regulations", "Product Certifications", "Compliance Framework", "Risk Assessment"] },
  { icon: Rocket, title: "Business Transformation", items: ["Process Optimization", "Operational Excellence", "Growth Strategy", "Digital Transformation"] },
];

const industries = ["Agri & Food", "Textile", "Chemicals", "Engineering", "Pharma", "FMCG", "Manufacturing", "Services"];

const process = [
  { title: "Discovery", desc: "Goals, current state and constraints." },
  { title: "Analysis", desc: "Market, competitor and regulatory study." },
  { title: "Strategy Development", desc: "Phased roadmap with clear KPIs." },
  { title: "Implementation", desc: "Hands-on execution and partner support." },
  { title: "Monitoring & Growth", desc: "Performance tracking and continuous optimization." },
];

const stories = [
  { client: "Mumbai Agri Co.", result: "Launched exports to 5 countries within 9 months." },
  { client: "Pune Engineering SME", result: "Secured 2 international distributors via partnership consulting." },
  { client: "Surat Textile Brand", result: "EU compliance + market entry — first containers shipped in 4 months." },
];

const faqs = [
  { q: "Do you support first-time exporters?", a: "Yes. We handle everything from IEC registration to first shipment, with hands-on guidance." },
  { q: "Which markets do you cover?", a: "USA, UK, EU, GCC, Africa, Southeast Asia and Australia — with on-ground partners in key hubs." },
  { q: "How long does market entry take?", a: "Typical roadmaps are 3–9 months depending on product, certifications and channel strategy." },
  { q: "Do you offer one-time or retainer consulting?", a: "Both. Choose project-based engagements or ongoing growth retainers." },
];

export default function Consulting() {
  return (
    <DivisionLayout
      slug="consulting"
      heroTitle="Strategic consulting for international business growth."
      heroDescription="ORCEA Global Consulting delivers end-to-end advisory for businesses expanding internationally — from market entry to operational transformation."
    >
      <Section>
        <SectionHeading eyebrow="Consulting Services" title="Strategy across the growth journey." center />
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
        <SectionHeading eyebrow="Industries" title="Sector expertise that compounds." center />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-soft">{i}</span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Consulting Process" title="A proven five-step methodology." center />
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

      <Section surface>
        <SectionHeading eyebrow="Success Stories" title="Outcomes our clients ship." center />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stories.map((c) => (
            <div key={c.client} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Quote className="h-6 w-6 text-accent" />
              <h3 className="mt-3 font-display text-base font-bold text-primary">{c.client}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.result}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions." center />
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

      <Section surface>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <SectionHeading eyebrow="Contact Form" title="Book a strategy session." center />
          <div className="mt-8">
            <InquiryForm subject="Consulting Inquiry" fields={["name", "company", "email", "phone", "message"]} />
          </div>
        </div>
      </Section>
    </DivisionLayout>
  );
}
