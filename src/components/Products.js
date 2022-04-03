import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import styles from "./Product.module.css";

function Products() {
  const [product, setProduct] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        setLoadingScreen(!loadingScreen)
        console.log(result.data);
        setProduct(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loadingScreen && <Loading/>}
      <h2>Product Page</h2>
      <div className={styles.products}>
        {product.map((e) => {
          return (
            <Link to={`/products/details/${e.id}`} key={e.id} className={styles.product}>
              <h6>{e.category}</h6>
              <p>{e.title}</p>
              <img src={e.image} alt="" style={{width:"100px"}}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
