import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import Navbar from "../components/Navbar";
import { register } from "../redux/actions/user";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const initialData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [userData, setUserData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(userData);
    // console.log(userData);
    dispatch(register(userData));
    setUserData(initialData);
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <h1>
          <i class="fas fa-user-shield"></i>
          Register
        </h1>
        <p>Join me and my friends on this great application!</p>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userData.name}
            placeholder="Name"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="email"
            value={userData.email}
            placeholder="Email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            value={userData.password}
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <input
            type="password"
            value={userData.confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
          />
          <button type="submit">Register</button>
        </Form>
        <p>
          Already have an account ?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </Main>
    </Container>
  );
};

export default RegisterPage;

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
