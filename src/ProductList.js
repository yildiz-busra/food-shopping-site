import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class ProductList extends Component {
  
  render() {
    return (
      <div>
        <h5>
          {this.props.info.title}-{this.props.currentCategory}
        </h5>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity/Unit</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button onClick={()=>this.props.addToCart(product)} color="success">Add to Cart</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductList;
