import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SinglePost from "./pages/SinglePost";
import HomePage from "./pages/HomePage";

function App() {
  const { user } = useSelector((state) => state);
  // console.log(user);

  return (
    <Router>
      <div>
        <Route exact path="/">
          {user == null ? <HomePage /> : <MainPage />}
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/posts/:postId">
          <SinglePost />
        </Route>
      </div>
    </Router>
  );
}

export default App;
