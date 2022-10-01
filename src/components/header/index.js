import { Container, Menu, LogoImg } from "./style";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Menu>
        <LogoImg src={Logo} alt="logo" />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/grifinoria">
            <li>Gryffindor</li>
          </Link>
          <li>Slytherin</li>
          <li>Ravenclaw</li>
          <li>Hufflepuff</li>
        </ul>
      </Menu>
    </Container>
  );
}
