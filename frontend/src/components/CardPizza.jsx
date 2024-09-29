import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../components/CartContext'
import '../CardPizza.css'

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const handleViewMore = () => {
    navigate(`/pizza/${pizza.id}`)
  };

  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      <h3 className="pizza-title">{pizza.name}</h3>
      <p className="pizza-price">Precio: ${pizza.price.toLocaleString()}</p>
      <p className="pizza-desc">{pizza.desc}</p>
      <ul className="pizza-ingredients">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div>
      <p></p>
      <button onClick={handleViewMore} className="btn btn-secondary" style={{ backgroundColor: '#007bff', color: 'white' }}>
          Ver más
        </button>
        <p></p>
        <button onClick={() => addToCart(pizza)} className="btn btn-primary" style={{ backgroundColor: '#28a745', color: 'white', marginLeft: '10px' }}>
          Agregar
        </button>
       

      </div>
    </div>
  );
};

export default CardPizza;





