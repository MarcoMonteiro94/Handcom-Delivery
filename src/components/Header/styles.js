import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px;

  div {
    h1 {
      font-weight: bold;
      font-size: 2.14em;
    }

    h2 {
      font-weight: 500;
      font-size: 1em;
      color: #f2994a;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Botao = styled.button`
  width: 60px;
  height: 45px;
  border-radius: 11px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin: 0 7px;
  background: white;
  border: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Modal = styled.div.attrs((props) => ({
  disabled: props.hidden,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.5s;

  &[disabled] {
    display: none;
  }
`;

export const ContainerModal = styled.div`
  width: 345px;
  height: 345px;
  background: #fff;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const ModalHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  h1 {
    font-weight: bold;
    font-size: 2.14em;
  }
`;

export const ExitButton = styled.button`
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 15px;
  background: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 36px;
    height: 36px;
  }
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  button {
    font-size: 1.28em;
    padding: 15px 20px;
    margin: 5px;
    background: #e0e0e0;
    border-radius: 24px;
    border: 0;
    cursor: pointer;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d96423;
  border: none;
  border-radius: 50px;
  padding: 15px 39px;
  font-weight: 600;
  font-size: 1.57em;
  color: #ffffff;
  margin: 0 0 30px 0;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 13px;
  }
`;
