interface Project {
  title: string
  name: string
  description: string
}

interface Projects {
  [key: string]: Project
}

export const projects: Projects = {
  tigerbob: {
    title: '//tigerbob',
    name: 'Tigerbob',
    description: 'NFT pixel art meets high end fashion'
  },
  nebula: {
    title: '//nebula',
    name: 'Nebula',
    description:
      'An automation tool designed and built to help you secure the most sought after sneakers.'
  }
}
