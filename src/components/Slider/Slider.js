import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './sliderAssets/1.png';
import img2 from './sliderAssets/2.png';
import img3 from './sliderAssets/3.png';
import img4 from './sliderAssets/4.png';
import SliderItem from './SliderItem';

const slider = () => {
    return (
        <Carousel showThumbs={false}>
            <SliderItem img={img1} link="/">Home</SliderItem>
            <SliderItem img={img2} link="/tax">Tax Calculator</SliderItem>
            <SliderItem img={img3} link="/tip">Tip Calculator</SliderItem>
            <SliderItem img={img4} link="/currency">Currency Exchanger</SliderItem>
        </Carousel>
    );
}

export default slider;