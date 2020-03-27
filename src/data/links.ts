export type Link = {
  name: string
  href: string
  username: string
  type: 'normal' | 'email' | 'tel'
}

export const links: Link[] = [
  {
    name: 'Email',
    href: 'sunny@glvn.co',
    type: 'email',
    username: 'sunny@glvn.co',
  },
  {
    name: 'Github',
    href: 'https://github.com/sgolovine',
    type: 'normal',
    username: 'sgolovine',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/SunnyGolovine',
    type: 'normal',
    username: 'SunnyGolovine',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/sgolovine',
    type: 'normal',
    username: 'sgolovine',
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@SunnyGolovine',
    type: 'normal',
    username: 'SunnyGolovine',
  },
  {
    name: 'Dev.to',
    href: 'https://dev.to/sgolovine',
    type: 'normal',
    username: 'sgolovine',
  },
]
