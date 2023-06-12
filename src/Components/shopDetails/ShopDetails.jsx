import React from 'react'
import "./shopDetails.scss";

const ShopDetails = () => {
  return (
    <>
      <div className="contenedor__todo">
      <div className="boton__salir">
          <button className="boton__salir__pago" >
                <img src="https://cdn-icons-png.flaticon.com/512/3502/3502452.png" alt="" className="boton__atras"/>
              </button>
              <h2>Carrito de compras</h2>
          </div>
        <form  className="containerformulario">
          
          
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
          <h2>Informacion de pago</h2>
          <label>
            Nombre completo
            <input
              className="form-control my-2"
              type="text"
              placeholder="Ingresa tu nombre"
             
            />
         
          </label>

          <label>
            Numero de tarjeta
            <input
              className="form-control my-2"
              type="number"
              placeholder="1234 1234 1234 1234"
             
            />
           
          </label>

          <div className="contenedor__fecha">
            <div>
              <label>
                Fecha de vencimiento
                <input
                  className="form-control my-2"
                  type="number"
                  placeholder="MMYY"
                 
                />
                
              </label>
            </div>
            <div>
              <label>
                CVV
                <input
                  className="form-control my-2"
                  type="password"
                  placeholder="CVV"
                 
                />
                
              </label>
            </div>
          </div>
          <label>
            Direccion
            <input
              className="form-control my-2"
              type="street-address"
              placeholder="Direccion"
           
            />
            
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