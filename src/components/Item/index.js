import React, { Component } from "react";
import { MdAdd } from "react-icons/md";

import {
  Container,
  Imagem,
  PlusButton,
  HiddenDiv,
  ItemContainer,
} from "./styles";

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
    const { productName, price, imageUrl } = this.props;
    const { selected, isCounterVisible, counter } = this.state;

    return (
      <Container>
        <HiddenDiv onClick={this.handleRemove} isVisible={isCounterVisible}>
          <span>{counter}</span>
        </HiddenDiv>
        <PlusButton onClick={this.handleClick} selected={selected}>
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
  }
}
