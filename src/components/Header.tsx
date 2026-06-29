import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { divisions } from "../data/divisions";
import logoFull from "../assets/logo//orcea---removebg-preview.png";

const nav = [
  { to: "/",          label: "Home"     },
  { to: "/about",     label: "About"    },
  { to: "/divisions", label: "Services", hasMega: true },
  { to: "/contact",   label: "Contact"  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [mega, setMega]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-soft"
          : "bg-white"
      }`}
    >
      <div className="container-x mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">

        {/* ── Logo — cropped to just the main mark ── */}
         {/* ── Logo ── */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logoFull}
            alt="ORCEA International"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) =>
            item.hasMega ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all relative group ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground/70 hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                      {/* Active underline */}
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"}`} />
                    </>
                  )}
                </NavLink>

                {mega && (
                  <div className="absolute left-1/2 top-full w-[700px] -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-border bg-white p-5 shadow-elegant">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 px-2">
                        Our Divisions
                      </p>
                      <div className="grid grid-cols-2 gap-1">
                        {divisions.map((d) => (
                          <Link
                            key={d.slug}
                            to={d.href}
                            className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-muted"
                          >
                            <div className="mt-0.5 h-2 w-2 rounded-full bg-primary/40 group-hover:bg-primary shrink-0 transition-colors" />
                            <div>
                              <div className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                                {d.name}
                              </div>
                              <div className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                                {d.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-all group ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/70 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"}`} />
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        {/* ── CTA Button — premium gold style ── */}
        <div className="hidden items-center lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-gold transition-all hover:scale-[1.04] hover:shadow-elegant active:scale-100"
          >
            Book Consultation
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="grid h-10 w-10 place-items-center rounded-md text-primary lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {open && (
        <div className="border-t border-border bg-white lg:hidden shadow-lg">
          <div className="container-x mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5">

            <div className="mb-4 pb-3 border-b border-border">
              <img
                src={logoFull}
                alt="ORCEA International"
                style={{ height: "44px", maxWidth: "140px", objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-border pt-4">
              <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Divisions
              </p>
              {divisions.map((d) => (
                <Link
                  key={d.slug}
                  to={d.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                  {d.short}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full gradient-gold px-5 py-3 text-sm font-semibold text-accent-foreground shadow-gold"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}