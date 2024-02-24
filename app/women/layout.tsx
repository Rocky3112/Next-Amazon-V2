import Link from "next/link";

export default function MensLayout({children}: any){
    return(
        <main className="flex gap-5">
            <div className="w-1/5 bg-slate-300 h-fit my-10 py-6 shadow-xl">
               
                <Link href="/men">
                  <div className="  mb-2  gap-4 pl-5 hover:bg-gray-600 p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-white">
                    <h3 className="text-base text-gray-800 hover:text-white font-semibold ">
                    Mens All products
                    </h3>
                  </div>
                </Link>
                <Link href="/men/tshirt">
                  <div className="  mb-2  gap-4 pl-5 hover:bg-gray-600 p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-white">
                    <h3 className="text-base text-gray-800 hover:text-white font-semibold ">
                    Mens T-Shirt
                    </h3>
                  </div>
                </Link>
                <Link href="/men/shirt">
                  <div className="  mb-2  gap-4 pl-5 hover:bg-gray-600 p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-white">
                    <h3 className="text-base text-gray-800 hover:text-white font-semibold ">
                    Mens Shirt
                    </h3>
                  </div>
                </Link>
                <Link href="/men/pant">
                  <div className="  mb-2  gap-4 pl-5 hover:bg-gray-600 p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-white">
                    <h3 className="text-base text-gray-800 hover:text-white font-semibold ">
                    Mens Pant
                    </h3>
                  </div>
                </Link>
               
            </div>
            <div>
                {children}
            </div>
        </main>
    )
}