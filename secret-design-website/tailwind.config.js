/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                cream: '#F5F1E8',
                gold: '#D4AF37',
                'dark-gray': '#2A2A2A',
        },
        fontFamily: {
            'serif': ['Playfair Display', 'serif'],
            'sans': ['Inter', 'sans-serif'],
        },
    },
    },
    plugins: [],
}