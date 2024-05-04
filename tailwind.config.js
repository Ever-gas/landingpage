/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			satoshi: ['Satoshi', 'sans-serif']
		},
		extend: {
			colors: {
				evergreen: {
					soft: '#D9DEDD;',
					light: '#BEF264;',
					medium: '#24D164;',
					dark: '#022C22;'
				},
				everdark: '#121316;',
				everblue: '#C6DAF7;',
				everpeach: '#FDC571;',
				evergrey: '#F8F8F9;',
				paragraph: '#646A69;',
				title: '#1D1F1E;',
				heading: '#121316;',
				hint: '#84889A;'
			}
		}
	},
	plugins: []
};
