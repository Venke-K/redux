import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const CartPage = () => {
  const items = useSelector(state => state.items);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cards">
        {items.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartPage;
