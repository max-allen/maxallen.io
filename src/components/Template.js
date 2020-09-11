import React,{ Component } from 'react';
import Header from './Header'
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

    return (
      <div
        style={{
          border: '1px solid rgba(0,0,0,0.1)',
          backgroundColor: '#FFFFFF',
          maxWidth: rhythm(31),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <Header />
        {children}
      </div>
    )
  }
}

export default Template
