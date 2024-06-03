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
            md: "0.9rem",
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '2rem',
            '4xl': '2.5rem',
            '5xl': '3.0rem',
            '6xl': '3.75rem'
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
            "3xl": { min: "1535px" }, //Extra-large desktops

            "2xl": { min: "1280px" }, // Larger desktops

            xl: { max: "1279px" }, // Laptops and desktops

            lg: { max: "1023px" }, // Tablets and smaller laptops

            md: { max: "767px" }, // Tablets and smaller laptops
 
            sm: { max: "639px" }, // Larger mobile devices

            xs: { max: "479px" } // Mobile devices 
        },
    },
    plugins: [],
}