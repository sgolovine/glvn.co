import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const links = [
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

export const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/">Sunny Golovine</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {links.map((link, index) => {
              return (
                <NavLink key={index} to={link.path}>
                  {link.name}
                </NavLink>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export const NavLink = styled(Link)`
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 15px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  color: #fff;
  :hover {
    color: grey;
    text-decoration: none;
  }
`
