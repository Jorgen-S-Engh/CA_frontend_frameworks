import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  incrementQuantity,
  decrementQuantity,
  removeAllItems,
} from '../../features/cart/cartSlice';
import styles from './CheckoutPage.module.scss';


function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className={styles.checkout}>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles.itemList}>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <img className={styles.image} src={item.imageUrl} alt={item.title} />
              <div className={styles.itemInfo}>
                <h2>{item.title}</h2>
                <p>Price: {item.price}</p>
              </div>
              <div className={styles.quantityControl}>
                <button
                  className={styles.decrementButton}
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  className={styles.incrementButton}
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length !== 0 && (
        <>
          <div className={styles.totalPrice}>
            Total Price: {totalPrice.toFixed(2)}
          </div>
          <div className={styles.buttonContainer}>


            
          </div>
          <button className={styles.removeAllItemsButton} onClick={() => dispatch(removeAllItems())}>
            Remove All Items
          </button>
          <Link to="/checkoutSuccessPage">
            <button className={styles.purchase} onClick={() => dispatch(removeAllItems())}>
              Make Purcahse
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;