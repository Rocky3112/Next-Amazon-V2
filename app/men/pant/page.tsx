import AllProducts from '@/components/AllProducts/AllProducts';
import data from '@/lib/data';
import { Product } from '@/lib/modals/ProductModal';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Pant = () => {
    const mensPants = data?.products.filter((product) => product?.category?.toLowerCase() === 'mens');
    // console.log(mensTshirt);
    const mensPants1 = mensPants?.filter((product) => product?.subcategory?.toLowerCase()==='pants');
    // console.log(mensPants1);
  return (
    <>
      
    <h2 className="text-2xl py-2 lg:px-5 mx-auto lg:mx-0">Mens Shirt</h2>
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 px-5">
    {
        mensPants1?.map((product)=>(
          <AllProducts key={product.slug} product={product}></AllProducts>
        ))
      }
    </div>
    
    </>
  )
}

export default Pant