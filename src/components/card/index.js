import React from "react";
import * as styles from "./styles";

export default function Card({ data }) {
  return data.map((item) => (
    <styles.Container>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.house}</p>
    </styles.Container>
  ));
}
