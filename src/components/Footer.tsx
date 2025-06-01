import { FaYoutube, FaTiktok, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 mt-[2rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Desklinq</h1>
          <p className="text-sm text-gray-400">Address</p>
          <p className="text-sm text-gray-400">(248) 823-3200</p>
          <div className="flex gap-4 pt-2">
            <FaYoutube className="text-xl hover:text-red-600 transition" />
            <FaTiktok className="text-xl hover:text-white transition" />
            <FaLinkedinIn className="text-xl hover:text-blue-500 transition" />
            <FaInstagram className="text-xl hover:text-pink-500 transition" />
            <FaFacebookF className="text-xl hover:text-blue-700 transition" />
          </div>
        </div>

        {/* Columns */}
        <div className="space-y-2 text-sm">
          <p className="font-medium">Company</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Pricing</p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium">Resource</p>
          <p>Blog</p>
          <p>Customer Stories</p>
          <p>Information</p>
          <p>Legal</p>
          <p>Payments</p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium">Career</p>
          <p>Jobs</p>
          <p>Hiring</p>
          <p>News</p>
          <p>Tips & Tricks</p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium">Help</p>
          <p>FAQ</p>
          <p>Help Center</p>
          <p>Support</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
        <p>© Copyright 2024, Desklinq All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Term of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
