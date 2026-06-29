import { Link } from "react-router-dom";
import { Eye, Target, Heart, Sparkles, TrendingUp, ShieldCheck, Users, ArrowRight, Globe2, Award, CheckCircle, Ship, GraduationCap, Briefcase, Megaphone, BarChart3, Wheat, Phone, Mail, MapPin, Calendar, Star } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { motion } from "framer-motion";
import founderImg from "@/assets/ISO.png";
import { useEffect } from "react";


const values = [
  { icon: ShieldCheck, label: "Integrity",     desc: "Honest, transparent dealings across every engagement." },
  { icon: Sparkles,   label: "Excellence",    desc: "World-class standards in every deliverable." },
  { icon: TrendingUp, label: "Innovation",    desc: "Modern thinking applied to traditional industries." },
  { icon: Heart,      label: "Growth",        desc: "Building businesses, careers, and communities." },
  { icon: Eye,        label: "Transparency",  desc: "Clear communication at every stage." },
  { icon: Users,      label: "Partnership",   desc: "Long-term relationships, not transactions." },
];

const team = [
  { name: "Manoj Vyas",     role: "Chairman & CEO",        bio: "Architect of the ORCEA ecosystem with 16+ years across global trade, logistics and international marketing." },
  { name: "Head of Academy",role: "Director, Education",   bio: "Leading curriculum design and mentorship across cohorts." },
  { name: "Head of Logistics",role:"Director, Logistics",  bio: "Cross-border supply chain expert across 40+ countries." },
  { name: "Head of Consulting",role:"Director, Consulting",bio: "Market entry strategist for SMEs and enterprises." },
];

const divisions = [
  { icon: Ship,          name: "Global Trade & Exports",   desc: "Connecting Indian commodities to 30+ countries worldwide." },
  { icon: GraduationCap, name: "Professional Education",   desc: "Skill development & certified EXIM training programmes." },
  { icon: Briefcase,     name: "Business Consulting",      desc: "Strategic advisory for startups, SMEs and enterprises." },
  { icon: Megaphone,     name: "Digital Marketing",        desc: "Performance-driven campaigns across global markets." },
  { icon: BarChart3,     name: "Logistics & Supply Chain", desc: "End-to-end freight, warehousing & last-mile delivery." },
  { icon: Wheat,         name: "Agricultural Exports",     desc: "Premium farm produce exported to international buyers." },
];

const achievements = [
  { icon: Award,   value: "1000+", label: "Students Trained"     },
  { icon: Globe2,  value: "50+",   label: "Countries Reached"    },
  { icon: Ship,    value: "5000+", label: "Container Shipments"  },
  { icon: Users,   value: "500+",  label: "Business Clients"     },
  { icon: Star,    value: "₹400Cr",label: "Logistics Managed"    },
  { icon: Calendar,value: "16+",   label: "Years Experience"     },
];

