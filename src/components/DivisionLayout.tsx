import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { PageHero, Section, SectionHeading } from "./Section";
import { divisions } from "../data/divisions";


// Demo text
//third demo

// Demoooooo


export function DivisionLayout({
  slug,
  heroTitle,
  heroDescription,
  children,
}: {
  slug: string;
  heroTitle: string;
  heroDescription: string;
  children: ReactNode;
}) {
  const d = divisions.find((x) => x.slug === slug);

  if (!d) return null;

  return (
    <>
      <PageHero
        eyebrow={d.short}
        title={heroTitle}
        description={heroDescription}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/divisions"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10"
          >
            All Divisions
          </Link>
        </div>
      </PageHero>

      {children}
    </>
  );
}

export function ServicesGrid({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow: string;
  items: { title: string; desc: string }[];
}) {
  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} center />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15">
              <CheckCircle2 className="h-5 w-5 text-accent-foreground" />
            </div>

            <h3 className="mt-5 font-display text-lg font-bold text-primary">
              {it.title}
            </h3>

            <p className="mt-1.5 text-sm text-muted-foreground">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ProcessTimeline({
  steps,
}: {
  steps: { title: string; desc: string }[];
}) {
  return (
    <Section surface>
      <SectionHeading
        eyebrow="How it works"
        title="Our process, simplified."
        center
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative rounded-2xl border border-border bg-card p-6"
          >
            <div className="font-display text-4xl font-extrabold text-gradient-gold">
              {String(i + 1).padStart(2, "0")}
            </div>

            <h3 className="mt-3 font-display text-lg font-bold text-primary">
              {s.title}
            </h3>

            <p className="mt-1.5 text-sm text-muted-foreground">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}