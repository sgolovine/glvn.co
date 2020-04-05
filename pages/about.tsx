import React from 'react'
import Link from 'next/link'
import pageLinks from '~/data/homePage'

export default () => {
  return (
    <div className="page">
      <p>
        I'm a Full Stack developer from{' '}
        <a href={pageLinks.hometown}>Yekaterinburg, Russia</a> currently living
        in <a href={pageLinks.atlanta}>Atlanta, Georgia</a>. I love creating
        awesome web and mobile applications that help improve people's lives
        using technologies like <a href={pageLinks.react}>React</a>,{' '}
        <a href={pageLinks.reactNative}>React Native</a>,{' '}
        <a href={pageLinks.gatsby}>Gatsby</a> and{' '}
        <a href={pageLinks.more}>more</a>.
      </p>
      <p>
        When I'm not writing code I'm a world traveler, gearhead, watch nerd and
        love to get out and meet new people (usually with a pint of beer).
      </p>
      <p>
        If you want to learn more you can check out my{' '}
        <Link href="/project">
          <a>project</a>
        </Link>
        , or{' '}
        <Link href="/contact">
          <a>get in touch</a>
        </Link>
      </p>
    </div>
  )
}
