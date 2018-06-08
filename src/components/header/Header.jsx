import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = props => {
  return (
    <Navbar color="dark" dark fixed="true" expand="md">
      <NavbarBrand href="/">Products</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={props.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="javascript:void()">
              <i className="fa fa-2x fa-user-circle-o" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="javascript:void()">
              <i className="fa fa-2x fa-shopping-cart" />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
