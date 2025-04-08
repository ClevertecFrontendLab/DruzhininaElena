import { extendTheme } from '@chakra-ui/react';

const colors = {
    lime: {
        50: '#FFFFD3',
        100: '#EAFFC7',
        150: '#D7FF94',
        300: '#C4FF61',
        600: '#2DB100',
        700: '#207E00',
        800: '#134B00',
    },
};

const breakpoints = {
    base: '0px',
    sm: '360px',
    md: '768px',
    lg: '1200px',
    xl: '1440px',
    '2xl': '1536px',
};

const fonts = {
    body: 'Inter, sans-serif',
};

const lineHeights = {
    normal: 'normal',
    base: 1.4,
};

export const theme = extendTheme({
    colors,
    breakpoints,
    fonts,
    lineHeights,
    styles: {
        global: {
            'html, body': {
                lineHeight: 'base',
                fontFamily: 'body',
            },
            ':root': {
                fontSynthesis: 'none',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
            },
            '*, *::before, *::after': {
                boxSizing: 'border-box',
                padding: '0',
                margin: '0',
                border: '0',
            },
            html: {
                scrollBehavior: 'smooth',
            },
            a: {
                textDecoration: 'none',
                _hover: {
                    textDecoration: 'none',
                },
            },
            'section, article': {
                mb: { base: '2rem', lg: '2.5rem' },
            },
        },
    },
    components: {
        Text: {
            baseStyle: {
                fontFamily: 'body',
            },
        },
        Switch: {
            baseStyle: {
                track: {
                    bg: 'blackAlpha.300',
                    _checked: {
                        bg: 'lime.700',
                    },
                },
            },
        },
    },
});
