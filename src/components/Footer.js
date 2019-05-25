import React, { Component } from 'react';
import Link from 'gatsby-link';

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

export default Footer;
