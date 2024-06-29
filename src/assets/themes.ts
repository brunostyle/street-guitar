import { createTheme } from '@nextui-org/react'; 

export const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			backgroundContrast: '#0c0b0b',
			opacity: 'rgba(0,0,0,.6)',
			opacityContrast: 'rgba(0,0,0,.6)',
		},
	},
});

export const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: {
			opacity: 'rgba(255,255,255,.8)',
			opacityContrast: 'rgba(255,255,255,.6)',
		},
	},
});
