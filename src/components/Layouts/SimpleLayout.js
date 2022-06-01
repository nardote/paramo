import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Container = styled.div`
  padding-bottom: 100px;
  padding-top: 20px;
`;

const SimpleLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default SimpleLayout;
