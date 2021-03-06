import React from 'react';
import { SiFacebook } from 'react-icons/si'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer style={{ fontSize: '20px', borderTop: '1px solid grey' }} className='bg-dark text-warning py-2 w-100'>
            <span className='px-3'><SiFacebook /></span>
            <span className='px-3'><FaInstagramSquare /></span>
            <span className='px-3'><AiFillTwitterCircle /></span>
        </footer>
    );
};

export default Footer;