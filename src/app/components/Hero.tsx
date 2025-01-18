
import Image from "next/image"



export default function Hero () {
    return (
        <div>
  <div className="bg-[#FBEBB5]  h-auto md:h-[900px] flex flex-col md:flex-row justify-between sm:pt-4">
    {/* Left Side */}
    <div className="flex flex-col justify-center items-center h-auto md:h-screen px-4 md:px-0">
      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-60 md:ml-20">
        <span className="text-[32px] md:text-[64px] font-medium leading-tight">
          Rocket Single Seater
        </span>
      </div>
      <div className="pt-4">
      <a href="/shop" className="mt-4 text-[18px] md:text-[24px] underline underline-offset-8">
      Shop Now</a>
        
      </div>
    </div>

    {/* Right Side */}
    <div className="flex justify-center mt-8 md:mt-0">
      <Image
        src="/images/Rocket single seater 1.png"        
        alt="Seater Image"
        width={1200}
        height={900}
        className="object-contain sm:w-[400px] sm:h-[400px] md:w-full md:h-full"
      />
    </div>
  </div>
</div>

        
    )
}