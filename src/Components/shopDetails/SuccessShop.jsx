import React from 'react'
import check from "../../assest/check.gif"
import confetti from "../../assest/confetti.gif"
import "./SuccesShop.scss"

const SuccessShop = () => {
    return (
        <div>
            <div className='successInfo'>
                <figure>
                    <img className="check" src={check} alt="check" />
                    <img className="confetti" src={confetti} alt="check" />

                </figure>
                <h1>Tu pedido está en proceso</h1>
                <p>Serás notificado cuando llegue el repartidor</p>
            </div>

            <button>Aceptar</button>
        </div>
    )
}

export default SuccessShop
