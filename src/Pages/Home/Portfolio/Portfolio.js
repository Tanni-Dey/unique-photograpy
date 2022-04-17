import React, { useEffect, useState } from 'react';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        fetch('porfolios.json')
            .then(res => res.json())
            .then(data => setPortfolios(data))
    }, [])
    return (
        <div className='container my-5 mb-5'>
            <h1 className='pb-5 text-warning'>Porfolio</h1>
            <div className='row'>

                {
                    portfolios.map(portfolio => <img className='col-md-4 gx-0 img-fluid' key={portfolio.id} src={portfolio.img} alt="" />)
                }

            </div>
        </div>
    );
};

export default Portfolio;