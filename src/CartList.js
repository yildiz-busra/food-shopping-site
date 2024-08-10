import React, { Component } from "react";
import { Table, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";

class CartList extends Component {
  renderCart() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Quantity</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item) => (
              <tr key={item.product.id}>
                <td>{item.product.id}</td>
                <td>{item.product.categoryId}</td>
                <td>{item.product.productName}</td>
                <td>{item.product.unitPrice}</td>
                <td>{item.product.unitsInStock}</td>
                <td>{item.quantity}</td>
                <td>
                  <Badge
                    color="danger"
                    onClick={() => this.props.removeFromCart(item.product)}
                  >
                    X
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link to="/"><strong>Home</strong></Link>
      </div>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}

export default CartList;
