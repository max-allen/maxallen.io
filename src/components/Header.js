import React from 'react'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography';
import headshot from '../assets/headshot.png'

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: ${rhythm(1.5)};
  display: flex;
  justify-content: space-evenly;
  align-items: center
`

const Image = styled.img`
  margin-top: ${rhythm(.9)};
  width: 198px;
  height: 198px
`

const Header = () => (
  <H1>
    Max Allen
    <Image src={headshot} />
  </H1>
)

export default Header