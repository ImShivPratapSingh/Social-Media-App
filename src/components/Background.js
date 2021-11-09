import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Background = () => {
  return (
    <Container>
      <Main>
        <h1>The Social Media App</h1>
        <p>
          A fun place for developers and friends to share ideas on technology .
          Plenty of cool discussions!
        </p>
        <Buttons>
          <button className="register">
            <Link to="/register">Register</Link>
          </button>
          <button className="login">
            <Link to="/login">Login</Link>
          </button>
        </Buttons>
      </Main>
    </Container>
  );
};

export default Background;

const Container = styled.div`
  width: 100vw;
  background-color: pink;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=820&q=80");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90vw;

  h1 {
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

const Buttons = styled.div`
  margin-top: 15px;

  button.register {
    background-color: white;
    color: var(--green);
  }

  button.login {
    background-color: var(--green);
    color: white;
  }
`;
