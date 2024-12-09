import Image from "next/image";
import Link from "next/link";

import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";


export default function Ourblogs () {
    return (
       
        <div className="w-full sm:h-auto md:h-[944px] md:py-28 flex flex-col items-center">
  <div className="w-full h-full">
    
    <div className="flex flex-col items-center space-y-4 text-center">
      <h1 className="text-[28px] sm:text-[36px] font-bold">Our Blogs</h1>
      <p className="text-[14px] sm:text-[16px] text-[#9F9F9F]">
        Find a bright idea to suit your taste with our great selection
      </p>
    </div>

    {/* CONTAINER BOXES */}
    <div className="w-full flex flex-col md:flex-row justify-center gap-5 items-center mt-7">
      {/* Blog Card 1 */}
      <div className="w-full sm:w-[393px] h-auto p-4 flex flex-col items-center">
        <Image
          src="/images/blogs (1).png"
          alt="Blog1"
          width={393}
          height={393}
          className="w-full object-cover"
        />
        <div className="flex flex-col justify-center text-center items-center pt-5">
          <h1 className="text-[16px] font-medium">Going all-in with millennial design</h1>
          <a href="/blog" className="mt-2 text-[14px] sm:text-[20px] font-medium underline underline-offset-8">
                Read More</a>
          <div className="flex flex-wrap justify-center gap-2 pt-5 text-[14px] sm:text-[16px] items-center">
            <IoMdTime />
            <p>5 min</p>
            <MdOutlineDateRange />
            <p>12<sup>th</sup> Oct 2022</p>
          </div>
        </div>
      </div>

      {/* Blog Card 2 */}
      <div className="w-full sm:w-[393px] h-auto p-4 flex flex-col items-center">
        <Image
          src="/images/blogs (2).png"
          alt="Blog2"
          width={393}
          height={393}
          className="w-full object-cover"
        />
        <div className="flex flex-col justify-center text-center items-center pt-5">
          <h1 className="text-[16px] font-medium">Going all-in with millennial design</h1>
          <a href="/blog" className="mt-2 text-[14px] sm:text-[20px] font-medium underline underline-offset-8">
                Read More</a>
          <div className="flex flex-wrap justify-center gap-2 pt-5 text-[14px] sm:text-[16px] items-center">
            <IoMdTime />
            <p>5 min</p>
            <MdOutlineDateRange />
            <p>12<sup>th</sup> Oct 2022</p>
          </div>
        </div>
      </div>

      {/* Blog Card 3 */}
      <div className="w-full sm:w-[393px] h-auto p-4 flex flex-col items-center">
        <Image
          src="/images/blogs (3).png"
          alt="Blog3"
          width={393}
          height={393}
          className="w-full object-cover"
        />
        <div className="flex flex-col justify-center text-center items-center pt-5">
          <h1 className="text-[16px] font-medium">Going all-in with millennial design</h1>
          <a href="/blog" className="mt-2 text-[14px] sm:text-[20px] font-medium underline underline-offset-8">
                Read More</a>

          <div className="flex flex-wrap justify-center gap-2 pt-5 text-[14px] sm:text-[16px] items-center">
            <IoMdTime />
            <p>5 min</p>
            <MdOutlineDateRange />
            <p>12<sup>th</sup> Oct 2022</p>
          </div>
        </div>
      </div>
    </div>

   
    <div className="pt-10 flex justify-center items-center">
    <a href="/blog" className="mt-2 text-[14px] sm:text-[20px] font-medium underline underline-offset-8">
    View All Blogs</a>
    </div>
  </div>
</div>

            
            
        
    )
}