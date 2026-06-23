
import { PageHero, Section } from "@/components/Section";
import { GraduationCap, Wheat, Ship, Briefcase, Users, Camera } from "lucide-react";

// export const Route = createFileRoute("/gallery")({
//   head: () => ({
//     meta: [
//       { title: "Gallery — ORCEA Group" },
//       { name: "description", content: "Moments from ORCEA Group: training sessions, exports, logistics operations and corporate events." },
//       { property: "og:title", content: "Gallery — ORCEA Group" },
//       { property: "og:description", content: "A visual journey through ORCEA Group's work and events." },
//       { property: "og:url", content: "/gallery" },
//     ],
//     links: [{ rel: "canonical", href: "/gallery" }],
//   }),
//   component: Gallery,
// });

const items = [
  { label: "Training Session", icon: GraduationCap, span: "md:col-span-2 md:row-span-2" },
  { label: "Export Products", icon: Wheat, span: "" },
  { label: "Logistics Operations", icon: Ship, span: "" },
  { label: "Corporate Meeting", icon: Briefcase, span: "md:col-span-2" },
  { label: "Business Event", icon: Users, span: "" },
  { label: "Production Floor", icon: Camera, span: "" },
  { label: "Shipping Port", icon: Ship, span: "md:col-span-2" },
  { label: "Mentorship", icon: GraduationCap, span: "" },
];

export default function Gallery() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from across ORCEA." description="A visual journey through our training, exports, logistics and corporate events." />
      <Section>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl gradient-hero ${it.span}`}>
              <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.5), transparent 50%)" }} />
              <div className="absolute inset-0 grid place-items-center">
                <it.icon className="h-16 w-16 text-accent/80 transition group-hover:scale-110" strokeWidth={1} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                <div className="text-sm font-semibold text-primary-foreground">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
