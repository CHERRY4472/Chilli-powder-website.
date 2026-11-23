import { useState } from "react";
import { BRAND } from "../data";
import { ChevronIcon, Eyebrow, FlowButton, PhoneIcon, Reveal, WhatsAppIcon } from "./ui";
import { whatsappLink, DEFAULT_ORDER_MESSAGE } from "../data";

const FAQS = [
  {
    q: "How hot is the chilli powder?",
    a: "Warm and full-bodied — a proper medium-hot, not an extract-style burn. The heat builds gently in a dish, which is why a spoonful is usually plenty for a family pot of dal or pulusu.",
  },
  {
    q: "What exactly is in the pack?",
    a: "Only sun-dried red chillies. No rice flour, no starch, no colour, no preservatives and no added oil. Just the chilli, ground and packed at our home in Velvarthy.",
  },
  {
    q: "How long does it keep?",
    a: "Around six months when stored in an airtight container, away from sunlight and moisture. You may notice the colour deepen naturally over time — that's the chilli, not an additive.",
  },
  {
    q: "What sizes do you sell and at what price?",
    a: "We sell 250 g packs for ₹95, 500 g for ₹190 and 1 kg for ₹380. The price works out to ₹380 per kilogram across all our freshly packed batches.",
  },
  {
    q: "Can I collect it in person?",
    a: `Yes. Pickup is available in Velvarthy, Valigonda. Please call or message ${BRAND.phoneDisplay} before coming so we can keep a fresh pack ready for you.`,
  },
  {
    q: "Do you deliver to nearby villages?",
    a: "We deliver around Valigonda and nearby parts of Yadadri Bhuvanagiri. Send us a WhatsApp message with your location and we'll confirm the delivery details personally.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Good questions</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2.1rem,4.2vw,3.3rem)] leading-[1.03] font-normal text-ink">
              A few things
              <span className="ember-text block font-light italic">worth asking.</span>
            </h2>
            <p className="mt-5 max-w-sm text-[13.5px] leading-[1.85] text-ink-soft">
              Everything you'd want to know before a pack reaches your kitchen. Still curious?
              We're one call away.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 rounded-2xl border border-ink/10 bg-cream-soft p-5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chilli-600 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-chilli-600" />
                </span>
                <p className="text-[10px] font-extrabold tracking-[0.18em] uppercase text-ink-soft">
                  Talk to us directly
                </p>
              </div>
              <a
                href={BRAND.phoneHref}
                className="display mt-2 block text-2xl font-semibold text-ink transition-colors hover:text-chilli-700"
              >
                {BRAND.phoneDisplay}
              </a>
              <p className="mt-1 text-[11px] text-ink-soft">{BRAND.hours}</p>
              <div className="mt-4 flex flex-col gap-2.5">
                <FlowButton
                  href={whatsappLink(DEFAULT_ORDER_MESSAGE)}
                  target="_blank"
                  size="sm"
                  className="w-full"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Message on WhatsApp
                </FlowButton>
                <FlowButton href={BRAND.phoneHref} variant="ghost" size="sm" className="w-full">
                  <PhoneIcon className="h-4 w-4" />
                  Call us
                </FlowButton>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="group flex w-full items-center justify-between gap-5 py-5 text-left"
                    >
                      <span className="flex items-baseline gap-3.5">
                        <span className="text-[9px] font-extrabold tracking-[0.16em] text-gold">
                          0{i + 1}
                        </span>
                        <span
                          className={`text-[14px] font-semibold leading-snug transition-colors duration-300 sm:text-[15px] ${
                            isOpen ? "text-chilli-700" : "text-ink group-hover:text-chilli-700"
                          }`}
                        >
                          {item.q}
                        </span>
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                          isOpen
                            ? "rotate-180 border-maroon-900 bg-maroon-900 text-gold-soft"
                            : "border-ink/15 bg-transparent text-ink-soft group-hover:border-chilli-600/40 group-hover:text-chilli-700"
                        }`}
                      >
                        <ChevronIcon className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 pl-8 text-[12.5px] leading-[1.85] text-ink-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
