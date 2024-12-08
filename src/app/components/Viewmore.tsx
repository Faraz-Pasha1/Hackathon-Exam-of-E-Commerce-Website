

import Image from "next/image";


export default function Viewmore () {
    return (
       
        <div className="w-full sm:h-auto md:h-[672px] bg-[#FAF4F4] flex justify-center items-center py-8">
  {/* CONTAINER BOXES */}
  <div className="w-full flex sm:flex-col md:flex-row justify-between items-center gap-6 sm:gap-y-6">
    
    {/* First Item */}
    <div className="w-full sm:w-[90%] md:w-[45%] flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center">
        <Image
          src="/images/Granite square side table 1.png"
          alt="ViewMoreImage1"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <div className="flex flex-col items-center ">
          <h1 className="text-[24px] sm:text-[28px] md:text-[34px] text-center">Side Table</h1>
          <div className="pt-2">
            <button className="text-[20px] sm:text-[22px] md:text-[24px] underline underline-offset-8">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Second Item */}
    <div className="w-full sm:w-[90%] md:w-[45%] flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center">
        <Image
          src="/images/Cloud sofa three seater + ottoman_3 1.png"
          alt="ViewMoreImage2"
          width={550}
          height={550}
          className="w-full h-auto object-cover"
        />
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-[24px] sm:text-[28px] md:text-[34px] text-center">Cloud Sofa</h1>
          <div className="pt-2">
            <button className="text-[20px] sm:text-[22px] md:text-[24px] underline underline-offset-8">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

            
            
        
    )
}