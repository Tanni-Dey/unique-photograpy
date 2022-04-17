import React from 'react';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Portfolio />
        </div>
    );
};

export default Home;