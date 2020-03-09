import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HeaderImage } from './HeaderImage'

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
      <Navbar collapseOnSelect expand="lg">
        <HeaderImage />
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
`
