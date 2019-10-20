import React from 'react';
import Link from 'gatsby-link';
import { EXTERNAL_LINKS, MAILTO, LABELS } from '../constants'
import Anchor from './Anchor'
import Bullet from './Bullet'
import { padding } from '../assets/styles/layout'

const { github: githubUrl, twitter: twitterURL } = EXTERNAL_LINKS

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

const Footer = () => {
  const email = <Anchor href={MAILTO}>{LABELS.email}</Anchor>
  const github = <Anchor href={githubUrl} newTab>{LABELS.github}</Anchor>
  const twitter = <Anchor href={twitterURL} newTab>{LABELS.twitter}</Anchor>
  const links = [email, github, twitter]

  return (
    <div
    style={{
      borderTop: '1px solid black',
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
