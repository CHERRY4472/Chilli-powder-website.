import {
  BRAND,
  DEFAULT_ORDER_MESSAGE,
  MAP_LINK,
  NAV_LINKS,
  whatsappLink,
} from "../data";
import {
  ArrowIcon,
  ChilliMark,
  Eyebrow,
  FlowButton,
  PhoneIcon,
  PinIcon,
  SparkIcon,
  WhatsAppIcon,
} from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* closing call to action */}
      <div className="bg-cream px-5 pb-16 pt-4 sm:px-8 sm:pt-6">
        <div className="mx-auto max-w-7xl">
          <div className="grain relative overflow-hidden rounded-[2rem] bg-maroon-900 px-6 py-12 text-cream sm:px-10 sm:py-14 lg:px-14">
            <div className="pointer-events-none absolute -right-16 -top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(232,115,43,0.35),transparent_65%)]" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.2),transparent_65%)]" />
            <ChilliMark className="pointer-events-none absolute -bottom-8 right-6 h-44 w-44 rotate-12 text-cream/[0.05] sm:right-16 sm:h-56 sm:w-56" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <Eyebrow tone="cream">Fresh batch · ready when you are</Eyebrow>
                <h2 className="display mt-4 text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.02] font-normal">
                  Bring a little
                  <span className="block font-light italic text-gold-soft">fire home.</span>
                </h2>
                <p className="mt-4 max-w-md text-[13px] leading-relaxed text-cream/60">
                  Homemade chilli powder from Velvarthy. ₹{BRAND.pricePerKg} per kg, packed fresh
                  after you order. Call or message — we'd love to send some your way.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <FlowButton href={whatsappLink(DEFAULT_ORDER_MESSAGE)} target="_blank" variant="cream">
                  <WhatsAppIcon className="h-4 w-4" />
                  Order on WhatsApp
                </FlowButton>
                <FlowButton href={BRAND.phoneHref} className="!border-cream/30">
                  <PhoneIcon className="h-4 w-4" />
                  {BRAND.phoneDisplay}
                </FlowButton>
              </div>
            </div>

            <div className="relative mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream/15 pt-6">
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase text-cream/55">
                <SparkIcon className="h-3 w-3 text-gold" /> 100% homemade
              </span>
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase text-cream/55">
                <SparkIcon className="h-3 w-3 text-gold" /> No preservatives
              </span>
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase text-cream/55">
                <SparkIcon className="h-3 w-3 text-gold" /> ₹380 per kg
              </span>
              <span className="ml-auto hidden text-[10px] font-semibold tracking-[0.14em] uppercase text-cream/40 sm:block">
                Velvarthy · Valigonda · Telangana
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* footer body */}
      <div className="bg-maroon-950 text-cream/60">
        <div className="mx-auto max-w-7xl px-5 py-14 pb-28 sm:px-8 sm:pb-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_0.9fr]">
            <div>
              <a href="#home" className="flex items-center gap-3" aria-label="Adithya Traders home">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-maroon-900 text-gold-soft">
                  <ChilliMark className="h-6 w-6" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="display text-xl font-semibold text-cream">
                    Adithya <span className="font-normal italic text-gold-soft">Traders</span>
                  </span>
                  <span className="mt-1.5 text-[8px] font-bold tracking-[0.26em] uppercase text-cream/40">
                    Homemade chilli powder
                  </span>
                </span>
              </a>
              <p className="mt-5 max-w-xs text-[12px] leading-[1.8] text-cream/45">
                A small family kitchen making honest, stone-ground chilli powder in Velvarthy —
                the same powder we cook with at home.
              </p>
              <p className="mt-4 font-telugu text-[11px] tracking-[0.12em] text-gold-soft/60">
                అడిత్య ట్రేడర్స్ · వెల్వర్తి
              </p>
            </div>

            <div>
              <h3 className="text-[9.5px] font-extrabold tracking-[0.22em] uppercase text-cream/35">
                Explore
              </h3>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[12px] font-medium transition-colors hover:text-gold-soft"
                    >
                      <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[9.5px] font-extrabold tracking-[0.22em] uppercase text-cream/35">
                Get in touch
              </h3>
              <ul className="mt-4 space-y-3.5">
                <li>
                  <a
                    href={BRAND.phoneHref}
                    className="flex items-start gap-2.5 text-[12px] font-medium transition-colors hover:text-gold-soft"
                  >
                    <PhoneIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" />
                    {BRAND.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink(DEFAULT_ORDER_MESSAGE)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-2.5 text-[12px] font-medium transition-colors hover:text-gold-soft"
                  >
                    <WhatsAppIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" />
                    WhatsApp us
                  </a>
                </li>
                <li>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-2.5 text-[12px] leading-relaxed font-medium transition-colors hover:text-gold-soft"
                  >
                    <PinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" />
                    <span>
                      {BRAND.address.village}, {BRAND.address.mandal}
                      <br />
                      {BRAND.address.district}, {BRAND.address.state}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[9.5px] font-extrabold tracking-[0.22em] uppercase text-cream/35">
                Good to know
              </h3>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="text-[9px] font-bold tracking-[0.14em] uppercase text-cream/30">
                    Price
                  </dt>
                  <dd className="display mt-0.5 text-lg font-semibold text-cream">₹380 / kg</dd>
                </div>
                <div>
                  <dt className="text-[9px] font-bold tracking-[0.14em] uppercase text-cream/30">
                    Batches
                  </dt>
                  <dd className="mt-0.5 text-[11.5px] text-cream/60">Small &amp; homemade</dd>
                </div>
                <div>
                  <dt className="text-[9px] font-bold tracking-[0.14em] uppercase text-cream/30">
                    Availability
                  </dt>
                  <dd className="mt-0.5 text-[11.5px] leading-relaxed text-cream/60">
                    {BRAND.hours}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 sm:flex-row sm:items-center">
            <p className="text-[10.5px] tracking-wide text-cream/35">
              © {year} Adithya Traders. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-[10px] tracking-[0.08em] text-cream/35">
              <SparkIcon className="h-3 w-3 text-gold/60" />
              Handmade with fire &amp; care in Telangana
            </p>
            <a
              href="#home"
              className="group flex items-center gap-2 text-[9.5px] font-bold tracking-[0.16em] uppercase text-cream/45 transition-colors hover:text-gold-soft"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-gold/40">
                <ArrowIcon className="h-3.5 w-3.5 -rotate-90" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
