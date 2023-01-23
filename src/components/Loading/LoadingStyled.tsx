import styled from "styled-components";

const LoadingStyled = styled.div`
  z-index: 1;
  width: 60px;
  height: 60px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-right-color: #474bff;
  animation: spinner-a4dj62 1s infinite linear;

  &&::before,
  &&::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
    animation: spinner-a4dj62 5s infinite;
  }

  &&::after {
    margin: 8.9px;
    animation-duration: 3s;
  }

  @keyframes spinner-a4dj62 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export default LoadingStyled;
