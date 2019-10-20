import React from 'react';
import Link from 'gatsby-link';
import { EXTERNAL_LINKS, MAILTO } from '../constants'
import Anchor from './Anchor'
import Bullet from './Bullet' 

const { github: githubUrl, twitter: twitterURL } = EXTERNAL_LINKS

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

const Footer = () => (
  <div
    style={{
      borderTop: '1px solid black',
      paddingTop: rhythm(.25),
      paddingBottom: rhythm(.25),
    }}
    role="group"
  >
  <Anchor
    href={MAILTO}
    text='email'
  />
  <Bullet />
  <Anchor 
    href={githubUrl}
    text='github'
    newTab
  />
  <Bullet />
  <Anchor
    href={twitterURL}
    text='twitter'
    newTab
  />
  </div>
)

export default Footer;
