import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import { fetchData } from "../utils/fake-store";

const Home = () => {
    const [data, setData] = useState();
    async function fetchData() {
            // You can await here
            const products = await fetch("https://fakestoreapi.com/products");
            const data = await products.json();
            // return data;
            setData(data);
            // // ...
        }

        
    useEffect(() => {
       
        fetchData();
        // console.log(data);
        //     setData(data);
    }, []);

    // console.log(Array.isArray(data));
    // const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;
    // const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;
    // console.log(data, 'data');
    // console.log(Array.isArray(data), 'isDataEmpty');
    return (
        <>

        <div className="container d-flex flex-wrap justify-content-between mt-4">
          {
            Array.isArray(data) ? 
            
            data.map((product, index) => <ProductCard products={product} key={index} />)
             : ('Data is empty')
          }
        </div>
        </>
    );
};

export default Home;
