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
  FormContainer,
} from "./styles";

export default class Header extends Component {
  state = {
    isModalVisible: false,
    isSearchVisible: false,
    newSearch: "",
  };

  openModal = () => {
    this.setState({ isModalVisible: true });
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  toggleSearch = () => {
    const { isSearchVisible } = this.state;
    this.setState({ isSearchVisible: !isSearchVisible });
  };

  handleChange = (e) => {
    this.setState({ newSearch: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSearch } = this.props;

    onSearch(this.state.newSearch);
  };

  render() {
    const { isModalVisible, isSearchVisible } = this.state;

    return (
      <>
        <Head>
          <div>
            <h1>LOJA.COM</h1>
            <h2>Av. Pinheiro Laranja, nº50</h2>
          </div>
          <Container>
            <Botao onClick={this.toggleSearch}>
              <MdSearch />
            </Botao>
            <Botao onClick={this.openModal}>
              <MdFilterList />
            </Botao>
          </Container>
        </Head>
        <FormContainer isVisible={isSearchVisible} onSubmit={this.handleSubmit}>
          <form>
            <input type="text" onChange={this.handleChange} />
          </form>
        </FormContainer>
        <Modal isVisible={isModalVisible}>
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
