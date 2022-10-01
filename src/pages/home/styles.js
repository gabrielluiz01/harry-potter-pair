import styled from "styled-components/macro";

export const BoxCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  padding: 10px;
`;
