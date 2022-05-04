import React from 'react';
import error from '../images/404.webp';
const NotFound = () => {
    return (
        <div >
            <img className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;