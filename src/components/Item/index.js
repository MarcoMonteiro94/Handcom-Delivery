import React, { useCallback, useContext } from "react";
import { MdAdd } from "react-icons/md";
import { CartContext } from "../../App";
import { cartActions } from "../../stores/cartReducer";
import {
  Container,
  Imagem,
  PlusButton,
  HiddenDiv,
  ItemContainer,
} from "./styles";

const Item = ({ offerId, productName, price, imageUrl }) => {
  const [cart, dispatchCart] = useContext(CartContext);
  const currentCount = cart.items[offerId];

  const handleClick = useCallback(() => {
    dispatchCart({ type: cartActions.add, offerId });
  }, [dispatchCart, offerId]);

  const handleRemove = useCallback(() => {
    dispatchCart({ type: cartActions.remove, offerId });
  }, [dispatchCart, offerId]);

  return (
    <Container>
      <HiddenDiv onClick={handleRemove} isVisible={currentCount > 0}>
        <span>{currentCount}</span>
      </HiddenDiv>
      <PlusButton onClick={handleClick}>
        <MdAdd />
      </PlusButton>
      <ItemContainer>
        <p>{productName}</p>
        <h3>{price}</h3>
      </ItemContainer>
      <Imagem>
        <img src={imageUrl} alt={productName} />
      </Imagem>
    </Container>
  );
};

export default Item;
