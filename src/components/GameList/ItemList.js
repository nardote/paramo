import { string } from "prop-types";
import styled from "styled-components";
import dummy from "./dummy.png";

const propTypes = {
  name: string,
  img: string,
};

const defaultProps = {
  name: "",
  img: "",
};

const GameImg = styled.img`
  width: 150px;
`;
const GameName = styled.p`
  color: #4c4c4c;
  text-align: center;
  margin: 0 0 15px 0;
  font-size: 13px;
`;

const Container = styled.div`
  width: 150px;
`;

const ItemList = ({ name, img }) => {
  return (
    <Container>
      <GameImg
        src={img}
        alt={name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = dummy;
        }}
      />
      <GameName>{name}</GameName>
    </Container>
  );
};

ItemList.propTypes = propTypes;
ItemList.defaultProps = defaultProps;

export default ItemList;
