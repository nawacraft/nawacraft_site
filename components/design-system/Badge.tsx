import React from "react";

export type BadgeIntent =
  | "primary"
  | "secondary"
  | "neutral"
  | "success"
  | "danger"
  | "warning"
  | "info";

export type BadgeVariant = "subtle" | "outline" | "solid";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  intent?: BadgeIntent;
  variant?: BadgeVariant;
  size?: BadgeSize;
  withDot?: boolean;
  dotPulse?: boolean;
  children: React.ReactNode;
}

const INTENT_STYLES: Record<BadgeVariant, Record<BadgeIntent, string>> = {
  subtle: {
    primary:
      "bg-primary-100 text-primary-800 border-primary-200 dark:bg-primary-950/60 dark:text-primary-300 dark:border-primary-800/60",
    secondary:
      "bg-secondary-100 text-secondary-800 border-secondary-200 dark:bg-secondary-950/60 dark:text-secondary-300 dark:border-secondary-800/60",
    neutral:
      "bg-neutral-100 text-neutral-800 border-neutral-200 dark:bg-neutral-800/60 dark:text-neutral-200 dark:border-neutral-700/60",
    success:
      "bg-success-100 text-success-800 border-success-200 dark:bg-success-950/60 dark:text-success-300 dark:border-success-800/60",
    danger:
      "bg-danger-100 text-danger-800 border-danger-200 dark:bg-danger-950/60 dark:text-danger-300 dark:border-danger-800/60",
    warning:
      "bg-warning-100 text-warning-800 border-warning-200 dark:bg-warning-950/60 dark:text-warning-300 dark:border-warning-800/60",
    info:
      "bg-info-100 text-info-800 border-info-200 dark:bg-info-950/60 dark:text-info-300 dark:border-info-800/60",
  },
  outline: {
    primary:
      "bg-transparent text-primary-700 border-primary-300 dark:text-primary-300 dark:border-primary-700",
    secondary:
      "bg-transparent text-secondary-700 border-secondary-300 dark:text-secondary-300 dark:border-secondary-700",
    neutral:
      "bg-transparent text-neutral-700 border-neutral-300 dark:text-neutral-300 dark:border-neutral-700",
    success:
      "bg-transparent text-success-700 border-success-300 dark:text-success-300 dark:border-success-700",
    danger:
      "bg-transparent text-danger-700 border-danger-300 dark:text-danger-300 dark:border-danger-700",
    warning:
      "bg-transparent text-warning-800 border-warning-300 dark:text-warning-300 dark:border-warning-700",
    info:
      "bg-transparent text-info-700 border-info-300 dark:text-info-300 dark:border-info-700",
  },
  solid: {
    primary: "bg-primary-600 text-white border-transparent",
    secondary: "bg-secondary-600 text-white border-transparent",
    neutral: "bg-neutral-800 text-white border-transparent dark:bg-neutral-200 dark:text-neutral-900",
    success: "bg-success-600 text-white border-transparent",
    danger: "bg-danger-600 text-white border-transparent",
    warning: "bg-warning-500 text-neutral-950 border-transparent",
    info: "bg-info-600 text-white border-transparent",
  },
};

const DOT_COLORS: Record<BadgeIntent, string> = {
  primary: "bg-primary-600 dark:bg-primary-400",
  secondary: "bg-secondary-600 dark:bg-secondary-400",
  neutral: "bg-neutral-500 dark:bg-neutral-400",
  success: "bg-success-600 dark:bg-success-400",
  danger: "bg-danger-600 dark:bg-danger-400",
  warning: "bg-warning-500 dark:bg-warning-400",
  info: "bg-info-600 dark:bg-info-400",
};

export const Badge: React.FC<BadgeProps> = ({
  intent = "neutral",
  variant = "subtle",
  size = "md",
  withDot = false,
  dotPulse = false,
  children,
  className = "",
  ...props
}) => {
  const sizeClasses =
    size === "sm"
      ? "text-[11px] px-2 py-0.5 gap-1.5 font-medium tracking-wide"
      : "text-xs px-2.5 py-1 gap-1.5 font-medium tracking-normal";

  const intentClass = INTENT_STYLES[variant][intent];
  const dotColorClass = DOT_COLORS[intent];

  return (
    <span
      className={`inline-flex items-center rounded-full border transition-colors select-none ${sizeClasses} ${intentClass} ${className}`}
      {...props}
    >
      {withDot && (
        <span className="relative flex h-1.5 w-1.5">
          {dotPulse && (
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotColorClass}`}
            />
          )}
          <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotColorClass}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};
