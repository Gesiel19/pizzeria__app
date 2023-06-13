import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUser, redirectUser } from "../services/User";
import "./Register.scss"


const Register = () => {

  const navigate = useNavigate();

  useEffect(() => {
   

    redirectUser(navigate);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userCreate = async (user) => {
  
    const response = await createUser(user);
    if (response?.id) {
     
      navigate("/");
    }
  };




    return (

        <div className="register">
      <img
        src="https://hungryforhalaal.co.za/wp-content/uploads/2021/05/Pizza-Spots-Cape-Town-Hungry-for-Halaal.jpg"
        alt="Pizza"
      />
      <div className="formRegister"></div>
      <form onSubmit={handleSubmit(userCreate)} className="form">
        <div className="input">
          <input
            type="text"
            {...register("name", { required: true })}
            className={errors.name ? "input--error" : ""}
            placeholder="Nombre"
          />
        </div>

        <div className="input">
          <input
            type="email"
            {...register("email", { required: true })}
            className={errors.email ? "input--error" : ""}
            placeholder="Email"
          />
        </div>
        <div className="input">
          <input
            type="password"
            {...register("password", { required: true })}
            className={errors.password ? "input--error" : ""}
            placeholder="Contraseña"
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>

    )
}

export default Register