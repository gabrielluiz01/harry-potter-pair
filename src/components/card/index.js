import React from "react";
import * as styles from "./styles";

export default function Card({ data }) {
  console.log(data);
  return data.map((item) => (
    <styles.Container>
      <img src={item.image} />
      <h3>{item.name}</h3>
      <button>Details</button>
    </styles.Container>
  ));
}
