import React, { useState } from "react";
import "./SearchPizzas.scss";
import { RiSearchLine } from "react-icons/ri";
import axios from "axios";
import backgroundImage from "../../assest/image2Search.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "../home/Card.scss";

const SearchsPizzas = () => {
  const [searchPizzas, setSearchPizzas] = useState("");
  const [dataPizzas, setDataPizzas] = useState([]);

  const handleSearchPizzas = async (event) => {
    setSearchPizzas(event.target.value);
    console.log(searchPizzas);
    const response = await axios.get(
      "https://backend-pizza-production.up.railway.app/pizzas"
    );
    console.log(response.data);
    const filteredPizzas = response.data.filter((pizza) =>
      pizza.descripcion.toLowerCase().includes(searchPizzas.toLowerCase())
    );
    console.log(filteredPizzas);
    setDataPizzas(filteredPizzas);
  };
  return (
    <main className="main">
      <form className="main__search_Bar">
        <input
          placeholder="pizza de peperoni, mexicana, ha..."
          className="main__inputSearch"
          type="text"
          value={searchPizzas}
          onChange={handleSearchPizzas}
        />
        <div className="main__icon_search">
          <RiSearchLine />
        </div>
      </form>
      <div className="main__cantidad_Resultados">
        <h3>2 resultados</h3>
      </div>
      <div className="main__cards_Resultados">
        {/* {dataPizzas.length ? (
          dataPizzas.map((item) => <img src={item.image} />)
        ) : (
          <>
            <div className="main__image_fondo">
              <img src={backgroundImage} />
            </div>
            <div className="main__text"> 
              <span>Busca la pizza que más te guste</span>
            </div>
          </>
        )} */}
        {dataPizzas.length ? (
          <Swiper>
            {dataPizzas.map((item) => (
              <SwiperSlide className="carrousel" key={item.id}>
                {item.image.map((imageItem, index) => (
                  <img
                    src={imageItem.photo}
                    alt={`pizza-${index}`}
                    key={index}
                  />
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Renderización alternativa si no hay resultados
          <>
            <div className="main__image_fondo">
              <img src={backgroundImage} alt="background" />
            </div>
            <div className="main__text">
              <span>Busca la pizza que más te guste</span>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default SearchsPizzas;
