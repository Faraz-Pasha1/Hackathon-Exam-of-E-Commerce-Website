import Image from "next/image";


export default function Toppicks () {
    return (
       
        <div className = "w-full sm:h-full md:h-[777px] md:py-28 flex justify-center sm:items-center md:items-center">
            <div className = "md:w-[90%] h-full" >
                {/* TOP PICKS FOR YOU  */}

                    <div className = "flex flex-col items-center space-y-4">
                        <h1 className = "text-[36px] font-bold  ">Top Picks For You</h1>
                        <p className="text-[16px] text-[#9F9F9F]">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>    
                    </div> 
                
                {/* CONTAINER BOXES */}

                <div className = " flex sm:flex-col md:flex-row justify-between sm:items-center mt-7 sm:gap-y-5 ">
                    <div>
                        <div className = "w-[270px] h-[250px] flex justify-center items-center">
                            <Image src={"/images/toppick (2).png"}  alt = "Toppicimage1" width={285} height={180}></Image>
                        </div>
                        <div className = "flex flex-col pt-10">
                            <span className = "text-[16px] font-medium w-[194px]">Trenton modular sofa_3</span>
                            <span className = "text-[24px] pt-2">Rs. 25,000.00</span>
                        </div>
                    </div>


                    <div>
                        <div className = "w-[270px] h-[250px]  flex justify-center items-center">
                            <Image src={"/images/toppick (3).png"}  alt = "FlashSaleImage" width={285} height={180}></Image>
                        </div>
                        <div className = "flex flex-col pt-10">
                            <span className = "text-[16px] font-medium w-[194px]">Granite dining table with dining chair</span>
                            <span className = "text-[24px] pt-2">Rs. 25,000.00</span>
                        </div>
                    </div>


                    <div>
                        <div className = "w-[270px] h-[250px]  flex justify-center items-center">
                            <Image src={"/images/toppick (4).png"} alt = "FlashSaleImage" width={285} height={180}></Image>
                        </div>
                        <div className = "flex flex-col pt-10">
                            <span className = "text-[16px] font-medium w-[194px]">Outdoor bar table and stool</span>
                            <span className = "text-[24px] pt-2">Rs. 25,000.00</span>
                        </div>
                    </div>
                    

                    <div>
                        <div className = "w-[270px] h-[250px]  flex justify-center items-center">
                            <Image src={"/images/toppick (1).png"} alt = "FlashSaleImage" width={285} height={140}></Image>
                        </div>
                        <div className = "flex flex-col pt-10">
                            <span className = "text-[16px] font-medium w-[194px]">Plain console with teak mirror</span>
                            <span className = "text-[24px] pt-2">Rs. 25,000.00</span>
                        </div>
                    </div>                
                </div>

                <div className = "pt-16 flex justify-center items-center">
                <a href="/shop" className="md:text-[20px] font-medium underline underline-offset-[24px]">
                View More</a>
                        
                </div>

            </div>
                
            
        </div>
            
            
        
    )
}