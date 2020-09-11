import React from 'react';
import Link from 'gatsby-link';
import { EXTERNAL_LINKS, MAILTO, LABELS } from '../constants'
import Bullet from './Bullet'
import { padding } from '../assets/styles/layout'
import { borders } from '../assets/styles/borders'

const { github: githubUrl, twitter: twitterURL } = EXTERNAL_LINKS

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

const Footer = () => {
  const email = <a href={MAILTO}>{LABELS.email}</a>
  const github = <a href={githubUrl} target='_blank'>{LABELS.github}</a>
  const twitter = <a href={twitterURL} target='_blank'>{LABELS.twitter}</a>
  const links = [email, github, twitter]

  return (
    <div
    style={{
      borderTop: borders.base,
      paddingTop: padding.base,
      paddingBottom: padding.base,
    }}
    role="group"
  >
   {links.map((link, idx) => (
     <>
       {link}
       {links[idx+1] && <Bullet />}
    </>
     )
   )}
    </div>
  )
}

export default Footer;
