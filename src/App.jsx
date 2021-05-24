import React, { Component } from 'react'
import { Octocat } from './components/octocat'
import articles from './articles.json'

export class App extends Component {
  render() {
    const octocatsFromData = articles.map(article => (
      <Octocat
        key={article.number}
        image={article.image}
        number={article.number}
        name={article.name}
        avatar={article.avatar}
      />
    ))
    return (
      <div>
        <header>
          <nav>
            <img src="https://external-content.duckduckgo.com/ip3/github.com.ico" />
            <a className="left" href="/index.html/">
              <strong>Octodex</strong>
            </a>
            <a href="/html/">Home</a>{' '}
            <a className="left" href="/faq/">
              FAQ
            </a>
            <a className="left" href="/rss/">
              RSS
            </a>
            <p></p>
            <a className="right" href="/html/">
              Follow us on Twitter
            </a>
            <a className="mobile" href="/html/">
              Back to GitHub.com
            </a>
          </nav>
        </header>
        <div>{octocatsFromData}</div>
      </div>
    )
  }
}
