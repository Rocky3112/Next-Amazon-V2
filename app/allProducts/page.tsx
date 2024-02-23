import AllProducts from '@/components/AllProducts/AllProducts'
import data from '@/lib/data'
import React from 'react'

const Products = () => {
  return (
    <>
      
    <h2 className="text-2xl py-2">Our All Products</h2>
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 px-5">
      {
        data.products.map((product)=>(
          <AllProducts key={product.slug} product={product}></AllProducts>
        ))
      }
    </div>
    
    </>
  )
}

export default Products