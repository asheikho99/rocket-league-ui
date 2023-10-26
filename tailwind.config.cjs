/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				foreground: '#2c2b31',
				'foreground-muted': '#181a21',
				'foreground-dark': '#141b22',
				'foreground-light': '#2c2a30',
				'team-0': {
					primary: '#0182c5',
					secondary: '#185571',
					charge: '#1085d1',
				},
				'team-1': {
					primary: '#f76d1f',
					secondary: '#9f4829',
					charge: '#f87a32',
				},
			},
			animation: {
				fade: 'fadeOut 1s ease-out 1',
			},
			keyframes: (theme) => ({
				fadeOut: {
					'0%': {transform: 'scale(1)', opacity: '100%' },
					'100%': {transform: 'scale(2)', opacity: '0%' },
				},
			}),
		},
	},

	plugins: [],
};

module.exports = config;
