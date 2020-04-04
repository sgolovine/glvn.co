import React from 'react'
import Link from 'next/link'

const LinkItem = ({ name, path }: { name: string; path: string }) => (
  <div className="navbar-navitem">
    <Link href={path}>
      <a className="navbar-navitem-text">{name}</a>
    </Link>
  </div>
)

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link href="/">
        <a className="navbar-brand">Sunny Golovine</a>
      </Link>
      <div className="navbar-links">
        <LinkItem name="About" path="/about" />
        <LinkItem name="Projects" path="/projects" />
        <LinkItem name="Contact" path="/contact" />
        <LinkItem name="Resume" path="/resume" />
      </div>
    </div>
  )
}
