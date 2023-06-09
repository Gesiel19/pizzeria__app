import React, { useEffect, useState } from 'react'
import cuponOne from "../../assest/cupon1.png"
import cuponTwo from "../../assest/cupon2.png"
import PizzaCard from './PizzaCard';
import "./Home.scss"

const Home = () => {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    fetch("https://backend-pizza-production.up.railway.app/pizzas/")
      .then((response) => response.json())
      .then((data) => setPizzaList(data));
      console.log(pizzaList);
  }, []);

  return (
    <>
      <div className='homeContainer'>
        <section>
          <h4>Pizzas disponibles</h4>
          <button>
            Ver todas
          </button>
        </section>
        <figure>
          <img src={cuponOne} alt="Cupón" />
          <img src={cuponTwo} alt="Cupón" />
        </figure>

        <main>
          {pizzaList?.map((pizza) => ( 
          
             <PizzaCard key={pizza.id} recipe={pizza} />
          ))};
          
        </main>


      </div>
    </>
  )
}

export default Home