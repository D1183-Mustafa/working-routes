import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        console.log(result.data);
        setProduct(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
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
