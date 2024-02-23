import Men from '@/components/Men/Men'
import data from '@/lib/data'
import React from 'react'
import Tshirt from './tshirt/page';

const Mens = () => {
    const mensData = data.products.filter((product) => product.category?.toLowerCase() === 'mens');

  return (
    
    <>
      
    <h2 className="text-2xl py-2 lg:px-5 mx-auto lg:mx-0">Mens Products</h2>
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 px-5">
      {
        mensData.map((product)=>(
          <Men key={product.slug} product={product}></Men>
        ))
      }
    </div>
    {/* <Tshirt mensData={mensData[0]}></Tshirt> */}
    
    </>
  )
}

export default Mens