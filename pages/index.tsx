import React from 'react'
import Link from 'next/link'
import pageLinks from '~/data/homePage'

export default () => {
  return (
    <>
      <p className="about-text">
        I'm a Full Stack developer from{' '}
        <a className="about-link" href={pageLinks.hometown}>
          Yekaterinburg, Russia
        </a>{' '}
        currently living in{' '}
        <a className="about-link" href={pageLinks.atlanta}>
          Atlanta, Georgia
        </a>
        . I love creating awesome web and mobile applications that help improve
        people's lives using technologies like{' '}
        <a className="about-link" href={pageLinks.react}>
          React
        </a>
        ,{' '}
        <a className="about-link" href={pageLinks.reactNative}>
          React Native
        </a>
        ,{' '}
        <a className="about-link" href={pageLinks.gatsby}>
          Gatsby
        </a>{' '}
        and{' '}
        <a className="about-link" href={pageLinks.more}>
          more
        </a>
        . When I'm not writing code I'm a world traveler, gearhead, watch nerd
        and love to get out and meet new people (usually with a pint of beer).
      </p>
      <p className="about-bottom about-text">
        If you want to learn more you can check out my{' '}
        <Link href="/project">
          <a className="about-link">project</a>
        </Link>
        , or{' '}
        <Link href="/contact">
          <a className="about-link">get in touch</a>
        </Link>
      </p>
    </>
  )
}
