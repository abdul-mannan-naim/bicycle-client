import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddRemove = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const { _id, name, price, supplierEmail,
        supplierName, add = [], remove = [], totalQuantity,
        img, description } = item;
    const navigate = useNavigate()

    let a = add.map(t => t)
    let totalAdd = a.reduce((x, y) => x + y, 0)
    let totalQuantityPlusTotalAdd = parseInt(totalQuantity) +  totalAdd ;


    let re = remove.map(r => r)
    let totalRemove = re.reduce((x, y) => x + y, 0)
    let total = totalQuantityPlusTotalAdd - totalRemove;


    useEffect(() => {
        fetch(`http://localhost:5000/singleItem/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [item]) 

    const onSubmit = (data) => {
        const quan =parseInt(data.quantity)
        const quantity = {
            quantity:  quan 
        }
        fetch(`http://localhost:5000/add/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    reset() 
                    toast('You successfully add items')
                }
            })

    }


    const handleRemove = () => {
        fetch(`http://localhost:5000/remove/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast(' Delivered an item')
                }
            })
    }


    return (
        <div>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary"> {price} BDT </div>
                            <div className="badge badge-accent"> {total} </div>
                        </h2>
                        <p> {description} </p>
                        <p className='text-accent font-bold'> {supplierName} </p>
                        <p className='text-primary font-bold'> {supplierEmail} </p>

                        <div className="card-actions justify-between">
                            <div className="badge badge-outline hover:bg-rose-400 hover:rounded-xl  mt-3"><button onClick={handleRemove} > Delivered  </button> </div>
                            <div className="  ">  
                                <form onSubmit={handleSubmit(onSubmit)} className='flex justify-between'  >
                                    <div className='text-left'>
                                        <input type="number"
                                            placeholder=' Quantity'
                                            className='input input-bordered w-[150px] '
                                            {...register("quantity", {
                                                required: {
                                                    value: true,
                                                    message: " Quantity is required"
                                                },
                                            })}

                                        />
                                    </div>
                                    <input type="submit" value="Add" className='btn btn-accent  ' />
                                </form>
                            </div>
                        </div>
                        <label > {errors.quantity?.type === "required" && <span className='text-error'> {errors.quantity.message} </span>} </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRemove;