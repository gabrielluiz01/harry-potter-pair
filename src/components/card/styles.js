import styled from "styled-components/macro";

export const Container = styled.div`
  width: 18rem;
  height: 400px;
  border-radius: 20px;
  border: 7px solid #212121;
  box-shadow: 0 0 10px #000;
  background: #212121;
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;

  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    font-size: 30px;
    text-align: center;
    color: #fff;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000075;
  z-index: 99;
  animation: rotateY 600ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes rotateY {
    0% {
      transform: rotateY(90deg);
    }
    80% {
      transform: rotateY(-10deg);
    }
    100% {
      transform: rotateY(0);
    }
  }
`;
