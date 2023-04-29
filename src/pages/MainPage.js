import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import Navbar from "../components/Navbar";
import Post from "../components/Post";
import { createPost, getPosts } from "../redux/actions/post";

const MainPage = () => {
  const { user, posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (body.trim() === "") {
      alert("Body cannot be empty");
      return;
    }

    dispatch(createPost(user.name, body, user.avatar));
    setBody("");
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <h1>Welcome to this thriving tech community</h1>
        <p>
          Discuss the latest on technology and trends. Be civil and supportive!
        </p>
        <Form>
          <div className="form__main">
            <div className="form__avatar">
              <i class="far fa-user-circle"></i>
            </div>
            <textarea
              type="text"
              value={body}
              placeholder="What's on your mind?"
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Post</button>
        </Form>
      </Main>
      <Posts>
        {posts.posts?.map((curr) => (
          <Post data={curr} key={curr._id} />
        ))}
      </Posts>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef7f7;
  padding-bottom: 30px;
`;

const Main = styled.div`
  width: 100%;
  padding: 0 10px;
  background-color: #eef7f7;
  color: black;
  margin-top: 20px;

  h1 {
    font-size: 3rem;
    color: var(--green);
    font-weight: 500;
  }

  p {
    font-size: 1.5rem;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;

const Form = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;

  div.form__main {
    width: 100%;
    height: 100px;
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;

    textarea {
      outline: none;
      border: none;
      padding-left: 10px;
      height: 100%;
      flex: 1;
      padding-top: 10px;
      /* height: 98px; */
    }
  }

  div.form__avatar {
    width: 100px;
    height: 98px;
    background-color: #e8ecef;
    display: grid;
    place-items: center;

    i {
      font-size: 7rem;
      color: white;
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;

const Posts = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  padding: 0 10px;

  @media (min-width: 768px) {
    width: 75%;
  }
`;
