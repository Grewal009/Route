import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="flex h-[70px] justify-between border-b-2 pr-5 shadow-md">
      <img src={LOGO_URL} className="w-28" />
      <ul className="flex items-center justify-center gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default Header;
