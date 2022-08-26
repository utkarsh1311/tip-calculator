/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			"space-mono": ["Space Mono", "monospace"],
		},
		colors: {
			primary: "#26c0ab",
			secondary: "#00494d",
			"gray-cyan": {
				50: "#f4fafa",
				100: "#c5e4e7",
				500: "#7f9c9f",
				800: "#5e7a7d",
			},
			white: "#ffffff",
		},
		extend: {},
	},
	plugins: [],
};
