import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";


export default function Cart () {
    return (
  
<div>
  <div className="w-full md:h-[316px] relative">
    <Image
      src="/images/Shop Page Banner.png"
      alt="ShopBanner"
      width={1440}
      height={316}
    

      className="w-full h-[300px] md:h-[316px] object-cover"
      
    />

    <div className="absolute inset-0 flex flex-col justify-center items-center mb-20 z-10">
      <Image
        src="/images/shop banner image top.png"
        alt="ShopBannerlogo"
        width={77}
        height={77}
      />
      <h1 className="text-2xl md:text-4xl font-bold">Cart</h1>
      <ul className="flex flex-row justify-center items-center text-center pt-2">
        <li className="hover:underline-offset-1 underline">
          <Link href="/">Home</Link>
        </li>
        <MdOutlineKeyboardArrowRight />
        <p>Cart</p>
      </ul>
    </div>
  </div>

  <div className="min-h-[500px] p-4 sm:p-6 md:p-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-3/4 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 text-gray-700 bg-[#FFF9E5] font-semibold pt-2 pb-2 mb-6">
          <p className="col-span-2">Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center gap-4">
          <div className="col-span-2 flex items-center gap-4">
            <div className="w-20 h-20 bg-[#FFF3D3] p-2 rounded-lg flex items-center justify-center">
              <Image
                src="/images/cart.png"
                alt="Product"
                width={64}
                height={64}
                className="rounded"
              />
            </div>
            <p className="text-[#9F9F9F] font-medium">Asgaard Sofa</p>
          </div>

          <p className="text-[#9F9F9F]">Rs. 250,000.00</p>

          <div>
            <input
              type="number"
              defaultValue="1"
              min="1"
              className="w-10 border border-[#9F9F9F] rounded text-center text-black focus:ring"
            />
          </div>

          <p className="text-black">Rs. 250,000.00</p>

          <button className="text-[#FBEBB5] hover:text-yellow-800 ml-4 col-span-1 flex justify-end">
            <IoTrashBinSharp size={20} />
          </button>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="w-full lg:w-1/4 h-[390px] bg-[#FFF3D3] p-6 mt-4 sm:mt-0">
        <h2 className="font-semibold text-2xl sm:text-3xl mb-4 text-black text-center">
          Cart Totals
        </h2>
        <div className="flex justify-between mb-2 pt-4">
          <p className="text-black text-[16px] font-medium pt-8">Subtotal</p>
          <p className="text-[16px] text-[#9F9F9F] pt-8">Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between mb-6">
          <p className="text-black text-[16px] font-medium pt-6">Total</p>
          <p className="font-medium text-[20px] text-[#B88E2F] pt-6">Rs. 250,000.00</p>
        </div>
        <div className="items-center pt-10">
          <ul className="flex items-center pt-10">
            <li className="w-full sm:w-[222px] border border-black text-black py-2 rounded-lg hover:bg-black hover:text-white transition-colors block text-center">
              <Link href="/checkout">Check Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full sm:h-full md:h-[300px] mt-10 bg-[#FAF4F4] flex flex-col sm:justify-center sm:items-center md:flex-row md:justify-evenly md:items-center">
    {/* BOX 1 */}
    <div className="w-[300px] h-[100px] mt-6 sm:mt-4 md:mt-0 text-center md:text-start">
      <h1 className="font-medium sm:text-[24px] md:text-[32px] md:text-start sm:text-center">
        Free Delivery
      </h1>
      <p className="text-sm text-[20px] text-[#9F9F9F]">
        For all orders over $50, consectetur adipiscing elit.
      </p>
    </div>

    {/* BOX 2 */}
    <div className="gap-y-3 w-[300px] h-[100px] mt-6 sm:mt-4 md:mt-0 text-center md:text-start">
      <h1 className="font-medium text-[24px] md:text-[32px]">90 Days Return</h1>
      <p className="text-sm text-[20px] text-[#9F9F9F]">
        If goods have problems, consectetur adipiscing elit.
      </p>
    </div>

    {/* BOX 3 */}
    <div className="gap-y-3 w-[300px] h-[100px] mt-6 sm:mt-4 md:mt-0 text-center md:text-start">
      <h1 className="font-medium text-[24px] md:text-[32px]">Secure Payment</h1>
      <p className="text-sm text-[20px] text-[#9F9F9F]">
        100% secure payment, consectetur adipiscing elit.
      </p>
    </div>
  </div>
</div>
      
    )
}
