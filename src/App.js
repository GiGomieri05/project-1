import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        body: "O jogador venceu a copa do mundo",
      },
      {
        id: 2,
        title: "Post 2",
        body: "5 dicas para ser um programador melhor",
      },
      {
        id: 3,
        title: "Post 3",
        body: "Aprendendo React",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
