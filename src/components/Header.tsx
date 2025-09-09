import { NavLink } from "react-router-dom";
import { ROUTES } from "../utils/consts";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-around">
      <h1>Mabon</h1>
        <NavLink to={ROUTES.START_PAGE}>Mabon</NavLink>
        <NavLink to={ROUTES.ARTIST}>Художник</NavLink> 
        <NavLink to={ROUTES.BASKET}>Корзина</NavLink>
      </div>
    </header>
  );
};
