import { Component, Fragment } from "react";
import UserItem from "./UserItem";

class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <Fragment>
        <h1>Lista utilizatorilor:</h1>
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </Fragment>
    );
  }
}

export default UserList;
