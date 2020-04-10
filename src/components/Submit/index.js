import React, { useContext } from "react";
import { MdLocalMall } from "react-icons/md";
import { CartContext } from "../../App";

import {
  Container,
  SubmitButton,
  ContainerSubmit,
  CounterItens,
} from "./styles";

const Submit = () => {
  const [cart] = useContext(CartContext);

  return (
    <Container>
      <ContainerSubmit>
        <SubmitButton>
          <MdLocalMall />
          SACOLA
        </SubmitButton>
        <CounterItens>
          <p>{cart.totalItems} itens</p>
        </CounterItens>
      </ContainerSubmit>
    </Container>
  );
};

export default Submit;
