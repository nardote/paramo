import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SimpleLayout from "../../components/Layouts/SimpleLayout";
import GameList from "../../components/GameList";

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/vbence86/83da491ff9830ad19ac6fa0a10162fc1/raw/d543204847b3d9896f0ce15d244bb89160fe0f86/games.json"
        );
        const data = await response.json();
        setGames(data.CategoryGames[0].Games);
      } catch (e) {
        console.log(123123);
      }
    })();
  }, []);

  return (
    <SimpleLayout>
      <Title>Popular Games</Title>
      <GameList list={games} />
    </SimpleLayout>
  );
};

export default Home;
