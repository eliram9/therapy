/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        fontSize: {
            xs: '0.7rem',
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '2rem',
            '4xl': '2.5rem',
            '5xl': '3.052rem',
        },
        letterSpacing: {
            huge: "1em",
            wider: '0.75em',
            wide: '0.55em',
            reg: '0.2em',
            text: '0.03em'
        },
        fontFamily: {
            'days': ['Days One', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                main: "#124C5F",
                mint: "#C7E7E1",
                lightGray: "#FAFBFB",
                banana: "#FFEE94",
                lightBanana: "#FEFAE3",
                blue: "#DEECF5",
                darkGray: "#5B5B5B",
                pink: "#EBA8BF",
                black: "#4E4C46"
            }
        },
        screens: {
            "3xl": { min: "1535px" },
            // @media (max-width: 1535px) { ... }

            "2xl": { min: "1280px" },
            // @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // @media (max-width: 639px) { ... }

            xs: { max: "479px" },
            // @media (max-width: 479px) { ... }
        },
    },
    plugins: [],
}