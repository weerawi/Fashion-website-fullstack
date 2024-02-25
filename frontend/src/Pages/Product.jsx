import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrumms/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const all_products = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId));

    

    return (
        <div className='mx-auto max-w-[1280px] '>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    )
}

export default Product;
