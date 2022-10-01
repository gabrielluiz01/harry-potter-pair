import { Container, Menu, LogoImg } from "./style";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Menu>
        <LogoImg src={Logo} alt="logo" />
        <ul>
          <li>Gryffindor</li>
          <li>Slytherin</li>
          <li>Ravenclaw</li>
          <li>Hufflepuff</li>
        </ul>
      </Menu>
    </Container>
  );
}
