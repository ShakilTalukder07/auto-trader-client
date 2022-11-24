import React from 'react';

const Catgo = ({ category }) => {

    const { title, description } = category
    console.log(category);

    return (
        <div className="card w-96 bg-green-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-info shadow-md">View Cars</button>
                </div>
            </div>
        </div>
    );
};

export default Catgo;