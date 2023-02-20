import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyItems = () => {
    const [items, setItems] = useState([])
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myItems?user=${user.email}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem("accessToken")
                        Navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setItems(data);
                })
        }
    }, [items, user])

    const handleDelete = (a) => {
        fetch(`http://localhost:5000/delete/${a}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.error('You delete an item')
                }
            })

    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className=' flex justify-center '>
            <div>
                <div class="overflow-x-auto hidden lg:block ">
                    <table class="table w-full ">
                        <thead>
                            <tr className=' '>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <th> Items Name <br />
                                     Price 
                                </th>
                                <th> Your Name   <br />
                                     Your Email Address  </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='  '>
                            {
                                items.map(a =>
                                    <tr >
                                        <th className={`  `}>
                                            <label>
                                                <button onClick={() => handleDelete(a._id)} className='text-rose-500' >Delete  </button>
                                            </label>
                                        </th>
                                        <td className={`  `}>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src={a.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold"> {a.name} </div>
                                                    <div class="text-sm opacity-50"> {a.price}   </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`  `} >
                                            <p>   {a.supplierName}</p>
                                            <p> {a.supplierEmail} </p>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div>

                    <div class="overflow-x-auto  lg:hidden  ">
                        <table class="table  ">
                            <thead>
                                <tr className=' '>
                                    <th>
                                        My Item List 
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    items.map(a => <tr>
                                        <td>
                                            <div class="flex justify-between space-x-3">
                                                <div class="flex items-center space-x-3">
                                                    <div class="avatar">
                                                        <div class="mask mask-squircle w-12 h-12">
                                                            <img src={a.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold"> {a.name} </div>
                                                        <p>   Price: {a.price}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <td className={` `} >
                                                        {/* ----------------- */}
                                                        <button onClick={() => handleDelete(a._id)} className='text-rose-500 btn  ' >Delete  </button>
                                                    </td>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItems;