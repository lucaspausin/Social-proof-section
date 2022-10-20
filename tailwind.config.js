/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			fontFamily: {
				Spartan: "League Spartan",
			},
			colors: {
				darkMagenta: "hsl(300, 43%, 22%)",
				darkGrayishMagenta: "hsl(303, 10%, 53%)",
				lightMagen: "hsl(300, 24%, 96%)",
				softPink: "hsl(333, 80%, 67%)",
				White: "hsl(0, 0%, 100%)",
			},
			backgroundImage: {
				doubleDesktop:
					"url('/public/images/bg-pattern-top-desktop.svg'),url('/public/images/bg-pattern-bottom-desktop.svg')",
				doubleMobile:
					"url('/public/images/bg-pattern-top-mobile.svg'),url('/public/images/bg-pattern-bottom-mobile.svg')",
			},
			backgroundPosition: {
				"top-left-bottom-right": "top left, bottom right",
				"top-bottom": "top, bottom",
			},
		},
	},
	plugins: [],
};
