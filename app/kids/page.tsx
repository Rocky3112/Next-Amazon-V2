import data from "@/lib/data";
import React from "react";
import AllProducts from "@/components/AllProducts/AllProducts";

const Mens = () => {
  const mensData = data.products.filter(
    (product) => product.category?.toLowerCase() === "kids"
  );

  return (
    <>
      <h2 className="text-2xl py-2 lg:px-5 mx-auto lg:mx-0">Kids Products</h2>
      <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 px-5">
        {mensData?.map((product) => (
          <AllProducts key={product.slug} product={product}></AllProducts>
        ))}
      </div>
      {/* <Tshirt mensData={mensData[0]}></Tshirt> */}
    </>
  );
};

export default Mens;
