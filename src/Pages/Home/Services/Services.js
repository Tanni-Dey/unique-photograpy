import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container py-5'>
            <h1 className='py-5 text-warning'>Services</h1>
            <div className='row'>
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;