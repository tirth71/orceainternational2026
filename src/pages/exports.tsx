
import { DivisionLayout } from "@/components/DivisionLayout";
import { Section, SectionHeading } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { Wheat, Apple, Leaf, Sprout, Package, Droplets, ShieldCheck, Award, Globe2, CheckCircle2 } from "lucide-react";


const productCategories = [
  { icon: Wheat, title: "Agricultural Products", items: ["Rice", "Wheat", "Maize", "Barley"] },
  { icon: Package, title: "Pulses", items: ["Chana Dal", "Toor Dal", "Moong Dal", "Urad Dal"] },
  { icon: Leaf, title: "Spices", items: ["Turmeric", "Red Chilli", "Coriander", "Cumin", "Fennel"] },
  { icon: Sprout, title: "Fresh Vegetables", items: ["Onion", "Potato", "Garlic", "Ginger"] },
  { icon: Apple, title: "Fresh Fruits", items: ["Mango", "Pomegranate", "Banana", "Grapes"] },
  { icon: Droplets, title: "Dehydrated Products", items: ["Onion Flakes", "Garlic Powder", "Tomato Powder"] },
];

const featured = [
  { name: "Basmati Rice", desc: "Long-grain, aromatic, premium-grade.", markets: ["UAE", "Saudi", "UK"] },
  { name: "Turmeric Powder", desc: "High-curcumin, food and pharma grade.", markets: ["USA", "EU"] },
  { name: "Fresh Mango", desc: "Alphonso, Kesar and Banganapalli varieties.", markets: ["EU", "Gulf"] },
  { name: "Dehydrated Onion", desc: "Flakes, kibbled and powder.", markets: ["EU", "USA"] },
];

const services = [
  "Product Sourcing",
  "Quality Inspection",
  "Packaging Solutions",
  "Documentation Support",
  "Logistics Coordination",
  "International Shipping",
];

const certifications = ["APEDA", "FSSAI", "ISO 22000", "Spices Board", "Organic (NPOP)", "HACCP"];

const countries = ["USA", "UK", "UAE", "Saudi Arabia", "Germany", "Netherlands", "Australia", "Singapore", "Canada", "Malaysia"];

const process = [
  { title: "Product Selection", desc: "Match grade, variety and origin to buyer needs." },
  { title: "Quality Verification", desc: "Pre-shipment inspection and lab testing." },
  { title: "Packaging", desc: "Buyer-spec packaging with private labelling." },
  { title: "Documentation", desc: "Invoice, BL, COO, phytosanitary and certificates." },
  { title: "Shipment", desc: "FCL/LCL with end-to-end tracking." },
  { title: "Delivery", desc: "Door delivery with full reconciliation." },
];

// export default function Exports() {
//   return (
    // <DivisionLayout
    //   slug="exports"
    //   heroTitle="Connecting global markets with premium quality products."
    //   heroDescription="ORCEA Export Import Division specializes in sourcing, exporting and supplying high-quality agricultural and industrial products to international buyers across multiple countries."
    // >
      {/* <Section>
        <SectionHeading eyebrow="Product Categories" title="What we export." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15"><c.icon className="h-6 w-6 text-accent-foreground" /></div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{c.title}</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {c.items.map((it) => (
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
        <SectionHeading eyebrow="Featured Products" title="Premium picks, ready to ship." center />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[4/3] gradient-hero relative grid place-items-center">
                <Leaf className="h-16 w-16 text-accent/80 transition group-hover:scale-110" strokeWidth={1.2} />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-primary">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.markets.map((m) => (
                    <span key={m} className="rounded-full bg-secondary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Export Services" title="Beyond product, a complete partner." center />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-soft">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="font-semibold text-primary">{s}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Certifications" title="Quality you can trust." center />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div key={c} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15"><Award className="h-5 w-5 text-accent-foreground" /></div>
              <span className="font-display text-lg font-bold text-primary">{c}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Export Countries" title="Trusted across 50+ countries." center />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {countries.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-soft">
              <Globe2 className="h-4 w-4 text-secondary" /> {c}
            </span>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Quality Assurance" title="Process built around quality." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div className="font-display text-4xl font-extrabold text-gradient-gold">{String(i + 1).padStart(2, "0")}</div>
                <ShieldCheck className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-primary">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <SectionHeading eyebrow="Inquiry Form" title="Request product details & pricing." center />
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">Share your requirements — packaging, quantity and destination.</p>
          <div className="mt-8">
            <InquiryForm subject="Export Product Inquiry" fields={["name", "company", "email", "phone", "message"]} />
          </div>
        </div>
      </Section> */}
     // <h1 className="text-3xl font-bold text-center text-primary">Exports Division Page Under Construction</h1>
    // </DivisionLayout>
//   );
// }
export default function Exports() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary">
          Page Under Construction
        </h1>
        <p className="mt-4 text-muted-foreground">
          We're working hard to bring this page online soon.
        </p>
      </div>
    </div>
  );
}