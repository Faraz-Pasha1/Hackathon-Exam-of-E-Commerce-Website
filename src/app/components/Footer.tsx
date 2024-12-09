import Link from "next/link";


export default function Footer () {
  return (
      <div className = "sm:pl-5 md:pl-0 sm:gap-y-5 md:gap-y-0  md:mt-10  flex sm:flex-col md:flex-row justify-evenly sm:items-start sm:ml-10 md:text-center  sm:h-full md:h-[350px] ">
          <div className = "md:pt-20 sm:pt-2 text-[#9F9F9F]">
              <h1 className = "md:w-[285px] text-[16px] md:justify-center md:text-start ">400 University Drive Suite 200 Coral </h1>
              <h1 className = "md:w-[285px] text-[16px] md:justify-center md:text-start"> Gables,</h1>
              <h1 className = "md:w-[285px] text-[16px] md:justify-center md:text-start">FL 33134 USA</h1>
             
          </div>
          
          <div className = "">
              <h1 className = "text-[16px] font-medium  text-[#9F9F9F]">Links</h1>
              <ul className = "space-y-4 mt-8 font-medium text-[16px]">
                  <li><Link href="/"> Home</Link></li>
                  <li><Link href="/shop"> Shop</Link></li>
                  <li><Link href="/about"> About</Link></li>
                  <li><Link href="/contact"> Contact</Link></li>
                  
              </ul>
          </div>
          <div>
              <h1 className = "text-[16px] font-medium text-[#9F9F9F]">Help</h1>
              <ul className = "space-y-4 mt-8 font-medium text-[16px]">
                  <li>Payment Option</li>
                  <li>Returns</li>
                  <li>Privacy Polices</li>
                  
              </ul>
          </div>

          <div>
              <h1 className = "text-[16px] font-medium text-[#9F9F9F]">Newsletter</h1>
              <div className="mb-4">
                    
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter Your Email address"
                        className="w-[173px] space-y-4 mt-8 text-[14px] underline underline-offset-4"
                    />
                    <div className="pt-4">
                      <button className=" text-[14px] underline underline-offset-8">
                        Subscribe
                      </button>
                    </div>
                    
              </div>


          </div>
          

          
      </div>
  )
}