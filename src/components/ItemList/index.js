import React from "react";
import PropTypes from "prop-types";

import Item from "../Item";

import { Container } from "./styles";

export default function ItemList({ offers }) {
  return (
    <Container>
      {offers.map(({ offerId, ...offers }) => (
        <Item key={offerId} offerId={offerId} {...offers} />
      ))}
    </Container>
  );
}

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
};
