import ProductItem from "@/components/product/ProductItem";
import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="py-5">
    <h2 className="text-2xl py-2">Latest Products</h2>
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {
        data.products.slice(0,8).map((product)=>(
          <ProductItem key={product.slug} product={product}></ProductItem>
        ))
      }
    </div>
    <div className="text-end">
    <Link href="/allProducts" className='btn btn-outline'>See All Products</Link>
  </div>
    </div>
    </>
  );
}
