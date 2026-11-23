import { BoxIcon, ChilliMark, Eyebrow, LeafIcon, MortarIcon, Reveal, SunIcon } from "./ui";

const STEPS = [
  {
    n: "01",
    icon: LeafIcon,
    title: "Chosen by hand",
    copy: "Red chillies are picked from farmers around Valigonda at their deepest, reddest best.",
  },
  {
    n: "02",
    icon: SunIcon,
    title: "Sun-dried slowly",
    copy: "Spread on clean mats and dried naturally, so the colour and natural oils stay put.",
  },
  {
    n: "03",
    icon: MortarIcon,
    title: "Stone-ground",
    copy: "Ground in small batches for a coarse, fragrant powder. Never rushed, never overheated.",
  },
  {
    n: "04",
    icon: BoxIcon,
    title: "Packed at home",
    copy: "Sealed fresh in food-grade pouches, labelled by hand, and sent to your kitchen.",
  },
];

const USES = [
  {
    title: "Dal & curries",
    copy: "Bloomed in hot oil or ghee for the everyday Telangana finish — pulusu, dal, vegetable curry.",
    tags: ["Dal", "Pulusu", "Veg curry"],
  },
  {
    title: "Chutneys & podis",
    copy: "Body and gentle warmth for tomato, garlic and peanut chutneys, karam podi and idli mornings.",
    tags: ["Chutney", "Karam podi", "Idli"],
  },
  {
    title: "Marinades & fries",
    copy: "A deep red rub for chicken, fish and potatoes. The colour you see comes from the chilli itself.",
    tags: ["Fry", "Rub", "Mirchi bajji"],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-cream-soft py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(179,21,27,0.07),transparent_68%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow>How it's made</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2.1rem,4.5vw,3.5rem)] leading-[1.03] font-normal text-ink">
              Four honest steps.
              <span className="ember-text block font-light italic">Nothing to hide.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-[13.5px] leading-[1.85] text-ink-soft lg:text-right">
              Making chilli powder isn't complicated. Doing it with patience is. This is the whole
              process — from the farm to the sealed pack.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute inset-x-8 top-[3.6rem] hidden h-px bg-[linear-gradient(90deg,rgba(179,21,27,0.05),rgba(232,115,43,0.55),rgba(214,162,74,0.45),rgba(179,21,27,0.05))] lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.n} delay={i * 90}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-cream p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-chilli-600/25 hover:shadow-[0_26px_50px_-30px_rgba(62,11,16,0.45)]">
                  <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[linear-gradient(90deg,#b3151b,#e8732b,#d6a24a)] transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white text-chilli-700 transition-all duration-500 group-hover:border-gold/50 group-hover:bg-maroon-900 group-hover:text-gold-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="display text-3xl leading-none font-light text-ink/15 transition-colors duration-500 group-hover:text-gold/40">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="display mt-6 text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.75] text-ink-soft">{step.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* kitchen uses */}
        <Reveal delay={80}>
          <div className="mt-16 rounded-[1.75rem] border border-ink/10 bg-cream p-6 sm:p-9">
            <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-6 sm:flex-row sm:items-end">
              <div>
                <Eyebrow>A pinch does plenty</Eyebrow>
                <h3 className="display mt-3 text-[clamp(1.6rem,3vw,2.2rem)] font-normal text-ink">
                  One powder. Every day of the week.
                </h3>
              </div>
              <span className="flex items-center gap-2 self-start rounded-full border border-chilli-700/20 bg-chilli-600/5 px-3.5 py-2 text-[9px] font-extrabold tracking-[0.16em] uppercase text-chilli-700 sm:self-auto">
                <ChilliMark className="h-3.5 w-3.5" />
                Medium–hot · 380/kg
              </span>
            </div>
            <div className="mt-7 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {USES.map((use, i) => (
                <div key={use.title} className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-extrabold tracking-[0.18em] text-gold">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-ink/10" />
                  </div>
                  <h4 className="display mt-3 text-lg font-semibold text-ink transition-colors group-hover:text-chilli-700">
                    {use.title}
                  </h4>
                  <p className="mt-2 text-[12.5px] leading-[1.75] text-ink-soft">{use.copy}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {use.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/10 bg-cream-soft px-2.5 py-1 text-[9.5px] font-semibold text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
