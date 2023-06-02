import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import logo from "../../assest/logo.png"
import "./Login.scss"
import bg from "../../assest/bg.png"


const Login = () => {
  return (
    <div className='back'>



      <img src={logo} alt="logo" width={180} className='logo' />

      <section className='description'>
        <h1> Inicia sesión en tu cuenta</h1>
        <h3>Disfruta de la mejor Pizza creada para las personas amantes del Código.</h3>
      </section>

      <form>

        <div>

          <input
            type='email'
            placeholder='Usuario' />
        </div>

        <div>
          <input
            type='password'
            placeholder='Contraseña' />

        </div>

        <div className='min__footer'>
          <button type='submit' className='button__input'>

            Iniciar Sesión

          </button> <br />

          <span>Restablecer Contraseña</span>

        </div>
        <div className='end'>
          <span>¿No tienes cuenta?</span>
          <button>Registrate aquí</button>

        </div>

      </form>
    </div>
  )
}

export default Login