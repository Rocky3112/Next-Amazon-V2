import { Product } from '@/lib/modals/ProductModal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllProducts = ({product}: {product: Product}) => {
  return (
    <div className='py-5'>
      <div className="card bg-base-300 shadow-xl mb-2 ">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            priority
            className="object-cover object-center of h-64 w-72 rounded-lg hover:scale-110 duration-500"
          />
        </Link>
      </figure>
      <div className="card-body p-4">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">${product.price}</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AllProducts