import React from 'react'
import Slider from "react-slick";
import { useSelector } from 'react-redux';

export const Carousel = () => {
  const {singleProduct}=useSelector(state=>state.reducer)

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div>
        <Slider {...settings}>
        {
          singleProduct.images?.map((item,index)=>(
            <div key={index}>
              <img src={item} alt={item} />
            </div>
          ))
        } 
        </Slider>
        
    </div>
  )
}
