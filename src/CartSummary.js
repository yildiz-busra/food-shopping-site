import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

class cartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <strong>Cart-{this.props.cart.length}</strong>
          </DropdownToggle>
          <DropdownMenu right>
              {this.props.cart.map((item) => (
                <DropdownItem key={item.product.id}><strong>
                  <Badge color="danger" onClick={()=>this.props.removeFromCart(item.product)}><strong>X</strong></Badge>
                  {item.product.productName}</strong>
                  <Badge color="secondary">{item.quantity}</Badge>
                </DropdownItem>
              ))}
              <DropdownItem divider />
              <DropdownItem><strong>Reset</strong></DropdownItem>
            
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}

export default cartSummary;

