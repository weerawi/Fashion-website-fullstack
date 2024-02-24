import React from 'react'
import Item from '../Item/Item';
import new_Collections from '../Assets/new_collections';
const NewCollections = () => {
  return (
    <div>
        <div className="new-collections flex flex-col gap-3 items-center mt-10">
          <h1 className='text-3xl font-bold border-b-2 border-b-gray-300 uppercase font-custom-robot'>new collecitons</h1>
          <div className="collections mt-5 grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-8   ">
            {new_Collections.map((item,i) => {
              return <Item   key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
          </div>
        </div>
    </div>
  )
}

export default NewCollections;