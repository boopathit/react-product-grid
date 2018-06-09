import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  Button,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="dark" dark fixed="true" expand="md" >
        <NavbarBrand href="/">Products</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.props.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button onClick={this.props.openUserProfile} color="primary">
                <i className="fa fa-2x fa-user-circle-o" />
              </Button>{' '}
            </NavItem>
            <NavItem>
              <Button onClick={this.props.openShoppingCart} color="secondary">
                <i className="fa fa-2x fa-shopping-cart" />
              </Button>{' '}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
};

export default Header;
