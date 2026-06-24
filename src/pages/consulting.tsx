import { DivisionLayout } from "../components/DivisionLayout";
import { Section, SectionHeading } from "../components/Section";
import { InquiryForm } from "../components/InquiryForm";
import { Briefcase, Compass, Globe2, ShieldCheck, Rocket, CheckCircle2, Quote, ChevronDown, Handshake } from "lucide-react";

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
  {
    icon: Briefcase,
    number: "01",
    title: "Export Business Setup",
    desc: "Everything you need to go from idea to first shipment — licences, codes, and product-market fit.",
    items: [
      "Business Registration Guidance",
      "IEC (Importer-Exporter Code) Assistance",
      "APEDA / DGFT Enrollment",
      "Product & HS Code Classification",
      "Target Market Selection",
    ],
  },
  {
    icon: Compass,
    number: "02",
    title: "Market Entry Strategy",
    desc: "Enter new international markets with a data-backed plan — not guesswork.",
    items: [
      "International Expansion Planning",
      "Country & Competitor Analysis",
      "Distribution Network Planning",
      "Go-To-Market Strategy",
      "Pilot Programme Design",
    ],
  },
  {
    icon: Globe2,
    number: "03",
    title: "International Business Consulting",
    desc: "Build scalable cross-border operations and unlock new revenue streams globally.",
    items: [
      "Global Business Model Development",
      "Multi-Country Growth Planning",
      "Partnership & Buyer Development",
      "Joint Venture Consulting",
      "Trade Finance Advisory",
    ],
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Compliance & Documentation",
    desc: "Stay export-ready and legally compliant in every market you enter.",
    items: [
      "Export Regulations & Customs",
      "Product Certifications (CE, FDA, BIS)",
      "Compliance Framework Design",
      "Risk Assessment & Mitigation",
      "LC & Documentation Advisory",
    ],
  },
  {
    icon: Rocket,
    number: "05",
    title: "Business Transformation",
    desc: "Optimise your operations and capabilities to perform at an international scale.",
    items: [
      "Export Process Audit & Optimisation",
      "Operational Excellence",
      "Digital Transformation",
      "Growth Strategy Execution",
      "Team Capability Building",
    ],
  },
  {
    icon: Handshake,
    number: "06",
    title: "Partnership & Distribution",
    desc: "Connect with the right buyers, agents, and distributors in your target markets.",
    items: [
      "Buyer & Importer Identification",
      "Agent & Distributor Matchmaking",
      "Negotiation Support",
      "MOU & Agreement Drafting",
      "Long-Term Relationship Management",
    ],
  },
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
           <SectionHeading
             eyebrow="Consulting Services"
             title="Strategy across the entire growth journey."
             center
           />
     
           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {serviceGroups.map((g) => (
               <div
                 key={g.title}
                 className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant overflow-hidden"
               >
                 {/* Gold top-border reveal on hover */}
                 <div className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
     
                 {/* Number + Icon row */}
                 <div className="flex items-start justify-between mb-5">
                   <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                     <g.icon className="h-6 w-6 text-accent" />
                   </div>
                   <span className="font-display text-3xl font-extrabold text-border/70 tabular-nums select-none transition-colors duration-300 group-hover:text-accent/30">
                     {g.number}
                   </span>
                 </div>
     
                 {/* Title */}
                 <h3 className="font-display text-lg font-bold text-primary leading-snug mb-2">
                   {g.title}
                 </h3>
     
                 {/* Description */}
                 <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                   {g.desc}
                 </p>
     
                 {/* Divider */}
                 <div className="h-px bg-border mb-5" />
     
                 {/* Items */}
                 <ul className="grid gap-2">
                   {g.items.map((it) => (
                     <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/80">
                       <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                       {it}
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
           </div>
         </Section>

    <Section surface>
  <SectionHeading
    eyebrow="Industries"
    title="Sector expertise that compounds."
    center
  />

  <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    {industries.map((industry, index) => (
      <div
        key={industry}
        className="group rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-elegant"
      >
        {/* <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent font-bold text-xl">
          {String(index + 1).padStart(2, "0")}
        </div> */}

        <h3 className="font-display text-lg font-bold text-primary">
          {industry}
        </h3>

        <div className="mt-4 h-1 w-12 mx-auto rounded-full bg-accent opacity-60" />
      </div>
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

      {/* <Section surface>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <SectionHeading eyebrow="Contact Form" title="Book a strategy session." center />
          <div className="mt-8">
            <InquiryForm subject="Consulting Inquiry" fields={["name", "company", "email", "phone", "message"]} />
          </div>
        </div>
      </Section> */}
    </DivisionLayout>
  );
}
