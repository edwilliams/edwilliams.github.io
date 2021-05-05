// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// NB base unit is 4px (0.4em)

module.exports = {
  corePlugins: {
    gradientColorStops: false
  },
  theme: {
    // screens: {
    //   md: '768px',
    //   lg: '1024px'
    // },
    // boxShadow: {
    //   'b-xs-grey-600': '0px 1px 0px #718096',
    //   'b-sm-grey-500': '0px 1px 0px #A0AEC0',
    //   'b-sm-grey-800': '0px 2px 0px #2D3748',
    //   'b-sm-blue-700': '0px 2px 0px #2B6CB0'
    // },
    spacing: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '25px',
      5: '30px'
    },
    // fontFamily: {
    //   'body-bk-16': ['SharpGroteskBook-16', 'sans-serif'],
    //   'body-bk-20': ['SharpGroteskBook-20', 'sans-serif'],
    //   'body-md-16': ['SharpGroteskMedium-16', 'sans-serif'],
    //   'body-md-20': ['SharpGroteskMedium-20', 'sans-serif'],
    //   'body-sb-20': ['SharpGroteskSmBold-20', 'sans-serif'],
    //   'body-b-20': ['SharpGroteskBold-20', 'sans-serif']
    // },
    // fontSize: {
    //   xs: '12px', // button-primary
    //   sm: '14px', // body / caption / bold / button / link
    //   md: '16px', // md
    //   lg: '16px', // lg / lg-bold (was 18px in design)
    //   xl: '24px', // sub-title
    //   '2xl': '32px' // title (was 36px in designs)
    // },
    // inset: {},
    // lineHeight: {
    //   none: '1',
    //   normal: '1.5'
    // },
    // letterSpacing: {
    //   normal: '0',
    //   wide: '0.03em'
    // },
    // margin: (theme, { negative }) => ({
    //   ...theme('spacing'),
    //   ...negative(theme('spacing'))
    // }),
    // padding: theme => ({
    //   ...theme('spacing')
    // }),
    // borderRadius: {},
    // translate: (theme, { negative }) => ({
    //   ...theme('spacing'),
    //   ...negative(theme('spacing')),
    //   '-full': '-100%',
    //   '-1/2': '-50%',
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //   full: '100%'
    // }),
    // minWidth: {},
    // minHeight: {
    //   0: '0',
    //   full: '100%',
    //   full: '100%',
    //   30: '120px',
    //   110: '440px',
    //   'h-screen': '100vh'
    // },
    // maxWidth: {
    //   none: 'none',
    //   0: '0',
    //   md: '768px',
    //   lg: '1024px',
    //   full: '100%',
    //   min: 'min-content',
    //   max: 'max-content'
    // },
    // maxHeight: {},
    // opacity: {},
    // zIndex: {},
    width: theme => ({
      ...theme('spacing'),
      auto: 'auto',
      full: '100%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '(full-1)': 'calc(100% - 4px)',
      '(full-2)': 'calc(100% - 8px)',
      '(full-3)': 'calc(100% - 16px)',
      '(full-4)': 'calc(100% - 24px)',
      '(full-5)': 'calc(100% - 32px)'
    }),
    height: theme => ({
      ...theme('spacing'),
      auto: 'auto',
      full: '100%',
      '(full-1)': 'calc(100% - 4px)',
      '(full-2)': 'calc(100% - 8px)',
      '(full-3)': 'calc(100% - 16px)',
      '(full-4)': 'calc(100% - 24px)',
      '(full-5)': 'calc(100% - 32px)'
    })
    // extend: {
    //   animation: {
    //     flashing: 'flashing 2s infinite'
    //   },
    //   keyframes: {
    //     flashing: {
    //       '0%, 50%, 100%': { opacity: 1 },
    //       '25%, 75%': { opacity: 0.25 }
    //     }
    //   }
    // }
  }
}
