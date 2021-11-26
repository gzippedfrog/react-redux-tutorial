import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { Post } from "./Post";

export function FetchedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Download
      </button>
    );
  }

  return posts.map((post) => <Post key={post.id} post={post} />);
}
