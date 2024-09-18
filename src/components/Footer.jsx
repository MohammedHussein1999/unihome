import UniHomeLogo from './Assets/images/UniHome.png';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 p-4">
        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
          {/* Logo and Brand */}
          <div className="flex justify-between items-center mb-6">
            <Link to="home" className="flex items-center">
              <img
                src={UniHomeLogo}
                className="h-24 w-24 me-3"
                alt="Logo"
              />
              <span className="self-center text-5xl mt-3 font-semibold whitespace-nowrap dark:text-white font-[AntonSC-R]">
              <span className='text-blue-600'>Uni</span><span className='text-orange-500'>Home</span>
            </span>
            </Link>
          </div>

          {/* Links */}
          <div className="flex justify-between flex-wrap gap-6">
            {/* Resources Section */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link to="" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li className="my-4">
                  <Link to="" className="hover:underline">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Platform
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link to="#" className="hover:underline">
                    Shop
                  </Link>
                </li>
                <li className="my-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Landing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Subscribe
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link to="https://github.com" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li className="my-4">
                  <Link to="https://discord.com" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="https://discord.com" className="hover:underline">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          {/* Footer Bottom */}
          <div className="sm:flex sm:items-center sm:justify-between pe-16">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2023 <Link to="" className="hover:underline font-bold">UniHome™</Link>. All Rights Reserved.
            </span>

            {/* Social Icons */}
            <div className="flex sm:mt-0 mt-3 text-lg gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/unih0me?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-500"
              >
                <FaFacebookF size={24} />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/unih0me1?igsh=ZmI4YXplYjYwaWNt&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all duration-500"
              >
                <FaInstagram size={24} />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/201222515066"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-all duration-500"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
