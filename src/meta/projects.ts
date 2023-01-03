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
  nebula: {
    title: '//nebula',
    name: 'Nebula',
    description:
      'An enterprise-level automation application designed and built to help you secure the most sought-after sneakers and high-end fashion. Powered by React.js, Typescript, Styled-Components && Golang.',

    body: [
      'As I was transitioning out of University in May of 2018, I had a diminishing desire to work for someone else and build out their vision for what would "make the world a better place." This realization led me on a journey of thinking and reflecting on what I felt passionate about and felt could be a viable source of income to pay off my student loans as quickly as possible.',
      'Enter Nebula: An automation application I built to help secure the most sought-after sneakers and high-end fashion. I had been using it for a few months and had been able to secure a few pairs of sneakers and a few pieces of clothing. I quickly realized that I could sell this as licensed software to others who want to either secure a pair of sneakers or make a quick buck by flipping them like I was. I decided to take the plunge and launch Nebula as a product in the summer of 2018, with version one being called Nebula Orion. Fast forwarding to 2019, during the beginning of the COVID-19 pandemic, Nebula was being used by thousands of people, and I was pulling $175,000 MRR, which allowed me to pay off my student loans in less than a year of graduation. The final version of Nebula was called Nebula Carina, a web application written in React.js with a backend in Golang. It had a bundle size of less than 30 MB and allowed users virtually unlimited tasks due to the Golang engine. Nebula Carina launched in January 2021. We had thousands of DAUs worldwide trying to secure anything from PS5s, hats, sneakers, clothing, etc.',
      'I exited the company by stepping down and transitioning into automating NFTs in the early spring of 2021.'
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
  tigerbob: {
    title: '//tigerbob',
    name: 'Tigerbob',
    description:
      'An ethereum NFT (non-fungible token) project that aims to bridge the gaps between high-end fashion and blockchain technology.',
    body: [
      'Shortly after exiting Nebula, I decided to take a break from building out software and focus on my health and fitness. I had been working on Nebula for over three years, and I was burnt out. I needed a break. I decided to enter into the NFT community early spring of 2021 by writing an automation software that would allow me to mint NFTs on the Ethereum blockchain and flip them for a profit. I quickly gained a following on Twitter and it was at that time that Gossamer reached out to me to help build out the Tigerbob brand. I was excited to work with Gossamer as I had been following their work for a while and was a fan of the vision they had for their brand. We decided to build out the Tigerbob brand together and launch it in the summer of 2021.',
      'Tigerbob was backed by an ERC721A smart contract with a total supply of one thousand. The NFTs were minted on the Ethereum blockchain and were sold for 0.25Ξ each. The NFTs sold out in the public sale and were trading on secondary markets for over 2Ξ each. The Tigerbob brand is still in its infancy, but there are big plans to expand the brand and build out the community.',
      'While working on Tigerbob, I was contracted to do a number of NFT projects which ranged from full-fledged 10,000 profile picture collections, to NFT appraisal tools. Because of this, I caught the attention of an early stage Web3 startup: RECUR. I decided to take a step back from Tigerbob and work full-time as a Senior Frontend Engineer there while also building out a coveted Web3 crypto game on the Arbitrum Nova blockchain.'
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
  recur: {
    title: '//recur',
    name: 'Recur Forever',
    description:
      'An enterprise-level web application that aims to onboard the masses into Web3 by providing a platform to facilitate an NFT project all the way from building the website to generating the artwork.',
    body: [
      'Working at RECUR was one of the most rewarding times of my life. Being surrounded by people who challenge you is how you best grow as a developer and more importantly, a human being. As a Senior Frontend Engineer, I was responsible for their proprietary platform called RECUR Studio. RECUR Studio is a full-stack application that utilizes Remix, React.js, and a Prisma draft layer, as well as a PostgreSQL persistence layer. The application is deployed on a Kubernetes cluster and is hosted on AWS.',
      'RECUR Studio enables anyone to quickly create an NFT website and any related artwork, and then deploy it to the Polygon blockchain. Utilizing their chain-agnostic approach, your end-user(s) can choose to pay in fiat, crypto, or even their previous wallet balance.',
      'The team operated in two week agile sprints with a JIRA ticket-based approach. We also used Confluence for internal documentation, and Slack for internal communication. I was responsible for the frontend of the application, and I worked closely with the Platform team to ensure that the application was scalable and performant. I also worked closely with the Product Designers to ensure that the application was intuitive and easy to use. RECUR Studio is still in its early stages, but there are big plans to expand the platform and ultimately launch the platform in 2023 for anyone to use.'
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
