import React from 'react'
import Logo from '../img/newpk.jpg'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='' height={50} width={50} />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  )
}

export default Footer
