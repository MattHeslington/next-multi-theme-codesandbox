//PLAN=> traditional theme switcher and setup. We then have another menu, list, whatever, that applies a twitter: or facebook: variant

const plugin = require('tailwindcss/plugin')

module.exports = {
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function({ addVariant, e }) {
            addVariant('varOne', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.varOne .${e(`varOne${separator}${className}`)}` // this is CSS selector
                })
            })
        })
    ],
}
