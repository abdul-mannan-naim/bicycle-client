import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/sixItems')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items]) 

    return (
        <div> 
            <div className='flex justify-center mt-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  '>
                    {
                        items.map(i=> <Item
                        key={i._id}
                        i={i} 
                        ></Item> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;