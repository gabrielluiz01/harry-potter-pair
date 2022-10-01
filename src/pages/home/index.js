import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import Card from "../../components/card";
import * as styles from "./styles";

export default function Home() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const { data } = await api.get();
    setCharacter(data.slice(0, 25));
  };

  return (
    <styles.BoxCard>
      <Card data={character} />
    </styles.BoxCard>
  );
}
