import { NavLink } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const bgActive =
    "underline decoration-green-500 decoration-[4px] underline-offset-4";

  const status = useOnlineStatus();
  return (
    <div className="flex h-[70px] justify-between border-b-2 pr-5 shadow-md">
      <img src={LOGO_URL} className="w-28" />
      <ul className="flex items-center justify-center gap-4">
        <ul>Online-status: {status ? "✅" : "🛑"}</ul>
        <NavLink
          to="/"
          className={({ isActive, isPending }) => (isActive ? bgActive : "")}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive, isPending }) => (isActive ? bgActive : "")}
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive, isPending }) => (isActive ? bgActive : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Header;
