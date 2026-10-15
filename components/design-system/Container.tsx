import React from "react";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "prose";
export type ContainerPadding = "none" | "sm" | "md" | "lg";

export interface ContainerProps<T extends React.ElementType = "div"> {
  as?: T;
  size?: ContainerSize;
  padding?: ContainerPadding;
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SIZE_MAP: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-screen-2xl",
  prose: "max-w-prose",
  full: "max-w-full",
};

const PADDING_MAP: Record<ContainerPadding, string> = {
  none: "px-0",
  sm: "px-3 sm:px-4",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12",
};

export const Container = <T extends React.ElementType = "div">({
  as,
  size = "xl",
  padding = "md",
  centered = true,
  className = "",
  children,
  ...restProps
}: ContainerProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) => {
  const Component = as || "div";
  const sizeClasses = SIZE_MAP[size];
  const paddingClasses = PADDING_MAP[padding];
  const centeredClass = centered ? "mx-auto" : "";

  return (
    <Component
      className={`w-full ${sizeClasses} ${paddingClasses} ${centeredClass} ${className}`.trim()}
      {...restProps}
    >
      {children}
    </Component>
  );
};
