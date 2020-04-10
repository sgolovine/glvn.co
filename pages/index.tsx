import React from 'react'
import workLinks from '~/data/workLinks'
import { LinkItem } from '~/model/LinkItem'
import { projectsAsLinkItem } from '~/data/projectLinks'
import webLinks from '~/data/webLinks'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const profilePicture = require('~/assets/images/profile.png')

const ItemBlock = ({
  header,
  items,
}: {
  header: string
  items: LinkItem[]
}) => (
  <div className="item-block-container">
    <div className="item-block-header-container">
      <p className="item-block-header-text">{header}</p>
    </div>
    <div className="item-block-content-container">
      {items.map((item, index) => (
        <div key={index} className="item-block-content-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.href}
            className="item-block-content-row-label"
          >
            {item.name}
          </a>
          <p className="item-block-content-row-value">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
)

const PageHeader = () => {
  // Placeholder for now
  return (
    <div className="header-container">
      <img src={profilePicture} height="128" alt="profile-picture" />
      <p>
        Hi my name is Sunny Golovine. I am a software engineer specializing in
        Javascript, React and React Native. I currently work for Cox Automotive
        as a mobile developer. In my spare time I like to go hiking and work on
        a few of my{' '}
        <Link href="/projects">
          <a>side projects.</a>
        </Link>{' '}
        If you want to get in touch and learn more feel free to{' '}
        <Link href="/contact">
          <a>reach out.</a>
        </Link>
      </p>
    </div>
  )
}

export default () => (
  <div className="layout-centered">
    <PageHeader />
    <div className="item-blocks-container">
      <ItemBlock header="Work" items={workLinks} />
      <ItemBlock header="Links" items={webLinks} />
      <ItemBlock header="Side Hustle" items={projectsAsLinkItem} />
    </div>
  </div>
)
