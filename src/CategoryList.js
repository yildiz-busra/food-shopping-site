import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((response) => this.setState({ categories: response }));
  };

  render() {
    return (
      <div>
        <h5>{this.props.info.title}</h5>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active={category.categoryName===this.props.currentCategory}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default CategoryList;
