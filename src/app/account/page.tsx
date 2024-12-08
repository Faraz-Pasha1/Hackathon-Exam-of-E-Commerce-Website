import { Link } from "lucide-react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Account () {
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

                    <h1 className="text-2xl md:text-4xl font-bold">Account</h1>
                    <ul className="flex flex-row justify-center items-center text-center pt-2">
                        <li className="hover:underline-offset-1 underline">
                            <Link href="/">Home</Link>
                        </li>
                        <MdOutlineKeyboardArrowRight />
                        <p>Account</p>
                    </ul>
                </div>
            </div>
    
            <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      {/* Login/Register Form */}
      <div className="w-full max-w-4xl p-4 sm:p-8 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Login Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center md:text-left">Log In</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username or email address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
                  placeholder=""
                />
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-700">Remember me</label>
              </div>
              <button
                type="submit"
                className="w-[215px]  py-2 px-4 border border-black text-black rounded-lg hover:bg-black hover:text-white transition duration-300"
              >
                Log In
              </button>
              <div className="text-sm text-black mt-2 text-center md:text-left">
                <a href="#">Lost Your Password?</a>
              </div>
            </form>
          </div>

          {/* Register Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center md:text-left">Register</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
                  placeholder=""
                />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                <a href="#" className="font-bold">privacy policy</a>.
              </p>
              <button
                type="submit"
                className="w-[215px] py-2 px-4 border border-black text-black rounded-lg hover:bg-black hover:text-white transition duration-300"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-[#FAF4F4] flex flex-col sm:flex-row justify-evenly items-center mt-10 p-6 gap-y-6 sm:gap-y-0">
        {/* Box 1 */}
        <div className="w-[280px] text-center sm:text-left">
          <h1 className="font-medium text-lg sm:text-xl md:text-2xl">Free Delivery</h1>
          <p className="text-sm text-gray-500">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        {/* Box 2 */}
        <div className="w-[280px] text-center sm:text-left">
          <h1 className="font-medium text-lg sm:text-xl md:text-2xl">90 Days Return</h1>
          <p className="text-sm text-gray-500">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        {/* Box 3 */}
        <div className="w-[280px] text-center sm:text-left">
          <h1 className="font-medium text-lg sm:text-xl md:text-2xl">Secure Payment</h1>
          <p className="text-sm text-gray-500">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
    
    </div>
  );
};


