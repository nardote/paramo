import { array } from "prop-types";
import styled from "styled-components";
import ItemList from "./ItemList";

const propTypes = {
  list: array,
};

const defaultProps = {
  list: [],
};

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

GameList.propTypes = propTypes;
GameList.defaultProps = defaultProps;

export default GameList;
