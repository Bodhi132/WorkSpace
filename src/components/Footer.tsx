import {
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import logo from '../assets/logoFooter.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full px-6 md:px-24 py-10 text-sm mt-10">
      {/* Container to align everything */}
      <div className=" mx-auto w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-8 w-full">
          {/* Left */}
          <div className=" min-w-[200px]">
            <div className="flex items-center gap-2 mb-2 h-6">
              <img src={logo} alt="Desklinq Logo" className="h-full object-contain" />
              <p className="text-2xl font-bold leading-none">Desklinq</p>
            </div>
            <p className="text-gray-300 mb-1 mt-3">Address</p>
            <p className="mb-4 text-gray-400">(248) 823-3200</p>
            <div className="flex gap-8 text-xl text-gray-400 mt-10">
              <FaYoutube className="hover:text-white cursor-pointer" />
              <FaTiktok className="hover:text-white cursor-pointer" />
              <FaLinkedin className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaFacebookF className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Right Grid */}
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-6">
            <ul className="space-y-2 text-gray-400">
              <li className="text-white">Company</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Pricing</li>
            </ul>
            <ul className="space-y-2 text-gray-400">
              <li className="text-white">Resource</li>
              <li>Blog</li>
              <li>Customer Stories</li>
              <li>Information</li>
              <li>Legal</li>
              <li>Payments</li>
            </ul>
            <ul className="space-y-2 text-gray-400">
              <li className="text-white">Career</li>
              <li>Jobs</li>
              <li>Hiring</li>
              <li>News</li>
              <li>Tips & Tricks</li>
            </ul>
            <ul className="space-y-2 text-gray-400">
              <li className="text-white">Help</li>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Horizontal line only under the 4 columns */}
        <div className="border-t border-gray-700 my-6 w-full" />

        {/* Bottom Section aligned to same container */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-500 text-xs">
          <p>© Copyright 2024, Desklinq All Rights Reserved</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Term of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
