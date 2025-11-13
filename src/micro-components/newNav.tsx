import Link from "next/link";
import { highlightedCategories } from "@/staticTexts/categories";
import Image from "next/image";
import MobileMenu from "./mobileMenu";
import { FiShoppingCart } from "react-icons/fi";
import { fetchCartItem } from "@/utils/cart/fetchCartItem";

export default async function Header() {
  const items = await fetchCartItem();

  return (
    <header
      className="shadow-lg tracking-wide 
    
fixed top-0 w-full h-max  z-100"
    >
      <section className="bg-[#262c35] h-[10dvh] flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/user" className="">
          <Image
            src="/ecommerce.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Search + Right Actions */}
        <div className="flex flex-wrap  items-center">
          <div className="ml-auto">
            <ul className="flex items-center">
              <li>
                {" "}
                <input
                  type="text"
                  placeholder="Search something..."
                  className="bg-white p-2 pl-4 rounded-3xl w-[40dvw] md:w-[30dvw] focus:outline-0"
                />
              </li>
              {/* Cart */}
              <li className="max-lg:py-2 px-4 cursor-pointer relative">
                <Link href="/user/cart" className="relative">
                  <FiShoppingCart className="text-xl hover:text-gray-600 text-white" />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                    {items?.length || 0}
                  </div>
                </Link>
              </li>
              <li>
                {" "}
                <MobileMenu />
              </li>

              {/* Sign In */}
              <li className="flex text-[15px] max-lg:py-2 px-4 ">
                <button className="px-5 py-3  text-sm font-medium bg-white text-black rounded-3xl cursor-pointer hover:bg-black hover:text-white">
                  Sign In
                </button>
              </li>

              {/* Mobile menu toggle */}
              <li> </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Collapsible menu */}

      <ul className="flex justify-evenly gap-2  py-2 flex-wrap bg-white">
        {highlightedCategories.map((item, index) => (
          <li key={index} className="text-black">
            <Link
              href={`/user/products/category/${item.name}`}
              className="hover:text-blue-600 text-[15px] font-normal block capitalize"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
``;
