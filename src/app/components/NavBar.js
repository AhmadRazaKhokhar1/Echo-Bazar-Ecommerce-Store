import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const NavBar = () => {
  return (
    <div>
    <nav className='nav-bar'>
     {/* upperContainer */}
     <div className="upperContainer">
        <div className="left">
            <Image
            src='/images/map-pin.svg'
            width={15}
            height={18}
            className='map-icon'
            alt='map-pin-icon'
            />
           Store Location: Lahore, Punjab, Pakistan
        </div>

        <div className="right">
            <select name="Currency" id="currency">
                <option value="USD">$  USD</option>
                <option value="BPD">€  GBP</option>
                <option value="PKR">Rs PKR</option>
                <option value="EUR">€  EUR</option>
            </select>
            <div className="log">
                <Image 
                src='/images/profile-pic.svg' alt='profile-pic-ahmad-raza-khokhar' 
                width={20} height={20}  className='profile-pic'
                />
                <span className="log-name">Ahmad Raza Khokhar</span>
            </div>
        </div>
     </div>
     
     {/* middleContainer */}
     <div className="middleContainer">
        
        <div className="middle-left">
            <Image className='brand-logo' alt='brand-logo echo-bazar ahmad-raza-khokhar' src='/images/echo-bazar-logo.png' width={167.5} height={37.5} />
        </div>
        <div className="middle-middle">
          <input type='search' className='search-input' placeholder='Search'/>
          <button className="btn-search">Search</button>
        </div>

        <div className="middle-right">
            <Image
            src='/images/add-to-cart-icon.png'
            width={25}
            height={30}
            alt='add-to-cart-icon-ahmad-raza-khokhar-echo-bazar'
            className='shopping-cart-icon'
            />
            <div id = 'cartCount'>
            </div>
            <div className="bar">
                <span className="head">Shopping Cart</span>
                <span className="totalAmount">$57.00</span>
            </div>
        </div>
     </div>
     
     {/* lowerContainer */}
     <div className="lowerContainer">
       <div className="lower-left">

        <div className="categories-menu">
            <div className="dropdown-container">
        <Image src='/images/menu-hamburger-icon.svg' height={20} width={20} alt='menu-hamburger-icon-ahmad-raza-khokhar-echo-bazar-categories-all' className='hamburger-menu-icon'/>
         <select name="categories" id="categories" className="categories" >
           <option value="All Categories" >All Categories</option>
           <option value="Fruits" className='op'>Fruits</option>
           <option value="Vegetables" className='op'>Vegetables</option>
           <option value="Drinks" className='op'>Drinks</option>
           <option value="Quick Breakfast" className='op'>Quick Breakfast</option>
           <option value="Milk" className='op'>Milk</option>
         </select>
            </div>
            </div>
         <ul className="main-menu">
            <li className="menu-btn-main">
           <Link className='link' href='/'>Home</Link>     
                <hr className="gr"/>
            </li>
            <li className="menu-btn-main">
               Hot Deals
                <hr className="gr"/>
            </li>
            <li className="menu-btn-main">
                Featured
                <hr className="gr"/>
            </li>
            <li className="menu-btn-main">
            <Link className='link' href='/blogs'>Blogs</Link>
                <hr className="gr"/>
            </li>
            <li className="menu-btn-main">
            <Link className='link' href='/about'>About Us</Link>    
                <hr className="gr"/>
            </li>
            <li className="menu-btn-main">
            <Link className='link' href='/contact'>Contact</Link>    
                <hr className="gr"/>
            </li>
         </ul>
       

      </div>

      <div className="lower-right">
         
            <Image src='/images/phone-call-icon.png' width={25} height={25} alt='phone-call-icon-ahmad-raza-khokhar-echo-bazar-store' className='phone-call-icon'/>
            <span className='phone'>+92 3008039275</span>
      </div>
    
     </div>
    </nav>
    </div>
  )
}

export default NavBar;
