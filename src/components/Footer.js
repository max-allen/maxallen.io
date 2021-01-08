import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import Bullet from './Bullet'
import Anchor from './Anchor'

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

export const EXTERNAL_LINKS = {
  github: 'https://github.com/max-allen',
  twitter: 'https://twitter.com/_maxallen_'
}

const { github: githubUrl, twitter: twitterURL } = EXTERNAL_LINKS

export const MAILTO = 'mailto:contact@maxallen.io'

export const LABELS = {
  github: 'github',
  email: 'email',
  twitter: 'twitter',
  writings: 'writings'
}

const FooterContainer = styled.div`
  border-top: 1px solid black;
  padding: ${rhythm(.25)} 0;
`

const Footer = ({ posts }) => {
  const [firstPost] = posts

  const writings = <Link key={LABELS.writings} to={firstPost.fields.slug}>{LABELS.writings}</Link>
  const email = <Anchor key={LABELS.email} href={MAILTO}>{LABELS.email}</Anchor>
  const github = <Anchor key={LABELS.github} href={githubUrl} target='_blank'>{LABELS.github}</Anchor>
  const twitter = <Anchor key={LABELS.twitter} href={twitterURL} target='_blank'>{LABELS.twitter}</Anchor>
  const links = [writings, email, github, twitter]

  return (
    <FooterContainer role="group">
      {links.map((link, idx) => (
        <>
          {link}
          {links[idx+1] && <Bullet />}
        </>
        )
      )}
    </FooterContainer>
  )
}

export default Footer;
