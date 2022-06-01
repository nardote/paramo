import styled from "styled-components";
import MenuButton from "../MenuButton";

const StickyBottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  min-height: 50px;
  background-color: #ffffff;
  box-shadow: -1px -3px 4px 1px rgba(148, 148, 148, 0.5);
`;

const Footer = () => {
  return (
    <StickyBottom>
      <MenuButton />
    </StickyBottom>
  );
};

export default Footer;
