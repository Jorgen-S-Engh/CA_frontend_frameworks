import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllItems } from '../../features/cart/cartSlice';
import styles from './CheckoutSuccessPage.module.scss';

function CheckoutSuccessPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    setPurchasedItems(cartItems);
    dispatch(removeAllItems());
  }, []);

  return (
    <div className={styles.checkoutSuccess}>
      <h1>Checkout Success</h1>
      <p>Thank you for your purchase!</p>
      <h2>Purchased Items:</h2>
      {purchasedItems.length === 0 ? (
        <p>No items to display.</p>
      ) : (
        <ul className={styles.itemList}>
          {purchasedItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <img className={styles.image} src={item.imageUrl} alt={item.title} />
              <div className={styles.itemInfo}>
                <h2>{item.title}</h2>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CheckoutSuccessPage;
