import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"





export default function Blogs () {
    return(
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

                    <h1 className="text-2xl md:text-4xl font-bold">Blog</h1>
                    <ul className="flex flex-row justify-center items-center text-center pt-2">
                        <li className="hover:underline-offset-1 underline">
                            <Link href="/">Home</Link>
                        </li>
                        <MdOutlineKeyboardArrowRight />
                        <p>Blog</p>
                    </ul>
                </div>
            </div>



            <div className = "">

                {/* Left Side Work for Blog */}

                <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                            {/* MAIN BLOG CONTENT */}
                            <div className="lg:w-2/3 flex flex-col gap-12">
                                {[
                                {
                                    image: "/images/Blog Details (1).png",
                                    title: "Going all-in with millennial design",
                                    description:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et convallis feugiat, nisi erat porta arcu, non consequat eros elit non sapien.",
                                    admin: "Admin",
                                    date: "14 Oct 2022",
                                    tag: "Wood",
                                },
                                {
                                    image: "/images/Blog Details (2).png",
                                    title: "Explore new ways of decorating",
                                    description:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et convallis feugiat, nisi erat porta arcu, non consequat eros elit non sapien.",
                                    admin: "Admin",
                                    date: "14 Oct 2022",
                                    tag: "Wood",
                                },
                                {
                                    image: "/images/Blog Details (3).png",
                                    title: "Homemade pieces thats time to make",
                                    description:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et convallis feugiat, nisi erat porta arcu, non consequat eros elit non sapien..",
                                    admin: "Admin",
                                    date: "14 Oct 2022",
                                    tag: "Wood",
                                },
                                ].map((blog, index) => (
                                <div key={index} className="flex flex-col gap-6">
                                    {/* Blog Image */}
                                    <Image
                                    src={blog.image}
                                    alt={`Blog ${index + 1}`}
                                    width={820}
                                    height={500}
                                    className="w-full h-auto object-cover rounded-md"
                                    />

                                    {/* Blog Metadata */}
                                    <div className="flex flex-wrap items-center justify-start gap-4 text-gray-600 text-sm">
                                    <div className="flex items-center gap-2">
                                        <FaUserAlt className="text-gray-600" />
                                        <p>{blog.admin}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdDateRange className="text-gray-600" />
                                        <p>{blog.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaTag className="text-gray-600" />
                                        <p>{blog.tag}</p>
                                    </div>
                                    </div>

                                    {/* Blog Title and Description */}
                                    <h1 className="text-lg md:text-2xl font-semibold leading-snug">
                                    {blog.title}
                                    </h1>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    {blog.description}
                                    </p>

                                   
                                    <div>
                                    <button className="px-4 py-2 text-black underline underline-offset-8">
                                        Read More
                                    </button>
                                    </div>
                                </div>
                                ))}
                            </div>

                            {/* SIDE BAR FOR SEARCH , CATERGARIES AND MOST RECENT ITEMS*/}
                            <div className="lg:w-1/3 flex flex-col gap-8">
                               
                                <div className="flex flex-col">
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Search..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                </div>

                                {/* Categories */}
                                <div className="flex flex-col">
                                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                                <ul className="space-y-2">
                                    {["Crafts", "Design", "Handmade", "Interrior", "Woods"].map(
                                    (category, index) => (
                                        <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:underline hover:text-black transition"
                                        >
                                            {category}
                                        </a>
                                        </li>
                                    )
                                    )}
                                </ul>
                                </div>

                                {/* Most Recent Blogs */}
                                <div className="flex flex-col">
                                <h2 className="text-lg font-semibold mb-4">Most Recent</h2>
                                <ul className="space-y-4">
                                    {[
                                    "Going all with in minimal design",
                                    "Exploring with New Ways of Decorating",
                                    "Homemade pieces that time to make",
                                    "Modern home in milan",
                                    "Colorfull office like good",
                                    ].map((blog, index) => (
                                    <li key={index} className="flex gap-4">
                                        <Image
                                        src={`/images/recent-${index + 1}.png`}
                                        alt={blog}
                                        width={60}
                                        height={60}
                                        className="rounded-md object-cover"
                                        />
                                        <div>
                                        <p className="text-sm font-medium text-gray-800">{blog}</p>
                                        <p className="text-xs text-gray-500">12 Dec 2022</p>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                            </div>         


            </div>

            <div className = " " >
                    <Pagination>
                        <PaginationContent className = " flex sm:space-x-2 md:space-x-4">
                           
                            <PaginationItem>
                            <PaginationLink href="#" className="bg-[#FBEBB5] text-black px-4 py-2 rounded-lg" isActive>
                                1
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#" className="bg-[#FFF9E5] text-black px-4 py-2 rounded-lg" >2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#" className="bg-[#FFF9E5] text-black px-4 py-2 rounded-lg">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationNext href="#" className="bg-[#FFF9E5] text-black px-4 py-2 rounded-lg"/>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

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