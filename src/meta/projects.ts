export interface Link {
  label: string
  href: string
}

export interface Images {
  [key: string]: {
    src: string
    props?: {
      style?: {
        [key: string]: string
      }
    }
  }
}

export interface Project {
  title: string
  name: string
  description: string
  body: string[]
  links: Link[]
  images: Images
}

interface Projects {
  [key: string]: Project
}

export const projects: Projects = {
  tigerbob: {
    title: '//tigerbob',
    name: 'Tigerbob',
    description:
      'An ethereum NFT (non-fungible token) project that aims to bridge the gaps between high-end fashion and blockchain technology.',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper ex sed egestas gravida. Morbi dapibus rhoncus orci, vitae finibus nisi dignissim porta. Vestibulum finibus, odio varius malesuada rhoncus, urna odio tempus erat, nec blandit mi libero id nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget accumsan ligula, id sollicitudin eros. Donec fermentum mattis volutpat. Vivamus malesuada consectetur dui, eu vehicula mauris luctus ac. Phasellus lectus nisi, rutrum vel gravida a, suscipit nec lorem. Vivamus sagittis turpis tortor, sit amet convallis nibh lobortis quis. Ut ut vulputate nibh.',
      'Suspendisse molestie risus nec tincidunt dapibus. Pellentesque at lorem ut tortor pulvinar faucibus ac at dui. Praesent nec tempor dolor, at vehicula lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Nulla rutrum tempus interdum. Cras a leo eu tortor ornare accumsan. Nullam egestas quam in orci dignissim, non porta quam suscipit. Aenean ut justo at quam gravida fringilla in sit amet mauris.'
    ],
    links: [
      {
        label: 'Website',
        href: 'https://tigerbob.io'
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/tigerbob_global'
      }
    ],
    images: {
      featured: {
        src: '/tigerbob/product/featured.png',
        props: {
          style: {
            background: 'rgb(127, 224, 239)',
            'object-fit': 'contain',
            padding: '44px'
          }
        }
      },
      logo: {
        src: '/tigerbob/product/logo.png',
        props: {
          style: {
            padding: '44px'
          }
        }
      },
      inverted: {
        src: '/tigerbob/product/inverted.png',
        props: {
          style: {
            padding: '44px'
          }
        }
      },
      first: {
        src: '/tigerbob/product/knit.jpeg',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      second: {
        src: '/tigerbob/product/grimlore.gif',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      third: {
        src: '/tigerbob/product/tank.webp',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      fourth: {
        src: '/tigerbob/product/homepage.png',
        props: {
          style: {
            'object-fit': 'contain',
            padding: '44px'
          }
        }
      },
      fifth: {
        src: '/tigerbob/product/studio.webp',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      sixth: {
        src: '/tigerbob/product/fish.webp',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      }
    }
  },
  nebula: {
    title: '//nebula',
    name: 'Nebula',
    description:
      'An automation tool designed and built to help you secure the most sought after sneakers and high end fashion.',

    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper ex sed egestas gravida. Morbi dapibus rhoncus orci, vitae finibus nisi dignissim porta. Vestibulum finibus, odio varius malesuada rhoncus, urna odio tempus erat, nec blandit mi libero id nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget accumsan ligula, id sollicitudin eros. Donec fermentum mattis volutpat. Vivamus malesuada consectetur dui, eu vehicula mauris luctus ac. Phasellus lectus nisi, rutrum vel gravida a, suscipit nec lorem. Vivamus sagittis turpis tortor, sit amet convallis nibh lobortis quis. Ut ut vulputate nibh.',
      'Suspendisse molestie risus nec tincidunt dapibus. Pellentesque at lorem ut tortor pulvinar faucibus ac at dui. Praesent nec tempor dolor, at vehicula lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Nulla rutrum tempus interdum. Cras a leo eu tortor ornare accumsan. Nullam egestas quam in orci dignissim, non porta quam suscipit. Aenean ut justo at quam gravida fringilla in sit amet mauris.'
    ],
    links: [
      {
        label: 'Figma',
        href: 'https://www.figma.com/file/i6JsTBkpkIMmktegfIz1ak/Nebula'
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/nebulabots'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/walmat/carina'
      }
    ],
    images: {
      featured: {
        src: '/nebula/product/featured.png',
        props: {
          style: {
            padding: '0px'
          }
        }
      },
      logo: {
        src: '/nebula/product/logo.png',
        props: {
          style: {
            'background-color': '#C6C1FE',
            'object-fit': 'contain',
            padding: '20px'
          }
        }
      },
      inverted: {
        src: '/nebula/product/inverted.png',
        props: {
          style: {
            'background-image': 'url(/nebula/product/background.svg)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover',
            'object-fit': 'contain',
            padding: '40px'
          }
        }
      },
      first: {
        src: '/nebula/product/shopify.png',
        props: {
          style: {
            'object-fit': 'contain',
            padding: '64px'
          }
        }
      },
      second: {
        src: '/nebula/product/jubilee.jpeg',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      third: {
        src: '/nebula/product/nike.png',
        props: {
          style: {
            'object-fit': 'contain',
            padding: '64px'
          }
        }
      },
      fourth: {
        src: '/nebula/product/jordan4.png',
        props: {
          style: {
            'object-fit': 'contain',
            padding: '44px'
          }
        }
      },
      fifth: {
        src: '/nebula/product/chicago.png',
        props: {
          style: {
            'object-fit': 'contain',
            padding: '44px'
          }
        }
      },
      sixth: {
        src: '/nebula/product/ps5.jpeg',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      }
    }
  },
  recur: {
    title: '//recur',
    name: 'Recur Forever',
    description:
      'A web application that aims to mass onboard into Web3 by enabling you to create, manage, and facilitate an NFT project all the way from building the website to generating the artwork.',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper ex sed egestas gravida. Morbi dapibus rhoncus orci, vitae finibus nisi dignissim porta. Vestibulum finibus, odio varius malesuada rhoncus, urna odio tempus erat, nec blandit mi libero id nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget accumsan ligula, id sollicitudin eros. Donec fermentum mattis volutpat. Vivamus malesuada consectetur dui, eu vehicula mauris luctus ac. Phasellus lectus nisi, rutrum vel gravida a, suscipit nec lorem. Vivamus sagittis turpis tortor, sit amet convallis nibh lobortis quis. Ut ut vulputate nibh.',
      'Suspendisse molestie risus nec tincidunt dapibus. Pellentesque at lorem ut tortor pulvinar faucibus ac at dui. Praesent nec tempor dolor, at vehicula lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Nulla rutrum tempus interdum. Cras a leo eu tortor ornare accumsan. Nullam egestas quam in orci dignissim, non porta quam suscipit. Aenean ut justo at quam gravida fringilla in sit amet mauris.'
    ],
    links: [
      {
        label: 'Website',
        href: 'https://recurforever.com'
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/recurforever'
      }
    ],
    images: {
      featured: {
        src: '/recur/product/featured.webp',
        props: {
          style: {
            'background-image': 'url(/recur/product/background.png)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'auto',
            'object-fit': 'contain',
            padding: '44px'
          }
        }
      },
      logo: {
        src: '/recur/product/logo.png',
        props: {
          style: {
            'object-fit': 'contain',
            padding: '44px'
          }
        }
      },
      inverted: {
        src: '/recur/product/tagline.jpeg',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      first: {
        src: '/recur/product/tmnt.webp',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      second: {
        src: '/recur/product/nickelodeon.png',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      third: {
        src: '/recur/product/hellokitty.jpeg',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      fourth: {
        src: '/recur/product/introduction.png',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      fifth: {
        src: '/recur/product/products.png',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      },
      sixth: {
        src: '/recur/product/coverage.jpeg',
        props: {
          style: {
            'object-fit': 'cover'
          }
        }
      }
    }
  }
}
