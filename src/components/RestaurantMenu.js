import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RESTAURANT_MENU } from "../utils/constants";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);

  const menu = useRestaurantMenu(params);

  async function fetchRestaurantMenu() {
    const data = await fetch(RESTAURANT_MENU + params.id);
    const json = await data.json();
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards,
    );
    setMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards,
    );
  }

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
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
