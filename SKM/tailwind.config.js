/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-main)",
        error: "var(--color-notice)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#cf0201",
          secondary: "#fff",
          accent: "#37CDBE",
          neutral: "#333333",
          "base-100": "#f0f0f0",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#e25656",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
