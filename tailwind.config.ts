import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
<<<<<<< HEAD
        'padrao': '#128b9e',
        'padraoHover': '#128b9e5e',
        'transparente':"rgb(0 0 0 / 19%)"
=======
        'form': "rgb(0 0 0 / 0.2)",
        'padrao': '#128b9e',
        'padraoFooter': '#0b5966',
        'padraoHover': '#128b9e5e',
        'transparente':"rgb(0 0 0 / 19%)",
        'transparente2':"rgb(0 0 0 / 75%)",
>>>>>>> 91215c710fe57b2c8654e78a0d943d3e49b345e2
      },
    },
  },
  plugins: [],
}
export default config
