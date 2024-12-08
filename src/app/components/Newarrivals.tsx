


import Image from "next/image"



export default function Newarrivals () {
    return (
        <div>
  <div className="bg-[#FFF9E5] w-full h-auto md:h-[639px] flex flex-col-reverse md:flex-row justify-between items-center sm:pt-4">
    {/* Left Side */}
    <div className="flex justify-center mt-8 md:mt-0">
      <Image
        src="/images/newarrival.png"
        alt="New Arrival Image"
        width={400}
        height={400}
        className="object-contain"
      />
    </div>

    {/* Right Side */}
    <div className="flex flex-col justify-center items-center text-center px-4 md:mr-20">
      <div className="md:w-[331px] md:h-[108px] flex flex-col items-center text-center mt-6 md:mt-60">
        <h1 className="font-medium text-[20px] sm:text-[24px]">New Arrivals</h1>
        <h1 className="text-[32px] sm:text-[48px] font-bold">Asgaard Sofa</h1>
      </div>

      <div className="pt-8">
        <button className="text-[16px] sm:text-[20px] w-[200px] sm:w-[254px] h-[48px] sm:h-[64px] border-black border hover:bg-black hover:text-white transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  </div>
</div>


     
        
    )
}