import { useMemo, useState, type FormEvent } from "react";
import {
  ADDRESS_LINE,
  BRAND,
  MAP_EMBED,
  MAP_LINK,
  PACK_SIZES,
  whatsappLink,
} from "../data";
import {
  ArrowIcon,
  CheckIcon,
  ClockIcon,
  Eyebrow,
  FlowButton,
  PhoneIcon,
  PinIcon,
  Reveal,
  WhatsAppIcon,
} from "./ui";

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-[13.5px] text-ink placeholder:text-ink/35 transition focus:border-chilli-600/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-chilli-600/10";

const labelClass =
  "mb-1.5 block text-[9.5px] font-extrabold tracking-[0.18em] uppercase text-ink-soft";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sizeId, setSizeId] = useState("500");
  const [qty, setQty] = useState(1);
  const [fulfilment, setFulfilment] = useState<"Pickup" | "Delivery">("Pickup");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sentHref, setSentHref] = useState<string | null>(null);

  const size = PACK_SIZES.find((pack) => pack.id === sizeId) ?? PACK_SIZES[1];
  const total = size.price * qty;

  const previewHref = useMemo(
    () =>
      whatsappLink(
        `Hello Adithya Traders! I'd like to order ${qty} × ${size.label} of homemade chilli powder (₹${total}).\nPreferred: ${fulfilment}.\n${message ? `Note: ${message}` : ""}`,
      ),
    [qty, size.label, total, fulfilment, message],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) nextErrors.name = "Please share your name.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) nextErrors.phone = "Enter a 10-digit mobile number.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const href = whatsappLink(
      [
        "Hello Adithya Traders! I'd like to place an order.",
        "",
        `Name: ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        `Pack: ${size.label} × ${qty}`,
        `Estimated total: ₹${total}`,
        fulfilment === "Pickup"
          ? `Preferred: Pickup from our kitchen in ${ADDRESS_LINE}`
          : `Preferred: Delivery to my location (near ${BRAND.address.mandal})` ,
        message.trim() ? `Note: ${message.trim()}` : "Note: —",
        "",
        "Please confirm availability and the final details. Thank you!",
      ].join("\n"),
    );
    setSentHref(href);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-cream-soft py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-28 top-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,115,43,0.15),transparent_68%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* details */}
          <div>
            <Reveal>
              <Eyebrow>Say hello</Eyebrow>
              <h2 className="display mt-5 text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.02] font-normal text-ink">
                Let's get a packet
                <span className="ember-text block font-light italic">home.</span>
              </h2>
              <p className="mt-5 max-w-md text-[13.5px] leading-[1.85] text-ink-soft">
                Call, message or send us your order request below. We pack after you order, so
                you'll always receive a fresh batch.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 space-y-3">
                <a
                  href={BRAND.phoneHref}
                  className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-chilli-600/30 hover:shadow-[0_18px_35px_-25px_rgba(62,11,16,0.5)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon-900 text-gold-soft">
                    <PhoneIcon className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-extrabold tracking-[0.18em] uppercase text-ink-soft">
                      Call or WhatsApp
                    </span>
                    <span className="display mt-1 block text-lg font-semibold text-ink">
                      {BRAND.phoneDisplay}
                    </span>
                  </span>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-chilli-700" />
                </a>

                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-chilli-600/30 hover:shadow-[0_18px_35px_-25px_rgba(62,11,16,0.5)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon-900 text-gold-soft">
                    <PinIcon className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-extrabold tracking-[0.18em] uppercase text-ink-soft">
                      Our kitchen
                    </span>
                    <span className="mt-1 block text-[13px] font-semibold leading-snug text-ink">
                      {BRAND.address.village}, {BRAND.address.mandal}
                      <span className="block text-[11.5px] font-medium text-ink-soft">
                        {BRAND.address.district}, {BRAND.address.state} ·{" "}
                        {BRAND.address.pincode}
                      </span>
                    </span>
                  </span>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-chilli-700" />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon-900 text-gold-soft">
                    <ClockIcon className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-extrabold tracking-[0.18em] uppercase text-ink-soft">
                      We're available
                    </span>
                    <span className="mt-1 block text-[13px] font-semibold text-ink">
                      {BRAND.hours}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-[9px] font-extrabold tracking-[0.16em] uppercase text-ink-soft">
                  We deliver around
                </span>
                {["Valigonda", "Bhuvanagiri", "Choutuppal", "Ramannapet", "Nalgonda"].map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-ink/12 bg-cream px-2.5 py-1 text-[9.5px] font-semibold text-ink-soft"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-5 overflow-hidden rounded-2xl border border-ink/10 bg-cream">
                <div className="flex items-center justify-between gap-3 border-b border-ink/10 px-4 py-3">
                  <span className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.16em] uppercase text-ink-soft">
                    <PinIcon className="h-3.5 w-3.5 text-chilli-700" />
                    Velvarthy · Valigonda
                  </span>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-1.5 text-[9.5px] font-extrabold tracking-[0.14em] uppercase text-chilli-700"
                  >
                    Directions
                    <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <iframe
                  title="Map showing Adithya Traders in Velvarthy, Valigonda, Yadadri Bhuvanagiri"
                  src={MAP_EMBED}
                  className="h-[220px] w-full border-0 grayscale-[15%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream p-6 shadow-[0_35px_70px_-45px_rgba(42,25,21,0.5)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#b3151b,#e8732b,#d6a24a,#b3151b)] bg-[length:200%_100%]" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Eyebrow>Order request</Eyebrow>
                  <h3 className="display mt-3 text-[1.65rem] leading-tight font-semibold text-ink">
                    Tell us what you need
                  </h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-chilli-700/20 bg-chilli-600/8 text-chilli-700">
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                </span>
              </div>
              <p className="mt-2 text-[11.5px] leading-relaxed text-ink-soft">
                No online payment. We'll confirm everything on WhatsApp — including pickup or
                delivery to your location.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="order-name" className={labelClass}>
                      Your name
                    </label>
                    <input
                      id="order-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Ramesh"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      className={`${inputClass} ${errors.name ? "border-chilli-600/70 ring-2 ring-chilli-600/15" : ""}`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "order-name-error" : undefined}
                      required
                    />
                    {errors.name && (
                      <p id="order-name-error" className="mt-1.5 text-[10.5px] font-semibold text-chilli-700">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="order-phone" className={labelClass}>
                      Mobile number
                    </label>
                    <input
                      id="order-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      className={`${inputClass} ${errors.phone ? "border-chilli-600/70 ring-2 ring-chilli-600/15" : ""}`}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "order-phone-error" : undefined}
                      required
                    />
                    {errors.phone && (
                      <p id="order-phone-error" className="mt-1.5 text-[10.5px] font-semibold text-chilli-700">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.6fr_1fr]">
                  <div>
                    <label htmlFor="order-pack" className={labelClass}>
                      Pack size
                    </label>
                    <select
                      id="order-pack"
                      name="pack"
                      value={sizeId}
                      onChange={(e) => setSizeId(e.target.value)}
                      className={inputClass}
                    >
                      {PACK_SIZES.map((pack) => (
                        <option key={pack.id} value={pack.id}>
                          {pack.label} — ₹{pack.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="order-qty" className={labelClass}>
                      Quantity
                    </label>
                    <input
                      id="order-qty"
                      name="quantity"
                      type="number"
                      min={1}
                      max={20}
                      value={qty}
                      onChange={(e) =>
                        setQty(Math.min(20, Math.max(1, Number(e.target.value) || 1)))
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <span className={labelClass}>Pickup or delivery?</span>
                  <div className="grid grid-cols-2 gap-2" role="group" aria-label="Fulfilment method">
                    {(["Pickup", "Delivery"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFulfilment(option)}
                        aria-pressed={fulfilment === option}
                        className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-[11.5px] font-bold transition-all duration-300 ${
                          fulfilment === option
                            ? "border-maroon-900 bg-maroon-900 text-cream"
                            : "border-ink/15 bg-white/60 text-ink-soft hover:border-chilli-600/40 hover:text-chilli-700"
                        }`}
                      >
                        {fulfilment === option && <CheckIcon className="h-3 w-3" />}
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="order-message" className={labelClass}>
                    Message <span className="font-medium normal-case tracking-normal text-ink-soft/70">(optional)</span>
                  </label>
                  <textarea
                    id="order-message"
                    name="message"
                    rows={3}
                    placeholder="Your village, landmark, or any special request…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream-soft px-4 py-3">
                  <span className="text-[9.5px] font-extrabold tracking-[0.16em] uppercase text-ink-soft">
                    Estimated total
                  </span>
                  <span className="display text-2xl font-semibold text-chilli-700" aria-live="polite">
                    ₹{total}
                  </span>
                </div>

                <FlowButton type="submit" className="w-full">
                  <WhatsAppIcon className="h-4 w-4" />
                  Send order request
                </FlowButton>

                <p className="text-center text-[10px] leading-relaxed text-ink-soft">
                  Opens WhatsApp with your details. By sending, you'll be chatting directly with
                  Adithya Traders.
                </p>

                <div aria-live="polite">
                  {sentHref && (
                    <div className="rounded-xl border border-chilli-700/20 bg-chilli-600/8 p-3 text-center">
                      <p className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-chilli-700">
                        <CheckIcon className="h-3.5 w-3.5" />
                        Your order summary is ready.
                      </p>
                      <a
                        href={sentHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-[10.5px] font-semibold text-ink-soft underline decoration-gold underline-offset-2 hover:text-chilli-700"
                      >
                        WhatsApp didn't open? Tap here.
                      </a>
                    </div>
                  )}
                </div>
              </form>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-4">
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.06em] text-ink transition-colors hover:text-chilli-700"
                >
                  <PhoneIcon className="h-3.5 w-3.5 text-chilli-700" />
                  Prefer to talk? Call {BRAND.phoneDisplay}
                </a>
                <a
                  href={previewHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-semibold text-ink-soft underline decoration-ink/20 underline-offset-2 transition-colors hover:text-chilli-700"
                >
                  Quick WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
