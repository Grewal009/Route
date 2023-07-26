import { useParams } from "react-router-dom";

import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);

  const menu = useRestaurantMenu(params);

  if (!menu) return;

  return (
    <ul>
      {menu.map((item) => (
        <MenuCard item={item} key={item.card.info.id} />
      ))}
    </ul>
  );
};

export default RestaurantMenu;
