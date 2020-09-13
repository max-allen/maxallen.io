import React from 'react';
import styled from 'styled-components';
import { EXTERNAL_LINKS, MAILTO, LABELS } from '../constants'
import Bullet from './Bullet'
import Anchor from './Anchor'

const { github: githubUrl, twitter: twitterURL } = EXTERNAL_LINKS

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

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
