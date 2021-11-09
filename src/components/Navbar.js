import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/user";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Container className="navbar">
      <Main>
        <Left onClick={()=>dispatch(logout())}>
          <h1>
            <i class="fas fa-code"></i>
            The Social Media App
          </h1>
        </Left>
        <Right>
          {user == null ? (
            <>
              <p>
                <Link to="/register">Register</Link>
              </p>
              <p>
                <Link to="/login">Login</Link>
              </p>
            </>
          ) : (
            <p onClick={() => dispatch(logout())}>
              <i class="fas fa-sign-out-alt"></i>
              <Link to="/">LogOut</Link>
            </p>
          )}
        </Right>
      </Main>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #1e4949;
  display: flex;
  justify-content: center;
  color: white;
  position: sticky;
  top: 0;
  left: 0;
`;

const Main = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  @media (min-width: 768px) {
    width: 75vw;
    justify-content: space-between;
  }
`;
const Left = styled.div`
  font-size: 1.3rem;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    align-items: center;
    cursor:pointer;

    i {
      margin-right: 10px;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  /* visibility: hidden; */

  p {
    margin-right: 20px;
    font-size: 1.7rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;

    i {
      margin-right: 5px;
    }
  }

  @media (min-width: 768px) {
    /* visibility: visible; */
    flex: 0.2;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
