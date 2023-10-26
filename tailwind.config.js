/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.{js,jsx,ts,tsx}",
		"./src/pages/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"white-1": "var(--white)",
				"black-1": "var(--black)",
			},
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
			screens: {
				sm: "576px",
			},
		},
	},
	plugins: [],
};
