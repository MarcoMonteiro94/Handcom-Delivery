import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 27px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: #d96423;
    border-radius: 50%;
    border: 0;
    font-size: 2.57em;
    color: #ffffff;
  }

  div {
    h3 {
      font-weight: 600;
      font-size: 1.29em;
    }
  }
`;

export const Imagem = styled.div`
  width: 73px;
  height: 73px;
  background: #e0e0e0;
  border-radius: 13px;
`;
