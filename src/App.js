import UserForm from "./components/UserFrom";
import UserList from "./components/UserList";
import { Component } from "react";
import TestComponentIf from "./components/learning/TestComponentIf";
import TestComponentMap from "./components/learning/TestComponentMap";
import TestComponentLifecycle from "./components/learning/TestComponentLifecycle";
import PostList from "./components/PostList";

class App extends Component {
  state = {
    color: "white",
    counter: 0,
    showCounter: true,
    showUserList: true,
    showPosts: false,
    users: [],
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({users: data}))
      .catch((err) => console.error(err))
      .finally(() => console.log('Finally....'));

      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({posts: data}))
      .catch((err) => console.error(err))
      .finally(() => console.log('Finally....'));
  }

  applyColor(e) {
    const color = e.target.value;
    this.setState({ color });
  }

  increment = () => {
    const newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  };

  toggleShowPosts= () => {
    this.setState({ showUserList: !this.state.showUserList});
    this.setState({ showPosts: !this.state.showPosts});
    console.log(this.state.users.find(e=>e.id === 2).username)
    console.log(this.state.posts)
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        {this.state.showPosts && <button onClick={this.toggleShowPosts}>Afiseaza useri</button>}
        {this.state.showUserList && <button onClick={this.toggleShowPosts}>Afiseaza postari</button>}


        {this.state.showUserList && <div><UserForm /> <UserList users={this.state.users} /></div>}

        {this.state.showPosts && <PostList posts={this.state.posts} />}


        <input type="color" onChange={(e) => this.applyColor(e)} />
        <button onClick={this.increment}>+</button>
        <h1>{this.state.counter}</h1>

        {/* <TestComponentIf></TestComponentIf> */}
        {/* <TestComponentMap></TestComponentMap> */}

        {/* <button onClick={() => this.setState({showCounter: !this.state.showCounter})}>Toggle</button> */}
        {/* {this.state.showCounter ? 'Running...' : 'Not running'}
        {this.state.showCounter && <TestComponentLifecycle></TestComponentLifecycle>} */}
      </div>
    );
  }
}

export default App;
