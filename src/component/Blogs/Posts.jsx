import React, { Component } from "react";

class Posts extends Component {
  render() {
    return (
      <div>
        <div className="container my-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">by {this.props.author}</h6>
              <p class="card-text">{this.props.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
