import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categories></Categories>
           <AdvertiseItems></AdvertiseItems>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;