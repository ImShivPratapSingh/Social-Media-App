import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import avatars from "../avatar";
import { deleteComment } from "../redux/actions/post";

function Comment({ data }) {
  const { user, posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <Left>
        <div>
          <img src={`../images/${avatars[data?.avatar]}`} alt="images" />
        </div>
        <p>{data.name}</p>
      </Left>
      <Right>
        <p>{data.content}</p>
        <span>Date :{new Date(data.createdAt).toDateString()}</span>
        <Buttons>
          {data.name === user.name && (
            <p
              className="delete"
              onClick={() => dispatch(deleteComment(posts.post._id, data._id))}
            >
              <i class="fas fa-trash-alt"></i>
            </p>
          )}
        </Buttons>
      </Right>
    </Container>
  );
}

export default Comment;

const Container = styled.div`
  height: 130px;
  width: 100%;
  margin-top: 10px;
  border: 1px solid lightgray;
  background-color: white;
  display: flex;
  border-radius: 5px;
  box-shadow: 10px 10px 5px -3px rgba(211, 204, 204, 0.75);
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 7px;
    line-height: 20px;
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

  p.like {
    color: green;
  }

  p.dislike {
    color: red;
  }

  p.comment {
    color: blue;
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
