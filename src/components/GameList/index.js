import styled from "styled-components";
import ItemList from "./ItemList";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const GameList = ({ list }) => {
  return (
    <Container>
      {list.map((item) => (
        <ItemList
          name={item.GameName}
          img={item.ImageUrlGame}
          key={item.GameID}
        />
      ))}
    </Container>
  );
};

export default GameList;
