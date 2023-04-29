import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

import Navbar from "../components/Navbar";
import Comment from "../components/Comment";
import avatars from "../avatar";
import { deletePost, addComment } from "../redux/actions/post";

const SinglePost = () => {
  const { posts, user } = useSelector((state) => state);
  const { post } = posts;
  const dispatch = useDispatch();
  const history = useHistory();

  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(user.name, content, user.avatar, post._id));
    setContent("");
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <button className="green" onClick={() => history.push("/")}>
          Back
        </button>
        <Display className="post">
          <UpperDiv>
            <Left>
              <div>
                <img src={`../images/${avatars[post?.avatar]}`} alt="images" />
              </div>
              <p>{post?.name}</p>
            </Left>
            <Right>
              <p>{post?.body}</p>
              <span>Date :{new Date(post?.createdAt).toDateString()}</span>
              <Buttons>
                {post?.name === user.name && (
                  <p
                    className="delete"
                    onClick={() => {
                      dispatch(deletePost(post._id));
                      history.push("/");
                    }}
                  >
                    <i class="fas fa-trash-alt"></i>
                  </p>
                )}
              </Buttons>
            </Right>
          </UpperDiv>
          <LowerDiv>
            <div className="form__main">
              <div className="form__avatar">
                <i class="far fa-user-circle"></i>
              </div>
              <textarea
                type="text"
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Comment</button>
          </LowerDiv>
        </Display>
        <Comments>
          {post?.comments?.map((comment) => (
            <Comment data={comment} key={comment._id} />
          ))}
        </Comments>
      </Main>
    </Container>
  );
};

export default SinglePost;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef7f7;
  margin-bottom: 30px;
`;

const Main = styled.div`
  width: 100%;
  padding: 0 10px;
  background-color: #eef7f7;
  color: black;
  /* margin-top: 20px; */

  @media (min-width: 768px) {
    width: 75%;
  }
`;

const Display = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: 10px;
  border: 1px solid lightgray;
  background-color: #9d84b7;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: flex-start;
  padding: 0px 10px 20px;

  /* align-items: center; */
`;

const UpperDiv = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 0.1;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  div {
    height: 80px;
    width: 80px;
    margin-bottom: 10px;
    /* border: 5px solid lightgray;
    border-radius: 50%; */

    img {
      width: 100%;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    flex: 0.25;
  }
`;

const Right = styled.div`
  padding-top: 15px;
  padding-right: 10px;
  p {
    font-size: 1.5rem;
    font-weight: 500;
    /* overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
   
    line-height: 20px; */
    margin-bottom: 7px;
    word-break: break-all;
  }

  span {
    font-size: 1.3rem;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    margin-left: 20px;
    padding-right: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  p {
    margin-right: 15px;
    display: flex;
    align-items: center;
    width: 40px;

    i {
      margin-right: 5px;
      cursor: pointer;
    }
  }

  p.delete {
    color: red;
  }

  @media (min-width: 768px) {
    p {
      width: 50px;
    }
  }
`;

const LowerDiv = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  padding-left: 20px;

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
    width: 95%;
  }
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
`;
