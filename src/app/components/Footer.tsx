import Link from "next/link"


export default function Footer () {
    return (
        <footer className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex justify-between gap-10">
        {/* Left Section - Address */}
        <div className="flex flex-col text-gray-500">
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-700">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/home" className="text-gray-500 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-500 hover:text-black">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-500 hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-500 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-700">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/payment-options" className="text-gray-500 hover:text-black">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="/returns" className="text-gray-500 hover:text-black">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/privacy-policies" className="text-gray-500 hover:text-black">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-700">Newsletter</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 border border-gray-300 rounded-md text-gray-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-500">
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
    )
}