/** @type {import('tailwindcss').Config} */
export default {
    corePlugins: {
        overscrollBehavior: false
    },
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'img': "url('https://source.unsplash.com/random')"
            }
        },
    },
    plugins: [],
}