/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        colors: {
            'text': '#f6e2fd',
            'background': '#1d0a24',
            'primary': '#de96f8',
            'secondary': '#280335',
            'accent': '#b514f0',
           },
           fontSize: {
            sm: '0.750rem',
            base: '1rem',
            xl: '1.333rem',
            '2xl': '1.777rem',
            '3xl': '2.369rem',
            '4xl': '3.158rem',
            '5xl': '4.210rem',
          },
          fontFamily: {
            heading: 'Noto Sans Sogdian',
            body: 'Noto Sans Sogdian',
          },
          fontWeight: {
            normal: '400',
            bold: '700',
          },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  }