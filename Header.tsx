import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS, whatsappLink, DEFAULT_ORDER_MESSAGE } from "../data";
import { cn } from "../utils/cn";
import {
  ChilliMark,
  CloseIcon,
  FlowButton,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
  PinIcon,
} from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 10);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, top / height) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const whatsappHref = whatsappLink(DEFAULT_ORDER_MESSAGE);

  return (
    <>
      {/* announcement strip */}
      <div className="relative z-40 bg-maroon-950 text-cream/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-[10px] font-medium tracking-[0.16em] uppercase sm:px-8">
          <p className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Fresh batch · packed in Velvarthy
          </p>
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 sm:flex">
              <PinIcon className="h-3 w-3 text-gold/80" />
              Valigonda, Yadadri Bhuvanagiri
            </span>
            <a
              href={BRAND.phoneHref}
              className="flex items-center gap-1.5 text-cream transition-colors hover:text-gold"
            >
              <PhoneIcon className="h-3 w-3" />
              {BRAND.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-500",
          scrolled
            ? "border-ink/10 bg-cream/90 shadow-[0_10px_40px_-24px_rgba(42,25,21,0.4)] backdrop-blur-xl"
            : "border-transparent bg-cream/70 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#home" className="group flex items-center gap-3" aria-label="Adithya Traders home">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-maroon-900 text-gold-soft shadow-[0_8px_20px_-8px_rgba(62,11,16,0.8)] ring-1 ring-gold/25 transition-transform duration-500 group-hover:rotate-[-8deg]">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,201,139,0.3),transparent_60%)]" />
              <ChilliMark className="relative h-6 w-6 translate-x-[1px]" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="display text-[1.22rem] font-semibold tracking-tight text-ink">
                Adithya <span className="italic font-normal text-chilli-700">Traders</span>
              </span>
              <span className="mt-1.5 text-[8.5px] font-bold tracking-[0.26em] uppercase text-ink-soft">
                Homemade chilli powder
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                data-active={active === link.id}
                className="nav-link text-[12.5px] font-semibold tracking-wide text-ink/80"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-baseline gap-1 xl:flex">
              <span className="display text-xl font-semibold text-ink">₹380</span>
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-ink-soft">
                / kg
              </span>
            </span>
            <a
              href={BRAND.phoneHref}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-chilli-600/40 hover:text-chilli-700 sm:flex"
              aria-label={`Call Adithya Traders on ${BRAND.phoneDisplay}`}
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <FlowButton
              href={whatsappHref}
              target="_blank"
              size="sm"
              className="hidden sm:inline-flex"
              ariaLabel="Order chilli powder on WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order now
            </FlowButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-ink transition-colors hover:border-chilli-600/40 hover:text-chilli-700 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* flowing scroll progress */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-ink/5">
          <div
            className="h-full origin-left bg-[linear-gradient(90deg,#b3151b,#e8732b,#d6a24a,#b3151b)] transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-maroon-950/45 backdrop-blur-sm transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col overflow-y-auto bg-cream px-6 pt-6 pb-8 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <span className="display text-xl font-semibold">
              Adithya <span className="italic text-chilli-700">Traders</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink"
              aria-label="Close menu"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-ink/10 py-4"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="display text-2xl font-medium text-ink transition-colors group-hover:text-chilli-700">
                  {link.label}
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-ink/30">
                  0{i + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-cream-deep/70 px-4 py-3">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-soft">
                  Fresh chilli powder
                </p>
                <p className="display mt-1 text-2xl font-semibold text-chilli-700">
                  ₹380 <span className="text-sm font-normal text-ink-soft">/ kg</span>
                </p>
              </div>
              <ChilliMark className="h-8 w-8 text-chilli-600/70" />
            </div>
            <FlowButton href={whatsappHref} target="_blank" className="w-full">
              <WhatsAppIcon className="h-4 w-4" />
              Order on WhatsApp
            </FlowButton>
            <FlowButton href={BRAND.phoneHref} variant="ghost" className="w-full">
              <PhoneIcon className="h-4 w-4" />
              {BRAND.phoneDisplay}
            </FlowButton>
            <p className="text-center text-[11px] leading-relaxed text-ink-soft">
              Velvarthy, Valigonda
              <br />
              Yadadri Bhuvanagiri, Telangana
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
