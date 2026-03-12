import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <-- ESTA LÍNEA ES CLAVE
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hseq: {
          blue: '#003366', // El azul corporativo que vimos
          gold: '#C5A059', // El dorado de certificación
        }
      },
    },
  },
  plugins: [],
};
export default config;