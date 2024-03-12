import { useEffect, useState } from "react";
import remove_icon from '../assets/cross_icon.png';


const ListProduct = () => {

    const [allProducts,setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch ('http://localhost:4000/allproducts')
        .then(res => res.json())
        .then((data) => {
            setAllProducts(data);
        })
    }

    //fetching at once to showing all product available
    useEffect(()=>{
        fetchInfo();
    },[])

    //remove the product from the list by clicking on the cross icon
    const remove_product = async (id) => {
        await fetch(`http://localhost:4000/removeproduct/`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }


  return (
    <div className="flex flex-col items-center w-[80%] mx-auto"> 

        <h1 className="text-3xl font-bold p-5">All Product List</h1>
        <div className=" grid grid-cols-9 font-semibold gap-1 md:gap-2 lg:gap-10 py-1 my-5 ">
            <p className='flex justify-center'>Products</p>
            <p className='col-start-2 col-span-3 flex justify-center '>Title</p>
            <p className='flex justify-center' >Old Price</p>
            <p className='flex justify-center '>New Price</p>
            <p className='flex justify-center '>Category</p>
            <p className='flex justify-center '>Size</p>
            <p className='flex justify-center'>Remove</p>
        </div>

        <div className="my-5 py-5  bg-gray-50 overflow-y-scroll h-1/3">

        


            {allProducts.map((product,i) => {
                
                return  <div key={i} className="   items-center border-b-2  grid grid-cols-9 gap-1 md:gap-2 lg:gap-10 py-1 
                border-gray-400 ">
                            <img src={product.image} width={80} height={80} alt="" className=" mx-auto" />
                            <p className='flex justify-center col-start-2 col-span-3 '>{product.name}</p>
                            <p className='flex justify-center '>${product.old_price}</p>
                            <p className='flex justify-center '>${product.new_price}</p>
                            <p className='flex justify -center'>${product.category}</p>
                            <p className='flex justify-center'>
                                <div className="flex">
                                    {Object.entries(product.size).map(([size, quantity]) => {
                                        if (quantity > 0) {
                                            return <span key={size}> {size}: {quantity}  </span>;
                                        }
                                        return null; // Return null for sizes with quantity <= 0
                                    })}
                                </div>
                            </p>

                            <img className="cursor-pointer  mx-auto " width={10} height={10} src={remove_icon} alt="" onClick={() => {remove_product(product.id)}} />
                        </div>
                
            })}
        </div>

        
 
    </div>
  )
}

export default ListProduct