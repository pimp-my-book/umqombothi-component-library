module.exports = {
  important: true,
  theme: {
    screens: {
      's': '320px',
      's-max': [{'max':'320px'}],
      'sl': '375px',
      'sm': '575px',
      'sm-600': '600px',
      'sm-land':[{'min':'667px'}],
      'md': '768px',
      'lg': '992px',
      'x': '1024px',
      'lapie': [{'min':'1280px','max':'1366px'}],
      'xl': [{'min': '1500px'}],
    },
    fontFamily: {
      display: ['Rubik Mono One', 'open-sans'],
      body: ['Kanit', 'open-sans'],
    },
    extend: {
      colors: {
        pinkDarkest: '#ED0677',
        pinkDark: '#E06C9F',
        pink: '#E574BC',
        pinkLight: '#F9B4ED',
        pinkLighest:'#EFBCD5',
        black:'#232735',
        greyDark: '#A1A4B1',
        grey:'#D3D4D8',
        greyLight: '#F0F1F3',
        greyLightest: '#',
        white: '#FFFFFF',
        greenDarkest: '#498467',
        greenDark: '#61B066',
        green: '#52B788',
        greenLight: '#00A265',
        greenLightest: '#BBE1C3',
        blueDarkest: '#010059',
        blueDark: '#249DC9',
        blue: '#7FDBE8',
        blueLight: '#A8E8EA',
        blueLightest: '#E0FFF7',
        redDarkest: '#92140C',
        redDark: '#D80032',
        red: '#EF233C',
        redLight: '#EC5766',
        redLightest: '#EF7674',
        orangeDarkest: '#F25C54',
        orangeDark:'#F27059',
        orange: '#F4845F',
        orangeLight: '#F79D65',
        orangeLightest: '#F7B267',
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [
    function({ addComponents }) {
      const btTrans = {
        'pmbTrans': {
          '&:before': {
            'position': 'absolute',
            'top': 'calc(50% - 5px)',
            'left': 'calc(50% - 5px)',
            'width': '10px',
            'height': '10px',
            'background-image': 'linear-gradient(to top, #ED0677 0%, #ED0677 100%)',
            'z-index': '-1',
            'transition': 'all .2s linear',
            'border-radius': '100%',
            'opacity': '0',
          },
          '&:hover': {
            'color': 'white',
            '&:before': {
              'transform': 'scale(25)',
              'opacity': '1',
            },
          },
        },
      }

      addComponents(btTrans)
    }
  ]
}
