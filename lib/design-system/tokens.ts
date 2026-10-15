/**
 * Nawacraft Design System Tokens & Color Theory Architecture
 * 
 * Primary Brand Color: Purple-Red / Wine Plum (#953553)
 * - Hue: 341.2°
 * - Saturation: 47.5%
 * - Lightness: 39.6%
 * 
 * Secondary Color (Color Theory Wheel Complement):
 * - Rule: Exact 180° opposite on the standard color wheel
 * - Complementary Hue: (341.2° - 180°) = 161.2° (Deep Spruce Teal / Seafoam Emerald)
 * - Matched Lightness (39.6%) and Saturation (47.5%)
 * - Hex: #359577
 * 
 * Neutrals: Harmonized Mauve-Slate (Tailored warm-slate to complement #953553)
 * Semantic: Success (Emerald), Failure/Danger (Crimson), Warning (Amber), Info (Cerulean)
 */

export interface ColorShade {
  step: string;
  hex: string;
  contrastOnWhite: string;
  contrastOnBlack: string;
  role: string;
}

export interface Palette {
  name: string;
  description: string;
  baseHex: string;
  hue: string;
  roleDescription: string;
  shades: Record<string, string>;
}

export const DESIGN_TOKENS = {
  brand: {
    name: "Nawacraft",
    primary: {
      name: "Velvet Wine Plum",
      hex: "#953553",
      rgb: "rgb(149, 53, 83)",
      hsl: "hsl(341°, 48%, 40%)",
      hueDegrees: 341.2,
      description: "Core brand color expressing artisanal luxury, depth, and creative distinction.",
      shades: {
        50: "#fdf5f7",
        100: "#fce8ee",
        200: "#f8d2dc",
        300: "#f1aac0",
        400: "#de6c8f",
        500: "#b84367",
        600: "#953553", // Base brand color
        700: "#7b2a43",
        800: "#642337",
        900: "#521f2f",
        950: "#2f0d19",
      },
    },
    secondary: {
      name: "Deep Spruce Teal",
      hex: "#359577",
      rgb: "rgb(53, 149, 119)",
      hsl: "hsl(161°, 48%, 40%)",
      hueDegrees: 161.2,
      description:
        "Exact 180° complementary opposite on the color wheel. Grounds the rich warmth of the primary with an organic, calming seafoam pine.",
      shades: {
        50: "#f2faf6",
        100: "#e1f5ed",
        200: "#c4ecdc",
        300: "#97d9c1",
        400: "#5ebda0",
        500: "#42a688",
        600: "#359577", // Complementary base
        700: "#2a7961",
        800: "#24614f",
        900: "#205042",
        950: "#0d2c23",
      },
    },
  },
  neutrals: {
    name: "Harmonized Mauve-Slate",
    description: "Tinted grays infused with warm slate undertones that harmonize with #953553.",
    shades: {
      50: "#faf9fb",
      100: "#f4f2f5",
      200: "#eae7ec",
      300: "#d7d3dc",
      400: "#a7a1b0",
      500: "#7a7385",
      600: "#5d5667",
      700: "#463f4f",
      800: "#2d2834",
      900: "#1b1720",
      950: "#0f0c13",
    },
  },
  semantics: {
    success: {
      name: "Emerald Green",
      hue: "142°",
      base: "#16a34a",
      description: "Confirmation, completed milestones, verified states.",
      shades: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
    },
    danger: {
      name: "Crimson Scarlet",
      hue: "358°",
      base: "#dc2626",
      description: "Errors, critical incidents, destructive actions.",
      shades: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
    },
    warning: {
      name: "Amber Marigold",
      hue: "38°",
      base: "#d97706",
      description: "Attention required, quota limits, pending actions.",
      shades: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03",
      },
    },
    info: {
      name: "Cerulean Sky",
      hue: "205°",
      base: "#0284c7",
      description: "System updates, tips, guidance, informational telemetry.",
      shades: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49",
      },
    },
  },
  typography: {
    fontFamilies: {
      sans: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
      mono: "var(--font-geist-mono), ui-monospace, monospace",
    },
    scale: [
      { name: "Display 2XL", className: "text-display-2xl", size: "40px - 64px (fluid)", weight: "800", leading: "1.1", tracking: "-0.035em", usage: "Hero titles, brand statements" },
      { name: "Display XL", className: "text-display-xl", size: "32px - 48px (fluid)", weight: "700", leading: "1.15", tracking: "-0.025em", usage: "Major section headers, landing showcases" },
      { name: "Heading XL", className: "text-heading-xl", size: "30px (1.875rem)", weight: "700", leading: "1.25", tracking: "-0.02em", usage: "Page headers, dashboard views" },
      { name: "Heading LG", className: "text-heading-lg", size: "24px (1.5rem)", weight: "600", leading: "1.3", tracking: "-0.015em", usage: "Card headers, modal titles" },
      { name: "Heading MD", className: "text-heading-md", size: "20px (1.25rem)", weight: "600", leading: "1.4", tracking: "-0.01em", usage: "Section titles, sub-components" },
      { name: "Heading SM", className: "text-heading-sm", size: "18px (1.125rem)", weight: "600", leading: "1.45", tracking: "-0.005em", usage: "Item headers, widget titles" },
      { name: "Body LG", className: "text-body-lg", size: "18px (1.125rem)", weight: "400", leading: "1.6", tracking: "normal", usage: "Lead paragraphs, highlighted intros" },
      { name: "Body MD", className: "text-body-md", size: "16px (1rem)", weight: "400", leading: "1.55", tracking: "normal", usage: "Standard content, form labels, descriptions" },
      { name: "Body SM", className: "text-body-sm", size: "14px (0.875rem)", weight: "400", leading: "1.5", tracking: "normal", usage: "Helper text, table contents, metadata" },
      { name: "Caption", className: "text-caption", size: "12px (0.75rem)", weight: "500", leading: "1.4", tracking: "0.025em", usage: "Timestamps, tags, uppercase badges" },
    ],
  },
} as const;
