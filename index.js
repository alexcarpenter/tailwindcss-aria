const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addVariant, e }) {
  const ariaCurrentValues = ['page', 'step', 'location', 'date', 'time', 'true', 'false'];
  addVariant('current', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return [...ariaCurrentValues]
        .map(val => `.${e(`current${separator}${className}`)}[aria-current="${val}"]`)
        .join(', ');
    })
  }),
  addVariant('expanded', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`expanded${separator}${className}`)}[aria-expanded="true"], [aria-expanded="true"] > .${e(`expanded${separator}${className}`)}`
    })
  })
})
