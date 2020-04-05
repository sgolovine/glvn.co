import React from 'react'
import { ProjectCard } from '~/components/ProjectCard'

const data = [
  {
    key: 'tiptrack',
    name: 'TipTrack',
    desc:
      'The worlds smartest tip tracker. Built with React Native, avaliable for iOS and Android',
    links: [
      { name: 'Website', href: 'https://tiptrack.app' },
      { name: 'App Store', href: '#' },
      { name: 'Google Play', href: '#' },
    ],
  },
  {
    key: 'fav',
    name: 'Fav Bookmark Manager',
    desc:
      'Open source alternative bookmark manager for Firefox, Chrome and other Chromium browsers. Syncronizes with Github Gist API. Built with ReactJS and Material UI',
    links: [
      { name: 'Website', href: 'https://tiptrack.app' },
      { name: 'Firefox Addons', href: '#' },
      { name: 'Chrome Web Store', href: '#' },
    ],
  },
  {
    key: 'copybin',
    name: 'CopyBin',
    desc:
      'React Native app. Lets you quickly Copy and Paste Canned Responses. Avaliable on Google Play',
    links: [
      {
        name: 'Website',
        href: 'https://glvn.co/projects/copy-bin',
      },
      {
        name: 'Google Play',
        href: 'https://glvn.co/projects/copy-bin',
      },
    ],
  },
  {
    key: 'dotfiles',
    name: 'dotfiles',
    desc: 'My dotfiles',
    links: [
      {
        name: 'Github',
        href: 'https://github.com/sgolovine/dotfiles',
      },
    ],
  },
]

export default () => (
  <div className="page">
    {data.map((item) => {
      return (
        <ProjectCard
          key={item.key}
          name={item.name}
          desc={item.desc}
          links={item.links}
        />
      )
    })}
    <div className="project-footer">
      <a href="https://github.com/sgolovine">
        See more of my projects on Github
      </a>
    </div>
  </div>
)
