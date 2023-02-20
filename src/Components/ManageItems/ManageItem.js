import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageItem = ({ i }) => {

    const { _id, name, price, supplierEmail, supplierName, add,
        remove, totalQuantity, img, description } = i;

    const handleDelete = () => {

        fetch(`http://localhost:5000/delete/${_id}`,{
          method:"DELETE",
          headers:{
            "content-type":"application/json"
          }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.acknowledged) {
                toast.error('You delete a item') 
            }
        }) 
    }

    let a = add.map(t => t)
    let totalAdd = a.reduce((x, y) => x + y, 0)
    let totalQuantityPlusTotalAdd = parseInt(totalQuantity) + totalAdd;


    let re = remove.map(r => r)
    let totalRemove = re.reduce((x, y) => x + y, 0)
    let total = totalQuantityPlusTotalAdd - totalRemove;

    return (
        <div>
            <div className="card w-[300px] h-[350px] bg-base-100 shadow-xl image-full relative ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-accent"> {total} </div>
                    </h2>
                    <div className="badge badge-secondary"> {price} BDT </div>

                    <div>
                        <p> {description} </p>
                    </div>

                    <div>
                        <p>
                            {supplierEmail}
                        </p>
                        <p className='text-accent'> {supplierName} </p>
                    </div>
                    <div className="absolute bottom-3 left-3 ">
                        <button onClick={handleDelete} className="btn btn-error"> Delete  </button>
                    </div>
                    <div className="   absolute bottom-3 right-3 ">
                        <Link to={`/addRemove/${_id}`} className="btn btn-primary " > update </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;