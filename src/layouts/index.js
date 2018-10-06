import React,{ Component } from 'react';
import Link from 'gatsby-link';

import { rhythm, scale } from '../utils/typography';
import headshot from '../components/mallen_headshot_7_29_18.png'

class Template extends Component  {
  render() {
    const { location, children } = this.props;

    let header;

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
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
            <Link 
              style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: rhythm(1.3),
              }} to='/'>Max Allen
            </Link>

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
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
