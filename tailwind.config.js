/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        neutral: {
          150: "rgb(237 237 237)",
          250: "rgb(220 220 220)",
          350: "rgb(188 188 188)",
          450: "rgb(139 139 139)",
          550: "rgb(98 98 98)",
          650: "rgb(73 73 73)",
          750: "rgb(51 51 51)",
          850: "rgb(30 30 30)"
        },
        gold: {
          100: "#f0e8db",
          200: "#e1d1b7",
          300: "#d2ba93",
          400: "#c3a36f",
          500: "#c6a370", // light primary
          600: "#b18c5a",
          700: "#9c7544",
          800: "#875e2e", // dark
          900: "#724718"
        },
        color2: {
          100: "#c7d1d6",
          200: "#9faab3",
          300: "#778390",
          400: "#4f5c6d",
          500: "#27354a",
          600: "#1a3241", // light primary
          700: "#0d2b38",
          800: "#00242f",
          900: "#001d26"
        }
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
