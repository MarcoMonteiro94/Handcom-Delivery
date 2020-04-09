import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Categories({ categories }) {
  return (
    <Container>
      {categories.map(({ IdCategoria, NomeStr }) => (
        <button key={IdCategoria}>{NomeStr}</button>
      ))}
    </Container>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      IdCategoria: PropTypes.number,
      NomeStr: PropTypes.string,
    })
  ),
};

Categories.defaultProps = {
  categories: [],
};
