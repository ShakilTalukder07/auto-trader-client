import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" alt='' className=" max-w-md rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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