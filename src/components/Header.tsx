import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import styled from 'styled-components'
import HeaderImage from './HeaderImage'
import { ThemeSelector } from './ThemeSelector'

const links = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const NavItem = ({ path, name }: { path: string; name: string }) => {
  const active = window.location.pathname === path
  const Component = active ? ActiveNavLink : NavLink

  return <Component to={path}>{name}</Component>
}

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <HeaderImage />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {links.map((link, index) => {
              return <NavItem key={index} path={link.path} name={link.name} />
            })}
          </Nav>
          <ThemeSelector />
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header

const NavLink = styled(Link)`
  font-size: 18px;
  border-bottom: 3px solid;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 15px;
  text-decoration: none;
  border-bottom-color: transparent;
  width: 120px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  :hover {
    text-decoration: none;
    border-bottom-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 1000px) {
    border: unset;
    border-radius: unset;
    text-align: unset;
  }
`

const ActiveNavLink = styled(NavLink)`
  border-bottom-color: ${(props) => props.theme.text};
`
