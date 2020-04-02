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
