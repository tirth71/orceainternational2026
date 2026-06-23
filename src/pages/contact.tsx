
import { PageHero, Section } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — ORCEA Group" },
//       { name: "description", content: "Talk to ORCEA Group's team — phone, email, WhatsApp and office location." },
//       { property: "og:title", content: "Contact — ORCEA Group" },
//       { property: "og:description", content: "Get in touch with the ORCEA Group team." },
//       { property: "og:url", content: "/contact" },
//     ],
//     links: [{ rel: "canonical", href: "/contact" }],
//   }),
//   component: Contact,
// });

const info = [
  { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: Mail, label: "Email", value: "contact@orceagroup.com", href: "mailto:contact@orceagroup.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 00000 00000", href: "https://wa.me/910000000000" },
  { icon: MapPin, label: "Office", value: "Global HQ — Mumbai, India", href: "#map" },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build global success together."
        description="Reach out — our advisors usually respond within one business day."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid gap-4">
              {info.map((i) => (
                <a key={i.label} href={i.href} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-secondary/30 hover:shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/10 text-secondary">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{i.label}</div>
                    <div className="mt-0.5 font-display text-base font-bold text-primary group-hover:text-secondary">{i.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div id="map" className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="ORCEA Group Office"
                src="https://www.google.com/maps?q=Mumbai,India&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
              <h2 className="font-display text-2xl font-extrabold text-primary md:text-3xl">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">Tell us a little about what you're looking for — we'll route it to the right team.</p>
              <div className="mt-8">
                <InquiryForm subject="General Inquiry" fields={["name", "company", "email", "phone", "message"]} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
