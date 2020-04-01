import React from "react";

import { Head, Botao, Container } from "./styles";

export default function Header() {
  return (
    <Head>
      <div>
        <h1>LOJA.COM</h1>
        <h2>Av. Pinheiro Laranja, nº50</h2>
      </div>
      <Container>
        <Botao />
        <Botao />
      </Container>
    </Head>
  );
}
