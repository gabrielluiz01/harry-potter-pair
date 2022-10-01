import React, { useState } from "react";
import * as styles from "./styles";
import User from "../../assets/user.jpeg";

export default function Card({ data }) {
  const [cardSelected, setCardSelected] = useState();

  return data.map((item) => (
    <styles.Container
      onMouseEnter={() => setCardSelected(item)}
      onMouseLeave={() => setCardSelected({})}
      image={item.image ? item.image : User}
    >
      {cardSelected === item && (
        <styles.Content>
          <h3>{cardSelected?.name}</h3>
          <span>
            <p>Ator: {cardSelected?.actor}</p>
            <p>Casa: {cardSelected?.house}</p>
            <p>Data de nasc. {cardSelected?.dateOfBirth}</p>
          </span>
        </styles.Content>
      )}
    </styles.Container>
  ));
}
