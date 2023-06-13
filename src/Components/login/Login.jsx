import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../routes/AppRouters";
import { useNavigate, Link } from "react-router-dom";
import { redirectUser, userFind } from "../services/User";
// import * as Yup from "yup"
import logo from "../../assest/logo.png"
import "./Login.scss"
// import bg from "../../assest/bg.png"


const Login = () => {
  const { setUsuario } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {   //aqui
    //redirect if not session
    redirectUser(navigate);
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = () => {
    // const user = await userFind(email, password);
    // if (user.length && !user.error) {  
    //   setUsuario(...user);
    //   sessionStorage.setItem('user', JSON.stringify(user[0]));
    //   console.log(...user);
      navigate("/Home");
    
  };




  return (

    <div className="back">
      <img
        alt="Pizza"
        src={logo} width={180} className='logo' 
      />
      <div className="description">
      
        <h2>Inicia sesión en tu cuenta</h2>
        <p>
          Disfruta de la mejor pizza creada para las personas amantes del
          Código.
        </p>
      </div>
      <form onSubmit={handleSubmit(userLogin)} className="form">
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>El email es obligatorio</span>}
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && <span>la contraseña es obligatoria</span>}
        </div>
        <button onClick={userLogin} type="submit">Iniciar sesión</button>
      </form>
      <div className="linkRegister">
        <span>Restablecer contraseña</span>
        <h5>¿No tienes una cuenta?</h5>
        <Link to="/register">
          <button className="register">
            Registrate aquí
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login