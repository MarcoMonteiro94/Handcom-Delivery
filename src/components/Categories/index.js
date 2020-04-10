import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container, CategoryButton } from "./styles";

export default class Categories extends Component {
  state = {
    activeCategoryId: 0,
  };

  onCategoryActive = (newCategoryId) => {
    const { activeCategoryId: oldCategoryId } = this.state;
    const { onCategoryChange } = this.props;
    const currentCategoryId =
      oldCategoryId !== newCategoryId ? newCategoryId : 0;

    onCategoryChange(currentCategoryId).then(() =>
      this.setState({ activeCategoryId: currentCategoryId })
    );
  };

  render() {
    const { activeCategoryId } = this.state;
    const { categories } = this.props;

    return (
      <Container>
        {categories.map(({ id, name }) => (
          <CategoryButton
            key={id}
            onClick={() => this.onCategoryActive(id)}
            isActive={id === activeCategoryId}
          >
            {name}
          </CategoryButton>
        ))}
      </Container>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

Categories.defaultProps = {
  categories: [],
};
