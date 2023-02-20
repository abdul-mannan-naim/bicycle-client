import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ i }) => {
    const { _id, name, price, supplierEmail, supplierName,
         add, remove, totalQuantity, img, description } = i;

    // ------------totalQuantity + add(all increase)------------
    let a = add.map(t => t)
    let totalAdd = a.reduce((x, y) => x + y, 0)
    let totalQuantityPlusTotalAdd = parseInt(totalQuantity) + totalAdd;

    // -----------(totalQuantity + add) - remove(all decrease)----------- 
    let re = remove.map(r => r)
    let totalRemove = re.reduce((x, y) => x + y, 0)
    let total = totalQuantityPlusTotalAdd - totalRemove; 

    return (
        <div>
            <div className="card card-side bg-base-100 w-[350px] h-[220px] shadow-xl relative">
                <div>
                    <figure><img src={img} className='w-[200px]  h-[150px] ' alt="Movie" /></figure>
                    <div>
                        <p className='ml-2'> {description}  </p>
                        <p className='font-bold text-accent ml-3'> {supplierName} </p>
                    </div>
                </div>
                <div className=" w-[150px]  ">
                    <div className='text-end pr-1'>
                        <h2 className="text-xl text-rose-400"> {name}  </h2>
                        <p> <span className='text-primary'>Price: </span> {price}  </p>
                        <p > <span className='text-primary'>Quantity:</span> {total} </p>

                    </div>
                    <div className="   absolute bottom-3 right-3 ">
                        <Link to={`/addRemove/${_id}`} className="btn btn-primary " > update </Link>
                        {/* <button className="btn btn-primary ">Watch</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;