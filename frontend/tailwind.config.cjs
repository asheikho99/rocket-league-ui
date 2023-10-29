/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'foreground-dark': '#17232f',
				'foreground-light': '#eae0d6',
				'foreground-accent': '#58ba95',
				'foreground-decent': '#a6dfca',
				'team-0': {
					primary: '#2585bc',
					secondary: '#2ea5c0',
					accent: '#559dc2',
					decent: '#77afc1',
				},
				'team-1': {
					primary: '#e26046',
					secondary: '#f5733c',
					accent: '#eca574',
					decent: '#f3c098',
				},
			},
			animation: {
				fade: 'fadeOut 1s ease-out 1',
			},
			keyframes: (theme) => ({
				fadeOut: {
					'0%': { transform: 'scale(1)', opacity: '100%' },
					'100%': { transform: 'scale(2)', opacity: '0%' },
				},
			}),
		},
	},

	plugins: [],
};

module.exports = config;
