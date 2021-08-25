import { extendTheme } from "native-base";

const Theme = extendTheme({
	colors: {
		input: {
			'white': '#FFF'
		},
		background: {
			primary: '#FFF',
			secondary: '#2196f3',
			tertiary: 'rgba(33, 150, 243, 0.1)'
		},
		text: {
			primary: '#FFF',
			secondary: '#2196f3',
			tertiary: '#636363'
		}
	},

});

export default Theme;
