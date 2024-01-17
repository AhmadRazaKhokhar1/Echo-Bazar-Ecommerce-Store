import React from 'react'

export default function HotDeals() {
  return (
<div>
  <h1 className='d-flex justify-content-center align-items-center bggg'>
    Hot Deals 
    </h1>
    <div className="container-fluid mt-5 d-flex justify-content-between  ">
    <div className="card w-25 mx-2 productSmall pointer scale-hover scale-3" >
        <img src="images/vegetables-sponsor-image-right.png" className="card-img-top " alt="Product Image"/>
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="card-text">Price: $99.99</p>
            <a href="#" className="btn btn-primary">
                <i className="bi bi-cart"></i> Add to Cart
            </a>
        </div>
    </div>
    <div className="card w-25 mx-2 productSmall">
        <img src="images/vegetables-sponsor-image-right.png" className="card-img-top " alt="Product Image"/>
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="card-text">Price: $99.99</p>
            <a href="#" className="btn btn-primary">
                <i className="bi bi-cart"></i> Add to Cart
            </a>
        </div>
    </div>
    <div className="card w-25 mx-2 productSmall">
        <img src="images/vegetables-sponsor-image-right.png" className="card-img-top " alt="Product Image"/>
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="card-text">Price: $99.99</p>
            <a href="#" className="btn btn-primary">
                <i className="bi bi-cart"></i> Add to Cart
            </a>
        </div>
    </div>
    <div className="card w-25 mx-2 productSmall">
        <img src="images/vegetables-sponsor-image-right.png" className="card-img-top " alt="Product Image"/>
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="card-text">Price: $99.99</p>
            <a href="#" className="btn btn-primary">
                <i className="bi bi-cart"></i> Add to Cart
            </a>
        </div>
    </div>
    
</div>
<hr className='w-25 d-block mx-auto'/>
</div>
    
  )
}
