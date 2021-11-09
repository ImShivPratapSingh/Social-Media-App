import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import { login } from "../redux/actions/user";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialData = {
    email: "",
    password: "",
  };

  const [userData, setUserDate] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDate(userData);
    dispatch(login(userData));
    setUserDate(initialData);
  };
  return (
    <Container>
      <Navbar />
      <Main>
        <h1>
          <i class="fas fa-sign-in-alt"></i>
          Login
        </h1>
        <p>Login to this awesome application!</p>
        <Form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserDate({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserDate({ ...userData, password: e.target.value })
            }
          />
          <button type="submit">Login</button>
        </Form>
        <p>
          Don't have and account?{" "}
          <span>
            <Link to="/register">Register</Link>
          </span>
        </p>
      </Main>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eef7f7;
`;

const Main = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 100vh;
  background-color: #eef7f7;
  color: black;
  margin-top: 20px;

  h1 {
    font-size: 4rem;
    color: var(--green);
    font-weight: 500;

    i {
      margin-right: 7px;
    }
  }

  p {
    font-size: 1.5rem;
    margin-top: 10px;

    span {
      color: var(--green);
      font-weight: bolder;
    }
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  input {
    border: 1px solid lightgray;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
  }

  @media (min-width: 768px) {
    input {
      width: 70%;
    }
  }
`;
