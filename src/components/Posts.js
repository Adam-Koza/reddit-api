import React, { Component } from 'react'

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}>
            <h3>{post.title}</h3>
            <a href={"https://reddit.com" + post.permalink}>{post.num_comments} Comments </a>
          </li>)}
      </ul>
    )
  }
}