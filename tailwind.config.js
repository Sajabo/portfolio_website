/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,css}"], // Ensure Tailwind scans CSS too
    theme: {
      extend: {
        colors: {
          primary: "#FFFFFF",    // White
          secondary: "#64748B",  // Grayish Blue
          accent: "#FACC15",     // Yellow
          background: "#000000", // Black
        },
      },
    },
    plugins: [],
};
