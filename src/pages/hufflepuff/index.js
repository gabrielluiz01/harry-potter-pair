import { Container, Overlay, Content } from "./style";

import HufflePuffImage from "../../assets/Hufflepuff.png";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function Hufflepuff() {
  const [characterHuflepuff, setCharacterHufflepuff] = useState([]);

  useEffect(() => {
    getHufflepuff();
  }, []);

  const getHufflepuff = async () => {
    const { data } = await api.get("/house/hufflepuff");
    setCharacterHufflepuff(data);
  };

  return (
    <Overlay>
      <Container image={HufflePuffImage}>
        <Content>
          <Card data={characterHuflepuff} />
        </Content>
      </Container>
    </Overlay>
  );
}
