import React from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'
import Template from  './Template'
import Footer from './Footer'

const LineHeightOverride = styled.div`
  lineHeight: ${rhythm(1.2)};
`

const About = () => (
  <LineHeightOverride
    style={{
      lineHeight: rhythm(1.2)
    }}
  >
      <p>I'm a Software Engineer based in { isMobile && <br /> } <strong>New York City.</strong>
      &nbsp;Currently building things at <a href='https://www.nytimes.com/'>The New York Times,</a>
      &nbsp;and previously an engineer at <a href='https://transfix.io/'>Transfix.</a>
      </p>

      <p>I've consulted for a number of startups based in NYC, helping them build both web and
      mobile applications. The depth of my experience is the greatest client-side, but I consider myself
      a generalist and am comfortable across the stack. I've benefited from being both conscientious and industrious,
      but my curiosity and enthusiasm at the intersection of product & engineering are my greatest assets as an engineer.
      </p>
    <Footer />
  </LineHeightOverride>
)

export default () => (
  <Template>
    <About />
  </Template>
) 
