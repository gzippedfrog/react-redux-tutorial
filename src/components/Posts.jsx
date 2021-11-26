import { connect } from "react-redux";
import { Post } from "./Post";

function Posts({ syncPosts }) {
  if (!syncPosts.length) return <p>No posts</p>;

  return syncPosts.map((post) => <Post key={post.id} post={post} />);
}

const mapStateToProps = (state) => ({ syncPosts: state.posts.posts });

export default connect(mapStateToProps, null)(Posts);
