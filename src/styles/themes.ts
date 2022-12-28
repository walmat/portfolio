import { DefaultTheme } from 'styled-components'

export interface Theme extends DefaultTheme {
  breakpoints: string[]
  colors: {
    primary: string
    secondary: string
    tertiary: string
    error: string
    cta: string
    dim: string
    background: string
  }
  filters: {
    background: string
    border: string
    padding: string
    radius: string
    option: {
      color: string
      hover: string
    }
    highlight: {
      background: string
      radius: string
      padding: string
    }
  }
  card: {
    background: string
    radius: string
    shadow: string
  }
  cornerItem: {
    background: string
    arrow: string
    hover: string
    shadow: string
  }
  biography: {
    background: string
    radius: string
    shadow: string
  }
  github: {
    background: string
    radius: string
    shadow: string
  }
  nebula: {
    background: string
    radius: string
    shadow: string
  }
  spotify: {
    background: string
    radius: string
    shadow: string
  }
  twitter: {
    background: string
    radius: string
    shadow: string
  }
  tigerbob: {
    background: string
    radius: string
    shadow: string
  }
  background: {
    background: string
    radius: string
    shadow: string
  }
  recur: {
    background: string
    radius: string
    shadow: string
  }
  contact: {
    input: {
      background: string
      border: string
    }
    button: {
      background: string
      shadow: string
      hover: string
    }
  }
  switch: {
    container: string
    background: string
    toggle: string
    radius: string
    shadow: string
  }
}

export const light: Theme = {
  breakpoints: ['40rem', '800px', '64rem'],
  colors: {
    primary: 'rgb(13, 17, 23)',
    secondary: '',
    tertiary: '',
    error: '#6A2E35',
    cta: '',
    dim: 'rgba(9, 12, 16, 0.6)',
    background: 'rgb(240, 242, 248)'
  },
  filters: {
    background: 'rgba(0, 0, 0, 0.04)',
    border: 'none',
    padding: '5px',
    radius: '23px',
    option: {
      color: 'rgb(13, 17, 23, 1)',
      hover: 'rgba(13, 17, 23, 0.5)'
    },
    highlight: {
      background: 'rgb(255, 255, 255)',
      radius: '16px',
      padding: '0.25rem'
    }
  },
  card: {
    background: 'rgb(255, 255, 255)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  cornerItem: {
    background: 'rgb(255, 255, 255)',
    arrow: '#0D1117',
    hover:
      'rgb(255 255 255) 0px 0px 0px 1px, rgb(255 255 255 / 50%) 0px 0px 0px 6px',
    shadow: 'none'
  },
  biography: {
    background: 'rgb(255, 255, 255)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  github: {
    background: '#171515',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  nebula: {
    background: 'linear-gradient(30deg, #776AF2 13.4%, #A097FD 86.61%)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  spotify: {
    background: 'rgb(255, 255, 255)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  twitter: {
    background: 'rgb(152, 208, 255)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  tigerbob: {
    background: 'rgb(248, 210, 204)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  background: {
    background: 'rgb(152, 208, 255)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  recur: {
    background: 'linear-gradient(30deg, #16C980 13.4%, #2AE89A 86.61%)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  contact: {
    input: {
      background: 'transparent',
      border: '2px solid rgb(240, 242, 248)'
    },
    button: {
      background: 'transparent',
      shadow: 'rgb(240 242 248) 0px 0px 0px 2px',
      hover: 'rgb(240 242 248) 0px 0px 0px 5px'
    }
  },
  switch: {
    container: 'rgb(255, 255, 255)',
    background: 'rgb(240, 242, 248)',
    toggle: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  }
}

export const dark: Theme = {
  breakpoints: ['40rem', '50rem', '75rem'],
  colors: {
    primary: 'rgb(240, 242, 248)',
    secondary: '',
    tertiary: '',
    error: '#6A2E35',
    cta: '',
    dim: 'rgba(240, 242, 248, 0.6)',
    background: 'rgb(9, 12, 16)'
  },
  filters: {
    background: 'transparent',
    border: '2px solid rgb(48, 54, 61)',
    padding: '5px',
    radius: '23px',
    option: {
      color: 'rgba(240, 242, 248, 1)',
      hover: 'rgba(240, 242, 248, 0.5)'
    },
    highlight: {
      background: 'rgb(33, 38, 45)',
      radius: '16px',
      padding: '0.25rem'
    }
  },
  card: {
    background: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px inset'
  },
  cornerItem: {
    background: 'rgb(13, 17, 23)',
    arrow: '#fff',
    hover: 'rgb(48 54 61) 0px 0px 0px 5px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px'
  },
  biography: {
    background: 'rgb(255, 255, 255)',
    radius: '32px',
    shadow: 'transparent 0px 0px 0px 2px inset'
  },
  github: {
    background: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px inset'
  },
  nebula: {
    background: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px inset'
  },
  spotify: {
    background: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px inset'
  },
  twitter: {
    background: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px inset'
  },
  tigerbob: {
    background: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px inset'
  },
  background: {
    background: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px inset'
  },
  recur: {
    background: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px inset'
  },
  contact: {
    input: {
      background: 'transparent',
      border: '2px solid rgb(48, 54, 61)'
    },
    button: {
      background: 'transparent',
      shadow: 'rgb(48 54 61) 0px 0px 0px 2px',
      hover: 'rgb(48 54 61) 0px 0px 0px 5px'
    }
  },
  switch: {
    container: 'rgb(13, 17, 23)',
    background: 'rgb(33, 38, 45)',
    toggle: 'rgb(13, 17, 23)',
    radius: '32px',
    shadow: 'rgb(48 54 61) 0px 0px 0px 2px inset'
  }
}

interface Themes {
  [key: string]: Theme
}

export const themes: Themes = {
  light,
  dark
}
