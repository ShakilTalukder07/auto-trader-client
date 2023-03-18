import React from 'react';

const AdItems = ({ item, setItemsModal }) => {
    const { image, location, name, title, newPrice, purchaseYear, condition, number } = item
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-60 ' src={image} alt="Car" /></figure>
            <div className="card-body">
                <h2 className="card-title"><span className='font-bold'>Brand: {name}</span></h2>
                <p>Model: {title}</p>
                <p>Price: ${newPrice}</p>
                {/* <p>Location: {location}</p> */}
                <div className="card-actions justify-end">
                    <label onClick={() => setItemsModal( item )}
                        htmlFor="AdItemModal"
                        className="btn btn-accent w-full mx-2">
                        Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default AdItems;