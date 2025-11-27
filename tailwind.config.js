/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust the paths as per your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "TT Ramillas Trl",
          "TT Ramillas Variable",
          "Times New Roman",
          "serif",
        ],
        sans: ['Manrope', 'Inter', 'Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        background: "#fff9f5",
        text: "#000",
      },
    },
  },
  plugins: [],
};

export default config;
