import AllProducts from '@/components/AllProducts/AllProducts';
import data from '@/lib/data';
import { Product } from '@/lib/modals/ProductModal';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Tshirt = () => {
    const mensTshirt = data?.products.filter((product) => product?.category?.toLowerCase() === 'kids');
    // console.log(mensTshirt);
    const mensTshirt1 = mensTshirt?.filter((product) => product?.subcategory?.toLowerCase()==='t-shirt');
    console.log(mensTshirt1);
  return (
    <>
      
    <h2 className="text-2xl py-2 lg:px-5 mx-auto lg:mx-0">Kids T-Shirt</h2>
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 px-5">
    {
        mensTshirt1?.map((product)=>(
          <AllProducts key={product.slug} product={product}></AllProducts>
        ))
      }
    </div>
    
    </>
  )
}

export default Tshirt