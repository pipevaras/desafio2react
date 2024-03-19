import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SocialButton(props) {
  const { icono } = props
  return (
    <>
      <a href="">
        <FontAwesomeIcon className="socialButtons" icon={icono} />
      </a>
    </>
  )
}

export default SocialButton
