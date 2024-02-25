import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='p-10'>
        <div className="descriptionbox-navigator flex gap-10 py-4">
            <div className="descriptionbox-nav-box p-4 bg-gray-200">Description</div>
            <div className="description-nav-box fade p-4 bg-gray-200">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description flex flex-col border-2 border-gray-100 p-5">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae aspernatur obcaecati maxime perspiciatis, a
            veritatis in velit! Praesentium assumenda ducimus cupiditate dolorem corporis sapiente eum. Natus ut ducimus nisi minus?</p>
        </div>
    </div>
  )
}

export default DescriptionBox