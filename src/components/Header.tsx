import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { divisions } from "../data/divisions";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/divisions", label: "Services", hasMega: true },
  // { to: "/blog", label: "Blog" },
  // { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl shadow-soft" : "bg-white shadow-sm"
      }`}
    >
      <div className="container-x mx-auto flex h-18 max-w-7xl items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-10 w-10 place-items-center rounded-lg gradient-hero shadow-soft">
            <Globe className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-extrabold tracking-tight text-primary">ORCEA</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Group</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
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
                    `flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition hover:text-primary ${
                      isActive ? "text-primary" : "text-foreground/80"
                    }`
                  }
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </NavLink>
                {mega && (
                  <div className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-border bg-popover p-4 shadow-elegant">
                      <div className="grid grid-cols-2 gap-1">
                        {divisions.map((d) => (
                          <Link
                            key={d.slug}
                            to={d.href}
                            className="group rounded-xl p-3 transition hover:bg-muted"
                          >
                            <div className="text-sm font-semibold text-primary group-hover:text-secondary">
                              {d.name}
                            </div>
                            <div className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                              {d.description}
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
                  `rounded-md px-4 py-2 text-sm font-medium transition hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-elegant"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md text-primary lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-3">
              <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Divisions
              </div>
              {divisions.map((d) => (
                <Link
                  key={d.slug}
                  to={d.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
                >
                  {d.short}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full gradient-hero px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
