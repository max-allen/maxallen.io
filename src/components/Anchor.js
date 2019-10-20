import React from 'react'

const Anchor = ({ href, children, style, newTab }) => (
  <a
    style={style}
    href={href}
    target={newTab ? '_blank' : ''}
  >
    {children}
  </a>
)

export default Anchor