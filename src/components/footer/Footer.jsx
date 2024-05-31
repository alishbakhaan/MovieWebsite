import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

const Footer = () => {
  return (
    <footer className="relative bg-[#020c1b] py-14 text-white footer">
            <div className='flex flex-col m-auto p-5 w-[100%] max-w-[1200px] align-middle contentWrapper'>
                <ul className="flex justify-center gap-4 md:gap-8 mb-5 md:mb-8 list-none align-middle menuItems">
                    <li className="text-xs md:text-[16px] hover:text-[#da2f68] transition-all cursor-pointer ease-in menuItem">Terms Of Use</li>
                    <li className="text-xs md:text-[16px] hover:text-[#da2f68] transition-all cursor-pointer ease-in menuItem">Privacy-Policy</li>
                    <li className="text-xs md:text-[16px] hover:text-[#da2f68] transition-all cursor-pointer ease-in menuItem">About</li>
                    <li className="text-xs md:text-[16px] hover:text-[#da2f68] transition-all cursor-pointer ease-in menuItem">Blog</li>
                    <li className="text-xs md:text-[16px] hover:text-[#da2f68] transition-all cursor-pointer ease-in menuItem">FAQ</li>
                </ul>
                <div className="opacity-50 mb-5 md:mb-8 text-center text-xs md:text-[14px] leading-5 infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="flex justify-center gap-3 align-middle socialIcons">
                    <span className="flex justify-center bg-[#04152d] hover:shadow-[#da2f68] rounded-[50%] w-[50px] h-[50px] hover:text-[#da2f68] transition-all cursor-pointer align-middle ease-in icon">
                        <FaFacebookF className='mt-5' />
                    </span>
                    <span className="flex justify-center bg-[#04152d] hover:shadow-[#da2f68] rounded-[50%] w-[50px] h-[50px] hover:text-[#da2f68] transition-all cursor-pointer align-middle ease-in icon">
                        <FaInstagram className='mt-5'/>
                    </span>
                    <span className="flex justify-center bg-[#04152d] hover:shadow-[#da2f68] rounded-[50%] w-[50px] h-[50px] hover:text-[#da2f68] transition-all cursor-pointer align-middle ease-in icon">
                        <FaTwitter className='mt-5'/>
                    </span>
                    <span className="flex justify-center bg-[#04152d] hover:shadow-[#da2f68] rounded-[50%] w-[50px] h-[50px] hover:text-[#da2f68] transition-all cursor-pointer align-middle ease-in icon">
                        <FaLinkedin className='mt-5'/>
                    </span>
                </div>
            </div>
        </footer>
  )
}

export default Footer