import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 27px;

  div {
    h3 {
      font-weight: 600;
      font-size: 1.29em;
    }
  }
`;

export const PlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: #d96423;
  border-radius: 50%;
  border: 0;
  font-size: 2.57em;
  color: #ffffff;
  z-index: 20;
  margin-right: 20px;

  svg {
    width: 26px;
    height: 26px;
  }
`;

export const Imagem = styled.div`
  width: 73px;
  height: 73px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 13px;
  }
`;

export const HiddenDiv = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  position: absolute;
  left: 35px;
  padding-left: 25px;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.285em;
  height: 32px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  z-index: 10;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  span {
    padding-right: 10px;
  }
`;
