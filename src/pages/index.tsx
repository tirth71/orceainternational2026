import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap, BarChart3, Briefcase, Ship, Megaphone, Wheat,
  ArrowRight, Globe2, Award, Users, Layers, Shield, Network,
  CheckCircle2, Star, ChevronRight,
} from "lucide-react";

import { CheckCircle, Calendar, Clock, BookOpen } from "lucide-react";
import { divisions, stats, countries } from "../data/divisions";
import { Section, SectionHeading } from "../components/Section";

import iso from "../assets/ISO.png";
import fssai from "../assets/FSSAI_logo.png";
import apeda from "../assets/apeda.png";
import usda from "../assets/USDA_logo.png";
import msme from "../assets/msme.png";
import spiceBoard from "../assets/Spices_Board_of_India_Logo.png";

const iconMap = { GraduationCap, BarChart3, Briefcase, Ship, Megaphone, Wheat };
const certificates = [iso, fssai, apeda, usda, msme, spiceBoard];

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBlock />
      <DivisionsGrid />
      <WhyChoose />
      <Stats />
      <Presence />
      <Course />
      <Certificates />
       <Success />
      <CtaBlock />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: // Option 1 — Business meeting (current recommendation)

       "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')",


       
// "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')"

// "url('https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1920&q=80')"

// "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80')"


// "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
    }}
  />
  <div className="absolute inset-0 bg-black/75" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

  <div className="container-x relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT: Text Content */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          A Global Business Ecosystem
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl"
        >
          One Group.
          <br />
          <span className="text-gradient-gold">Multiple Business</span>
          <br />
          Solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-lg"
        >
          ORCEA Group delivers world-class services across international trade,
          business consulting, logistics, professional education, digital
          marketing, and global exports.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/divisions"
            className="group inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold transition hover:scale-[1.03] active:scale-100"
          >
            Explore Businesses
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 hover:scale-[1.03] active:scale-100"
          >
            Book Consultation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 flex flex-wrap gap-10 border-t border-white/20 pt-10"
        >
          {stats.slice(0, 3).map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-extrabold text-accent">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT: Business Cards */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="hidden lg:flex flex-col gap-4"
      >
        {[
          { icon: Ship,         title: "Global Trade & Exports",     desc: "Connecting Indian commodities to 30+ countries worldwide.",  delay: 0.35 },
          { icon: Briefcase,    title: "Business Consulting",        desc: "Strategic advisory for startups, SMEs and enterprises.",     delay: 0.45 },
          { icon: GraduationCap,title: "Professional Education",     desc: "Skill development & certified training programmes.",         delay: 0.55 },
          { icon: Megaphone,    title: "Digital Marketing",          desc: "Performance-driven campaigns across global markets.",        delay: 0.65 },
          { icon: BarChart3,    title: "Logistics & Supply Chain",   desc: "End-to-end freight, warehousing & last-mile delivery.",     delay: 0.75 },
        ].map(({ icon: Icon, title, desc, delay }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              x: 12,
              scale: 1.03,
              backgroundColor: "rgba(255,255,255,0.15)",
              boxShadow: "0 10px 30px rgba(255,255,255,0.15)",
              borderColor: "rgba(255,255,255,0.4)",
            }}
            className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md px-5 py-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-accent/20">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/60">{desc}</p>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 shrink-0 self-center text-white/30" />
          </motion.div>
        ))}
      </motion.div>

    </div>
  </div>
</section>
  );
}

