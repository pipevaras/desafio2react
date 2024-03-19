import { useState } from 'react'
import Alert from './Alert'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmarPass, setConfirmarPass] = useState('')
  const [rightPass, setRightPass] = useState(false)

  const [error, setError] = useState(false)

  const validarDatos = (e) => {
    e.preventDefault()
    //Validación;
    if (nombre === '' || email === '' || pass === '' || confirmarPass === '') {
      setError(true)
      setRightPass(false)
      return
    }

    if (pass !== confirmarPass) {
      setRightPass(true)
      setError(false)
      return
    }
    setRightPass(false)
    setError(false)
    setNombre('')
    setEmail('')
    setPass('')
    setConfirmarPass('')
  }

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group datos">
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            placeholder="Nombre"
          />
        </div>
        <div className="form-group datos">
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="tuemail@ejemplo.com"
          />
        </div>
        <div className="form-group datos">
          <input
            type="text"
            name="pass"
            className="form-control"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            placeholder="Contraseña"
          />
        </div>
        <div className="form-group datos">
          <input
            type="text"
            name="confirmarPass"
            className="form-control"
            onChange={(e) => setConfirmarPass(e.target.value)}
            value={confirmarPass}
            placeholder="Confirma tu contraseña"
          />
        </div>
        <div class="d-grid gap-2 datos">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>

        <Alert
          message={error ? 'Debes completar todos los datos!' : ''}
          success={error}
        />
        <Alert
          message={rightPass ? 'Las constraseñas deben ser iguales!' : ''}
          success={rightPass}
        />
      </form>
    </>
  )
}

export default Formulario
