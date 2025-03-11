/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight:{
        homeMobile: 'calc(100vh - 180px)',
        homeDesktop: 'calc(100vh - 116px)',
        bgAbout: 'calc(100% - 400px)'
      },
      backgroundImage: {
        "bg-about-deskstop": "url('../assets/bg-about-desktop.png')",
        "bg-about-mobile": "url('../assets/bg-about-mobile.png')",
        "bg-about-image-mobile": "url('../assets/bg-image-about.png')",
        "bg-about-image-desktop": "url('../assets/image-about-desktop.png')",
        "bg-empresas": "url('../assets/empresas.png')",
        "bg-request": "url('../assets/bg-request.png')",
        "teste": "url('../assets/bg-about-desktop.png')",
      },
      backgroundSize: {
        "full": '100%',
      },
      screens: {
        mobileSM: '320px',
        tabletSM: '600px',
        tabletMD: '768px',
        tabletLG: '950px',
        laptopSM: '1070px',
        laptopMD: '1200px',
        laptopLG: '1440px',
      },
      fontFamily: {
        primary: ['var(--font-poppins)'],
      },
      colors:{
        'yellow-500': '#DE901B',
        'yellow-800': '#B66C00',
        'nord-neutral-30': '#333B47',
        'nord-neutral-10': '#161616',
        'nord-neutral-00': '#000000',
        'white-400': '#D9D9D9',
        'bg-secundary': '#242424'
      }
    },
  },
  
  plugins: [],
}

