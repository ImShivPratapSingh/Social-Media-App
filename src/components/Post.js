import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components/macro";
import avatars from "../avatar";
import {
  deletePost,
  getPost,
  likePost,
  unLikePost,
} from "../redux/actions/post";

function Post({ data }) {
  const { user, posts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(getPost(data._id));
    // console.log(posts.post);
    history.push(`/posts/${data._id}`);
  };

  return (
    <Container className="post" >
      <Left>
        <div>
          <img src={`../images/${avatars[data.avatar]}`} alt="images" />
        </div>
        <p>{data.name}</p>
      </Left>
      <Right>
        <p  onClick={handleClick}>{data.body}</p>
        <span>Date : {new Date(data.createdAt).toDateString()}</span>
        <Buttons>
          <p
            className="like"
            onClick={() => dispatch(likePost(data._id, user.email))}
          >
            {data.likes.find((curr) => curr.email === user.email) ? (
              <i class="fas fa-thumbs-up"></i>
            ) : (
              <i class="far fa-thumbs-up"></i>
            )}{" "}
            {data.likes.length}
          </p>
          <p
            className="dislike"
            onClick={() => dispatch(unLikePost(data._id, user.email))}
          >
            {data.unlikes.find((curr) => curr.email === user.email) ? (
              <i class="fas fa-thumbs-down"></i>
            ) : (
              <i class="far fa-thumbs-down"></i>
            )}
            {data.unlikes.length}
          </p>
          <p className="comment">
            <i class="fas fa-comment"></i> {data.comments.length}
          </p>
          {data.name === user.name && (
            <p
              className="delete"
              onClick={() => dispatch(deletePost(data._id))}
            >
              <i class="fas fa-trash-alt"></i>
            </p>
          )}
        </Buttons>
      </Right>
    </Container>
  );
}

export default Post;

const Container = styled.div`
  height: 130px;
  width: 100%;
  margin-top: 10px;
  border: 1px solid lightgray;
  background-color: #9d84b7;
  display: flex;
  border-radius: 5px;
  box-shadow: 10px 10px 5px -3px rgba(211, 204, 204, 0.75);
  cursor: pointer;
  /* align-items: center; */
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
