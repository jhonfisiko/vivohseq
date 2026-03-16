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
       blue: '#001a33', // Azul Medianoche
          gold: '#FFD700', // Oro Brillante (Vibrante)
          accent: '#C5A059', // Dorado Bronce para detalles sutiles
        }
      },
    },
  },
  plugins: [],
};
export default config;