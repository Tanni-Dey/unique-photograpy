import React from 'react';

const Service = ({ service }) => {
    const { id, name, price, des, img } = service;
    return (
        <div className='col-md-4'>
            <div>
                <img src={img} className='img-fluid' alt="" />
                <h4>{name}</h4>
                <p>{des}</p>
                <h5>{price}</h5>
                <button>Chechout</button>
            </div>
        </div>
    );
};

export default Service;