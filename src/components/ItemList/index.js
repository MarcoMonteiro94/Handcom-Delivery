import React from "react";
import PropTypes from "prop-types";

import Item from "../Item";

import { Container } from "./styles";

export default function ItemList({ products }) {
  return (
    <Container>
      {products.map(({ IdProduto, ...products }) => (
        <Item key={IdProduto} IdProduto={IdProduto} {...products} />
      ))}
    </Container>
  );
}

Item.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      IdProduto: PropTypes.number,
      NomeStr: PropTypes.string,
    })
  ),
};

Item.defaultProps = {
  products: [],
};
