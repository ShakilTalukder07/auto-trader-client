import React from 'react';

const AdItems = ({ item, setItemsModal }) => {
    const { image, location, name, title, newPrice, purchaseYear, condition, number } = item
    return (
        <div className="card card-compact w-[280px] bg-base-100 shadow-xl">
            <figure><img className='w-full h-40 ' src={image} alt="Car" /></figure>
            <div className="card-body">
                <h2 className="card-title"><span className='font-bold'>Brand: {name}</span></h2>
                <p><span className='font-bold'> Model: </span> {title}</p>
                <p> <span className='font-bold'>Price:</span>  ${newPrice}</p>
                {/* <p>Location: {location}</p> */}
                <div className="card-actions justify-end">
                    <label onClick={() => setItemsModal( item )}
                        htmlFor="AdItemModal"
                        className="btn btn-accent w-full">
                        Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default AdItems;