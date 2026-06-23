import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  surface = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  surface?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`${surface ? "bg-surface" : ""} py-20 md:py-28 ${className}`}>
      <div className="container-x mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.4), transparent 40%), radial-gradient(circle at 80% 60%, rgba(21,101,192,0.5), transparent 50%)" }} />
      <div className="container-x relative mx-auto max-w-7xl py-20 md:py-28">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/80 md:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
