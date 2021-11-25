import React from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title } = this.state;
    if (!title.trim()) return;

    const newPost = { title, id: Date.now().toString() };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  handleInputChange = event => {
    this.setState(prev => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value
      }
    }));
  };

  render() {
    return (
      <form className="mb-3" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            New post
          </label>
          <input
            type="text"
            placeholder="Enter title"
            className="form-control"
            id="title"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = { createPost };

export default connect(null, mapDispatchToProps)(PostForm);
