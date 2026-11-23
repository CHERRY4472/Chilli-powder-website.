import type { ReactNode, SVGProps } from "react";
import { cn } from "../utils/cn";

/* ---------------------------------- icons --------------------------------- */

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const ChilliMark = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 32 32" className={cn("h-6 w-6", className)} aria-hidden="true" {...props}>
    <path
      d="M22.3 5.9c3.1 2 4.2 5.9 3 9.3-1.8 5.1-6.7 9.4-12.2 10.5-2.2.4-4-.8-4.4-2.7-.4-1.8.7-3.4 2.7-4 4.5-1.5 7.9-5.1 9.1-9.7.3-1.2.6-2.4 1-3.4Z"
      fill="currentColor"
    />
    <path
      d="M22.3 5.9c.9-1.7 2.7-2.9 4.6-3"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M12.2 20.7c1.9-.5 3.6-1.5 4.9-2.8"
      stroke="#2a1915"
      strokeOpacity=".25"
      strokeWidth="1.4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const WhatsAppIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M20.5 3.5A11.8 11.8 0 0 0 12 .1C5.4.1.1 5.4.1 12c0 2.1.6 4.2 1.7 6L0 24l6.1-1.6a12 12 0 0 0 5.9 1.5h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.4ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.6 1 1-3.5-.3-.4a9.8 9.8 0 1 1 8.3 4.5Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7 0 1.6 1.2 3.1 1.4 3.3.1.2 2.3 3.6 5.6 5 2 .9 2.8.9 3.8.8.6-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.3Z" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6.6 3.5h-.8A2.3 2.3 0 0 0 3.5 6c0 8 6.5 14.5 14.5 14.5a2.3 2.3 0 0 0 2.5-2.3v-.8a1.5 1.5 0 0 0-1.2-1.5l-3-.6a1.5 1.5 0 0 0-1.5.6l-.9 1.2a12.4 12.4 0 0 1-5.5-5.5l1.2-.9a1.5 1.5 0 0 0 .6-1.5l-.6-3a1.5 1.5 0 0 0-1.5-1.2Z" />
  </svg>
);

export const PinIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20 10.5c0 5.3-8 11.5-8 11.5s-8-6.2-8-11.5a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10.3" r="2.8" />
  </svg>
);

export const LeafIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 20c0-8 5.5-14 16-15-1 10.5-7 16-16 15Z" />
    <path d="M4 20c2.5-4 5.5-7 10-9.5" />
  </svg>
);

export const FlameIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 21c4 0 7-2.7 7-6.6 0-4.6-4.2-6.7-4.2-11.4-2 .8-3.3 2.4-3.3 4.4-1-.5-1.7-1.4-2-2.8C6.7 6.7 5 9.8 5 13.4 5 17.5 8 21 12 21Z" />
    <path d="M12 21c-1.8 0-3-1.3-3-3 0-1.9 1.7-2.8 1.7-4.8 1.7.8 2.6 2.3 2.6 4 0 .3 0 .5-.1.8.7-.3 1.2-.9 1.5-1.6.2.5.3 1 .3 1.6 0 1.7-1.3 3-3 3Z" />
  </svg>
);

export const SunIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
);

export const MortarIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 10h16c0 4.4-3.6 8-8 8s-8-3.6-8-8Z" />
    <path d="M8.5 18 7 21h10l-1.5-3M12 10V6" />
    <path d="m12 6 4.5-2.5M18.8 3.7a1.6 1.6 0 0 1 1 2.9l-1.4.6-1.4-2.5 1.8-1Z" />
  </svg>
);

export const BoxIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m12 2.8 8.5 4.6v9.2L12 21.2l-8.5-4.6V7.4L12 2.8Z" />
    <path d="m3.5 7.4 8.5 4.6 8.5-4.6M12 12v9.2M7.8 5.1l8.5 4.6" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2.2, ...props })}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const ArrowIcon = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2, ...props })}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2, ...props })}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2, ...props })}>
    <path d="m5 5 14 14M19 5 5 19" />
  </svg>
);

export const PlusIcon = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2.2, ...props })}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2.2, ...props })}>
    <path d="M5 12h14" />
  </svg>
);

export const StarIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="m12 2.6 2.7 5.9 6.4.8-4.7 4.4 1.3 6.3-5.7-3.2-5.7 3.2 1.3-6.3L2.9 9.3l6.4-.8L12 2.6Z" />
  </svg>
);

export const SparkIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 1.8c.7 5.4 3.2 8 8.6 8.7-5.4.7-7.9 3.3-8.6 8.7-.7-5.4-3.2-8-8.6-8.7 5.4-.7 7.9-3.3 8.6-8.7Z" />
  </svg>
);

export const ChevronIcon = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2, ...props })}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/* -------------------------------- components ------------------------------ */

type FlowButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost" | "cream";
  size?: "md" | "sm";
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  disabled?: boolean;
};

export function FlowButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
  ariaLabel,
  disabled,
}: FlowButtonProps) {
  const classes = cn(
    "flow-btn",
    variant === "ghost" && "flow-btn--ghost",
    variant === "cream" && "flow-btn--cream",
    size === "sm" && "flow-btn--sm",
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
        aria-label={ariaLabel}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
}

export function Eyebrow({
  children,
  tone = "chilli",
  className,
}: {
  children: ReactNode;
  tone?: "chilli" | "cream" | "gold";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2.5",
        tone === "chilli" && "text-chilli-700",
        tone === "cream" && "text-cream/70",
        tone === "gold" && "text-gold",
        className,
      )}
    >
      <span
        className={cn(
          "h-[7px] w-[7px] rounded-full",
          tone === "cream" ? "bg-gold" : "bg-chilli-500",
        )}
      />
      {children}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Stars({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1 text-gold", className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} className="h-3.5 w-3.5" />
      ))}
    </div>
  );
}
