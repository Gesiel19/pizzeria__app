import React from 'react'
import "./shopDetails.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ShopDetails = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleGoBack = () => {
    navigate(-1)
  }

  const onSubmit =  () => {
    navigate("/confirmationShop");
  }
  const ValidateTarjeta = (value) => {
    if (value.length < 8) {
      return "El numero debería contener al menos 8 caracteres";
    } else if (value.length > 16) {
      return "El numero debe contener menos de 16 de caracteres";
    } else {
      return true;
    }
  };
  const ValidateFecha = (value) => {
    if (value.length < 4) {
      return "El numero debe contener exactamente 4 caracteres";
    } else {
      return true;
    }
  };
  const ValidateCvv = (value) => {
    if (value.length < 3) {
      return "El numero debe contener exactamente 3 caracteres";
    } else {
      return true;
    }
  };
  const validateRequiredField = (value) => {
    if (!value) {
      return "Este campo es requerido";
    } else {
      return true;
    }
  };
  
  return (
    <>
      <div className="contenedor__todo">
      <div className="boton__salir">
          <button  onClick={handleGoBack} className="boton__salir__pago" >
                <img src="https://cdn-icons-png.flaticon.com/512/3502/3502452.png" alt="" className="boton__atras"/>
              </button>
              <h2>Carrito de compras</h2>
          </div>
        <form onSubmit={handleSubmit(onSubmit)} className="containerformulario">
          
          
          <div className="card__compra">
            <img  alt="" className="imagen__shop" />
            <div className="contenedor__shop">
              <div className="name__shop"></div>
              <div className="cantidad__shop">x</div>
            </div>
            <div>
              <div className="price__shop">$</div>
            </div>
          </div>
          <h2 className='title__shop'>Informacion de pago</h2>
          <label>
            Nombre completo
            <input
              className="form-control"
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("nombre", {
                required: true,
                validate: validateRequiredField,
              })}
            />
           {errors.cvv && <span>Este campo es obligatorio</span>}
          </label>

          <label>
            Numero de tarjeta
            <input
              className="form-control"
              type="number"
              placeholder="1234 1234 1234 1234"
              {...register("tarjeta", {
                required: true,
                validate: ValidateTarjeta,
              })}
            />
           {errors.tarjeta && (
              <span>El numero ingresado no pertenece a ninguna tarjeta</span>
            )}
          </label>

          <div className="contenedor__fecha">
            <div>
              <label>
                Fecha de vencimiento
                <input
                  className="form-control-fecha"
                  type="number"
                  placeholder="MMYY"
                  {...register("fecha", {
                    required: true,
                    validate: ValidateFecha,
                  })}
                />
                  {errors.fecha && <span>la fecha ingresada es invalida</span>}
              </label>
            </div>
            <div>
              <label>
                CVV
                <input
                  className="form-control-cvv"
                  type="password"
                  placeholder="CVV"
                  {...register("cvv", {
                    required: true,
                    validate: ValidateCvv,
                  })}
                />
                {errors.cvv && <span>El codigo ingresado es incorrecto</span>}
              </label>
            </div>
          </div>
          <label>
            Direccion
            <input
              className="form-control"
              type="street-address"
              placeholder="Direccion"
              {...register("direccion", {
                required: true,
                validate: validateRequiredField,
              })}
           
            />
            {errors.direccion && <span>Este campo es obligatorio</span>}
          </label>

          <button type="submit" className="boton__form">
            Pagar ahora
          </button>
        </form>
      </div>
    </>
  )
}

export default ShopDetails