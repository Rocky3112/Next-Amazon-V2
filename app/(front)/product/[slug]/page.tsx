import data from "@/lib/data";
import Link from "next/link";
import React from "react";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const product = data.products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div> Product is Not Found</div>;
  }
  return (
    <>
    <div>
        <Link href="/" className="btn btn-outline my-3">Back to Products</Link>
    </div>
    </>
  )
};

export default ProductDetails;
