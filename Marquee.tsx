import { BRAND } from "../data";
import { SparkIcon } from "./ui";

const ITEMS = [
  "Sun-dried red chillies",
  "Stone-ground in small batches",
  "No colours · no preservatives",
  "Made at home in Velvarthy",
  `₹${BRAND.pricePerKg} per kg`,
  `Order · ${BRAND.phoneDisplay}`,
];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <SparkIcon className="mx-6 h-3 w-3 shrink-0 text-gold/90 sm:mx-8" />
          <span className="whitespace-nowrap text-[10px] font-bold tracking-[0.22em] uppercase text-cream/80 sm:text-[11px]">
            {item}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-maroon-900 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-maroon-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-maroon-900 to-transparent" />
      <div className="marquee flex">
        <div className="marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
