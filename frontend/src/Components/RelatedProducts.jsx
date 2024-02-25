import React from 'react'
import data_product from './Assets/data'
import Item from './Item'

const RelatedProducts = () => {
  return (
    <div className='realtedproducts flex flex-col gap-3 items-center my-10'>
        <h1 className='text-3xl font-bold border-b-2 border-b-gray-300 uppercase font-custom-robot'>Related prodcuts</h1>

        <div className="realtdproducts-item mt-5 grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-8">
            {data_product.map((item,i) => {
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>        
      
    </div>
  )
}

export default RelatedProducts