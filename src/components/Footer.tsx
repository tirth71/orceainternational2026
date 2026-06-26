import { Link } from "react-router-dom";
import {
  Globe, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter,
  Ship, GraduationCap, Briefcase, Megaphone, BarChart3, Wheat,
  BookOpen, FileText, Award, Clock, Users, TrendingUp,
} from "lucide-react";
import { divisions } from "../data/divisions";

const marqueeIcons = [
  { icon: Ship,          label: "Global Trade"       },
  { icon: GraduationCap, label: "EXIM Academy"       },
  { icon: Briefcase,     label: "Consulting"         },
  { icon: Megaphone,     label: "Digital Marketing"  },
  { icon: BarChart3,     label: "Trade Intelligence" },
  { icon: Wheat,         label: "Agri Exports"       },
  { icon: BookOpen,      label: "Study Materials"    },
  { icon: FileText,      label: "Documentation"      },
  { icon: Award,         label: "Certification"      },
  { icon: Clock,         label: "Weekend Batches"    },
  { icon: Users,         label: "1000+ Students"     },
  { icon: TrendingUp,    label: "Career Growth"      },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">

      {/* ── Scrolling Icon Strip ── */}
      <div className="border-b border-white/10 py-4 overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "footerMarquee 11s linear infinite" }}
        >
          {[...marqueeIcons, ...marqueeIcons].map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 mx-6 shrink-0"
            >
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-white/8 border border-white/10">
                <item.icon className="h-3.5 w-3.5 text-accent" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/50">
                {item.label}
              </span>
              <span className="ml-4 text-white/15 select-none">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* keyframe */}
      <style>{`
        @keyframes footerMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── Rest of your existing footer unchanged ── */}
      <div className="container-x mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Logo */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <Globe className="h-5 w-5 text-accent" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg font-extrabold">ORCEA</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">Group</div>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Empowering global trade, education and business growth across
              continents through a unified ecosystem of premium services.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/5 transition hover:bg-accent hover:text-accent-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Divisions */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Divisions</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link to={d.href} className="text-primary-foreground/75 hover:text-accent">{d.short}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Company</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link to="/about"     className="text-primary-foreground/75 hover:text-accent">About Us</Link></li>
              <li><Link to="/divisions" className="text-primary-foreground/75 hover:text-accent">Services</Link></li>
              <li><Link to="/contact"   className="text-primary-foreground/75 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Get in touch</div>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>+91 00000 00000</span></li>
              <li className="flex gap-3"><Mail  className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>info@orceainternational.com</span></li>
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>Rajkot, India</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <div>© {new Date().getFullYear()} ORCEA International. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <span>Developed by</span>
            <a href="https://www.linkedin.com/in/tirth-savaliya-115187252" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
              Tirth Savaliya
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}