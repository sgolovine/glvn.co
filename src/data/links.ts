export type Link = {
  name: string
  href: string
  type: 'normal' | 'email' | 'tel'
}

export const links: Link[] = [
  {
    name: 'Email',
    href: 'sunny@glvn.co',
    type: 'email',
  },
  {
    name: 'Github',
    href: 'https://github.com/sgolovine',
    type: 'normal',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/SunnyGolovine',
    type: 'normal',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/sgolovine',
    type: 'normal',
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@SunnyGolovine',
    type: 'normal',
  },
  {
    name: 'Dev.to',
    href: 'https://dev.to/sgolovine',
    type: 'normal',
  },
]
