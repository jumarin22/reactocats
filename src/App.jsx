import React, { Component } from 'react'
import { Octocat } from './components/octocat'

export class App extends Component {
  render() {
    return (
      <body>
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
        <div>
          <Octocat
            image="yogitocat.png"
            number="153"
            name="Yogitocat"
            avatar="https://github.com/johncreek.png"
          ></Octocat>
          <Octocat
            image="mona-the-rivetertocat.png"
            number="152"
            name="MonatheRivetertocat.png"
            avatar="https://github.com/johncreek.png"
          ></Octocat>
          <Octocat
            image="manufacturetocat.png"
            number="151"
            name="Manufacturetocat.png"
            avatar="https://github.com/heyhayhay.png"
          ></Octocat>
          <Octocat
            image="OctoAsians_dex_Full.png"
            number="150"
            name="OctoAsians"
            avatar="https://github.com/cameronfoxly.png"
          ></Octocat>
          <Octocat
            image="Octoqueer.png"
            number="149"
            name="Octoqueer"
            avatar="https://github.com/cameronfoxly.png"
          ></Octocat>
          <Octocat
            image="Terracottocat_Single.png"
            number="148"
            name="Terracottocat"
            avatar="https://github.com/chubbmo.png"
          ></Octocat>
          <Octocat
            image="Octogatos.png"
            number="147"
            name="Octogatos"
            avatar="https://github.com/cameronfoxly.png"
          ></Octocat>
          <Octocat
            image="Adacats.png"
            number="146"
            name="Adacats"
            avatar="https://github.com/cameronfoxly.png"
          ></Octocat>
          <Octocat
            image="Fintechtocat.png"
            number="145"
            name="Fintechtocat"
            avatar="https://github.com/ceciliorz.png"
          ></Octocat>
          <Octocat
            image="Brennatocat.png"
            number="144"
            name="Brennatocat"
            avatar="https://github.com/johncreek.png"
          ></Octocat>
          <Octocat
            image="filmtocats.png"
            number="143"
            name="Filmtocats"
            avatar="https://github.com/heyhayhay.png"
          ></Octocat>
          <Octocat
            image="Sentrytocat_octodex.jpg"
            number="142"
            name="Sentrytocat"
            avatar="https://github.com/cameronmcefee.png"
          ></Octocat>
        </div>
      </body>
    )
  }
}
