 import { useState } from 'react'
import upload_area from '../assets/upload_area.svg'

const AddProduct = () => {

    const [image,setImage] = useState(false);

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

  return (
    <div className=" flex flex-col gap-7 p-16 bg-gray-200 ml-5 my-5 
    w-auto sm:w-[500px] lg:w-[750px] xl:w-[1280px] font-custom-robot">
        <div className="space-y-2 ">
            <p>Product title</p>
            <input className='text-sm p-2 w-[100%]' type="text" name="name" placeholder="Type here" />
        </div>

        <div className='flex flex-col md:flex-row   gap-5'>

            <div className=" space-y-2">
                <p>Price</p>
                <input className='text-sm p-2 ' type="text" name="name" placeholder="Type here" />
            </div>

            <div className="space-y-2 ">
                <p>Offer Price</p>
                <input className='text-sm p-2  ' type="text" name="name" placeholder="Type here" />
            </div>

        </div>
        

        <div className="space-y-2">
            <p>Product Catgory</p> 
            <select name="category" className="">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kid">Kid</option> 
            </select>
        </div>

        <div className=' w-[80px] md:w-[150px]  '>
            <label htmlFor="file-input">
                <img className=' cursor-pointer ' src={image?URL.createObjectURL(image): upload_area} alt="" />
                <input  onChange={imageHandler}  type="file" name="image" id="file-input" hidden />
            </label>
        </div>

        <button className='w-60 bg-red-400 p-4 rounded-3xl border-2 border-gray-800 my-5 font-semibold
            hover:text-gray-300 hover:bg-red-500  transition-colors duration-100'>Add</button>

    </div>
  )
}

export default AddProduct