import React from 'react';

const BookingModal = ({ bookingCar }) => {
    const { name, resale_price, location, contact_number } = bookingCar;
    // console.log(bookingCar);

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const itemPrice = form.itemPrice.value;
        const number = form.number.value;
        const meetingLocation = form.meetingLocation.value;
        console.log(name, email, itemName, itemPrice, number, meetingLocation);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2'>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="User Name" className="input input-bordered w-full text-lg font-bold" />
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" name='email' placeholder="User Email" className="input input-bordered w-full text-lg font-bold" />
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name='itemName' value={name} disabled placeholder="Type here" className="input input-bordered w-full text-lg font-bold" />
                        <label className="label">
                            <span className="label-text">Item Price</span>
                        </label>
                        <input type="text" name='itemPrice' value={resale_price} disabled placeholder="Item Price" className="input input-bordered w-full text-lg font-bold" />
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input type="text" name='number' value={contact_number} disabled placeholder="Phone Number" className="input input-bordered w-full text-lg font-bold" />
                        <label className="label">
                            <span className="label-text">Meeting Location</span>
                        </label>
                        <input type="text" name='meetingLocation' value={location} disabled  placeholder="Location" className="input input-bordered w-full text-lg font-bold" />
                        <br />
                        <input className='btn btn-ghost bg-sky-400 w-full mx-w-xs' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;