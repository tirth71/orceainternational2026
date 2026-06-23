
import { DivisionLayout } from "@/components/DivisionLayout";
import { Section, SectionHeading } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { Ship, Plane, FileCheck2, Warehouse, Network, CheckCircle2, Quote, Globe2 } from "lucide-react";

// export const Route = createFileRoute("/logistics")({
//   head: () => ({
//     meta: [
//       { title: "ORCEA Logistics Solutions — Global Freight & Supply Chain" },
//       { name: "description", content: "Reliable logistics with global reach — ocean freight, air freight, customs clearance, warehousing and supply chain solutions." },
//       { property: "og:title", content: "ORCEA Logistics Solutions" },
//       { property: "og:description", content: "Reliable logistics. Global reach. Seamless deliveries." },
//       { property: "og:url", content: "https://orcea-global-hub.lovable.app/logistics" },
//     ],
//     links: [{ rel: "canonical", href: "https://orcea-global-hub.lovable.app/logistics" }],
//   }),
//   component: Logistics,
// });

const serviceGroups = [
  { icon: Ship, title: "Ocean Freight", items: ["FCL Shipments", "LCL Shipments", "Port-to-Port Services", "Door-to-Door Solutions"] },
  { icon: Plane, title: "Air Freight", items: ["Express Shipping", "Cargo Handling", "Time-Sensitive Deliveries"] },
  { icon: FileCheck2, title: "Customs Clearance", items: ["Documentation Management", "Import Clearance", "Export Clearance", "Regulatory Compliance"] },
  { icon: Warehouse, title: "Warehousing", items: ["Inventory Management", "Distribution Services", "Storage Solutions"] },
  { icon: Network, title: "Supply Chain Solutions", items: ["Procurement Support", "Cargo Consolidation", "End-to-End Logistics Planning"] },
];

const industries = ["Agriculture", "Textile", "Food Processing", "Chemicals", "Manufacturing", "FMCG"];

const process = [
  { title: "Booking", desc: "Vessel/flight booking with best-rate routing." },
  { title: "Documentation", desc: "BL, invoice, packing list and certificates." },
  { title: "Customs Clearance", desc: "Origin and destination handled by experts." },
  { title: "Transportation", desc: "Multi-modal movement with full tracking." },
  { title: "Delivery", desc: "Door delivery with proof and reconciliation." },
];

const network = ["Mumbai (JNPT)", "Mundra", "Chennai", "Dubai (JAFZA)", "Singapore", "Rotterdam", "New York", "Hamburg"];

const testimonials = [
  { quote: "Our containers move on time, every time. ORCEA's clearance team is best-in-class.", author: "Logistics Head, Agri Exporter" },
  { quote: "Switched our EU shipments to ORCEA — costs down 18%, transit time down 4 days.", author: "COO, Food Processing Co." },
];

export default function Logistics() {
  return (
    <DivisionLayout
      slug="logistics"
      heroTitle="Reliable logistics. Global reach. Seamless deliveries."
      heroDescription="ORCEA Logistics Solutions offers comprehensive freight forwarding, customs clearance, warehousing and supply chain solutions for businesses involved in international trade."
    >
      <Section>
        <SectionHeading eyebrow="Services Grid" title="End-to-end logistics under one roof." center />
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
        <SectionHeading eyebrow="Logistics Network" title="Global hubs, local expertise." center />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {network.map((n) => (
            <div key={n} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-soft">
              <Globe2 className="h-5 w-5 text-secondary" />
              <span className="font-semibold text-primary">{n}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Industries Served" title="Trusted across sectors." center />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-soft">{i}</span>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Process Timeline" title="From booking to delivery." center />
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
        <SectionHeading eyebrow="Testimonials" title="What clients say." center />
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
          <SectionHeading eyebrow="Contact Form" title="Request a shipping quote." center />
          <div className="mt-8">
            <InquiryForm subject="Logistics Quote Request" fields={["name", "company", "email", "phone", "message"]} />
          </div>
        </div>
      </Section>
    </DivisionLayout>
  );
}
