import styled from "styled-components/macro";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
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
