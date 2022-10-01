import { Container, Overlay, Content } from "./style";

import SlytherinImage from "../../assets/Slytherin.png";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function Slytherin() {
  const [characterSly, setCharacterSly] = useState([]);

  useEffect(() => {
    getSly();
  }, []);

  const getSly = async () => {
    const { data } = await api.get("/house/slytherin");
    setCharacterSly(data);
    console.log("data", data);
  };

  return (
    <Overlay>
      <Container image={SlytherinImage}>
        <Content>
          <Card data={characterSly} />
        </Content>
      </Container>
    </Overlay>
  );
}
