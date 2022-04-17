import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../imges/banner/banner1.jpg'
import img2 from '../../../imges/banner/banner2.jpg'
import img3 from '../../../imges/banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel fade className='pb-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height='600rem'
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>I AM</h2>
                        <h1>MONIKA BROWN</h1>
                        <h3>Professional Wedding Photographer</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height='600rem'
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>I AM</h2>
                        <h1>MONIKA BROWN</h1>
                        <h3>Professional Wedding Photographer</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height='600rem'
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>I AM</h2>
                        <h1>MONIKA BROWN</h1>
                        <h3>Professional Wedding Photographer</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;