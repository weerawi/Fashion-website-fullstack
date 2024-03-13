import React, { useContext } from 'react';
import star_icon from './Assets/star_icon.png';
import star_dull_icon from './Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product } = props;
    const {addToCart} = useContext(ShopContext);

    const highlightSize = (sizeQuantity) => {
        return sizeQuantity > 0 ? 'bg-gray-300 hover:bg-gray-400 hover:text-gray-100' : ' text-strike';
    };


  return (
    <div className='productdisplay flex lg:flex-row flex-col my-0    justify-center sm:gap-10 '>

        <div className="productdisplay-left flex flex-1 gap-4 justify-center">
            <div className="productdisplay-img-list flex flex-col space-y-3 max-h-[500px]">
                <img height={100} width={80} src={product.image} alt="" />
                <img height={100} width={80} src={product.image} alt="" />
                <img height={100} width={80} src={product.image} alt="" />
                <img height={100} width={80} src={product.image} alt="" />
            </div>

            

            <div className='productdisplay-img  h-auto max-h-[500px]  '>
                <img className='productdispplay-main-img'  src={product.image} alt="" />
            </div>
        </div>

        <div className="productdisplay-right flex flex-1 flex-col font-custom-poppin mb-10 sm:px-10">
            <h1 className='text-2xl font-bold'>{product.name}</h1>
            <div className="productdisplay-right-star flex space-x-2 my-2">
                <img src={star_icon} height={20} width={20}  alt="" />
                <img src={star_icon} height={20} width={20}  alt="" />
                <img src={star_icon} height={20} width={20}  alt="" />
                <img src={star_icon} height={20} width={20}  alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>




            <div className="productdisplay-right-prices flex gap-10 p-4">
                <div className="productdisplay-right-price-old line-through text-lg font-medium text-gray-500"> ${product.old_price}  </div>
                <div className="productdisplay-right-price-new text-xl font-semibold"> ${product.new_price}  </div>
            </div>
        
            <div className="productdisplay-right-discription py-4"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis autem rerum 
                deserunt eum? Reprehenderit expedita, dolorem nihil voluptates autem repellat excepturi 
                ugit vitae sed enim libero accusamus, neque inventore.
            </div>

            
            <div className="productdisplay-right-size ">
                <h1 className='text-lg font-medium text-gray-500 py-2 capitalize'>select size</h1>
                <div className="productdisplay-right-size flex cursor-pointer gap-5 font-semibold">

                
                                    
                    {/* <div className={`  hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4`}>S</div>
                    <div className='hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4'>M</div>
                    <div className='hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4'>L</div>
                    <div className='hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4'>XL</div>
                    <div className='hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4'>XXL</div> */}

                    {Object.entries(product.size).map(([size, quantity]) => (
                        <div key={size} className={`hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4 ${highlightSize(quantity)}`}>
                            {size}
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={()=>{addToCart(product.id)}} className='w-60 bg-red-400 p-4 rounded-3xl border-2 border-gray-800 my-5 font-semibold
            hover:text-gray-300 hover:bg-red-500  transition-colors duration-100'>Add to cart</button>
            <p className="productdisplay-right-category"> <span>category :</span>Women ,  T-shirt , crop top</p>
            <p className="productdisplay-right-category"> <span>Tags :</span>Modern, Latest </p>
        </div>

        

    </div>
  )
}

export default ProductDisplay