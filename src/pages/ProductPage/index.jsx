import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import styles from "./ProductPage.module.scss";


function ProductPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(data));
  };


  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div className={styles.product}>
      <h1 className={styles.title}>{data.title}</h1>
      <img className={styles.image} src={data.imageUrl} alt={data.title} />
      <p>{data.description}</p>
      <p className={styles.rating}>{data.rating === 0 ? "No rating for this product yet" : `Rating: ${data.rating}`}</p>
      <div>
        {data.reviews.map((reviews)=> 
        <div key={reviews.id}>
          <div className={styles.reviews}>
            <p>Review by: {reviews.username}</p>
            <p>{reviews.description}</p>
            <p>Rating: {reviews.rating}</p>
          </div>
        </div>
        )}
      </div>
      <p className={styles.price}>{data.price===data.discountedPrice ? `Price ${data.price}` : `Sale! Now only ${data.discountedPrice}`}</p>
      <p className={styles.discount_price}>{data.price!==data.discountedPrice ? `Save ${(data.price-data.discountedPrice.toFixed(2))}`: ""}</p>
      <div className={styles.add_to_cart}>
        <button className={styles.add_to_cart__btn} onClick={handleAddToCart}>Add to cart</button>
      </div>

    </div>
    
  );
}

export default ProductPage;