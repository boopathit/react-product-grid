import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductsList from "../product/ProductList";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={ProductsList} />
      </Router>
    );
  }
}
export default App;
