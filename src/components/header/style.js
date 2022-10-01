import styled from "styled-components/macro";

export const Container = styled.header`
  width: 100%;
  background: #212121;
  padding: 0.5rem 3rem;
  box-shadow: 1px 1px 20px 1px #e6a519;
  margin-bottom: 2.5rem;
`;

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #e6a519;
    width: 50%;

    a {
      color: #e6a519;
      text-decoration: none;
    }

    li {
      font-size: 18px;
      cursor: pointer;
      transition: 0.5s all;

      :hover {
        text-decoration: underline;
        filter: brightness(80%);
      }
    }
  }
`;

export const LogoImg = styled.img`
  width: 120px;
  opacity: 1;
`;
