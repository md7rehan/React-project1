import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const FetchProd = () => {
  const [products, setProducts] = useState([]);

  const fetchProd = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
      let products = data.products;
      setProducts(products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProd();
  }, []);

  return (
    <>
      <h1 className="flex justify-center text-3xl m-5"> Products</h1>
      <div className="flex justify-around flex-wrap ">
        {products.map((prod) => {
          return (
            //   <ul key={prod.id}>
            //     <li>
            //       <h1>{prod.title}</h1>
            //       <img src={prod.thumbnail} alt={prod.id} className="w-100" />
            //       <p>${prod.price}</p>
            //       <p>{prod.rating}</p>
            //     </li>
            //   </ul>

            <Cards key={prod.id} prod={prod} />
          );
        })}
      </div>
    </>
  );
};

export default FetchProd;
