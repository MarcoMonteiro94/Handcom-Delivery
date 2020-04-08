import React, { Component } from "react";
import { MdSearch, MdFilterList, MdKeyboardArrowLeft } from "react-icons/md";

import {
  Head,
  Botao,
  Container,
  Modal,
  ContainerModal,
  ExitButton,
  Categories,
  FilterButton,
  ModalHead,
} from "./styles";

export default class Header extends Component {
  state = {
    hidden: true,
  };

  openModal = () => {
    this.setState({ hidden: false });
  };

  closeModal = () => {
    this.setState({ hidden: true });
  };

  render() {
    const { hidden } = this.state;

    return (
      <>
        <Head>
          <div>
            <h1>LOJA.COM</h1>
            <h2>Av. Pinheiro Laranja, nº50</h2>
          </div>
          <Container>
            <Botao>
              <MdSearch />
            </Botao>
            <Botao onClick={this.openModal}>
              <MdFilterList />
            </Botao>
          </Container>
        </Head>
        <Modal hidden={hidden}>
          <ContainerModal>
            <ModalHead>
              <ExitButton onClick={this.closeModal}>
                <MdKeyboardArrowLeft />
              </ExitButton>
              <h1>Filtros</h1>
            </ModalHead>
            <Categories>
              <button>Menor valor</button>
              <button>Maior valor</button>
              <button>Mais populares</button>
            </Categories>
            <FilterButton>
              <MdFilterList />
              FILTRAR
            </FilterButton>
          </ContainerModal>
        </Modal>
      </>
    );
  }
}
