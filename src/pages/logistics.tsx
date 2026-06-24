
import { DivisionLayout } from "@/components/DivisionLayout";
import { Section, SectionHeading } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { Ship, Plane, FileCheck2, Warehouse, Network, CheckCircle2, Quote, Globe2, Truck, Building2, Factory, FlaskConical, Shirt, ShoppingBag, Sprout, Wheat } from "lucide-react";

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
  {
    icon: Ship,
    title: "Ocean Freight",
    items: [
      "FCL Shipments",
      "LCL Shipments",
      "Port-to-Port Services",
      "Door-to-Door Solutions",
    ],
  },
  {
    icon: Plane,
    title: "Air Freight",
    items: [
      "Express Shipping",
      "Cargo Handling",
      "Time-Sensitive Deliveries",
      "Global Air Network",
    ],
  },
  {
    icon: FileCheck2,
    title: "Customs Clearance",
    items: [
      "Documentation Management",
      "Import Clearance",
      "Export Clearance",
      "Regulatory Compliance",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    items: [
      "Inventory Management",
      "Storage Solutions",
      "Distribution Services",
      "Order Fulfillment",
    ],
  },
  {
    icon: Network,
    title: "Supply Chain Solutions",
    items: [
      "Procurement Support",
      "Cargo Consolidation",
      "Logistics Planning",
      "Vendor Coordination",
    ],
  },
  {
    icon: Truck,
    title: "Land Transportation",
    items: [
      "Domestic Distribution",
      "Cross-Border Transport",
      "Last Mile Delivery",
      "Fleet Management",
    ],
  },
];

const industries = [
  { name: "Agriculture", icon: Sprout },
  { name: "Textile", icon: Shirt },
  { name: "Food Processing", icon: Wheat },
  { name: "Chemicals", icon: FlaskConical },
  { name: "Manufacturing", icon: Factory },
  { name: "FMCG", icon: ShoppingBag },
];
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
  <SectionHeading
    eyebrow="Logistics Services"
    title="End-to-end logistics under one roof."
    center
  />

  <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    {serviceGroups.map((service, index) => (
      <div
        key={service.title}
        className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-elegant"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Service Number */}
        <div className="absolute right-6 top-6 text-5xl font-black text-primary/5">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icon */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-300 group-hover:bg-accent">
          <service.icon className="h-8 w-8 text-accent-foreground group-hover:text-primary" />
        </div>

        {/* Title */}
        <h3 className="relative z-10 mt-6 font-display text-2xl font-bold text-primary">
          {service.title}
        </h3>

        <p className="relative z-10 mt-2 text-sm text-muted-foreground">
          Professional logistics solutions tailored for global trade.
        </p>

        {/* Services */}
        <ul className="relative z-10 mt-6 space-y-3">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-foreground/80"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="relative z-10 mt-6 flex items-center justify-between border-t border-border pt-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            {service.items.length} Services
          </span>

          {/* <span className="text-sm font-semibold text-accent">
            Learn More →
          </span> */}
        </div>
      </div>
    ))}
  </div>
</Section>

     <Section surface>
  <SectionHeading
    eyebrow="Global Logistics Network"
    title="Global hubs, local expertise."
    center
  />

  <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {network.map((location, index) => (
      <div
        key={location}
        className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-elegant"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Number */}
        <div className="absolute right-5 top-4 text-5xl font-black text-primary/5">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icon */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5">
          <Globe2 className="h-8 w-8 text-accent" />
        </div>

        {/* Location */}
        <h3 className="relative z-10 mt-6 font-display text-xl font-bold text-primary">
          {location}
        </h3>

        <p className="relative z-10 mt-2 text-sm text-muted-foreground">
          Strategic logistics hub connecting international trade routes.
        </p>

        {/* Bottom Line */}
        <div className="relative z-10 mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-secondary" />
      </div>
    ))}
  </div>
</Section>

   <Section>
  <SectionHeading
    eyebrow="Industries Served"
    title="Trusted across sectors."
    center
  />

  <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {industries.map((industry, index) => (
      <div
        key={industry.name}
        className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-elegant"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Number */}
        <div className="absolute right-5 top-4 text-5xl font-black text-primary/5">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icon Circle */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
          <industry.icon className="h-8 w-8 text-accent" />
        </div>

        {/* Industry Name */}
        <h3 className="relative z-10 mt-6 font-display text-xl font-bold text-primary">
          {industry.name}
        </h3>

        <p className="relative z-10 mt-2 text-sm text-muted-foreground">
          Specialized market expertise and international business support.
        </p>

        {/* Bottom Accent */}
        <div className="relative z-10 mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-secondary" />
      </div>
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

      {/* <Section surface>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <SectionHeading eyebrow="Contact Form" title="Request a shipping quote." center />
          <div className="mt-8">
            <InquiryForm subject="Logistics Quote Request" fields={["name", "company", "email", "phone", "message"]} />
          </div>
        </div>
      </Section> */}
    </DivisionLayout>
  );
}
