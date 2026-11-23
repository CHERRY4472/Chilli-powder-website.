import { BRAND, whatsappLink, DEFAULT_ORDER_MESSAGE } from "../data";
import {
  CheckIcon,
  ChilliMark,
  FlameIcon,
  FlowButton,
  LeafIcon,
  PhoneIcon,
  SparkIcon,
  SunIcon,
  WhatsAppIcon,
} from "./ui";

const HERO_FACTS = ["100% homemade", "No colours or preservatives", "Stone-ground, small batch"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      {/* atmosphere */}
      <div className="pointer-events-none absolute -top-48 -right-24 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(232,115,43,0.17),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(179,21,27,0.09),transparent_68%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(42,25,21,0.05) 1px, transparent 1px)",
          backgroundSize: "96px 100%",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:py-20">
        {/* copy */}
        <div>
          <div className="hero-in" style={{ animationDelay: "60ms" }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/12 bg-white/55 px-4 py-2 backdrop-blur-sm">
              <ChilliMark className="h-3.5 w-3.5 text-chilli-600" />
              <span className="eyebrow text-[10px] text-ink-soft">
                Homemade chilli powder · Velvarthy
              </span>
            </span>
          </div>

          <h1
            className="display hero-in mt-6 text-[clamp(3rem,7.6vw,5.35rem)] leading-[0.93] font-normal text-ink"
            style={{ animationDelay: "150ms" }}
          >
            A little fire.
            <span className="ember-text mt-1 block pr-2 text-[0.96em] font-light italic">
              A lot of home.
            </span>
          </h1>

          <p
            className="hero-in mt-6 max-w-[30rem] text-[15px] leading-[1.8] text-ink-soft sm:text-base"
            style={{ animationDelay: "240ms" }}
          >
            Sun-dried chillies from around Valigonda, stone-ground in small batches and packed by
            hand in our own kitchen. Nothing added — just clean, honest heat at{" "}
            <span className="font-semibold text-ink">₹380 a kilo.</span>
          </p>

          <div
            className="hero-in mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ animationDelay: "310ms" }}
          >
            <div className="flex items-baseline gap-2">
              <span className="display text-[2.1rem] leading-none font-semibold text-chilli-700">
                ₹380
              </span>
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-ink-soft">
                per kg
              </span>
            </div>
            <span className="hidden h-8 w-px bg-ink/15 sm:block" />
            <span className="flex items-center gap-2 text-xs font-medium text-ink-soft">
              <SunIcon className="h-4 w-4 text-ember" />
              Ground fresh, packed after you order
            </span>
          </div>

          <div
            className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "380ms" }}
          >
            <FlowButton
              href={whatsappLink(DEFAULT_ORDER_MESSAGE)}
              target="_blank"
              className="w-full sm:w-auto"
              ariaLabel="Order homemade chilli powder on WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order on WhatsApp
            </FlowButton>
            <FlowButton href={BRAND.phoneHref} variant="ghost" className="w-full sm:w-auto">
              <PhoneIcon className="h-4 w-4" />
              Call {BRAND.phoneDisplay}
            </FlowButton>
          </div>

          <ul
            className="hero-in mt-9 flex max-w-lg flex-wrap gap-x-6 gap-y-3 border-t border-ink/10 pt-6"
            style={{ animationDelay: "460ms" }}
          >
            {HERO_FACTS.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-chilli-600/10 text-chilli-700">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.04em] text-ink-soft">
                  {fact}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* portrait */}
        <div className="hero-in relative mx-auto w-full max-w-[480px]" style={{ animationDelay: "300ms" }}>
          <div className="absolute inset-0 translate-x-3 translate-y-4 rotate-[1.6deg] rounded-[999px_999px_28px_28px] border border-gold/40 bg-[linear-gradient(160deg,rgba(234,201,139,0.5),rgba(179,21,27,0.14))]" />

          <div className="grain relative aspect-[4/5] overflow-hidden rounded-[999px_999px_28px_28px] border border-ink/10 bg-cream-deep shadow-[0_50px_90px_-45px_rgba(62,11,16,0.65)]">
            <img
              src="/images/hero-chilli.jpg"
              alt="Fresh homemade red chilli powder in a brass bowl surrounded by dried red chillies"
              className="h-full w-full scale-[1.02] object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.08]"
              width={960}
              height={1200}
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-maroon-950/75 via-maroon-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
              <div>
                <p className="eyebrow text-[9px] text-gold-soft">Our house powder</p>
                <p className="display mt-1 text-2xl leading-tight font-light italic text-cream sm:text-[1.7rem]">
                  Deep red. Honest heat.
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-cream/25 bg-cream/10 px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] uppercase text-cream backdrop-blur-sm">
                Small batch
              </span>
            </div>
          </div>

          {/* rotating price seal */}
          <div className="absolute -left-3 top-6 z-20 flex h-[104px] w-[104px] items-center justify-center rounded-full border border-gold/35 bg-maroon-900 text-cream shadow-[0_20px_40px_-18px_rgba(37,7,10,0.9)] sm:-left-7 sm:top-10 sm:h-[124px] sm:w-[124px]">
            <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
              <defs>
                <path id="heroSealPath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text
                fill="rgba(251,245,234,0.72)"
                fontSize="8.2"
                fontFamily="Manrope, sans-serif"
                fontWeight="700"
                letterSpacing="2.4"
              >
                <textPath href="#heroSealPath" startOffset="0">
                  HOMEMADE • SMALL BATCH • STONE GROUND •
                </textPath>
              </text>
            </svg>
            <div className="relative flex flex-col items-center leading-none">
              <span className="display text-[1.45rem] font-semibold text-cream sm:text-[1.7rem]">
                ₹380
              </span>
              <span className="mt-1 text-[7.5px] font-bold tracking-[0.22em] uppercase text-gold-soft">
                per kg
              </span>
            </div>
          </div>

          {/* floating note */}
          <div className="floaty absolute -bottom-5 left-1 z-20 flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream/95 px-4 py-3 shadow-[0_22px_45px_-25px_rgba(42,25,21,0.6)] backdrop-blur sm:-bottom-6 sm:left-[-14px]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-chilli-600/10 text-chilli-700">
              <LeafIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[11.5px] font-extrabold tracking-tight text-ink">
                Only red chillies. Nothing else.
              </p>
              <p className="mt-0.5 text-[10px] font-medium text-ink-soft">
                No colours, no preservatives
              </p>
            </div>
          </div>

          <div className="floaty-delay absolute -right-2 top-24 z-20 flex items-center gap-2 rounded-full border border-ink/10 bg-cream/95 px-3.5 py-2 shadow-lg sm:-right-4">
            <FlameIcon className="h-4 w-4 text-chilli-600" />
            <span className="text-[9.5px] font-extrabold tracking-[0.16em] uppercase text-ink">
              Medium–hot
            </span>
          </div>

          {/* decorative spark */}
          <SparkIcon className="absolute -right-1 bottom-20 h-7 w-7 text-gold/70 sm:-right-6" />
        </div>
      </div>

      {/* small scroll cue */}
      <div className="relative mx-auto hidden max-w-7xl px-8 pb-8 lg:block">
        <a
          href="#story"
          className="group inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] uppercase text-ink-soft transition-colors hover:text-chilli-700"
        >
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-ink/25 p-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-chilli-600" />
          </span>
          Scroll to meet the chilli
        </a>
      </div>
    </section>
  );
}
