import React, { useState } from "react";
import * as styles from "./styles";

export default function Card({ data }) {
  const [cardSelected, setCardSelected] = useState();

  console.log("teste", cardSelected);

  return data.map((item) => (
    <styles.Container
      onMouseEnter={() => setCardSelected(item)}
      onMouseLeave={() => setCardSelected({})}
      image={item.image}
    >
      {cardSelected === item && (
        <styles.Content>
          <h3>{cardSelected?.name}</h3>
          <p>Ator: {cardSelected?.actor}</p>
          <p>Casa: {cardSelected?.house}</p>
          <p>Data de nasc. {cardSelected?.dateOfBirth}</p>
        </styles.Content>
      )}
    </styles.Container>
  ));
}
