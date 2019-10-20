import React from 'react'

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'
import Template from  './Template'
import Footer from './Footer'

const About = () => (
  <>
    <div style={{ textAlign: 'left' }}>

      <p>I'm a Software Engineer based in <strong>New York City. </strong>
      At the moment, I'm building UI's for both the web and mobile.
      My interests run the gamut, but right now I'm mostly coding
      React JS for a freight brokerage named <a target='_blank' href='https://transfix.io/'>Transfix</a>,
      one of the companies focused on <a target='_blank' href='https://www.supplychaindive.com/news/digital-freight-brokerage/549692/'>taking freight digital.</a>
      </p>
    </div>
    <Footer />
  </>
)

export default () => (
  <Template>
    <About />
  </Template>
) 
