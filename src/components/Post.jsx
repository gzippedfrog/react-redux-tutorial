export const Post = ({ post }) => (
  <div className="card my-2">
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body || "some text"}</p>
    </div>
  </div>
);
