import React from 'react'

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'
import Template from  './Template'
import Footer from './Footer'

const About = () => (
  <div
    style={{
      lineHeight: rhythm(1.2)
    }}
  >
      <p>I'm a Software Engineer based in <strong>New York City.</strong>
      &nbsp;Currently building things at <a href='https://www.nytimes.com/'>The New York Times,</a>
      &nbsp;and previously an engineer at <a href='https://transfix.io/'>Transfix.</a>
      </p>

      <p>I've consulted for a number of startups based here in NYC, helping them build both web and
      mobile applications. I love product, and have leaned clientside up to this point, but I'm fairly
      comfortable across the stack (esp. if we're talking Node.js / Python BEs). I've benefitted from
      being both conscientious and industrious, but I believe it's my curiosity and ardor for both
      product & technical subjects that distinguishes me as an engineer.
      </p>
    <Footer />
  </div>
)

export default () => (
  <Template>
    <About />
  </Template>
) 
