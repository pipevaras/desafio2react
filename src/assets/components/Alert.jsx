import React from 'react'
import './Alert.css'

const Alert = ({ message, success }) => {
  const alertClass = success ? 'alert alert-danger' : ''
  return <div className={alertClass}>{message}</div>
}

export default Alert
