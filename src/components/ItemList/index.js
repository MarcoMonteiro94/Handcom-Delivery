import React from "react";
import PropTypes from "prop-types";

import Item from "../Item";

import { Container } from "./styles";

const ItemList = ({ offers }) => (
  <Container>
    {offers.map(({ offerId, ...offer }) => (
      <Item key={offerId} offerId={offerId} {...offer} />
    ))}
  </Container>
);

Item.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      offerId: PropTypes.string,
      productId: PropTypes.number,
      productName: PropTypes.string,
      price: PropTypes.number,
      imageUrl: PropTypes.string,
    })
  ),
};

Item.defaultProps = {
  offers: [],
  onItemChange: () => {},
};

export default ItemList;
