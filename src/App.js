import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import NotFound from "./NotFound";
import CartList from "./CartList";
import Form1 from "./Form1";
import { Col, Container, Row } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import Form2 from "./Form2";

class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({ products: response }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var existigItem = newCart.find((c) => c.product.id === product.id);
    if (existigItem) {
      existigItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 1.5);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.warning(product.productName + " removed from cart!", 1.5);
  };

  render() {
    let categoryInfo = { title: "Catagories" };
    let productInfo = { title: "Products" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9 ">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProductList
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      addToCart={this.addToCart}
                      info={productInfo}
                    />
                  }
                ></Route>
                <Route
                  path="/cart"
                  element={
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                ></Route>
                <Route path="/form1" element={<Form1 />}></Route>
                <Route path="/form2" element={<Form2 />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
