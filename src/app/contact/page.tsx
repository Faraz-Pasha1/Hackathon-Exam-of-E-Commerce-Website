import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";




export default function Contact () {
    return (
        <div>
    {/* Shop Banner */}
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

            <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
            <ul className="flex flex-row justify-center items-center text-center pt-2 space-x-2">
                <li className="hover:underline-offset-1 underline">
                    <Link href="/">Home</Link>
                </li>
                <MdOutlineKeyboardArrowRight />
                <p>Contact</p>
            </ul>
        </div>
    </div>

    {/* Contact Info */}
    <div className="w-full flex flex-col items-center text-center pt-10 px-4">
        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold">
            Get In Touch With Us
        </h1>
        <p className="text-[#9F9F9F] text-[14px] sm:text-[16px] md:text-[18px] max-w-xl mt-4">
            For more information about our products & services, please feel free to drop us an email. Our staff is always there to help you out. Do not hesitate!
        </p>
    </div>

    {/* Contact Form and Address */}
    <div className="max-w-[1440px] h-full pt-14 flex flex-col sm:flex-col md:flex-row justify-between gap-10 items-start px-4">
        {/* Address Section */}
        <div className="flex-1">
            {/* Address */}
            <div className="flex flex-col mb-10">
                <div className="flex items-center space-x-3">
                    <FaLocationDot className="text-xl" />
                    <h1 className="text-[24px] font-medium">Address</h1>
                </div>
                <p className="mt-1 pl-8 text-start text-[16px] max-w-[220px]">
                    236 5th SE Avenue, New York NY10000, United States
                </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col pt-10">
                <div className="flex items-center space-x-3">
                    <FaPhoneAlt className="text-xl" />
                    <h1 className="text-[24px] font-medium">Phone</h1>
                </div>
                <p className="mt-1 pl-8 text-start text-[16px] max-w-[220px]">
                    Mobile: +(84) 546-6789
                </p>
                <p className="mt-1 pl-8 text-start text-[16px] max-w-[220px]">
                    Hotline: +(84) 456-6789
                </p>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col pt-10">
                <div className="flex items-center space-x-3">
                    <MdAccessTimeFilled className="text-xl" />
                    <h1 className="text-[24px] font-medium">Working Time</h1>
                </div>
                <p className="mt-1 pl-8 text-start text-[16px] max-w-[220px]">
                    Monday-Friday: 9:00 - 22:00
                </p>
                <p className="mt-1 pl-8 text-start text-[16px] max-w-[220px]">
                    Saturday-Sunday: 9:00 - 21:00
                </p>
            </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1">
            <form className="w-full max-w-md">
                {/* Your Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Abc"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email Address */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Abc@def.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Subject */}
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        placeholder="This is an Optional"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Message */}
                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                        id="message"
                        placeholder="Hi! I'd like to ask about"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-[237px] px-4 py-2 text-[16px] border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>

    {/* Free Delivery, 90 Days Return, Secure Payment */}
    <div className="w-full sm:h-full md:h-[300px] mt-10 bg-[#FAF4F4] flex flex-col sm:justify-center sm:items-center md:flex-row md:justify-evenly md:items-center px-4">
        {/* Box 1 */}
        <div className="w-[300px] h-[100px] mt-6 sm:mt-4 md:mt-0 text-center md:text-start">
            <h1 className="font-medium sm:text-[24px] md:text-[32px] md:text-start sm:text-center">Free Delivery</h1>
            <p className="text-sm text-[20px] text-[#9F9F9F]">For all orders over $50, consectetur adipim scing elit.</p>
        </div>

        {/* Box 2 */}
        <div className="gap-y-3 w-[300px] h-[100px] mt-6 sm:mt-4 md:mt-0 text-center md:text-start">
            <h1 className="font-medium text-[24px] md:text-[32px]">90 Days Return</h1>
            <p className="text-sm text-[20px] text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
        </div>

        {/* Box 3 */}
        <div className="gap-y-3 w-[300px] h-[100px] mt-6 sm:mt-4 md:mt-0 text-center md:text-start">
            <h1 className="font-medium text-[24px] md:text-[32px]">Secure Payment</h1>
            <p className="text-sm text-[20px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
        </div>
    </div>
</div>

    )
}