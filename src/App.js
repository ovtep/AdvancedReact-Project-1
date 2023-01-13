import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from "./components/PostList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      textColor: "black",
      counter: 0,
      showCounter: true,
      showUserList: true,
      showPosts: false,
      users: [],
      posts: [],
      images: []
    };

    this.deleteUser= this.deleteUser.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      data = data.filter(image => image.id < 4);
      this.setState({images: data});
    })
    .catch((err) => console.error(err))
    .finally(() => {    
      
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          data = data.filter(user => user.id < 4);
          data.forEach(user => {
            user.isGoldClient = false;
            user.image = this.state.images.find(image => image.id === user.id).thumbnailUrl;
            user.salariu = user.id * 18 + " Euro/ora"
          });
          this.setState({users: data});
        })
        .catch((err) => console.error(err))
        .finally(() => console.log('Finally....'));
    });



      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data = data.filter(post => post.id < 4);
        this.setState({posts: data});
      })
      .catch((err) => console.error(err))
      .finally(() => console.log('Finally....'));
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  applyTextColor(event) {
    this.setState({textColor: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient
          }
        ]
      }
    });
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

  deleteUser(userId){
    console.log("try delete " + userId)
    this.setState({users: this.state.users.filter(user => user.id !== userId)})
  }

  render() {

    const style = {
      color: this.state.textColor,
      background: this.state.background
    }

    return(
      <div className="app" style={style}>
        <h1>Admin panel - Proiectul 1</h1>
        {this.state.showPosts && <button onClick={this.toggleShowPosts}>Afiseaza useri</button>}
        {this.state.showUserList && <button onClick={this.toggleShowPosts}>Afiseaza postari</button>}

        {this.state.showUserList && <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>}
        {this.state.showUserList && <UserList users={this.state.users} deleteUser={this.deleteUser}/>}

        {this.state.showPosts && <PostList posts={this.state.posts} />}

        <h4>Custom Background color</h4>
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        <h4>Custom text color</h4>

        <input type="color" onChange={(e) => this.applyTextColor(e)} />

        
        <h4>Counter</h4>
        <button onClick={this.increment}>+</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default App;
