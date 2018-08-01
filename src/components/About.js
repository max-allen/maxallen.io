import React, { Component } from 'react'

import 'typeface-montserrat'
import 'typeface-merriweather'

import headshot from './mallen_headshot_7_29_18.png'

import { rhythm } from '../utils/typography'


class About extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(0),
        }}
      >

        <p>I'm a Software Engineer based in <strong>New York City. </strong>
        At the moment, I'm focused on building frontend UI's for the web.
        My interests run the gamut, but right now I'm mostly coding
        React JS for FinTech companies.
        </p>

      <img style={{   
            marginTop: rhythm(-5),
            marginRight: rhythm(-5),
            width: rhythm(5),
            height: rhythm(5),
        }}
        src={headshot}
        />
        
      </div>
    )
  }
}

export default About
