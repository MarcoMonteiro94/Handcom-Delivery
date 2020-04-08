import React from "react";
import { MdLocalMall } from "react-icons/md";
import { Container, SubmitButton } from "./styles";

export default function Submit() {
  return (
    <Container>
      <SubmitButton>
        <MdLocalMall />
        SACOLA
      </SubmitButton>
    </Container>
  );
}
