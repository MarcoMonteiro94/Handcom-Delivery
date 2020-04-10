import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 100;
`;
export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  background: #d96423;
  border: none;
  border-radius: 50px;
  padding: 21px 39px;
  font-weight: 600;
  font-size: 1.57em;
  color: #ffffff;
  z-index: 1;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 13px;
  }
`;

export const ContainerSubmit = styled.div`
  position: relative;
  width: 350px;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CounterItens = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  width: 180px;
  height: 61px;
  justify-content: flex-end;
  align-items: center;
  background: #e0e0e0;
  border-radius: 50px;
  font-size: 1.14em;
  color: #000;

  p {
    padding: 20px 40px;
  }
`;
