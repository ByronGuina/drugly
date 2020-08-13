module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            desktop: '1354px',
            tablet: { min: '887px', max: '1353px' },
        },
        fontFamily: {
            sans: "'Inter', 'sans-serif'",
            mono: "'Roboto Mono', monospace",
        },
        extend: {
            colors: {
                'byron-background': '#f2f2f2',
                'byron-input': '#f7f5f2',
                'byron-black': '#121214',
                'byron-text': '#303030',
                'byron-text-light': '#707070',
                'byron-indigo': '#5777FF',
                'byron-purple': '#959cec',
                'byron-github': '#339489',
                'byron-insta': '#ff7b7f',
                'byron-twitter': '#7992ff',
            },
            gridTemplateRows: {
                layout: '100px repeat(5, 1fr) 100px',
            },
            gridTemplateColumns: {
                layout: '8% repeat(10, 1fr) 8%',
            },
            spacing: {
                layout: '8%',
            },
        },
    },
    variants: {},
    plugins: [],
}
