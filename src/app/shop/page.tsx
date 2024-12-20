import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";



import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"


export default function Shop () {
    return(
        <div>
            <div>
            <div className="w-full md:h-[316px] relative">
                <Image
                    src="/images/Shop Page Banner.png"
                    alt="ShopBanner"
                    width={1440}
                    height={316}
                    className="w-full sm:w-auto sm:h-[200px] md:h-[316px] "
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center md:mb-20 md:z-10">
                    <Image
                        src="/images/shop banner image top.png"
                        alt="ShopBannerlogo"
                        width={77}
                        height={77}
                    />

                    <h1 className="tsm:text-xl md:text-4xl font-bold">Shop</h1>
                    <ul className="flex flex-row justify-center items-center text-center pt-2">
                        <li className="hover:underline-offset-1 underline">
                            <Link href="/">Home</Link>
                        </li>
                        <MdOutlineKeyboardArrowRight />
                        <p>Shop</p>
                    </ul>
                </div>
            </div>
        </div>

            <div className = "flex justify-between sm:justify-center sm:items-center md:flex-row sm:flex-col sm:leading-tight">
                <div className = "w-full md:h-[100px] bg-[#FAF4F4] sm:justify-center sm:leading-tight sm:items-center flex md:flex-row sm:flex-col gap-8 items-center">
                    <div className = "flex sm:flex-row sm:items-center sm:leading-tight sm:gap-5">
                    <div className = "flex md:flex-row  sm:flex-row items-center gap-2 md:ml-28">
                    <TbAdjustmentsHorizontal className  = "sm:text-[14px] md:text-[20px] cursor-pointer" /> <p className  = "sm:text-[12px] md:text-[20px] cursor-pointer">Filter</p></div>
                    <BsFillGridFill className  = "sm:text-[12px] md:text-[20px] cursor-pointer" />
                    <BsViewList className  = "sm:text-[14px] md:text-[20px] cursor-pointer"/>
                    <RxDividerVertical className = "text-[#9F9F9F] sm:text-[20px] md:text-[40px] cursor-pointer"/></div>
                    <p className = "sm:text-[14px] md:text[16px] ">Showing 1 to 16 of 32 results</p>

                    <div className = "flex md:flex-row items-center sm:leading-tight gap-5 md:ml-48 sm:pl-2">
                        <label htmlFor="result" className="block text-sm sm:text-[14px] text-[20px] ">Show</label>
                        <input
                            type="number"
                            id="result"
                            placeholder=""
                            defaultValue={1}
                            className="sm:w-[40px] md:w-[55px] sm:h-[25px] md:h-[55px] px-4 py-2 bg-white"
                        />
                        <label htmlFor="result" className="block text-sm sm:text-[14px] text-[20px] ">Sort By</label>
                        <input
                            type="text"
                            id="result"
                            placeholder="Default"
                            className="sm:w-[140px] md:w-[188px] sm:h-[25px] md:h-[55px]  px-4 py-2 bg-white"
                        />


                    </div>
                </div>                
            </div>



            <div className="w-[95%] grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-4 sm:items-center text-center sm:justify-center md:gap-6 md:pl-10">
                {/* Card 1 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/toppick (2).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10 text-center">
                                <span className="text-[16px] font-medium ]">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 2 */}
                        <div>
                            <div className=" h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop first 3 (2).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 3 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop first 3 (3).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 4 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop first 3 (1).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                        <div>
                            <div className=" h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop second (3).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 2 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop second (4).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 3 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop second (2).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 4 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop second (1).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop third (2).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 2 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop third (3).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 3 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop third (4).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 4 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop third (1).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop fourth (1).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 2 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop fourth (4).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium ">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 3 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop fourth (2).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>

                    {/* Card 4 */}
                        <div>
                            <div className="h-[280px] flex justify-center items-center">
                            <Image
                                src="/images/shop fourth (3).png"
                                alt="Toppicimage1"
                                width={285}
                                height={180}
                            />
                            </div>
                            <div className="flex flex-col pt-10">
                                <span className="text-[16px] font-medium">
                                    Trenton modular sofa_3
                                </span>
                                <span className="text-[24px] pt-2">Rs. 25,000.00</span>
                            </div>
                        </div>               

                    
            </div>

            <div className = "pt-16">
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