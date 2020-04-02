import React from "react";

import { Container, Imagem } from "./styles";

export default function Item() {
  return (
    <Container>
      <button>+</button>
      <div>
        <p>Café 3 Corações 500g</p>
        <h3>R$ 6,19</h3>
      </div>
      <Imagem></Imagem>
    </Container>
  );
}
