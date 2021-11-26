import { useSelector } from "react-redux";
import { FetchedPosts } from "./components/FetchedPosts";
import { Loader } from "./components/Loader";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  const isLoading = useSelector((state) => state.app.loading);

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async Posts</h2>
          {isLoading ? <Loader /> : <FetchedPosts />}
        </div>
      </div>
    </div>
  );
}

export default App;
