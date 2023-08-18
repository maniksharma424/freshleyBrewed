/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'custm':"330px"
    },

    extend: {
      backgroundImage: {
        "custom-bg":
          "url('https://images.unsplash.com/photo-1561758423-4a993d30afea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVkJTIwZ3VpdGFyfGVufDB8fDB8fHww&w=1000&q=80')",
      },
    },
    fontFamily: {
      monstreat: ["Montserrat"],
    },
  },
  plugins: [],
};
