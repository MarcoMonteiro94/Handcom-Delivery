import React, { useState, useCallback } from "react";
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

const Header = ({ onSearch }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [newSearch, setNewSearch] = useState("");

  const toggleModal = useCallback(() => setModalVisible(!isModalVisible), [
    isModalVisible,
  ]);

  const toggleSearch = useCallback(() => setSearchVisible(!isSearchVisible), [
    isSearchVisible,
  ]);

  const handleChange = useCallback(
    ({ target: { value } }) => setNewSearch(value),
    []
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(newSearch);
    },
    [newSearch, onSearch]
  );

  return (
    <>
      <Head>
        <div>
          <h1>LOJA.COM</h1>
          <h2>Av. Pinheiro Laranja, nº50</h2>
        </div>
        <Container>
          <Botao onClick={toggleSearch}>
            <MdSearch />
          </Botao>
          <Botao onClick={toggleModal}>
            <MdFilterList />
          </Botao>
        </Container>
      </Head>
      <FormContainer isVisible={isSearchVisible} onSubmit={handleSubmit}>
        <form>
          <input type="text" onChange={handleChange} />
        </form>
      </FormContainer>
      <Modal isVisible={isModalVisible}>
        <ContainerModal>
          <ModalHead>
            <ExitButton onClick={toggleModal}>
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
};

export default Header;
