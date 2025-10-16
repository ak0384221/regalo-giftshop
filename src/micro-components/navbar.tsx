import Logo from "@/atomic-components/logo";
import { FaUserAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdArrowDropDown, MdOutlineMenu } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <nav className="bg-transparent absolute top-5 text-[#484385] font-bold w-full flex justify-between  px-7 h-[10dvh]">
        <Logo />
        <div className="mobile  nav 3dot lg:hidden ">
          <MdOutlineMenu className="text-4xl" />
        </div>
        <div className="pc nav hidden lg:block ">
          <ul className="flex justify-center gap-3">
            <li>Home</li>
            <li className=" relative group">
              shop by category{" "}
              <span>
                <MdArrowDropDown className="inline text-xl" />
              </span>
              <div className="absolute w-[20dvw] z-100 left-0 top-5 hidden  group-hover:block  ">
                <ul className="bg-white w-full my-5 capitalize border-t-4 border-[#484385]">
                  <li className="py-3  px-3 hover:bg-neutral-200 transition-colors">
                    Accesories
                  </li>
                  <li className="py-3  px-3 hover:bg-neutral-200 transition-colors">
                    cards
                  </li>
                  <li className="py-3  px-3 hover:bg-neutral-200 transition-colors">
                    clothing
                  </li>
                  <li className="py-3  px-3 hover:bg-neutral-200 transition-colors">
                    handbags
                  </li>
                  <li className="py-3  px-3 hover:bg-neutral-200 transition-colors">
                    office and sanctionary
                  </li>
                  <li className="py-3  px-3 hover:bg-neutral-200 transition-colors">
                    wallets
                  </li>
                  <li className="py-3  px-3 hover:bg-neutral-200 transition-colors">
                    kids
                  </li>
                </ul>
              </div>
            </li>
            <li>special offer</li>
            <li>about us</li>
            <li>contact us</li>
          </ul>
        </div>
        <div className="cart  justify-center gap-4 hidden lg:flex ">
          <IoIosSearch className="text-xl" />
          <FiShoppingCart className="text-xl" />
          <FaUserAlt className="text-xl" />
        </div>
      </nav>
    </>
  );
}
