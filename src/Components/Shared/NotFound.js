import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../img/robert-bye-tG36rvCeqng-unsplash.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center mt-4'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={banner}  alt="Shoes" /></figure>
                <div className="flex justify-center">
                    <div>
                    <h2 className="card-title"> Page Not Found  </h2>
                    <p className='text-3xl font-bold text-accent text-center'> 404 </p>
                    <div className="card-actions justify-center mb-3 ">
                         <Link to='/' className='btn btn-accent text-white font-bold'> back to home </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;