import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [data,setData] = useState({})
  useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((result) => {
          console.log(result);
        setData(result.data)
      }).catch((err) => {
          
      });
  },[id])
  return <div>
      <h2>Detail Page</h2>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <p>{data.category}</p>
      <p>{data.price}</p>
      <img src={data.image} alt="" style={{width:"200px"}} />
  </div>;
}

export default Details;
