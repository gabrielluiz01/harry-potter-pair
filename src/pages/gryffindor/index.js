import { Container, Overlay, Content, BoxButton } from "./style";

import GryffindorImage from "../../assets/Gryffindor.png";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Gryffindor() {
  const [characterGryff, setCharacterGryff] = useState([]);

  const [numberCards, setNumberCards] = useState(8);

  useEffect(() => {
    getGryff();
  }, [numberCards]);

  const getGryff = async () => {
    const { data } = await api.get("/house/gryffindor");
    setCharacterGryff(data.slice(0, numberCards));
  };

  const seeMore = () => {
    setNumberCards(numberCards + 8);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Overlay>
      <Container image={GryffindorImage}>
        <Content>
          <Card data={characterGryff} />
        </Content>
        <BoxButton>
          <FaArrowCircleUp
            style={{
              backgroundColor: "#FFF",
              width: "45px",
              height: "45px",
              borderRadius: "25px",
              color: "#e6a519",
              cursor: "pointer",
            }}
            onClick={() => scrollTop()}
          />
          <button onClick={() => seeMore()}>Ver mais</button>
        </BoxButton>
      </Container>
    </Overlay>
  );
}
