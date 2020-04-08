import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

const LinkItem = ({
  name,
  path,
  target,
}: {
  name: string
  path: string
  target?: string
}) => {
  const { pathname } = useRouter()
  const re = new RegExp(path)
  const active = re.test(pathname)

  const styles = classNames('navbar-navitem-text', {
    'navbar-navitem-text-active': active,
  })

  return (
    <div className="navbar-navitem">
      <Link href={path}>
        <a className={styles} target={target}>
          {name}
        </a>
      </Link>
    </div>
  )
}

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link href="/">
        <a className="navbar-brand">Sunny Golovine</a>
      </Link>
      <div className="navbar-links">
        <LinkItem name="Projects" path="/projects" />
        <LinkItem name="Contact" path="/contact" />
        <LinkItem name="Resume" target="_blank" path="https://resume.glvn.co" />
      </div>
    </div>
  )
}
