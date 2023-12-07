'use-client';
import Image from '../../../../node_modules/next/image';
import { useContext, createContext, useEffect, useState } from 'react';


const  ProductSmall = ({initialValue,title, description, img_url, category, price, stock}) =>{
  

        const [rating, setRating] = useState(initialValue);
        const [available, setAvailable] = useState({display:'none'});
        const [stockAv, setStockAv] = useState('');
        const handleStarClick = (clickedIndex) => {
          setRating(clickedIndex + 1);
        };

        const availableProduct = ()=>{
          if(stock===true){
             setAvailable({display:"none"});
             setStockAv('');
          }else{
            setStockAv('Out of stock');
            setAvailable({display:'block'})
          }
        }
      useEffect(() => {

        availableProduct();
      }, []);

        const [imgSrc, setImgSrc] = useState('/images/product-add-to-cart.png');
         const hoverCart = (e)=>{
           setImgSrc('/images/green-product-add-to-cart.png');
           e.target.style.cursor = 'pointer';
         }
         const blurCart = ()=>{
          setImgSrc('/images/product-add-to-cart.png')
         }
 

         const trimmedDesc = ()=>{

const trimmedDescription = description.trim();

// Split the description into an array of words
const wordsArray = trimmedDescription.split(/\s+/);

// Count the number of words
const wordCount = wordsArray.splice(0, 1);
wordCount.push(title)
return wordCount.join(' ');



         }

        return(

    <div >
        <br />
      <div className='productSmall'>
        <div className="cardHead">
            <Image src={img_url} alt={title + description} width={250} height={210} className='productImage' />
        </div>
        <div className="card-body d--nline-flex flex-column justify-content-between items-center w-100 px-4">
        <div className="cardTitle">
            {title}
        </div>
        <div className="desc flex-wrap">
        {trimmedDesc() + "..."}
        </div>
        <div className="d-flex justify-content-between ">
        <div className="cardPrice">
           ${price}
        </div>
        <div>
            <Image
            src={imgSrc}  
            width={40} 
            height={40} 
            alt='Product add to cart product-add-to-cart' 
            onMouseOver={hoverCart} 
            onMouseOut={blurCart}
            />
        </div>
        </div> 
        <div className="cardQuantity">
            1kg
        </div>
        <div className="cardCategory">
           {category}
        </div>
        <div className="rating">
          <div className="d-flex">

        {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
          onChange={()=>{rating}}
        >
          &#9733;
        </span>
      ))}
      </div>
        
      <div className="stock-av" style={available}>
          <div className="stock">
            {
        stockAv
            }
      </div>
       </div>  
        </div>
        
        </div>
        
      </div>

      <br />
    </div>
  )
 
}
 

export default ProductSmall