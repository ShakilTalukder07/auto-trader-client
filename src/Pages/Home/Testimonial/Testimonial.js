import React from 'react';
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from './Review';
import quote from '../../../assets/images/quote.svg'

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'Great service, delivery, price and product! Quality of products are amazing. Will be using you',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'Great service, delivery, price and product! Quality of products are amazing. Will be using you',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'Great service, delivery, price and product! Quality of products are amazing. Will be using you',
            location: 'California'
        },
    ]

    return (
        <div>
            <section className='my-16'>
                <div>
                    <h2 className="text-3xl mx-8 my-6 font-bold text-slate-600">What Customers Says</h2>
                </div>

                <figure>
                    <img className='w-12 lg:w-24 mx-8' src={quote} alt="" />
                </figure>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Testimonial;