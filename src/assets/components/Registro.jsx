import React from 'react'
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import './Registro.css'

function Registro() {
  return (
    <>
      <div className="registro">
        <h1>Crea una cuenta</h1>
        <SocialButton icono={faInstagram} />
        <SocialButton icono={faFacebook} />
        <SocialButton icono={faTwitter} />
        <h5>O usa tu email para registrarte</h5>
        <Formulario />
      </div>
    </>
  )
}

export default Registro
