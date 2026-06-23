import { Link } from "react-router-dom";
import {
  GraduationCap,
  BarChart3,
  Briefcase,
  Ship,
  Megaphone,
  Wheat,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

import { divisions } from "../data/divisions";
import { PageHero, Section } from "../components/Section";

const iconMap = {
  GraduationCap,
  BarChart3,
  Briefcase,
  Ship,
  Megaphone,
  Wheat,
};

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        title="Six divisions. One global standard."
        description="Each ORCEA division is a specialist business — together they form an unmatched end-to-end partner."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {divisions.map((d) => {
            const Icon = iconMap[d.icon as keyof typeof iconMap];

            return (
              <div
                key={d.slug}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-elegant"
              >
                <div className="gradient-hero p-8 text-primary-foreground">
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>

                  <h2 className="mt-6 font-display text-2xl font-bold">
                    {d.name}
                  </h2>

                  <p className="mt-2 text-sm text-primary-foreground/80">
                    {d.description}
                  </p>
                </div>

                <div className="p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    Services
                  </div>

                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {d.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={d.href}
                    className="mt-6 inline-flex items-center gap-1.5 rounded-full gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    Explore {d.short}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}