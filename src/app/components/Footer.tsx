

export default function Footer () {
  return (
      <div className = "sm:pl-5 md:pl-0 sm:gap-y-5 md:gap-y-0  md:mt-10  flex sm:flex-col md:flex-row justify-evenly sm:items-start md:text-center  sm:h-full md:h-[400px] ">
          <div>
              <h1 className = "text-[20px] font-semibold">Exclusive</h1>
              <ul className = "space-y-4 mt-8 text-[16px]">
                  <li>Subscribe</li>
                  <li>Get 10% off your first order</li>
                  <li>Subscribe</li>
                 
              </ul>
          </div>
          <div>
              <h1 className = "text-[20px] font-semibold">Support</h1>
              <ul className = "space-y-4 mt-8 text-[16px]">
                  <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                  <li>exclusive@gmail.com</li>
                  <li>+88015-88888-9999</li>
              </ul>
          </div>
          <div>
              <h1 className = "text-[20px] font-semibold">My Account</h1>
              <ul className = "space-y-4 mt-8 text-[16px]">
                  <li>My Account</li>
                  <li>Login / Register</li>
                  <li>Cart</li>
                  <li>Whislist</li>
                  <li>Shop</li>
              </ul>
          </div>
          <div>
              <h1 className = "text-[20px] font-semibold">Quick Link</h1>
              <ul className = "space-y-4 mt-8 text-[16px]">
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                  <li>FAQ</li>
                  <li>Contact</li>
              </ul>
          </div>

          <div>
              <h1 className = "text-[20px] font-semibold">Download App</h1>
              <ul className = "space-y-4 mt-8 text-[16px]">
                  <li>Save $3 with App New User Only</li>
                  <li>Terms of Use</li>
                  <li>FAQ</li>
                  <li>Contact</li>
              </ul>
          </div>
          <div className = "border-b-2 border-gray-500 "></div>

          
      </div>
  )
}