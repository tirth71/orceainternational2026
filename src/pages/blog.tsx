
import { PageHero, Section } from "@/components/Section";
import { ArrowRight, Calendar } from "lucide-react";

// export const Route = createFileRoute("/blog")({
//   head: () => ({
//     meta: [
//       { title: "Insights & Blog — ORCEA Group" },
//       { name: "description", content: "Trade updates, export news, logistics insights and business growth — from the ORCEA Group team." },
//       { property: "og:title", content: "Insights & Blog — ORCEA Group" },
//       { property: "og:description", content: "Trade updates, export news and business growth insights." },
//       { property: "og:url", content: "/blog" },
//     ],
//     links: [{ rel: "canonical", href: "/blog" }],
//   }),
//   component: Blog,
// });

const categories = ["Export News", "Trade Updates", "Business Growth", "Logistics", "Digital Marketing"];

const posts = [
  { title: "Top 10 export markets for Indian spices in 2026", category: "Export News", date: "May 14, 2026", excerpt: "Demand patterns, pricing and regulatory shifts in the global spice trade." },
  { title: "How to register for IEC and start exporting", category: "Business Growth", date: "Apr 28, 2026", excerpt: "A step-by-step guide for first-time Indian exporters." },
  { title: "Sea freight rates: what's changing in Q3", category: "Logistics", date: "Apr 12, 2026", excerpt: "Analysis of major lane shifts and what it means for your shipments." },
  { title: "Performance marketing for export brands", category: "Digital Marketing", date: "Mar 30, 2026", excerpt: "The funnel that consistently delivers qualified international leads." },
  { title: "Agri-export compliance changes you should know", category: "Trade Updates", date: "Mar 21, 2026", excerpt: "Regulatory updates impacting exports of agricultural products." },
  { title: "Building a buyer pipeline with trade data", category: "Trade Updates", date: "Mar 04, 2026", excerpt: "Turn shipment intelligence into a predictable buyer pipeline." },
];

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Sharp thinking from the ORCEA team."
        description="Practical guidance and analysis across export, logistics, marketing and global business growth."
      />
      <Section>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary">{c}</span>
          ))}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[16/9] gradient-hero relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(212,175,55,0.5), transparent 40%)" }} />
                <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur">
                  {p.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {p.date}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-primary group-hover:text-secondary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                  Read more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
