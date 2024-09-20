import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        186: "186px",
        1440: "1440px",
        72: "72px",
      },
      screens: {
        md: "1000px",
      },
      colors: {
        // Figma Colors:
        Primary: {
          Black: "#000000",
          Neutral: "#404040",
          White: "#FFFFFF",
        },
        Zinc: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          500: "#71717a",
          800: "#27272a",
        },
        Error: {
          500: "#ef4444",
        },
        // outline font:
        textStrokeWidth: {
          "1": "1px",
          "2": "2px",
        },
        colors: {
          strokeColor: "#000000", // Customize this to match your design
        },
        // Shadcn Colors:
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        // Display Text:
        "DisplayText-Regular": [
          "3rem",
          {
            fontWeight: 400,
            lineHeight: "3.5rem",
          },
        ],
        "DisplayText-SemiBold": [
          "3rem",
          {
            fontWeight: 600,
            lineHeight: "3.5rem",
          },
        ],
        "DisplayText-Bold": [
          "3rem",
          {
            fontWeight: 700,
            lineHeight: "3.5rem",
          },
        ],
        "DisplayText-ExtraBold": [
          "3rem",
          {
            fontWeight: 800,
            lineHeight: "3.5rem",
          },
        ],
        // Display Text Medium:
        "DisplayText(M)-Regular": [
          "1.5rem",
          {
            fontWeight: 400,
            lineHeight: "1.75rem",
          },
        ],
        "DisplayText(M)-SemiBold": [
          "1.5rem",
          {
            fontWeight: 600,
            lineHeight: "1.75rem",
          },
        ],
        "DisplayText(M)-Bold": [
          "1.5rem",
          {
            fontWeight: 700,
            lineHeight: "1.75rem",
          },
        ],
        "DisplayText(M)-ExtraBold": [
          "1.5rem",
          {
            fontWeight: 800,
            lineHeight: "1.75rem",
          },
        ],
        // Sub Heading:
        "SubHeading-Regular": [
          "2.5rem",
          {
            fontWeight: 400,
            lineHeight: "3rem",
          },
        ],
        "SubHeading-SemiBold": [
          "2.5rem",
          {
            fontWeight: 600,
            lineHeight: "3rem",
          },
        ],
        "SubHeading-Bold": [
          "2.5rem",
          {
            fontWeight: 700,
            lineHeight: "3rem",
          },
        ],
        "SubHeading-ExtraBold": [
          "2.5rem",
          {
            fontWeight: 800,
            lineHeight: "3rem",
          },
        ],
        // Heading H1:
        "Heading-H1-Regular": [
          "2.25rem",
          {
            fontWeight: 400,
            lineHeight: "2.75rem",
          },
        ],
        "Heading-H1-SemiBold": [
          "2.25rem",
          {
            fontWeight: 600,
            lineHeight: "2.75rem",
          },
        ],
        "Heading-H1-Bold": [
          "2.25rem",
          {
            fontWeight: 700,
            lineHeight: "2.75rem",
          },
        ],
        "Heading-H1-ExtraBold": [
          "2.25rem",
          {
            fontWeight: 800,
            lineHeight: "2.75rem",
          },
        ],
        // Heading H2:
        "Heading-H2-Regular": [
          "2rem",
          {
            fontWeight: 400,
            lineHeight: "2.5rem",
          },
        ],
        "Heading-H2-SemiBold": [
          "2rem",
          {
            fontWeight: 600,
            lineHeight: "2.5rem",
          },
        ],
        "Heading-H2-Bold": [
          "2rem",
          {
            fontWeight: 700,
            lineHeight: "2.5rem",
          },
        ],
        "Heading-H2-ExtraBold": [
          "2rem",
          {
            fontWeight: 800,
            lineHeight: "2.5rem",
          },
        ],
        // Heading H3:
        "Heading-H3-Regular": [
          "1.75rem",
          {
            fontWeight: 400,
            lineHeight: "2rem",
          },
        ],
        "Heading-H3-SemiBold": [
          "1.75rem",
          {
            fontWeight: 600,
            lineHeight: "2rem",
          },
        ],
        "Heading-H3-Bold": [
          "1.75rem",
          {
            fontWeight: 700,
            lineHeight: "2rem",
          },
        ],
        "Heading-H3-ExtraBold": [
          "1.75rem",
          {
            fontWeight: 800,
            lineHeight: "2rem",
          },
        ],
        // Heading H4:
        "Heading-H4-Regular": [
          "1.5rem",
          {
            fontWeight: 400,
            lineHeight: "1.75rem",
          },
        ],
        "Heading-H4-SemiBold": [
          "1.5rem",
          {
            fontWeight: 600,
            lineHeight: "1.75rem",
          },
        ],
        "Heading-H4-Bold": [
          "1.5rem",
          {
            fontWeight: 700,
            lineHeight: "1.75rem",
          },
        ],
        "Heading-H4-ExtraBold": [
          "1.5rem",
          {
            fontWeight: 800,
            lineHeight: "1.75rem",
          },
        ],
        // Heading H5:
        "Heading-H5-Regular": [
          "1.25rem",
          {
            fontWeight: 400,
            lineHeight: "1.5rem",
          },
        ],
        "Heading-H5-SemiBold": [
          "1.25rem",
          {
            fontWeight: 600,
            lineHeight: "1.5rem",
          },
        ],
        "Heading-H5-Bold": [
          "1.25rem",
          {
            fontWeight: 700,
            lineHeight: "1.5rem",
          },
        ],
        "Heading-H5-ExtraBold": [
          "1.25rem",
          {
            fontWeight: 800,
            lineHeight: "1.5rem",
          },
        ],
        // Heading H6:
        "Heading-H6-Regular": [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "1.25rem",
          },
        ],
        "Heading-H6-SemiBold": [
          "1rem",
          {
            fontWeight: 600,
            lineHeight: "1.25rem",
          },
        ],
        "Heading-H6-Bold": [
          "1rem",
          {
            fontWeight: 700,
            lineHeight: "1.25rem",
          },
        ],
        "Heading-H6-ExtraBold": [
          "1rem",
          {
            fontWeight: 800,
            lineHeight: "1.25rem",
          },
        ],
        // Paragraph P1:
        "Paragraph-P1-Regular": [
          "1.25rem",
          {
            fontWeight: 400,
            lineHeight: "1.5rem",
          },
        ],
        "Paragraph-P1-SemiBold": [
          "1.25rem",
          {
            fontWeight: 600,
            lineHeight: "1.5rem",
          },
        ],
        "Paragraph-P1-Bold": [
          "1.25rem",
          {
            fontWeight: 700,
            lineHeight: "1.5rem",
          },
        ],
        "Paragraph-P1-ExtraBold": [
          "1.25rem",
          {
            fontWeight: 800,
            lineHeight: "1.5rem",
          },
        ],
        // Paragraph P2:
        "Paragraph-P2-Regular": [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "1.25rem",
          },
        ],
        "Paragraph-P2-SemiBold": [
          "1rem",
          {
            fontWeight: 600,
            lineHeight: "1.25rem",
          },
        ],
        "Paragraph-P2-Bold": [
          "1rem",
          {
            fontWeight: 700,
            lineHeight: "1.25rem",
          },
        ],
        "Paragraph-P2-ExtraBold": [
          "1rem",
          {
            fontWeight: 800,
            lineHeight: "1.25rem",
          },
        ],
        // Paragraph P3:
        "Paragraph-P3-Regular": [
          "0.75rem",
          {
            fontWeight: 400,
            lineHeight: "1rem",
          },
        ],
        "Paragraph-P3-SemiBold": [
          "0.75rem",
          {
            fontWeight: 600,
            lineHeight: "1rem",
          },
        ],
        "Paragraph-P3-Bold": [
          "0.75rem",
          {
            fontWeight: 700,
            lineHeight: "1rem",
          },
        ],
        "Paragraph-P3-ExtraBold": [
          "0.75rem",
          {
            fontWeight: 800,
            lineHeight: "1rem",
          },
        ],
        // Button Text:
        "Button-Text-Regular": [
          "1.25rem",
          {
            fontWeight: 400,
            lineHeight: "1.5rem",
          },
        ],
        "Button-Text-SemiBold": [
          "1.25rem",
          {
            fontWeight: 600,
            lineHeight: "1.5rem",
          },
        ],
        "Button-Text-Bold": [
          "1.25rem",
          {
            fontWeight: 700,
            lineHeight: "1.5rem",
          },
        ],
        "Button-Text-ExtraBold": [
          "1.25rem",
          {
            fontWeight: 800,
            lineHeight: "1.5rem",
          },
        ],
        // Button Text 2:
        "Button-Text-2-Regular": [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "1.25rem",
          },
        ],
        "Button-Text-2-SemiBold": [
          "1rem",
          {
            fontWeight: 600,
            lineHeight: "1.25rem",
          },
        ],
        "Button-Text-2-Bold": [
          "1rem",
          {
            fontWeight: 700,
            lineHeight: "1.25rem",
          },
        ],
        "Button-Text-2-ExtraBold": [
          "1rem",
          {
            fontWeight: 800,
            lineHeight: "1.25rem",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      cursor: {
        custom: "url(/images/Arrow.svg), auto",
        hover: "url(/images/Pointer.svg), auto",
        "custom-text": "url(/images/Text.svg), auto",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: (utilities: object) => void }) {
      const newUtilities = {
        ".text-outline": {
          "-webkit-text-stroke": "1px black",
          "font-weight": "700",
          color: "white",
          "@variants responsive, hover": {},
        },
        ".text-outline-thick": {
          "-webkit-text-stroke": "2px black",
          color: "transparent",
          "@variants responsive, hover": {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
