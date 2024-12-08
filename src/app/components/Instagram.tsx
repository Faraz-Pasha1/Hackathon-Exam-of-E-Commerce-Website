import Image from "next/image";
import Link from "next/link";


export default function Instagram () {
    return (
        <div className="relative w-full h-auto flex justify-center items-center">
  {/* Background Image */}
  <Image
    src="/images/instagram.png"
    alt="Instagram"
    width={1440}
    height={450}
    className="w-full h-[200px] sm:h-[300px] md:h-[450px] object-cover"
  />

  {/* Text Overlay */}
  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
    {/* Responsive Heading */}
    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
      Our Instagram
    </h1>
    <p className="text-xs sm:text-sm md:text-lg mt-2">
      Follow our store on Instagram
    </p>

    {/* Responsive Button */}
    <div className="pt-4">
      <Link href="/">
        <button className="rounded-3xl w-[140px] sm:w-[171px] h-[44px] sm:h-[56px] bg-[#FAF4F4] text-black shadow-lg hover:bg-[#e0dbdb] flex items-center justify-center text-xs sm:text-sm md:text-base">
          Follow Us
        </button>
      </Link>
    </div>
  </div>
</div>




    )
}