export default function About() {
   useEffect(() => {
    document.title = "About | ORCEA International";
  }, []);
  return (
    <>
      <PageHero
        eyebrow="About ORCEA Group"
        title="A global ecosystem for ambitious businesses."
        description="ORCEA Group was founded to bring together every capability a modern global business needs — under one trusted brand."
      />

      {/* ── Story + Vision/Mission ── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="From an idea to a global business ecosystem." />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              What began as a focused effort to demystify import-export for entrepreneurs grew into
              a multi-division group serving founders, exporters, manufacturers, students, and
              enterprises across the world. Today, ORCEA Group blends deep domain knowledge with
              modern digital execution to help clients move faster, smarter, and farther.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Headquartered in India with a global network spanning 50+ countries, ORCEA Group
              has become a trusted partner for businesses at every stage — from first-time exporters
              to enterprise-level logistics operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["ISO Certified", "APEDA Registered", "FSSAI Approved", "Spice Board Member"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  <CheckCircle className="h-3.5 w-3.5" /> {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl gradient-hero p-7 text-primary-foreground">
              <Target className="h-7 w-7 text-accent" />
              <h3 className="mt-5 font-display text-xl font-bold">Vision</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">To become a globally recognized business ecosystem empowering trade and entrepreneurship.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7">
              <Eye className="h-7 w-7 text-secondary" />
              <h3 className="mt-5 font-display text-xl font-bold text-primary">Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground">Helping businesses and individuals grow internationally with the right knowledge, tools, and partners.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 sm:col-span-2">
              <Globe2 className="h-7 w-7 text-accent" />
              <h3 className="mt-5 font-display text-xl font-bold text-primary">Global Reach</h3>
              <p className="mt-2 text-sm text-muted-foreground">Active operations across North America, Europe, Middle East, Africa and Asia-Pacific with 50+ country partnerships.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Achievements ── */}
      <section className="relative overflow-hidden gradient-hero py-16 text-primary-foreground">
        <div className="container-x mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-accent/20">
                  <a.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="font-display text-3xl font-extrabold text-accent">{a.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-primary-foreground/70">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Meet the Expert</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">About the Founder</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-105" style={{ background: "transparent", border: "2px solid hsl(var(--accent))", borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" }} />
              <div className="absolute -inset-3 opacity-20" style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)", borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" }} />
              <img
                src={founderImg}
                alt="Mr. Manoj Vyas — Founder"
                className="relative z-10 w-[320px] h-[400px] object-cover object-top"
                style={{ borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 260 }}
                className="absolute -bottom-4 -right-4 z-20 rounded-2xl border border-border bg-background px-5 py-3 shadow-xl text-center"
              >
                <p className="text-xl font-extrabold text-primary leading-none">16+</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260 }}
                className="absolute -top-4 -right-6 z-20 rounded-2xl border border-border bg-background px-4 py-3 shadow-xl text-center"
              >
                <p className="text-xl font-extrabold text-primary leading-none">5000+</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">Shipments</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed text-foreground/85">
              At ORCEA International Academy, we believe in{" "}
              <span className="font-bold text-foreground">empowering people with practical, actionable skills</span>{" "}
              to succeed in the global trade industry.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              Our academy was founded by{" "}
              <span className="font-bold text-primary">Mr. Manoj Vyas</span>, a seasoned professional with{" "}
              <span className="font-bold text-foreground">16+ years of deep expertise across Export-Import, Shipping, and Logistics industries</span>
              , Documentation & International Marketing.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              Having managed{" "}
              <span className="font-bold text-foreground">5000+ container shipments and international dealer networks across Europe, USA, Australia</span>{" "}
              and Asian Countries & also managed{" "}
              <span className="font-bold text-foreground">₹400 crore logistics operations</span>, Mr. Manoj Vyas brings
              insider knowledge of how the export-import industry really works.
            </p>

            {/* What he teaches */}
            <div className="rounded-2xl border border-border bg-muted/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Areas of Expertise</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Export-Import Documentation",
                  "International Shipping",
                  "Buyers Communication",
                  "Logistics Management",
                  "Foreign Trade Policy",
                  "Digital Export Marketing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["Export-Import Expert", "Shipping & Logistics", "International Marketing", "Documentation Specialist"].map((tag) => (
                <span key={tag} className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              {[
                { value: "16+",    label: "Years Experience"    },
                { value: "5000+",  label: "Container Shipments" },
                { value: "₹400Cr", label: "Logistics Managed"   },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Timeline ── */}
      {/* <Section surface>
        <SectionHeading eyebrow="Our Journey" title="Milestones that shaped ORCEA Group." center />
        <div className="mt-14 relative"> */}
          {/* Line */}
          {/* <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-6 items-center ${i % 2 === 0 ? "" : "lg:direction-rtl"}`}
              > */}
                {/* Year dot */}
                {/* <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-10 w-10 rounded-full gradient-hero border-4 border-background items-center justify-center z-10">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                </div> */}

                {/* {i % 2 === 0 ? (
                  <>
                    <div className="lg:text-right lg:pr-12">
                      <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold text-primary mb-2">{m.year}</span>
                      <h3 className="font-display text-lg font-bold text-foreground">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                    <div className="hidden lg:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block" />
                    <div className="lg:pl-12">
                      <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-bold text-primary mb-2">{m.year}</span>
                      <h3 className="font-display text-lg font-bold text-foreground">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section> */}

      {/* ── Divisions Overview ── */}
      <Section>
        <SectionHeading eyebrow="What We Do" title="Six divisions. One global standard." center />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent/30 hover:shadow-soft transition-all"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-hero">
                <d.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-primary">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Core Values ── */}
      <Section surface>
        <SectionHeading eyebrow="Core Values" title="The principles that guide our work." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-accent/40 transition-all">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{v.label}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Leadership ── */}
      {/* <Section>
        <SectionHeading eyebrow="Leadership" title="Meet the team driving ORCEA forward." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-elegant">
              <div className="aspect-[4/5] gradient-hero relative grid place-items-center">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-white/10 font-display text-3xl font-extrabold text-accent backdrop-blur">
                  {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-primary">{m.name}</h3>
                <div className="text-xs font-medium uppercase tracking-wider text-secondary">{m.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section> */}

      {/* ── Contact CTA ── */}
      <Section surface>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Get In Touch</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Ready to grow with ORCEA Group?</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Whether you're looking to export, learn, consult, or scale — our team is ready to help you take the next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold transition hover:scale-[1.03]">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/divisions" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted">
                Explore Divisions
              </Link>
            </div>
          </div>
                      <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.18 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                      </svg>
                    ),
                    bg: "bg-green-100",
                    color: "text-green-600",
                    label: "Call Us",
                    value: "+91 79841 82299",
                    href: "tel:+917984182299",
                  },
                  {
                    icon: (
                      /* Gmail-style envelope */
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                      </svg>
                    ),
                    bg: "bg-red-100",
                    color: "text-red-500",
                    label: "Email Us",
                    value: "info@orceagroup.com",
                    href: "mailto:info@orceagroup.com",
                  },
                  {
                    icon: (
                      /* Map pin */
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    ),
                    bg: "bg-blue-100",
                    color: "text-blue-600",
                    label: "Headquarters",
                    value: "Rajkot, Gujarat, India",
                    href: "https://maps.google.com/?q=Rajkot,Gujarat,India",
                  },
                  {
                    icon: (
                      /* Globe */
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    ),
                    bg: "bg-purple-100",
                    color: "text-purple-600",
                    label: "Global Offices",
                    value: "UAE · UK · USA · Malaysia",
                    href: "#",
                  },
                ].map(({ icon, bg, color, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 hover:shadow-soft hover:border-primary/20 transition-all group"
                  >
                    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${bg} ${color} group-hover:scale-110 transition-transform`}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
        </div>
      </Section>
    </>
  );
}