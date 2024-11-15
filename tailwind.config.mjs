/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			primary: {
				DEFAULT: '#000',
				foreground: '#fff',
			},
		},
		borderColor: {
			DEFAULT: '#ddd',
		}
	},
	plugins: [],
}
