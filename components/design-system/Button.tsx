import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white shadow-sm hover:bg-primary-700 active:bg-primary-800 focus-visible:ring-primary-500 border border-transparent dark:bg-primary-600 dark:hover:bg-primary-500",
  secondary:
    "bg-secondary-600 text-white shadow-sm hover:bg-secondary-700 active:bg-secondary-800 focus-visible:ring-secondary-500 border border-transparent dark:bg-secondary-600 dark:hover:bg-secondary-500",
  outline:
    "bg-transparent text-neutral-800 border border-neutral-300 hover:bg-neutral-100/80 active:bg-neutral-200 focus-visible:ring-primary-500 dark:text-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800/80",
  ghost:
    "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200/80 focus-visible:ring-primary-500 border border-transparent dark:text-neutral-300 dark:hover:bg-neutral-800",
  danger:
    "bg-danger-600 text-white shadow-sm hover:bg-danger-700 active:bg-danger-800 focus-visible:ring-danger-500 border border-transparent dark:bg-danger-600 dark:hover:bg-danger-500",
  success:
    "bg-success-600 text-white shadow-sm hover:bg-success-700 active:bg-success-800 focus-visible:ring-success-500 border border-transparent dark:bg-success-600 dark:hover:bg-success-500",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "text-xs font-medium px-3 py-1.5 rounded-lg gap-1.5 h-8",
  md: "text-sm font-medium px-4 py-2 rounded-lg gap-2 h-10",
  lg: "text-base font-medium px-5 py-2.5 rounded-xl gap-2.5 h-12",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  children,
  className = "",
  ...props
}) => {
  const variantClass = VARIANT_STYLES[variant];
  const sizeClass = SIZE_STYLES[size];

  return (
    <button
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center font-sans tracking-tight transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-0.5 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </button>
  );
};
