import { IMAGE_CDN } from "../utils/constants";

const MenuCard = ({ item }) => {
  const { name, id, imageId, price, description, defaultPrice } =
    item.card.info;
  return (
    <li className="m-2 border p-2 shadow-md">
      <img src={IMAGE_CDN + imageId} className="h-20 w-28" />
      <h1 className="text-lg font-bold leading-5 text-slate-700">{name}</h1>
      <h2 className="text-base font-bold leading-5 text-slate-700">
        price:{price / 100 || defaultPrice / 100}/-
      </h2>
      <h3 className="text-xs font-bold leading-3 text-slate-600">
        {description == name ? "description: not available" : description}
      </h3>
    </li>
  );
};

export default MenuCard;
