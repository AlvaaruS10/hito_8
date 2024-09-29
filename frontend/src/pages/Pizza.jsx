import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardPizza from '/src/components/CardPizza';
import '../Home.css';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();  // Extrae el ID de la URL

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)  
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza details:', error));
  }, [id]);  // Dependencia del efecto: id

  return (
    <div className="container-fluid">
      <div className="row">
        {pizza ? (
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardPizza pizza={pizza} />
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Pizza;
