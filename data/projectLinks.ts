import { LinkItem } from '~/model/LinkItem'

const projects = [
  {
    key: 'tiptrack',
    name: 'TipTrack',
    shortDesc: 'The worlds smartest tip tracker',
    desc:
      'The worlds smartest tip tracker. Built with React Native, avaliable for iOS and Android',
    links: [
      { name: 'Website', href: 'https://tiptrack.app' },
      {
        name: 'App Store',
        href: 'https://apps.apple.com/us/app/tiptrack/id1495916444',
      },
      {
        name: 'Google Play',
        href:
          'https://play.google.com/store/apps/details?id=com.glvn.tiptrack&hl=en_US',
      },
    ],
  },
  {
    key: 'resumekit',
    name: 'ResumeKit',
    shortDesc: 'Markdown resume builder',
    desc:
      'Build your resume in Markdown, convert and deploy automatically with updates.',
    links: [{ name: 'Github', href: 'https://github.com/sgolovine/resumekit' }],
  },
  {
    key: 'fav',
    name: 'Fav Bookmark Manager',
    shortName: 'Fav',
    shortDesc: 'Bookmark manager for Chrome & Firefox',
    desc:
      'Open source alternative bookmark manager for Firefox, Chrome and other Chromium browsers. Syncronizes with Github Gist API. Built with ReactJS and Material UI',
    links: [
      { name: 'Website', href: 'https://fav.sh' },
      {
        name: 'Firefox Addons',
        href: 'https://addons.mozilla.org/en-US/firefox/addon/fav/',
      },
      {
        name: 'Chrome Web Store',
        href:
          'https://chrome.google.com/webstore/detail/fav-bookmark-manager/gammmbkeceiljlgijimbhhgkfmiejnkl',
      },
    ],
  },
  {
    key: 'copybin',
    name: 'CopyBin',
    shortDesc: 'Quickly copy/paste canned responses',
    desc:
      'React Native app. Lets you quickly Copy and Paste Canned Responses. Avaliable on Google Play',
    links: [
      {
        name: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.glvn.copybin',
      },
    ],
  },
  {
    key: 'dotfiles',
    name: 'dotfiles',
    desc: 'My dotfiles',
    shortDesc: 'My dotfiles',
    links: [
      {
        name: 'Github',
        href: 'https://github.com/sgolovine/dotfiles',
      },
    ],
  },
]

// LinkItem

export const projectsAsLinkItem: LinkItem[] = projects.map((item) => ({
  name: item.shortName || item.name,
  href: item.links[0].href,
  desc: item.shortDesc,
}))

export default projects
