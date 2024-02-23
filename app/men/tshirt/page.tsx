import data from '@/lib/data';
import { Product } from '@/lib/modals/ProductModal';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Tshirt = () => {
    const mensTshirt = data?.products.filter((product) => product?.category?.toLowerCase()==='mens');
    // console.log(mensTshirt);
    const mensTshirt1 = mensTshirt?.filter((product) => product?.subcategory?.toLowerCase()==='t-shirt');
    console.log(mensTshirt1);
  return (
    <>
      
    <h2 className="text-2xl py-2 lg:px-5 mx-auto lg:mx-0">Mens T-Shirt</h2>
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 px-5">
      {
        mensTshirt1?.map((tshirt:any)=>(
          <div key={tshirt.slug}>
            <div className="card bg-base-300 shadow-xl mb-2 ">
    <figure>
      <Link href={`/product/${tshirt.slug}`}>
        <Image
          src={tshirt.image}
          alt={tshirt.name}
          width={300}
          height={300}
          priority
          className="object-cover object-center of h-64 w-72 rounded-lg hover:scale-110 duration-500"
        />
      </Link>
    </figure>
    <div className="card-body p-4">
      <Link href={`/product/${tshirt.slug}`}>
        <h2 className="card-title font-normal">{tshirt.name}</h2>
      </Link>
      <p className="mb-2">{tshirt.brand}</p>
      <div className="card-actions flex items-center justify-between">
        <span className="text-2xl">${tshirt.price}</span>
      </div>
    </div>
  </div>
          </div>
        ))
      }
    </div>
    
    </>
  )
}

export default Tshirt