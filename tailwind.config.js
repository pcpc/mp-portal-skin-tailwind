const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    customForms: {
      horizontalPadding: defaultTheme.spacing[3],
      verticalPadding: defaultTheme.spacing[2],
      lineHeight: defaultTheme.lineHeight.normal,
      fontSize: defaultTheme.fontSize.base,
      borderColor: defaultTheme.borderColor.default,
      borderWidth: defaultTheme.borderWidth.default,
      borderRadius: defaultTheme.borderRadius.default,
      backgroundColor: defaultTheme.colors.white,
      focusBorderColor: defaultTheme.colors.blue[400],
      focusShadow: defaultTheme.boxShadow.outline,
      checkboxSize: '1em',
      radioSize: '1em',
      checkboxIcon: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M13.293 4.293a1 1 0 0 1 0 1.414L7 12a1 1 0 0 1-1.414 0L3.293 9.707a1 1 0 0 1 1.414-1.414l1.586 1.586 5.586-5.586a1 1 0 0 1 1.414 0z"/></svg>`,
      radioIcon: `<svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"/></svg>`,
      checkedColor: 'currentColor',
      selectIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="\${defaultTheme.colors.gray[500]}"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
      selectIconOffset: defaultTheme.spacing[2],
      selectIconSize: '1.5em',
    },
    extend: {},
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
