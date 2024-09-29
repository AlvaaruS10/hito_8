import React, { useState, useEffect } from 'react';
import CardPizza from '/src/components/CardPizza'
import '../Home.css'

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
      
      {pizzas.map(pizza => (
     <div  className="col-sm-12 col-md-6 col-lg-4"key={pizza.id}> 
     <CardPizza pizza={pizza} />
     </div>
      )) }
     </div>
     </div>
  );
};

export default Home;


