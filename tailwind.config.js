/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primary: '#132d63',
					secondary: '#141414',
					accent: '#FFFFFF',
					neutral: '#2a323c',
					'base-100': '#1d232a',
					info: '#3abff8',
					success: '#6dff00',
					warning: '#fde047',
					error: '#f0231c'
      }
    },
  },
  plugins: [],
}

