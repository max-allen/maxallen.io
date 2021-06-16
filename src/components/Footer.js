import React from 'react';
import styled from 'styled-components';
import Bullet from './Bullet';
import Anchor from './Anchor';
import { rhythm } from '../typography';

import 'typeface-montserrat'
import 'typeface-merriweather'

export const EXTERNAL_LINKS = {
  github: 'https://github.com/max-allen',
  twitter: 'https://twitter.com/_maxallen_'
}

export const MAILTO = 'mailto:contact@maxallen.io'

export const LABELS = {
  github: 'github',
  email: 'email',
  twitter: 'twitter'
}

const { github: githubUrl, twitter: twitterURL } = EXTERNAL_LINKS


const FooterContainer = styled.div`
  border-top: 1px solid black;
  padding: ${rhythm(.25)} 0;
`

const Footer = () => {
  const email = <Anchor href={MAILTO}>{LABELS.email}</Anchor>
  const github = <Anchor href={githubUrl} target='_blank'>{LABELS.github}</Anchor>
  const twitter = <Anchor href={twitterURL} target='_blank'>{LABELS.twitter}</Anchor>
  const links = [email, github, twitter]

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
