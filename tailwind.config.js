/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            'animation': {
                'text': 'text 5s ease infinite',
                'border': 'border 10s ease infinite', // new animation
            },
            'keyframes': {
                'text': {
                    '0%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                    '100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    }
                },
                'border': { // new keyframes
                    '0%': { 'border-color': '#6366F1' },
                    '50%': { 'border-color': '#8B5CF6' },
                    '100%': { 'border-color': '#6366F1' },
                },
            },
            backgroundImage: {
                'gradient-31': 'linear-gradient(31deg, var(--tw-gradient-stops))',
            },
            colors: {
                'header-right': '#363867',
                'header-left': '#1f2140',
                'brand-green': '#53bb67',
            },
            margin: {
                "4.5" : "1.125rem"
            }
        },
    },
    plugins: [],
};
