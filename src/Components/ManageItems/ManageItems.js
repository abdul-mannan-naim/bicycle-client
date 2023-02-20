import React, { useEffect, useState } from 'react';
import ManageItem from './ManageItem';

const ManageItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allItems')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])
    return (
        <div> 
            <div className='flex justify-center mt-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  '>
                    {
                        items.map(i=> <ManageItem
                        key={i._id}
                        i={i} 
                        ></ManageItem> )
                    }
                </div>
            </div> 
        </div>
    );
};

export default ManageItems;