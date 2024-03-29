/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#a3e635",
  //         secondary: "#58C7F3",
  //         accent: "#F3CC30",
  //         neutral: "#20134E",
  //         "base-100": "#2D1B69",
  //         info: "#53C0F3",
  //         success: "#71EAD2",
  //         warning: "#F3CC30",
  //         error: "#E24056",
  //       },
  //     },
  //   ],
  // },
  plugins: [require("daisyui")],
}
