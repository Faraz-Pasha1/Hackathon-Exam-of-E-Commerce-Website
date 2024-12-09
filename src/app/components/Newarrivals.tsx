


import Image from "next/image"



export default function Newarrivals () {
    return (
        <div className = "mt-10">
  <div className="bg-[#FFF9E5] w-full h-auto md:h-[639px] flex flex-col-reverse md:flex-row justify-between items-center sm:pt-4">
    {/* Left Side */}
    <div className="flex justify-center mt-8 md:mt-0">
      <Image
        src="/images/newarrival.png"
        alt="New Arrival Image"
        width={400}
        height={400}
        className="object-contain sm:w-[400px] sm:h-[400px] md:w-full md:h-full"
      />
    </div>

    {/* Right Side */}
    <div className="flex flex-col justify-center items-center text-center px-4 md:mr-20">
      <div className="md:w-[331px] md:h-[108px] flex flex-col items-center text-center mt-6 md:mt-60">
        <h1 className="font-medium text-[20px] sm:text-[24px]">New Arrivals</h1>
        <h1 className="text-[32px] sm:text-[48px] font-bold">Asgaard Sofa</h1>
      </div>

    
        <div>
        <a href="/shop" className="flex items-center justify-center text-[16px] sm:text-[20px] w-[200px] sm:w-[254px] h-[48px] sm:h-[64px] border border-black hover:bg-black hover:text-white transition duration-300">
        Order Now</a></div>
      
    </div>
  </div>
</div>


     
        
    )
}