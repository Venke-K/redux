import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity,decreaseQuantity } from '../store/cartActions';

const Card = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={item.image} alt={item.title} style={{ width: '200px', height: '200px' ,alignSelf:'center' }} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <div className="card-actions">
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </div>
    </div>
  );
};

export default Card;
