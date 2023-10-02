import { ASSET } from "./src/assets/assets";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FFFF00",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: {
        "gradient-yellow-red": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": `url('${ASSET.HOME_PAGE_GRAPHIC}')`
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serrif"]
      },
      content: {
        evolvetext: `url('${ASSET.EVOLVE}')`,
        abstractwaves: `url('${ASSET.ABSTRACT_WAVES}')`,
        sparkles: `url('${ASSET.SPARKLES}')`,
        circles: `url('${ASSET.CIRCLES}')`,
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px"
      }
    },
  },
  plugins: [],
}
