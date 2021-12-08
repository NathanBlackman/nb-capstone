import React from 'react';
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

export default function Navigation() {
  return (
    <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
          reactstrap
        </NavbarBrand>
        {/* <NavbarToggler onClick={function noRefCheck(){}} /> */}
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/gifts">
                Gifts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/giftform">
                New Gift
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/editgift/:fbKey">
                Edit Gift (test)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gifts/:fbKey">
                Gifts View (test)
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
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
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
