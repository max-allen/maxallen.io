import React, { Component } from 'react';
import Link from 'gatsby-link';

import 'typeface-montserrat'
import 'typeface-merriweather'
import './global.css'

import headshot from './mallen_headshot_7_29_18.png'

import { rhythm } from '../utils/typography'

class Footer extends Component {
  constructor() {
    super();

    this.urlPairs = {
      github:'https://github.com/max-allen',
      twitter: 'https://twitter.com/_maxallen_',
      otherBlog: 'https://max-allen.github.io',
    }

    this.buttonStyle = {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'underline',
    }
  }

  navExterally = e => {
    const { id } = e.target;
    const url = this.urlPairs[id];

    window.open(url,'_blank');
  }

  render() {
    return (
      <nav 
        style={{
          borderTop: '1px solid black',
          paddingTop: rhythm(.25),
          paddingBottom: rhythm(.25),
      }}
      role="group">
        <a 
          href='mailto:contact@maxallen.io'
        >
          email
        </a>{' '}
        &bull;{' '}
        <a
          href='https://github.com/max-allen'
          target='_blank'
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href='https://twitter.com/_maxallen_'
          target='_blank'
        >
          twitter
        </a>
      </nav>
    )
  }
}

export default Footer;
