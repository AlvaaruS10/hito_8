import React from 'react';
import { useCart } from '/src/components/CartContext';
import { useUser } from '/src/components/UserContext';
import styles from '../Cart.module.css';

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();  
  const { token } = useUser();
  

  const handleCheckout = async () => {
    if (!token) {
      alert("Por favor, inicia sesión para continuar con el pago.");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ cart })
      });
      const data = await response.json();
      if (response.ok) {
        alert("Compra realizada con éxito!");
        clearCart();
      } else {
        throw new Error(data.message || "No se pudo completar la compra.");
      }
    } catch (error) {
      alert("Error al realizar la compra: " + error.message);
    }
  };
  

  return (
    <div className={styles.cart}>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.img} alt={item.name} className={styles.image} />
            <div className={styles.details}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.price}>
                Precio: ${item.price.toLocaleString()}
              </p>
              <p className={styles.count}>Cantidad: {item.count}</p>
              <div className={styles.buttons}>
                <button
                  onClick={() => addToCart(item)}
                  className={styles.button}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className={styles.button}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      
      {cart.length > 0 && (
        <button
          onClick={handleCheckout}
          disabled={!token}
          className={`${styles.payButton} ${!token && styles.payButtonDisabled}`}
        >
          Pagar
        </button>
      )}
    </div>
  );
};

export default Cart;



