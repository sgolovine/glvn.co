import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import styled from 'styled-components'

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

const NavItem = ({ path, name }) => {
  const active = window.location.pathname === path

  return (
    <NavLink active={active} as={Link} to={path}>
      {name}
    </NavLink>
  )
}

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <NavBrand as={Link} to="/">
          Sunny Golovine
        </NavBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          fg="dark"
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {links.map((link, index) => {
              return <NavItem key={index} path={link.path} name={link.name} />
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header

const NavBrand = styled(Navbar.Brand)`
  color: #fff;
  font-size: 22px;
  text-transform: uppercase;
`

const NavLink = styled(Nav.Link)`
  font-size: 18px;
  border-bottom: 3px solid;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 15px;
  text-decoration: none;
  border-bottom-color: ${(props) => (props.active ? 'white' : 'transparent')};
  width: 120px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  :hover {
    text-decoration: none;
    border-bottom-color: white;
    color: white;
  }
  @media (max-width: 1000px) {
    border: unset;
    border-radius: unset;
    text-align: unset;
  }
`
