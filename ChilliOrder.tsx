import { useMemo, useState } from "react";
import { BRAND, PACK_SIZES, whatsappLink } from "../data";
import {
  CheckIcon,
  ChilliMark,
  ClockIcon,
  Eyebrow,
  FlameIcon,
  FlowButton,
  LeafIcon,
  MinusIcon,
  PhoneIcon,
  PlusIcon,
  Reveal,
  WhatsAppIcon,
} from "./ui";

const FACTS = [
  "No added colour",
  "No preservatives",
  "Coarse, fragrant grind",
  "Packed fresh to order",
];

export default function ChilliOrder() {
  const [sizeId, setSizeId] = useState("500");
  const [qty, setQty] = useState(1);

  const size = PACK_SIZES.find((pack) => pack.id === sizeId) ?? PACK_SIZES[1];
  const total = size.price * qty;

  const orderHref = useMemo(
    () =>
      whatsappLink(
        `Hello Adithya Traders! I'd like to order ${qty} × ${size.label} of homemade chilli powder (₹${total}). Please confirm availability and delivery. My name is ______ and my location is ______.`,
      ),
    [qty, size.label, total],
  );

  return (
    <section
      id="chilli"
      className="grain relative overflow-hidden bg-maroon-900 py-20 text-cream sm:py-28"
    >
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(232,115,43,0.24),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.14),transparent_65%)]" />
      <span
        className="display pointer-events-none absolute -right-6 top-4 select-none text-[16rem] leading-none font-semibold text-cream/[0.035] sm:text-[24rem]"
        aria-hidden="true"
      >
        380
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* product */}
          <div>
            <Reveal>
              <Eyebrow tone="cream">The chilli · our one product</Eyebrow>
              <h2 className="display mt-5 text-[clamp(2.1rem,4.5vw,3.5rem)] leading-[1.03] font-normal text-cream">
                Pure chilli.
                <span className="block font-light italic text-gold-soft">Nothing dressed up.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[14.5px] leading-[1.85] text-cream/65">
                One product, made properly. A coarse, deeply fragrant powder with real warmth —
                ground from dried red chillies and packed in small, fresh batches. Not too fine, not
                too fiery; just right for everyday Telangana cooking.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-cream/15 bg-maroon-950/40">
                <img
                  src="/images/product-pouch.jpg"
                  alt="Kraft paper pouch of Adithya Traders homemade chilli powder with a brass spoon and dried chillies"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
                  width={1200}
                  height={900}
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon-950/70 to-transparent" />
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-cream/20 bg-maroon-950/60 px-3 py-2 backdrop-blur-md">
                  <LeafIcon className="h-3.5 w-3.5 text-gold-soft" />
                  <span className="text-[9px] font-bold tracking-[0.16em] uppercase text-cream/90">
                    100% homemade
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-gold-soft backdrop-blur-sm">
                    <ChilliMark className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-cream/60">
                      Ingredients
                    </p>
                    <p className="text-[12.5px] font-semibold text-cream">
                      Dried red chillies — that's all
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {FACTS.map((fact) => (
                  <li key={fact} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-soft">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span className="text-[12px] font-medium text-cream/75">{fact}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-cream/12 pt-6">
                <div className="flex items-center gap-2">
                  <FlameIcon className="h-4 w-4 text-ember" />
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-cream/70">
                    Heat level
                  </span>
                  <span className="flex gap-0.5" aria-hidden="true">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-4 rounded-full ${i < 2 ? "bg-ember" : "bg-cream/20"}`}
                      />
                    ))}
                  </span>
                  <span className="text-[11px] font-semibold text-cream/85">Medium–hot</span>
                </div>
                <span className="text-[11px] text-cream/50">Keeps well for up to 6 months</span>
              </div>
            </Reveal>
          </div>

          {/* order builder */}
          <Reveal delay={140} className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-cream/20 bg-cream p-6 text-ink shadow-[0_45px_90px_-40px_rgba(0,0,0,0.65)] sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(232,115,43,0.16),transparent_65%)]" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <Eyebrow>Build your pack</Eyebrow>
                  <h3 className="display mt-3 text-[1.6rem] leading-tight font-semibold text-ink">
                    Choose your size
                  </h3>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-chilli-700/20 bg-chilli-600/8 px-3 py-1.5 text-[9px] font-extrabold tracking-[0.14em] uppercase text-chilli-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-chilli-600" />
                  Fresh batch
                </span>
              </div>

              <div className="relative mt-5 grid grid-cols-3 gap-2" role="group" aria-label="Pack size">
                {PACK_SIZES.map((pack) => {
                  const selected = pack.id === size.id;
                  return (
                    <button
                      key={pack.id}
                      type="button"
                      onClick={() => setSizeId(pack.id)}
                      aria-pressed={selected}
                      className={`group relative flex flex-col items-center rounded-xl border px-2 py-3.5 transition-all duration-300 ${
                        selected
                          ? "border-maroon-900 bg-maroon-900 text-cream shadow-[0_12px_24px_-14px_rgba(62,11,16,0.85)]"
                          : "border-ink/15 bg-white/60 text-ink hover:-translate-y-0.5 hover:border-chilli-600/45 hover:bg-white"
                      }`}
                    >
                      <span className="text-[13px] font-extrabold tracking-tight sm:text-sm">
                        {pack.label}
                      </span>
                      <span
                        className={`mt-1 text-[11px] font-semibold ${
                          selected ? "text-gold-soft" : "text-ink-soft"
                        }`}
                      >
                        ₹{pack.price}
                      </span>
                      {selected && (
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-maroon-950">
                          <CheckIcon className="h-2.5 w-2.5" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="relative mt-2.5 text-[10.5px] font-medium text-ink-soft">
                {size.note} · ₹{BRAND.pricePerKg} per kg · ground &amp; packed after you order
              </p>

              <div className="relative mt-6 flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-white/50 px-4 py-3">
                <div>
                  <p className="text-[9.5px] font-bold tracking-[0.18em] uppercase text-ink-soft">
                    Quantity
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-ink-soft">How many packs?</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    disabled={qty <= 1}
                    aria-label="Decrease quantity"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-cream text-ink transition-colors hover:border-chilli-600/50 hover:text-chilli-700 disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <MinusIcon className="h-3.5 w-3.5" />
                  </button>
                  <span
                    className="display w-8 text-center text-xl font-semibold text-ink"
                    aria-live="polite"
                  >
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.min(20, q + 1))}
                    disabled={qty >= 20}
                    aria-label="Increase quantity"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-cream text-ink transition-colors hover:border-chilli-600/50 hover:text-chilli-700 disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <PlusIcon className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="relative mt-5 flex items-end justify-between gap-4 border-t border-dashed border-ink/20 pt-5">
                <div>
                  <p className="text-[9.5px] font-bold tracking-[0.18em] uppercase text-ink-soft">
                    Estimated total
                  </p>
                  <p className="display mt-1 text-[2.4rem] leading-none font-semibold text-chilli-700">
                    ₹{total}
                  </p>
                </div>
                <p className="max-w-[9rem] pb-1 text-right text-[10px] leading-relaxed text-ink-soft">
                  {qty} × {size.label} · packed after you order
                </p>
              </div>

              <FlowButton
                href={orderHref}
                target="_blank"
                className="mt-5 w-full"
                ariaLabel={`Order ${qty} packs of ${size.label} chilli powder on WhatsApp for ₹${total}`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Order on WhatsApp
              </FlowButton>

              <FlowButton href={BRAND.phoneHref} variant="ghost" className="mt-2.5 w-full">
                <PhoneIcon className="h-4 w-4" />
                Call to order · {BRAND.phoneDisplay}
              </FlowButton>

              <div className="relative mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-4 text-ink-soft">
                <span className="flex items-center gap-1.5 text-[10px] font-medium">
                  <ClockIcon className="h-3.5 w-3.5 text-chilli-600" />
                  Pickup in Velvarthy
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-medium">
                  <LeafIcon className="h-3.5 w-3.5 text-chilli-600" />
                  Delivery around Valigonda
                </span>
              </div>
            </div>

            <p className="mt-4 text-center text-[10.5px] leading-relaxed text-cream/45">
              Your selection opens WhatsApp with the order details filled in. Final price and
              delivery are confirmed personally.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
