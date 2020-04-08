import React, { Component } from "react";

import { Container, Imagem, PlusButton, HiddenDiv } from "./styles";

export default class Item extends Component {
  state = {
    selected: false,
    hidden: false,
    counter: 0,
  };

  handleClick = (e) => {
    let { counter } = this.state;

    this.setState({ selected: true, hidden: true, counter: (counter += 1) });
  };

  render() {
    const { selected, hidden, counter } = this.state;

    return (
      <Container>
        <HiddenDiv hidden={hidden}>
          <span>{counter}</span>
        </HiddenDiv>
        <PlusButton
          onClick={this.handleClick}
          type="submit"
          selected={selected}
        >
          <span>+</span>
        </PlusButton>
        <div>
          <p>Café 3 Corações 500g</p>
          <h3>R$ 6,19</h3>
        </div>
        <Imagem></Imagem>
      </Container>
    );
  }
}
