import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { Container, CategoryButton } from "./styles";

const Categories = ({ categories, onCategoryChange }) => {
  const [activeCategoryId, setCategoryId] = useState(0);

  const onCategoryActive = useCallback(
    (newCategoryId) => {
      const currentCategoryId =
        activeCategoryId !== newCategoryId ? newCategoryId : 0;

      onCategoryChange(currentCategoryId).then(() =>
        setCategoryId(currentCategoryId)
      );
    },
    [activeCategoryId, onCategoryChange]
  );

  return (
    <Container>
      {categories.map(({ id, name }) => (
        <CategoryButton
          key={id}
          onClick={() => onCategoryActive(id)}
          isActive={id === activeCategoryId}
        >
          {name}
        </CategoryButton>
      ))}
    </Container>
  );
};

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

export default Categories;
