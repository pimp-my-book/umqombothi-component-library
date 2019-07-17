module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Rubik Mono One', 'open-sans'],
      body: ['kanit', 'open-sans'],
    },
    extend: {
      colors: {
        'pmb-pink': {
          'darkest': '#ED0677',
          'dark': '#E06C9F',
          'normal': '#E574BC',
          'light': '#EFBCD5',
          'lightest': 'EFBCD5',
        },
        'pmb-neutral': {
          'darkest': '#232735',
          'dark': '#A1A4B1',
          'normal': '#D3D4D8',
          'light': '#F0F1F3',
          'lightest': '#FAFAFC',
        },
        'pmb-green': {
          'darkest': '#498467',
          'dark': '#61B066',
          'normal': '#52B788',
          'light': '#00A265',
          'lightest': '#BBE1C3',
        },
        'pmb-blue': {
          'darkest': '#010059',
          'dark': '#1E7B9E',
          'normal': '#249DC9',
          'light': '#7FDBE8',
          'lightest': '#A8E8EA',
        }
      },
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
