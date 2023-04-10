import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from "./ApiData.module.scss";


const url = "https://api.noroff.dev/api/v1/online-shop";

function getData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [singleProd, setSingleProd] = useState(null);
  

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetch(url);
        const json = await data.json();
        setData(json);
        if(!data.ok){
          throw new Error()
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}

function ApiData() {
  const { data, isLoading, isError } = getData(
    'https://api.noroff.dev/api/v1/online-shop',
  );

  if (isLoading) {
    return <div><h1>Loading</h1></div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }


  return     <div className={styles.product_container}>
  {data.map((product) => 
    <div 
      className={styles.product_item}
      key={product.id}
      >
      <h3>{product.title}</h3>
      <img src={product.imageUrl} />
      <p>{product.description}</p>
      
      <div className={styles.product_item__lower}>
        <p>{product.price === product.discountedPrice ? `Price: ${product.price}`: `SALE: ${product.discountedPrice}!` }</p>
        <p>{product.price !== product.discountedPrice? `Save ${(product.price-product.discountedPrice).toFixed(2)}` : ""}</p>
      <Link to={`product/${product.id}`}><button className={styles.btn_read_more}>Read more</button></Link>
      <p>Reviews: {product.reviews.length > 0 ? product.reviews.length : "0"}</p>
        
      </div>
    </div>
  )}
</div>;
}

export default ApiData;