import React,{ Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import { rhythm, scale } from '../utils/typography'
import headshot from '../assets/headshot.png'

const CardStyles = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  background-color: #FFFFFF;
  max-width: ${rhythm(31)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)}
`

const Card = ({ children }) => <CardStyles>{children}</CardStyles>

export default Card
