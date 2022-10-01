import { Container, Overlay, Content } from "./style";

import RavenclawImage from "../../assets/Ravenclaw.png";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function Ravenclaw() {
  const [characterRavenclaw, setCharacterRavenclaw] = useState([]);

  useEffect(() => {
    getRavenclaw();
  }, []);

  const getRavenclaw = async () => {
    const { data } = await api.get("/house/ravenclaw");
    setCharacterRavenclaw(data);
    console.log("data", data);
  };

  return (
    <Overlay>
      <Container image={RavenclawImage}>
        <Content>
          <Card data={characterRavenclaw} />
        </Content>
      </Container>
    </Overlay>
  );
}
