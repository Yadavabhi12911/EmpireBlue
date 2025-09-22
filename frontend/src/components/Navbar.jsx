import React from "react";
import { Link } from "react-router-dom";
import { useAuth} from '../context/AuthProvider'

const Navbar = () => {

 const { isAuthenticated } = useAuth();

  return (
    <div className="bg-white h-[4rem] sm:h-[4.6rem] sticky top-0 z-50 shadow-sm flex justify-between sm:justify-around items-center px-4 sm:px-0 ">
      <div className="logo h-full flex items-center">
        <img className="h-[36px] sm:h-[42px] w-auto" src="/logo1.webp" alt="logoEmpireBlue" />
      </div>
      <div className="flex flex-row justify-center items-center gap-6 sm:gap-10 h-full">
        <div className="relative group">
          <Link className="text-gray-600 font-[font1] hover:text-[#4284FF] transition-colors text-base sm:text-lg font-semibold" to="/">
            Home
          </Link>
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#4284FF] rounded transition-all duration-300 group-hover:w-full"></span>
        </div>
        <div className="relative group">
          <Link className="text-gray-600 font-[font1] hover:text-[#4284FF] transition-colors text-base sm:text-lg font-semibold" to="/blogs">
            Blog
          </Link>
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#4284FF] rounded transition-all duration-300 group-hover:w-full"></span>
        </div>

       {!isAuthenticated ? (
  <div className="relative group">
    <Link
      className="text-gray-600 font-[font1] hover:text-[#4284FF] transition-colors text-base sm:text-lg font-semibold"
      to="/login"
    >
      Sign In
    </Link>
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#4284FF] rounded transition-all duration-300 group-hover:w-full"></span>
  </div>
) : null}


      </div>
    </div>
  );
};

export default Navbar;
