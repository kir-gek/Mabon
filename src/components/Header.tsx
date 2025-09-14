import { NavLink } from "react-router-dom";
import { ROUTES } from "../utils/consts";
import { FaHome, FaUser, FaShoppingBasket } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to={ROUTES.START_PAGE} className="flex items-center text-2xl font-bold text-gray-800 hover:text-blue-600">
          <FaHome className="mr-2" />
          Mabon
        </NavLink>
        <nav className="space-x-6">
          <NavLink
            to={ROUTES.START_PAGE}
            className={({ isActive }) =>
              `flex items-center text-gray-600 hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""}`
            }
          >
            <FaUser className="mr-1" />
            Художники
          </NavLink>
          <NavLink
            to={ROUTES.BASKET}
            className={({ isActive }) =>
              `flex items-center text-gray-600 hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""}`
            }
          >
            <FaShoppingBasket className="mr-1" />
            Корзина
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
