import ProductSmall from "./home-components/ProductSmall";
import Slider from "./home-components/Slider";
// import axios from "../../../node_modules/axios/index";
import { productData } from "../data_products/product_data";
import { useEffect, useState } from "react";
export default function HomePage() {
const [data, setData] = useState([ ]);


//   const fetch = async ()=>{ 
//     const response = await axios.get('https://world.openfoodfacts.net/api/v2/product/3017624010701');
//     setData(response.data);
//     console.log(data.description)
//   // alert('ok')

// }
// fetch()

// const getit= async()=>{
// const response = await axios.get('https://world.openfoodfacts.net/api/v2/search?categories_tags_en=Orange Juice&nutrition_grades_tags=c&fields=code,nutrition_grades,categories_tags_en').then(()=> {
//   const dataFetched = response.data
//   // console.log(...dataFetched);
//   const g = dataFetched
//   // for(let i=0; i<=g.length; i++){
//   //   console.log(g[i].description)
//   // }
//  console.log(g)

// }).catch((error)=>{
// console.log(`There was an error fetching data${error}`)
// })
// }
// getit();

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
    <h1 className="d-flex justify-center">
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
