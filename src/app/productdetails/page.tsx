import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Productdetails () {
    return(
        <div>
        {/* Banner */}
        <div className="w-full relative">
          <Image
            src="/images/Shop Page Banner.png"
            alt="ShopBanner"
            width={1440}
            height={316}
            className="w-full h-[300px] sm:h-[316px] object-cover"
          />
      
          <div className="absolute inset-0 flex flex-col justify-center items-center mb-20 z-10">
            <Image
              src="/images/shop banner image top.png"
              alt="ShopBannerlogo"
              width={77}
              height={77}
            />
            <h1 className="text-2xl sm:text-4xl font-bold">Product Details</h1>
            <ul className="flex flex-row justify-center items-center text-center pt-2">
              <li className="hover:underline-offset-1 underline">
                <Link href="/">Home</Link>
              </li>
              <MdOutlineKeyboardArrowRight />
              <p>ProductDetails</p>
            </ul>
          </div>
        </div>
      
        {/* Main Content */}
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
          {/* Breadcrumb */}
          <nav className="w-full max-w-6xl p-4 text-sm text-gray-500">
            <ul className="flex space-x-2">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li> / </li>
              <li><a href="/shop" className="hover:text-blue-500">Shop</a></li>
              <li> / </li>
              <li className="text-gray-700">Asgaard Sofa</li>
            </ul>
          </nav>
      
          {/* Main Content Layout */}
          <div className="w-full max-w-6xl p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section - Product Image */}
            <div className="flex flex-col items-center">
              <div className="w-full h-[300px] sm:h-[400px] flex items-center justify-center">
                <img
                  src="/images/productdetail (1).png"
                  alt="Asgaard Sofa"
                  className="max-w-full max-h-full bg-[#FFF9E5] object-contain"
                />
              </div>
      
              {/* Thumbnails */}
              <div className="mt-4 flex space-x-2 overflow-y-auto">
                {[1, 2, 3, 4].map((_, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 border rounded-lg flex items-center justify-center bg-[#FFF9E5]"
                  >
                    <img
                      src={`/productdetail (2).png-${index}.jpg`}
                      alt={`Thumbnail ${index}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
      
            {/* Right Section - Product Info */}
            <div>
              <h1 className="text-[36px] sm:text-[30px] font-bold mb-4">Asgaard Sofa</h1>
              <p className="text-[24px] text-[#9F9F9F] font-semibold mb-4">Rs. 250,000.00</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl">★★★★★</span>
                <span className="text-gray-500 ml-2">(5 Customer Reviews)</span>
              </div>
              <p className="text-gray-600 mb-6">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>
      
              {/* Size Options */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {["XS", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="border rounded-lg px-4 py-1 hover:border-black focus:border-black"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
      
              {/* Color Options */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Color</h3>
                <div className="flex space-x-4">
                  {["#816DFA", "#816DFA", "#816DFA"].map((color) => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-full border hover:ring-2 hover:ring-offset-2"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
      
              {/* Quantity Selector & Add to Cart */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">-</button>
                  <input
                    type="number"
                    value={1}
                    readOnly
                    className="w-12 text-center border-l border-r"
                  />
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">+</button>
                </div>
                
                <a href="/cart" className="w-full lg:w-auto px-6 py-2 border border-black  rounded-lg ">
                Add To Cart</a>
              </div>
      
              {/* Product Metadata */}
              <div className="text-sm text-gray-500">
                <p className="mb-1"><strong>SKU:</strong> SS001</p>
                <p className="mb-1"><strong>Category:</strong> Sofas</p>
                <p className="mb-1"><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>
              </div>
      
              {/* Social Sharing */}
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-600 ">Share</a>
                <a href="#" className="text-gray-600">Twitter</a>
                <a href="#" className="text-gray-600 ">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )      
}