import React,{ Component } from 'react';
import Link from 'gatsby-link';
import Anchor from './Anchor';
import { rhythm, scale } from '../utils/typography';
import headshot from '../assets/headshot.png'

class Template extends Component  {
  render() {
    const { children } = this.props;

    let location = true

    let header;

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >

          <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>
            <Anchor 
              style={{
                textDecoration: 'none',
                fontSize: rhythm(1.3),
              }} 
              to='/'
            >Max Allen
            </Anchor>

            <img 
              style={{
                marginTop: '25px',
                width: rhythm(5),
                height: rhythm(5),
            }}
            src={headshot}
            />
        
          </div>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Anchor
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
          </Anchor>
        </h3>
      )
    }
    return (
      <div
        style={{
          border: '1px solid rgba(0,0,0,0.1)',
          backgroundColor: '#FFFFFF',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '10%',
          marginBottom: '10%',
          maxWidth: rhythm(31),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Template
