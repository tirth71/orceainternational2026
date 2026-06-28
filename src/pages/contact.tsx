
import { PageHero, Section } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { Phone, Mail, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

const info = [
  { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: Mail, label: "Email", value: "contact@orceagroup.com", href: "mailto:contact@orceagroup.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 00000 00000", href: "https://wa.me/910000000000" },
  { icon: MapPin, label: "Office", value: "Global HQ — Mumbai, India", href: "#map" },
];

const promises = [
  "Response within 24 Hours",
  "Dedicated Business Consultant",
  "100% Confidential Discussion",
  "Customized Business Solutions",
  "Global Trade & Export Experts",
  "End-to-End Project Support",
];

const industries = [
  "Agriculture",
  "Food Processing",
  "Textile",
  "Pharmaceutical",
  "Engineering",
  "Chemicals",
  "Logistics",
  "Manufacturing",
  "FMCG",
  "Retail",
  "Import & Export",
  "Education",
];

const stats = [
  {
    number: "1000+",
    label: "Students Trained",
  },
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "30+",
    label: "Countries Served",
  },
  {
    number: "100+",
    label: "Business Clients",
  },
];



export default function Contact() {
  useEffect(() => {
        document.title = "Contact | ORCEA International";
      }, []);
      
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build global success together."
        description="Reach out — our advisors usually respond within one business day."
      />

      <Section surface>
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Why Choose ORCEA
          </div>

          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary">
            Our Commitment to Every Client
          </h2>

          <p className="mt-4 text-muted-foreground">
            Every enquiry receives personal attention from our experienced team. We
            focus on understanding your business objectives before recommending the
            right solution.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Industries We Serve
          </div>

          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary md:text-4xl">
            Solutions Across Multiple Industries
          </h2>

          <p className="mt-4 mx-auto max-w-3xl text-base leading-7 text-muted-foreground">
            ORCEA Group supports businesses across diverse industries through consulting,
            exports, logistics, training, and digital transformation services tailored
            to meet modern business challenges.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {industries.map((industry) => (
              <div
                key={industry}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-7
                  py-3.5
                  cursor-pointer
                  shadow-sm
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-secondary
                  hover:bg-secondary/5
                  hover:shadow-xl
                "
              >
                {/* Animated Top Border */}
                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-0.5
                    w-0
                    bg-secondary
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

                <span
                  className="
                    relative
                    text-sm
                    font-semibold
                    text-slate-700
                    transition-colors
                    duration-300
                    group-hover:text-secondary
                  "
                >
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>


        <div className="pt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-2xl
              "
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-secondary to-primary" />

              {/* Background Circle */}
              <div
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-secondary/5 transition-all duration-500 group-hover:scale-125 group-hover:bg-secondary/10
                "
              />

              {/* Number */}
              <h3
                className="relative text-5xl font-black text-primary transition-colors duration-300 group-hover:text-secondary
                "
              >
                {item.number}
              </h3>

              {/* Divider */}
              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-secondary transition-all duration-300 group-hover:w-20" />

              {/* Label */}
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

    

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
                <InquiryForm subject="General Inquiry" fields={["name", "company", "email", "phone", "service", "message"]} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
