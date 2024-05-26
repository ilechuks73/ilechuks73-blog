/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      // => @media (min-width: 600px) {...}

      md: "900px",
      // => @media (min-width: 760px) {...}

      lg: "1200px",
      // => @media (min-width: 1024px) {...}

      xl: "1536px",
      // => @media (min-width: 1280px) {...}

      "2xl": "1936px",
      // => @media (min-width: 1536px) {...}
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#27AE60",
        dark: "#191A15",
        black: "#121212",
      },
    },
  },
  plugins: [],
};
