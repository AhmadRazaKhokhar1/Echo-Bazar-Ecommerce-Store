import Image from 'next/image';
import { Carousel } from "react-bootstrap"
function Slider() {
  return (
    <>
    <Carousel  controls={false}>
      <Carousel.Item>
       <div className="d-flex  bgt">
        <Image className='bg-image' alt='background-image-fruites-and-vegetables' src={'/images/bg-fruite-image.png'} width={800} height={600}  />
        <div className="content-bg">
            <h1 className="title-bg">
                Fresh & Organic
            </h1>
            <h6 className='sub-title'>
                Fruites and Vegetable
            </h6>
            <button className=" btn-bg-image-shop-now">
                Shop Now &rarr;
            </button>
        </div>
       </div>
        
      </Carousel.Item>
      <Carousel.Item>
       <div className="flex-box-bg">
        <Image className='bg-image' alt='background-image-fruites-and-vegetables'src={'/images/bg-fruite-image.png'} width={800} height={600}  />
        <div className="content-bg">
            <h1 className="title-bg">
                Fresh & Organic
            </h1>
            <h6 className='sub-title'>
                Fruites and Vegetable
            </h6>
            <button className=" btn-bg-image-shop-now">
                Shop Now &rarr;
            </button>
        </div>
       </div>
        
      </Carousel.Item>
      <Carousel.Item>
       <div className="flex-box-bg">
        <Image className='bg-image' alt='background-image-fruites-and-vegetables' src={'/images/bg-fruite-image.png'} width={800} height={600}  />
        <div className="content-bg">
            <h1 className="title-bg">
                Fresh & Organic
            </h1>
            <h6 className='sub-title'>
                Fruites and Vegetable
            </h6>
            <button className=" btn-bg-image-shop-now">
                Shop Now &rarr;
            </button>
        </div>
       </div>
      </Carousel.Item>
    </Carousel>
    </>
     
  );
}

export default Slider;
