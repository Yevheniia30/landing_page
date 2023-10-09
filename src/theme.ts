import {createTheme} from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(10,9,13,0.8)',
            light: '#181621',
            contrastText: '#10EA18',
        },
        secondary: {
            main: '#2c303a',
            light: '',
            contrastText: 'radial-gradient(circle, rgba(93,42,164,1) 0%, rgba(34,23,52,0.8) 150%);',
        },
        common: {
            black: '#000',
            white: '#fff',
        },
        grey: {},
        text: {
            primary: '#f2f2f4',
            secondary: '#afafc7',
            // secondary: '#444857',
        },
    },
    // spacing: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    spacing: [0, 4, 8, 16, 24, 32, 48, 64],
    transitions: {},
    // shadows: ['none', '-2px -2px 10px 15px rgba(44,48,58,0.7)'],
});
