import React from 'react'
import styled from 'styled-components'
import Anchor from './Anchor'
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../typography'

const LineHeightOverride = styled.div`
  lineHeight: ${rhythm(1.2)};
`

const About = () => (
  <LineHeightOverride
    style={{
      lineHeight: rhythm(1.2)
    }}
  >
    <p>I'm a Software Engineer based in <strong>New York City.</strong>
    &nbsp;Currently building things at <Anchor href='https://www.nytimes.com/' target='_blank'>The New York Times,</Anchor>
    &nbsp;and previously an engineer at <Anchor href='https://transfix.io/' target='_blank'>Transfix.</Anchor>
    </p>

    <p>I've consulted for a number of startups based in NYC, helping them build both web and
    mobile applications. The depth of my experience is the greatest client-side, but I consider myself
    a generalist and am comfortable across the stack. I've benefited from being both conscientious and industrious,
    but my talent at the intersection of product & engineering is my greatest asset as an engineer.
    </p>
  </LineHeightOverride>
)

export default About
