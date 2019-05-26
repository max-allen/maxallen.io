import React from 'react';
import Link from 'gatsby-link';
import { EXTERNAL_LINKS } from '../constants'

const { github: githubUrl, twitter: twitterURL } = EXTERNAL_LINKS

import 'typeface-montserrat'
import 'typeface-merriweather'
import './global.css'

import { rhythm } from '../utils/typography'

const Footer = () => (
  <nav 
    style={{
      borderTop: '1px solid black',
      paddingTop: rhythm(.25),
      paddingBottom: rhythm(.25),
    }}
    role="group"
  >
  <a href='mailto:contact@maxallen.io'>
    email
  </a>{' '}
  &bull;{' '}
  <a
    href={githubUrl}
    target='_blank'
  >
    github
  </a>{' '}
  &bull;{' '}
  <a
    href={twitterURL}
    target='_blank'
  >
    twitter
  </a>
  </nav>
)

export default Footer;
