import React from 'react';
import styled from 'styled-components';
import { EXTERNAL_LINKS, MAILTO, LABELS } from '../constants'
import Bullet from './Bullet'

const { github: githubUrl, twitter: twitterURL } = EXTERNAL_LINKS

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

const FooterContainer = styled.div`
  border-top: 1px solid black;
  padding: ${rhythm(.25)} 0;
`

const Footer = () => {
  const email = <a href={MAILTO}>{LABELS.email}</a>
  const github = <a href={githubUrl} target='_blank'>{LABELS.github}</a>
  const twitter = <a href={twitterURL} target='_blank'>{LABELS.twitter}</a>
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
