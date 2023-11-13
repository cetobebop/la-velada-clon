/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				boxing: ["boxing"],
				"boxing-striped": ["boxing striped", "sans-serif"]
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
