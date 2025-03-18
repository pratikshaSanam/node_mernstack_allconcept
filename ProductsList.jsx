import Product from './Product';
import React, { useEffect, useState } from "react";

// import ProductsData from './data';
import axios from 'axios';


const ProductList = () => {
  const [products, setProducts] = useState([]);
 

  const getProducts = async () => {
    const res = await axios.get('http://localhost:8088/products');
    console.log(res.data);
    setProducts(res.data);
   
  };

  


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    
      {products.map((product, index) => (
        <Product {...product} key={index} ></Product>
      ))}
    </>
  );
};

export default ProductList;