function AboutBlock() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="About ORCEA Group"
            title="A unified ecosystem built for global business."
            description="ORCEA Group brings together six premium divisions under one trusted brand — combining decades of expertise across trade, education, consulting, logistics, marketing and exports."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {[
            { icon: Globe2, label: "Global Trade", desc: "Cross-border solutions across 50+ countries." },
            { icon: GraduationCap, label: "Business Education", desc: "Industry-leading professional training." },
            { icon: Briefcase, label: "Consulting", desc: "Strategy that scales across markets." },
            { icon: Ship, label: "Logistics", desc: "End-to-end supply chain expertise." },
            { icon: Megaphone, label: "Marketing", desc: "Performance-driven brand growth." },
            { icon: Wheat, label: "Exports", desc: "Premium agricultural exports worldwide." },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/10 text-secondary">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-base font-bold text-primary">{item.label}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function DivisionsGrid() {
  return (
    <Section surface>
      <SectionHeading
        eyebrow="Our Divisions"
        title="Six divisions. One global standard."
        description="Each division is a specialist business in its own right — combined, they form an unmatched end-to-end partner for organizations going global."
        center
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {divisions.map((d, i) => {
          const Icon = iconMap[d.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.07 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={d.href}
                className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-elegant hover:border-accent/30"
              >
                {/* Top color bar */}
                <div className="h-1.5 w-full gradient-hero" />

                <div className="flex flex-col flex-1 p-7">

                  {/* Icon + Number */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-hero text-primary-foreground shadow-soft">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-4xl font-extrabold text-border group-hover:text-accent/20 transition-colors select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title + Desc */}
                  <h3 className="font-display text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                    {d.description}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px bg-border group-hover:bg-accent/20 transition-colors" />

                  {/* Services */}
                  <ul className="space-y-2 mb-6">
                    {d.services.slice(0, 3).map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-foreground/70">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-xs font-semibold text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 w-fit">
                    Explore Division
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>

                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function WhyChoose() {
  const items = [
    { icon: Globe2, title: "Global Expertise", desc: "Operations and partnerships across continents." },
    { icon: Award, title: "Industry Experience", desc: "A decade of proven results in global trade." },
    { icon: Users, title: "Professional Team", desc: "Specialists across trade, law and logistics." },
    { icon: Layers, title: "End-to-End Solutions", desc: "From training to shipping — all under one roof." },
    { icon: Shield, title: "Trusted Partner", desc: "Compliance, transparency and accountability first." },
    { icon: Network, title: "International Reach", desc: "Active in 50+ countries and growing." },
  ];
  return (
    <Section>
      <SectionHeading eyebrow="Why Choose ORCEA" title="Built on trust. Engineered for global impact." center />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40 hover:shadow-soft">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent-foreground">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-primary">{it.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 text-primary-foreground md:py-20">
      <div className="container-x mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-extrabold tracking-tight text-accent md:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-primary-foreground/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Presence() {
  return (
   <Section>
  <div className="grid items-center gap-12 lg:grid-cols-2">

    {/* LEFT */}
    <div>
      <SectionHeading
        eyebrow="Global Presence"
        title="Active across continents, trusted across borders."
        description="From North America to the Gulf, Europe to Asia-Pacific — ORCEA Group operates wherever ambitious businesses need a partner."
      />

      {/* Stats row */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {[
          { value: "50+", label: "Countries" },
          { value: "8",   label: "Regions"   },
          { value: "24/7",label: "Support"   },
        ].map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card px-5 py-4 text-center"
          >
            <div className="font-display text-2xl font-extrabold text-primary">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Country tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {countries.map((c, i) => (
          <motion.span
            key={c}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>

    {/* RIGHT: image collage */}
    <div className="relative h-[480px]">

      {/* Main large image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute left-0 top-0 h-[300px] w-[75%] overflow-hidden rounded-3xl shadow-xl"
      >
        <img
          src="https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=900&q=80"
          alt="Global shipping"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-sm">
          <p className="text-xs font-semibold text-white">Global Shipping Network</p>
          <p className="text-[10px] text-white/60">50+ active trade routes</p>
        </div>
      </motion.div>

      {/* Bottom-right image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="absolute bottom-0 right-0 h-[240px] w-[65%] overflow-hidden rounded-3xl shadow-xl"
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
          alt="Business team"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-sm">
          <p className="text-xs font-semibold text-white">Expert Teams Worldwide</p>
          <p className="text-[10px] text-white/60">Local knowledge, global reach</p>
        </div>
      </motion.div>

      {/* Small accent image top-right */}
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="absolute right-0 top-0 h-[140px] w-[22%] overflow-hidden rounded-2xl shadow-lg"
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
          alt="Consultant"
          className="h-full w-full object-cover"
        />
      </motion.div> */}

      {/* Floating badge — center overlap */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, type: "spring", stiffness: 260 }}
        className="absolute left-[58%] top-[44%] -translate-x-1/2 -translate-y-1/2 z-10 rounded-2xl border border-border bg-background px-5 py-4 shadow-2xl text-center"
      >
        <Globe2 className="mx-auto h-7 w-7 text-accent mb-1" strokeWidth={1.2} />
        <p className="text-sm font-extrabold text-foreground leading-none">50+</p>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">Countries</p>
      </motion.div>

    </div>
  </div>
</Section>
  );
}


const learningPaths = [
  {
    type: "Online Course",
    desc: "Learn from anywhere with an internet connection",
    price: "₹10,500",
    original: "₹15,500",
    cta: "Start Online Learning",
    color: "border-accent",
    badge: "Most Popular",
    schedule: { day: "Every Sunday", duration: "4 hours", total: "Duration: 6 Sundays" },
    features: [
      "Live Online Lectures on Zoom",
      "Study Materials",
      "Copy of Document Templates",
      "Buyers Communication Templates",
      "Online Mentor Support",
      "Lifetime EXIM Updates/News",
      "Certificate of Completion",
      "Post-course mentorship to guide your first export",
      "Free Lifetime Helpdesk Support on Email",
      "Guidance for Job in Export Import Industry",
      "Free Assistance for Website & Digital Marketing",
      "Free Latest Updates on Export Import",
      "Live Searching Exporter-Importer (Buyers) Data",
    ],
  },
  {
    type: "Offline Course",
    desc: "Intensive classroom training with hands-on practice",
    price: "₹15,000",
    original: "₹20,000",
    cta: "Join Classroom Training",
    color: "border-primary",
    badge: "Hands-On",
    schedule: { day: "Every Sunday", duration: "4 hours", total: "Duration: 6 Sundays" },
    features: [
      "Face to Face Classroom Training with Expert Faculty",
      "Printed Study Materials & Document Kits",
      "Buyers Communication Practice Sessions",
      "Mock Export-Import Documentation Practice",
      "Personal Mentor Support",
      "Lifetime EXIM Updates",
      "Certificate of Completion",
      "Post-course mentorship to guide your first export",
      "Free Lifetime Helpdesk Support on Email",
      "Guidance for Job in Export Import Industry",
      "Free Assistance for Website & Digital Marketing",
      "Free Latest Updates on Export-Import",
      "Live Searching Exporter-Importer (Buyers) Data",
    ],
  },
];


function Course() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Education Division</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Choose Your Learning Path</h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base">
            Select the format that best fits your schedule and learning preferences
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {learningPaths.map((plan, idx) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`relative rounded-3xl border-2 ${plan.color} bg-background flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {plan.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-lg font-extrabold text-foreground">{plan.type}</h3>
                  <p className="text-sm text-primary mt-0.5">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 bg-muted rounded-2xl px-4 py-3 mb-5">
                  <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{plan.original}</span>
                  <span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    Save ₹5,000
                  </span>
                </div>

                {/* Schedule */}
                <div className="bg-muted/60 rounded-2xl px-4 py-3 mb-5">
                  <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Schedule</p>
                  <div className="space-y-1.5">
                    {[
                      { icon: Calendar, text: plan.schedule.day },
                      { icon: Clock,    text: plan.schedule.duration },
                      { icon: BookOpen, text: plan.schedule.total },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="mt-auto w-full inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 hover:scale-[1.02] active:scale-100"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          🎓 Both courses include a Certificate of Completion & lifetime helpdesk support.{" "}
          <Link to="/contact" className="text-primary font-medium hover:underline">
            Have questions? Contact us →
          </Link>
        </motion.p>

      </div>
    </section>
  );
}


function Certificates(){
return(

      <section className="py-16 bg-background overflow-hidden px-8">

        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase text-sm tracking-wider">
            Certification Approval
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Certifications & Compliance Logos
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10"></div>

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10"></div>

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity
            }}
          >
            {[...certificates, ...certificates].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center 
          bg-muted border border-border 
          rounded-xl shadow-sm
          px-8 py-6
          min-w-[160px]"
              >
                <img
                  src={logo}
                  alt="certificate"
                  className="h-10 md:h-12 object-contain"
                />
              </div>
            ))}
          </motion.div>

        </div>

      </section>

);

}




function Success() {
  const stories = [
    { name: "Rohan Mehta", role: "Founder, Agro Exports", quote: "ORCEA Academy turned an idea into a fully operational export business within six months." },
    { name: "Aisha Khan", role: "Director, FreshFruits Co.", quote: "Their consulting and logistics teams helped us enter UAE and Saudi markets seamlessly." },
    { name: "Daniel Carter", role: "CEO, BrandLabs", quote: "Best end-to-end partner we've worked with — strategy, marketing, and execution." },
  ];
  return (
    <Section surface>
      <SectionHeading eyebrow="Success Stories" title="Trusted by founders and enterprises worldwide." center />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {stories.map((s) => (
          <div key={s.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{s.quote}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
              <div className="grid h-10 w-10 place-items-center rounded-full gradient-hero font-display text-sm font-bold text-primary-foreground">
                {s.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold text-primary">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}


function CtaBlock() {
  return (
    <section className="container-x mx-auto max-w-7xl pb-20">
      <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 text-primary-foreground md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Let's build global success together.
            </h2>
            <p className="mt-4 text-base text-primary-foreground/80 md:text-lg">
              Talk to our experts — discover how ORCEA Group's ecosystem can accelerate your business.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/10">
              Schedule Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

