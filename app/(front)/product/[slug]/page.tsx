import data from "@/lib/data";
import Image from "next/image";
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
    <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li> {product.brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card  bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;
