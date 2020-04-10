import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  justify-content: flex-start;
  list-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryButton = styled.button`
  font-size: 1.28em;
  width: auto;
  padding: 15px 24px;
  margin: 0 7px;
  background: ${(props) => (props.isActive ? "#d96423" : "#e0e0e0")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  border-radius: 24px;
  border: 0;
  cursor: pointer;
  white-space: nowrap;
`;
