import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Items from './ItemSection/Items';

const Home = () => {
    return (
        <div  >
            <Items></Items>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;