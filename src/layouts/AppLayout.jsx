import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/header/Header";
import ProductsList from "../components/product/ProductList";

class AppLayout extends Component {
  openShoppingCart = () => {
    alert("Shoping Cart coming in next version");
  }
  openUserProfile = () => {
    alert("User Profile coming in next version");
  }
  render() {
    return (
      <div>
        <Header
          openShoppingCart={this.openShoppingCart}
          openUserProfile={this.openUserProfile} />
        <Router>
          <Route path="/" component={ProductsList} />
        </Router>
      </div>
    );
  }
}

export default AppLayout;
