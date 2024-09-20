import { FaYoutube } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { products_categories } from "../Data/product";

const Navbar = () => {
  return (
    <div className="w-full h-20 border shadow-lg flex justify-between px-8 items-center">
      <div className="flex  flex-col items-center">
        <FaYoutube className="text-5xl text-red-500" />
        <span>XtraCodes</span>
      </div>
      <ul className="flex gap-4 items-center">
        {products_categories.map((category) => {
          return (
            <li className="capitalize" key={category.value}>
              <NavLink to={`/${category.value}`}>{category.value}</NavLink>
            </li>
          );
        })}
      </ul>
      <div>
        <FaShoppingCart className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
