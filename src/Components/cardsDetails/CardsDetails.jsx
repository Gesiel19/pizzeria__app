import React from 'react'
import "./CardsDetails.scss"
import { BsChevronLeft } from "react-icons/bs";
const CardsDetails = () => {
  return (
    <div className="body">
    <div className="main">
      <section className="main__header">
        <div className="main__goBack">
          <span><BsChevronLeft className='icon' /></span>Todas las pizzas
        </div>
      </section>
      <div className="main__contentContainer">
        <section className="main__info container">
          <h1>Hola</h1>
          <div className="main__chips">
            <button className="main__chips1">$Hola </button>
            <button className="main__chips2">⭐  Reviews</button>
          </div>
          <h3>Descripción</h3>
          <p>
          Hola
          </p>
        </section>
        <section className="main__reviews container">
          <h1>Hola</h1>
        </section>
      </div>
    </div>
    <div className="buySection">
      <div className="buySection__container container">
        <div className="buySection__counter">
          <button >-</button>
          <span>Hola</span>
          <button >+</button>
        </div>
        <button className="buySection__cartButton">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie2UMVLDMBBF9zOcIQVpoYMiNTAcD07DFQIToMBQQgMtLkKZ9I8CMSMrayIc2QNMfqPxSvufdi3JbKvfKGAEPLCqChiVAIyBS2DhQHK1CB7jXKiAx28MG9WFLlRr1isHPAkJNbC3Ydfq4DVJ53ecnKMwTiXVXcGS3szsOnwe5oD3w/jaFRrpJYwHBbz+i4DbzhcnX7MvniIwQxQoSWb+4RpEMfhmAN7MjQJXPf7facxKW/3UstNjMzvtGHO9d5PJZy9D0p2ZWXz+cmNt3mnFLriQGhXntrqE2iuWNDez9x6gc0kNX+8e99HuFc/0cJl9tvssDgAnFr1yP4lFnmvBXsXexc+NuZ5eq6uW5E10n7UKuACWBV6rJXDeQyFb/QF9ALYLHHR5OwtgAAAAAElFTkSuQmCC"
            alt="cart icon"
          />
        </button>
        <button className="buySection__buyButton">Pagar</button>
      </div>
    </div>
  </div>
  )
}

export default CardsDetails