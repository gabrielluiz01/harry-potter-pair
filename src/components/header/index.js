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
          <Link to="/gryffindor">
            <li>Gryffindor</li>
          </Link>
          <Link to="slytherin">
            <li>Slytherin</li>
          </Link>
          <Link to="ravenclaw">
            <li>Ravenclaw</li>
          </Link>
          <Link to="hufflepuff">
            <li>Hufflepuff</li>
          </Link>
        </ul>
      </Menu>
    </Container>
  );
}
