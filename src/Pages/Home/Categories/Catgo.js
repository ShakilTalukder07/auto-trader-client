import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../assets/images/bmw5.jpg'

const Catgo = ({ category }) => {

    const { _id, title, description } = category
    // console.log(category);

    return (
        <>
            <div className="flex justify-center w-96 p-4 shadow-lg rounded-md ">
                <div className='w-1/2'>
                    <img className='m-2 w-[150px]' src={background} alt="Shoes" />
                </div>
                <div className="className='w-1/2'">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className='text xl'>{description}</p>
                    <div className="mt-2">
                        <Link to={`/category/${_id}`}><button className="btn btn-info shadow-md">View Cars</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Catgo;