import Link from "next/link";

export default function MensLayout({children}: any){
    return(
        <main className="flex gap-5">
            <div className="w-1/5 bg-slate-300 h-fit my-10 py-6 shadow-xl">
               
                <Link href="/kids">
                  <div className="  mb-2  gap-4 pl-5 hover:bg-gray-600 p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-white">
                    <h3 className="text-base text-gray-800 hover:text-white font-semibold ">
                    Mens All products
                    </h3>
                  </div>
                </Link>
                <Link href="/kids/tshirt">
                  <div className="  mb-2  gap-4 pl-5 hover:bg-gray-600 p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-white">
                    <h3 className="text-base text-gray-800 hover:text-white font-semibold ">
                    Kids T-Shirt
                    </h3>
                  </div>
                </Link>
                <Link href="/kids/shirt">
                  <div className="  mb-2  gap-4 pl-5 hover:bg-gray-600 p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-white">
                    <h3 className="text-base text-gray-800 hover:text-white font-semibold ">
                    Kids Shirt
                    </h3>
                  </div>
                </Link>
                <Link href="/kids/pant">
                  <div className="  mb-2  gap-4 pl-5 hover:bg-gray-600 p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-white">
                    <h3 className="text-base text-gray-800 hover:text-white font-semibold ">
                    Kids Pant
                    </h3>
                  </div>
                </Link>
                <Link href="/kids/shoe">
                  <div className="  mb-2  gap-4 pl-5 hover:bg-gray-600 p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-white">
                    <h3 className="text-base text-gray-800 hover:text-white font-semibold ">
                    Kids Shoe
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