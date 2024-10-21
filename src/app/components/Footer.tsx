import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#00246B] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-[#CADCFC] transition duration-300 mb-1 inline-block px-2 py-1 rounded-md">Home</Link>
          <Link href="/about" className="hover:text-[#CADCFC]  transition duration-300 mb-1 inline-block px-2 py-1 rounded-md">About</Link>
          <Link href="/contact" className="hover:text-[#CADCFC] transition duration-300 inline-block px-2 py-1 rounded-md">Contact</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#" className="hover:text-[#CADCFC] transition duration-300">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-[#CADCFC] transition duration-300">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-[#CADCFC] transition duration-300">
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-6 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
