import Image from "../../../node_modules/next/image";
const Footer = ()=>{
    return <>
    <div>
        <footer className="footer-bottom d-flex">
            <div className="d-flex flex-column">

            
           
            <div className="center-footer">
            <div className="left-image-footer">
                <Image
                src='/images/footer-left-graphics.png'
                width={280}
                height={280}
                alt="footer left image and graphics"
                className="position-sticky my-1 leftt"
                />
            </div>
            <div className="d-flex flex-column justify-left">
                <h3>About Shopery</h3>
                <pre>
                Morbi cursus porttitor enim <br />
                lobortis molestie. Duis <br />
                 gravida turpis dui, bibendum <br />
                egetmagna congue nex.

                </pre>

                <div>
                    <strong className="contactInfo">
                      +92 3008039275
                    </strong>
                    &nbsp;
                   <span className="contactInfo">
                    or
                   </span>
                   &nbsp;

                    <strong  className="contactInfo">
                      ssaeedahmad767@gmail.com
                    </strong>
                </div>
            </div>
            <div className="d-flex flex-column justify-left">
                <h3>My Account</h3>
                <ul>
                    <li>My Account</li>
                    <li>Order History</li>
                    <li>Shopping Cart</li>
                    <li>Wishlist</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div className="d-flex flex-column justify-left">
            <h3>Helps</h3>
                <ul>
                    <li>Contact</li>
                    <li>FAQs</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="d-flex flex-column justify-left">
            <h3>Proxy</h3>
                <ul>
                    <li>About</li>
                    <li>Product</li>
                    <li>Product Details</li>
                    <li>Track Order</li>
                </ul>
            </div>
            <div>
                
            </div>
            <div className="right-images-footer">
            <Image
                src='/images/footer-right-graphics.png'
                width={280}
                height={280}
                alt="footer left image and graphics"
                className="position-sticky my-1 rightt"
                />
            </div>
            </div>
            
<br />
            <div className="bottomFooter d-flex flex-row justify-content-between  w-75 mx-auto ">
                <div className="d-flex justify-content-between w-25 px-5">
                    <Image
                    src='/images/fb.svg'
                    width={25}
                    height={25}
                    alt="social media icons echo bazar ahmad raza khokhar"
                    className="icons-footer"
                    />
                    <Image
                    src='/images/ins.svg'
                    width={25}
                    height={25}
                    alt="social media icons echo bazar ahmad raza khokhar"
                    className="icons-footer"
                    />
                    <Image
                    src='/images/lk.svg'
                    width={25}
                    height={25}
                    alt="social media icons echo bazar ahmad raza khokhar"
                    className="icons-footer"
                    />
                    <Image
                    src='/images/git.svg'
                    width={25}
                    height={25}
                    alt="social media icons echo bazar ahmad raza khokhar"
                    className="icons-footer"
                    />
                </div>
                <div className="d-flex text-white">
                    <span>
                        <b>
                        Saeed Ahmad Bloach © 2024. All Rights Reserved
                        </b>
                    </span>
                </div>
                <div className="d-flex justify-content-between w-25 px-4">
                    <Image
                    src='/images/discover-pay.png'
                    width={25}
                    height={25}
                    alt="social media icons echo bazar Saeed Ahmad Bloach"
                    className="icons-footer"
                    />
                    <Image
                    src='/images/apple-pay.png'
                    width={25}
                    height={25}
                    alt="social media icons echo bazar Saeed Ahmad Bloach"
                    className="icons-footer"
                    />
                    <Image
                    src='/images/visa-pay.png'
                    width={25}
                    height={25}
                    alt="social media icons echo bazar Saeed Ahmad Bloach"
                    className="icons-footer"
                    />
                    <Image
                    src='/images/mastercard-pay.png'
                    width={25}
                    height={25}
                    alt="social media icons echo bazar ahmad raza khokhar"
                    className="icons-footer"
                    />
                    <Image
                    src='/images/secure-pay.png'
                    width={25}
                    height={25}
                    alt="social media icons echo bazar ahmad raza khokhar"
                    className="icons-footer"
                    />
                </div>
            </div>
            </div>
        </footer>
    </div>
    </>
}
export default Footer;