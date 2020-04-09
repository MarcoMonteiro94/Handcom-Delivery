import React, { Component } from "react";
import { MdAdd } from "react-icons/md";

import { Container, Imagem, PlusButton, HiddenDiv } from "./styles";

export default class Item extends Component {
  state = {
    selected: false,
    isCounterVisible: false,
    counter: 0,
  };

  handleClick = () => {
    const { counter } = this.state;

    this.setState({
      selected: true,
      isCounterVisible: true,
      counter: counter + 1,
    });
  };

  handleRemove = () => {
    const { counter } = this.state;

    const newCounter = counter - 1;

    this.setState({ isCounterVisible: newCounter !== 0, counter: newCounter });
  };

  render() {
    const {
      Estoques: [
        {
          Produto: { NomeStr },
        },
      ],
      PrecoDoub,
      ImagemPrincipal,
    } = this.props;
    const { selected, isCounterVisible, counter } = this.state;

    return (
      <Container>
        <HiddenDiv onClick={this.handleRemove} isVisible={isCounterVisible}>
          <span>{counter}</span>
        </HiddenDiv>
        <PlusButton
          onClick={this.handleClick}
          type="submit"
          selected={selected}
        >
          <MdAdd />
        </PlusButton>
        <div>
          <p>{NomeStr}</p>
          <h3>{PrecoDoub}</h3>
        </div>
        <Imagem>
          <img src={ImagemPrincipal?.NomeStr} alt="" />
        </Imagem>
      </Container>
    );
  }
}
