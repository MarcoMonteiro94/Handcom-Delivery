import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d96423;
    border: none;
    border-radius: 50px;
    padding: 21px 39px;
    font-weight: 600;
    font-size: 1.57em;
    color: #ffffff;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 13px;
    }
  }
`;
