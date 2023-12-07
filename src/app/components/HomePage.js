import ProductSmall from "./home-components/ProductSmall";
import Slider from "./home-components/Slider";
// import axios from "../../../node_modules/axios/index";
import {productData} from "../data_products/product_data";
import { useEffect, useState } from "react";
export default function HomePage() {
const [data, setData] = useState([ ]);


useEffect(()=>{
  const getProducts= async  ()=>{
    try {
     
      setData(productData)
      console.log(productData);

    } catch (error) {
      console.log(error)
    }
    }
    getProducts();
    
}, [])

  return (
    <div>
    <Slider />
    <h1 className="d-flex justify-content-center align-items-center bggg">
      Featured Products
    </h1>
    <div className="productContainer">
  
      {
        data.map((e)=>{
          return (<ProductSmall
          key={e.id}
          title={e.title}
          description={e.description}
          price={e.price}
          category={e.category}
          img_url={e.img_url}
          stock={e.stock}
          />)
        })
      }
    </div>
   
   
    </div>
  );
}
