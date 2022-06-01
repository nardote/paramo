import styled from "styled-components";

const Logo = styled.img``;

const StickyTop = styled.div`
  position: sticky;
  top: 0;
  background: #2d2e2c;
  padding: 5px;
`;

const Header = () => {
  return (
    <StickyTop>
      <Logo src="/logobet.png" alt="Betonline" />
    </StickyTop>
  );
};

export default Header;
