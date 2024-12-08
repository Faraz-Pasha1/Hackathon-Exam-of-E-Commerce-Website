import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Checkout () {
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

                    <h1 className="text-2xl md:text-4xl font-bold">Checkout</h1>
                    <ul className="flex flex-row justify-center items-center text-center pt-2">
                        <li className="hover:underline-offset-1 underline">
                            <Link href="/">Home</Link>
                        </li>
                        <MdOutlineKeyboardArrowRight />
                        <p>Checkout</p>
                    </ul>
                </div>
            </div> 

            <div className="min-h-screen  py-10 px-4 md:px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Billing Details */}
                    <div className=" p-4 md:p-8 ">
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">Billing details</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="w-[211px] h-[75px] block text-sm font-medium text-black">
                            First Name
                            </label>
                            <input
                            type="text"
                            className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:ring-black"
                            placeholder=""
                            />
                        </div>
                        <div>
                            <label className=" w-[211px] h-[75px] block text-sm font-medium text-black">
                            Last Name
                            </label>
                            <input
                            type="text"
                            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-black"
                            placeholder=""
                            />
                        </div>
                        </div>
                        <div>
                        <label className="w-[211px] h-[75px] block text-sm font-medium text-black">
                            Company Name (Optional)
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-black"
                            placeholder=""
                        />
                        </div>
                        <div>
                        <label className=" w-[211px] h-[75px] block text-sm font-medium text-black">
                            Country / Region
                        </label>
                        <select
                            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-black"
                            defaultValue="Sri Lanka"
                        >
                            <option>Sri Lanka</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>USA</option>
                        </select>
                        </div>
                        <div>
                        <label className="w-[211px] h-[75px] block text-sm font-medium text-black">
                            Street Address
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-black"
                            placeholder=""
                        />
                        </div>
                        <div>
                        <label className="w-[211px] h-[75px] block text-sm font-medium text-black">
                            Town/City
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-black"
                            placeholder=""
                        />
                        </div>
                        <div>
                        <label className="w-[211px] h-[75px] block text-sm font-medium text-black">
                            Province
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-black"
                            placeholder=""
                        />
                        </div>
                        <div>
                        <label className="w-[211px] h-[75px] block text-sm font-medium text-black">
                            Cell Number
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-black"
                            placeholder=""
                        />
                        </div>
                        
                    </form>
                    </div>

                    {/* Order Summary */}
                    <div className=" p-6 md:p-8 ">
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">Product</h2>
                    <div className="border-b pb-4">
                        <div className="flex justify-between text-black">
                        <p className = "text-[#9F9F9F]">Asgaard sofa <span className = "text-black">x 1</span></p>
                        <span>Rs. 250,000.00</span>
                        </div>
                    </div>
                    <div className="mt-4 border-b pb-4">
                        <div className="flex justify-between text-black">
                        <span>Subtotal</span>
                        <span>Rs. 250,000.00</span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold text-black mt-2">
                        <span>Total</span>
                        <span>Rs. 250,000.00</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                        <div className="space-y-2">
                        <div>
                            <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="payment"
                                className="h-4 w-4 fill-black text-black"
                                defaultChecked
                            />
                            <span>Direct Bank Transfer</span>
                            </label>
                            <p className="text-sm text-black ml-6">
                            Make your payment directly into our bank account. Please use
                            your Order ID as the payment reference. Your order will not be
                            shipped until the funds have cleared in our account.
                            </p>
                        </div>
                        <div>
                            <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="payment"
                                className="h-4 w-4 text-black"
                            />
                            <span>Cash On Delivery</span>
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="mt-6 text-sm text-[#9F9F9F]">
                        Your personal data will be used to support your experience
                        throughout this website, to manage access to your account, and for
                        other purposes described in our{" "}
                        <a href="#" className="text-black underline">
                        privacy policy
                        </a>
                        .
                    </div>
                    <button
                        type="button"
                        className="mt-6 w-[318px] items-center text-black border border-black py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition"
                    >
                        Place order
                    </button>
                    </div>
                </div>
                </div>

                <div className = "w-[full] sm:h-full md:h-[300px] mt-10  bg-[#FAF4F4] flex flex-col sm:justify-center sm:items-center md:flex-row md:justify-evenly md:items-center">
                {/* BOX 1 */}
                    <div className = "w-[300px] h-[100px] mt-6 sm:mt-4 md:mt-0 text-center md:text-start">
                        <h1 className = "font-medium sm:text-[24px] md:text-[32px] md:text-start sm:text-center">Free Delivery</h1>
                        <p className = "text-sm text-[20px] text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
                    </div>          

                {/* BOX 2 */}
                    <div className = "gap-y-3 w-[300px] h-[100px] mt-6 sm:mt-4 md:mt-0 text-center md:text-start">
                        <h1 className = "font-medium text-[24px] md:text-[32px]">90 Days Return</h1>
                        <p className = "text-sm text-[20px] text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
                    </div>


                {/* BOX 3 */}
                    <div className = "gap-y-3  w-[300px] h-[100px] mt-6 sm:mt-4 md:mt-0 text-center md:text-start">
                        <h1 className = "font-medium text-[24px] md:text-[32px]">Secure Payment</h1>
                        <p className = "text-sm text-[20px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
                    </div>

            </div>
        </div>
    )
}