import AllProducts from '@/components/AllProducts/AllProducts';
import data from '@/lib/data';

const Shirt = () => {
    const womensShirt = data?.products.filter((product) => product?.category?.toLowerCase() === 'womens');
    // console.log(mensTshirt);
    const womensShirt1 = womensShirt?.filter((product) => product?.subcategory?.toLowerCase()==='shirt');
    // console.log(womensShirt1);
  return (
    <>
      
    <h2 className="text-2xl py-2 lg:px-5 mx-auto lg:mx-0">Womens Shirt</h2>
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 px-5">
      {
        womensShirt1?.map((product)=>(
          <AllProducts key={product.slug} product={product}></AllProducts>
        ))
      }
    </div>
    
    </>
  )
}

export default Shirt