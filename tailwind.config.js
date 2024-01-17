// @ts-check

const { theme } = require("./src/design/tailwind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		...theme,
	},
	plugins: [],
};
