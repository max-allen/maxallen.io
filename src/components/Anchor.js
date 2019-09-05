import React from 'react'

const Anchor = ({ href, text, newTab }) => (
  <a
    href={href}
    target={newTab ? '_blank' : ''}
  >
    {text}
  </a>
)

export default Anchor