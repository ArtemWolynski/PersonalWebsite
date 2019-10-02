export const particlesStyle = {
  'position': 'fixed',
  'width': '100%',
  'height': '100%',
  'z-index': -1,
  'top': 0,
  'left': 0,
  'right': 0,
  'bottom': 0,
};


export const particlesSettings = {
  particles: {
    number: {
      value: 100,
    },
    density: {
      enable: true
    },
    color: {
      value: '#ff0000'
    },
    shape: {
      type: 'triangle',
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    },
    move: {
      enable:true
    }
  }
};
