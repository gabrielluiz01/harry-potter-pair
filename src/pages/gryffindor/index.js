import { Container, Overlay, Content } from "./style";

import GryffindorImage from "../../assets/Gryffindor.png";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function Gryffindor() {
  const [characterGryff, setCharacterGryff] = useState([]);

  useEffect(() => {
    getGryff();
  }, []);

  const getGryff = async () => {
    const { data } = await api.get("/house/gryffindor");
    setCharacterGryff(data);
    console.log("data", data);
  };

  return (
    <Overlay>
      <Container image={GryffindorImage}>
        <Content>
          <Card data={characterGryff} />
        </Content>
      </Container>
    </Overlay>
  );
}
