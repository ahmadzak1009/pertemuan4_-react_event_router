import React, { Component } from "react";
import Posts from "./Posts";

class Blogs extends Component {
  render() {
    return (
      <div>
        <Posts title="Post 1" author="Zaki" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sunt explicabo aspernatur reprehenderit adipisci at mollitia cupiditate tempore, placeat autem consequuntur et? Excepturi tempora tenetur laudantium fugiat a quae aspernatur." />
        <Posts title="Post 2" author="Zaki" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sunt explicabo aspernatur reprehenderit adipisci at mollitia cupiditate tempore, placeat autem consequuntur et? Excepturi tempora tenetur laudantium fugiat a quae aspernatur." />
        <Posts title="Post 3" author="Zaki" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sunt explicabo aspernatur reprehenderit adipisci at mollitia cupiditate tempore, placeat autem consequuntur et? Excepturi tempora tenetur laudantium fugiat a quae aspernatur." />
        <Posts title="Post 4" author="Zaki" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sunt explicabo aspernatur reprehenderit adipisci at mollitia cupiditate tempore, placeat autem consequuntur et? Excepturi tempora tenetur laudantium fugiat a quae aspernatur." />
      </div>
    );
  }
}

export default Blogs;
