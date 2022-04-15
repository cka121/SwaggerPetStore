module.exports = {
  content: [
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      'sans': ['RobotoInternal', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'form': '0px 0px 3px 0px rgba(0, 0, 0, 0.29)'
      },
      inset: {
        12: '3rem',
      },
      fontSize: {
        '16px': ['16px', { lineHeight: '24px' }], // Not part of design system! Specifically for create submenu, should remove when redesigned
        '22px': ['22px', { lineHeight: '25px' }], // Not part of design system!
        '26px': ['26px', { lineHeight: '30px' }], // Not part of design system!
      },
      screens: {
        '4k': '2560px',
      },
      lineHeight: {
        '17px': '17px',
      },
      spacing: {
        '25': '25px',
        '3plans': '54.5rem',
        '5plans': '62.5rem',
        '7plans': '71.5rem',
        '9plans': '80.5rem',
        'sidebar': '250px',
        76: '19rem',
        140: '35rem',
        144: '36rem',
        184: '46rem',
        188: '47rem',
        195: '48.5rem',
        196: '49rem',
        200: '52rem',
        216: '54rem',
        222: '56rem',
        268: '66.7rem',
        99: '25rem'
      },
      maxWidth: {
        245: '60rem',
        472: '118rem',
        600: '150rem',
        628: '157rem',
        728: '182rem',
      },
      minWidth: {
        76: '19rem',
        360: '90rem',
        472: '118rem',
        728: '182rem',
      },
      minHeight: {
        8: '2rem',
        120: '30rem',
        172: '43rem',
        210: '52.4rem',
        224: '56rem',
        'sb-335': '335px',
      },
      maxHeight: {
        90: '23rem',
      },
      zIndex: {
        '1050': '1050'
      },
    }
  },
  plugins: [require('tw-elements/dist/plugin')],
}
