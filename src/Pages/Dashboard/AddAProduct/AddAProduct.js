import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../components/Loading/Loading';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors }, isLoading } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key

    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = (`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`)
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const products = {
                        name: data.name,
                        title: data.title,

                    }
                }
            })


        // const form = data.target
        // const name = form.name.value;
        // const title = form.title.value;
        // const price = form.price.value;
        // const condition = form.condition.value;
        // const number = form.number.value;
        // const location = form.location.value;
        // const newPrice = form.newPrice.value;
        // const purchaseYear = form.purchaseYear.value;

        // const addProduct = {
        //     name,
        //     title,
        //     price,
        //     condition,
        //     number,
        //     location,
        //     newPrice,
        //     purchaseYear
        // }

        fetch('http://localhost:5000/products', {
            method: 'POST',

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center font-bold underline'>Add Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="data-control w-full ma-w-xs">
                        <label className="label"> <span className="label-text">Product Image</span></label>
                        <input {...register("image", {
                            required: 'image is required'
                        })} type="file" className="file-input file-input-bordered  w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div div className="form-control w-full max-w-xs" >
                        <label className="label"> <span className="label-text">Product Category</span></label>
                        <input {...register("name", {
                            required: 'category is required',
                        })} className="input input-bordered w-full max-w-xs" type="text" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input {...register("title", {
                            required: 'title is required',
                        })} className="input input-bordered w-full max-w-xs" type="text" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Price</span></label>
                        <input {...register("price", {
                            required: 'price is required',
                        })} className="input input-bordered w-full max-w-xs" type="number" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>


                    <label className="label"> <span className="label-text">Product Condition:</span></label>
                    <select className="select select-bordered w-full max-w-xs"
                        {...register('condition', { required: 'condition is required' })}
                    >
                        <option selected value='excellent' >Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                    </select>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile Number</span></label>
                        <input {...register("number", {
                            required: 'mobile number is required'
                        })} className="input input-bordered w-full max-w-xs" type="number" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input {...register("location", {
                            required: 'location number is required'
                        })} className="input input-bordered w-full max-w-xs" type="text" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">New Price In Market</span></label>
                        <input {...register("newPrice", {
                            required: 'newPrice number is required'
                        })} className="input input-bordered w-full max-w-xs" type="text" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Year of purchase</span></label>
                        <input {...register("purchaseYear", {
                            required: 'Year is required'
                        })} className="input input-bordered w-full max-w-xs" type="text" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <input className='btn btn-info w-full mt-6' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;