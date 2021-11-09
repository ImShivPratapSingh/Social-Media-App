import styled from "styled-components/macro";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <Background />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
