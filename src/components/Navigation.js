import React from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  Navbar,
  NavbarBrand,
  // NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import image from '../images/santasbaglogo.png';
import { signOutUser } from '../api/auth';

export default function Navigation({ user }) {
  return (
    <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
          <img
            className="navbar-logo"
            src={image}
            alt="Santa's Bag Logo"
          />
        </NavbarBrand>
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/">
                Gifts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/giftform">
                New Gift
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              className="navbar-user"
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                <img
                  className="navbar-profile-pic"
                  alt={user.fullName}
                  src={user.profilePic}
                />
                {user.user}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  {user.user}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink
                    className="sign-out-user"
                    onClick={signOutUser}
                  >
                    Sign Out
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

Navigation.defaultProps = {
  user: null,
};

Navigation.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      fullName: PropTypes.string,
      profilePic: PropTypes.string,
      uid: PropTypes.string,
      user: PropTypes.string,
    }),
  ]),
};
