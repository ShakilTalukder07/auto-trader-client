import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" alt='' className=" max-w-md rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Welcome To Resala</h1>
                    <div className="py-6">
                        <p>We sale second hand cars. Best in condition also affordable in price. You may get your desire car with an affordable price</p>
                    </div>
                    <div className='flex'>
                        <button className="btn btn-primary m-2">Get Started</button>
                        <button className="btn btn-primary m-2">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;