import styled from "styled-components/macro";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  padding-bottom: 35px;
`;

export const Overlay = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000000;
  z-index: 2;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1.5rem 2rem;
  gap: 35px;
`;

export const BoxButton = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;

  button {
    height: 40px;
    width: 120px;
    border-radius: 25px;
    background: #e6a519;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s all;

    :hover {
      filter: brightness(85%);
    }
  }
`;
