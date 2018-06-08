import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/header/Header";
import ProductsList from "../components/product/ProductList";

class AppLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route path="/" component={ProductsList} />
        </Router>
      </div>
    );
  }
}

export default AppLayout;
