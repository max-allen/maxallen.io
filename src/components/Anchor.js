import React from 'react'

const Anchor = ({ href, text, style, newTab }) => (
  <a
    style={style}
    href={href}
    target={newTab ? '_blank' : ''}
  >
    {text}
  </a>
)

export default Anchor