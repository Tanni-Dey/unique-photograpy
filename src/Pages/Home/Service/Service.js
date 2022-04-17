import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, name, price, des, img } = service;
    return (
        <div className='col-md-4 py-5'>
            <div>
                <img src={img} className='img-fluid' alt="" />
                <div className='pt-5'>
                    <h4 className='text-warning'>{name}</h4>
                    <p>{des}</p>
                    <h5>Booking: ${price}</h5>
                    <Link style={{ textDecoration: 'none', fontFamily: 'loster' }} className='btn btn-warning mt-2' to='/checkout'>Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;