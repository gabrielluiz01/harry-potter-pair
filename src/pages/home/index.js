import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import Card from "../../components/card";
import * as styles from "./styles";
import Gryffindor from "../../assets/Gryffindor.png";
import Slytherin from "../../assets/Slytherin.png";
import Huffepuff from "../../assets/Hufflepuff.png";
import Ravenclaw from "../../assets/Ravenclaw.png";

export default function Home() {
  const [characterGryff, setCharacterGryff] = useState([]);
  const [characterSlyt, setCharacterSlyt] = useState([]);
  const [characterRave, setCharacterRave] = useState([]);
  const [characterHuff, setCharacterHuff] = useState([]);

  useEffect(() => {
    getGryff();
    getSlyt();
    getRave();
    getHuff();
  }, []);

  const getGryff = async () => {
    const { data } = await api.get("/house/gryffindor");
    setCharacterGryff(data.slice(0, 2));
  };

  const getSlyt = async () => {
    const { data } = await api.get("/house/Slytherin");
    setCharacterSlyt(data.slice(0, 2));
  };

  const getRave = async () => {
    const { data } = await api.get("/house/Ravenclaw");
    setCharacterRave(data.slice(0, 2));
  };

  const getHuff = async () => {
    const { data } = await api.get("/house/Hufflepuff");
    let filteredImage = data.filter((item) => item.image);
    setCharacterHuff(filteredImage.slice(0, 2));
    console.log(data);
  };

  return (
    <>
      <styles.BoxCard image={Gryffindor}>
        <Card data={characterGryff} />
      </styles.BoxCard>
      <styles.BoxCard image={Slytherin}>
        <Card data={characterSlyt} />
      </styles.BoxCard>
      <styles.BoxCard image={Ravenclaw}>
        <Card data={characterRave} />
      </styles.BoxCard>
      <styles.BoxCard image={Huffepuff}>
        <Card data={characterHuff} />
      </styles.BoxCard>
    </>
  );
}
