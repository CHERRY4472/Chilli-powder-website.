import { ADDRESS_LINE } from "../data";
import { ArrowIcon, ChilliMark, Eyebrow, LeafIcon, Reveal, SparkIcon } from "./ui";

const STATS = [
  { value: "100%", label: "Homemade" },
  { value: "0", label: "Preservatives" },
  { value: "₹380", label: "Per kilogram" },
  { value: "1", label: "Honest ingredient" },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.16),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* imagery */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto mb-8 w-full max-w-[500px]">
            <div className="grain relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-deep shadow-[0_44px_80px_-45px_rgba(42,25,21,0.55)]">
              <img
                src="/images/harvest-chillies.jpg"
                alt="Hands holding sun-dried red chillies above a basket in rural Telangana"
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                width={960}
                height={1200}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon-950/60 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-cream/90">
                <LeafIcon className="h-4 w-4 text-gold-soft" />
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase">
                  Sourced around Valigonda
                </span>
              </div>
            </div>

            <div className="absolute -top-6 -left-3 flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream px-4 py-3 shadow-xl sm:-left-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon-900 text-gold-soft">
                <ChilliMark className="h-5 w-5" />
              </span>
              <div>
                <p className="display text-lg leading-none font-semibold text-ink">Only chilli.</p>
                <p className="mt-1 text-[9px] font-bold tracking-[0.16em] uppercase text-ink-soft">
                  One ingredient, full stop
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -bottom-8 w-[44%] overflow-hidden rounded-2xl border-4 border-cream bg-cream shadow-[0_28px_50px_-25px_rgba(42,25,21,0.6)] sm:-right-8">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/stone-ground.jpg"
                  alt="Freshly stone-ground chilli powder with a traditional grinding stone"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-110"
                  width={640}
                  height={640}
                  loading="lazy"
                />
              </div>
              <div className="bg-cream px-3 py-2.5">
                <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-chilli-700">
                  Stone-ground
                </p>
                <p className="mt-0.5 text-[10px] text-ink-soft">Ground in small batches</p>
              </div>
            </div>

            <SparkIcon className="absolute -left-7 bottom-16 h-7 w-7 rotate-12 text-gold/70" />
          </div>
        </Reveal>

        {/* narrative */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.02] font-normal text-ink">
              Ground slowly.
              <span className="ember-text block font-light italic">Packed with care.</span>
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[14.5px] leading-[1.85] text-ink-soft">
              <p>
                Adithya Traders is a small, family-run kitchen in Velvarthy. Every batch starts with
                red chillies we pick ourselves from farmers around Valigonda and nearby villages —
                never a ready-made mix, never a shortcut.
              </p>
              <p>
                We dry them properly in the sun, grind them in small stone-ground batches, and seal
                every pack at home. No colour. No fillers. Just the chilli powder we cook with in
                our own kitchen, shared with yours.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="mt-8 border-l-2 border-gold pl-5">
              <p className="display text-lg leading-snug font-light italic text-ink sm:text-xl">
                “If it isn't good enough for our own kitchen, it doesn't leave our hands.”
              </p>
              <footer className="mt-3 text-[10px] font-bold tracking-[0.2em] uppercase text-ink-soft">
                — The Adithya family
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={180}>
            <dl className="mt-10 grid grid-cols-2 gap-y-8 border-t border-ink/12 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="display text-[1.9rem] leading-none font-semibold text-chilli-700">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-[9.5px] font-bold tracking-[0.16em] uppercase text-ink-soft">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="#chilli"
                className="group inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.16em] uppercase text-chilli-700"
              >
                Meet our chilli powder
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-ink-soft/80">
                {ADDRESS_LINE}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
