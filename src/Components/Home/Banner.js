import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../img/robert-bye-tG36rvCeqng-unsplash.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row"> 
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold"> Duranta Bicycle   </h1>
                        <p className="py-6">  Duranta  is one of the biggest bicycle 
                            manufacture company in Bangladesh. <br />
                            It has 10 warehouse in all over the country. </p>
                       
                        <Link to='/manageItems' > <button className="btn btn-primary">Get Started</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;