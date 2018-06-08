import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import * as actions from "../../actions";
import { FETCH_PRODUCTS_LIST } from "../../actions/types";
import ProductCard from "./ProductCard";

class ProductList extends React.Component {
  componentDidMount() {
    const { fetchProductsAPI } = this.props.actions;
    fetchProductsAPI();
  }

  render() {
    const { products } = this.props;
    const productsFiltered = products.slice(0, 20);
    let rows = [];
    let rowItems = [];
    productsFiltered.forEach((element, i) => {
      rowItems.push(
        <Col sm="4" key={element.upc}>
          <ProductCard product={element} />
        </Col>
      );
      if (rowItems.length % 3 === 0) {
        rows.push(rowItems);
        rowItems = [];
        return;
      }
    });
    return (
      <Container style={{ paddingTop: "40px" }}>
        {rows.map((productRow, i) => {
          return <Row key={i}>{productRow}</Row>;
        })}
      </Container>
    );
  }
}
ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool,
  selectedProduct: PropTypes.string,
  actions: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  products: state.productsReducer.products,
  fetching: state.productsReducer.fetching,
  selectedProduct: state.productsReducer.selectedProduct
});
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, actions), dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
