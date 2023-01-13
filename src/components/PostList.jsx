import { Component, Fragment } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <Fragment>
        <h1>Lista postarilor:</h1>
        {posts.map((post) => (
          <PostItem key={post.id} post={post}> </PostItem>
        ))}
      </Fragment>
    );
  }
}

export default PostList;
