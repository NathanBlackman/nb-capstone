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
            src="../images/santasbaglogo.png"
            alt="logo"
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
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                <div className="navbar-profile">
                  <img
                    className="navbar-profile-pic"
                    alt={user.fullName}
                    src={user.profilePic}
                  />
                </div>
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
