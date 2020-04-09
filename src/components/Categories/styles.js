import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  justify-content: flex-start;
  list-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    font-size: 1.28em;
    width: auto;
    padding: 15px 24px;
    margin: 0 7px;
    background: #e0e0e0;
    border-radius: 24px;
    border: 0;
    cursor: pointer;
    white-space: nowrap;
  }
`;
