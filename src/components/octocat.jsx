import React from 'react'

export class Octocat extends React.Component {
  render() {
    return (
      <article>
        <img
          className="image"
          src={'https://octodex.github.com//images/' + this.props.image}
        />
        <p className="number">{'#' + this.props.number}</p>
        <p className="name">{this.props.name}</p>
        <img className="avatar" src={this.props.avatar} />
      </article>
    )
  }
}
