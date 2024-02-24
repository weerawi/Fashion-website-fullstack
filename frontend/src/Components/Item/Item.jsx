import React from 'react'

const Item = (props) => {
    const {image,name,new_price,old_price} = props;
  return (
    <div className='flex flex-col items-center w-[350px] transition duration-60 ease-in-out hover:duration-100 hover:ease-in cursor-pointer'>
        <img src={image} alt="" />
        <p className='my-1 mx-0'>{name}</p>
        <div className="item-prices flex gap-5  ">
            <div className="item-price-new text-sm font-semibold text-gray-500">
                {new_price}
            </div>
            <div className="item-price-old text-sm font-normal line-through text-gray-400">
                {old_price}
            </div>
        </div>
    </div>
  )
}

export default Item