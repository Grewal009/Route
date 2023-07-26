import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantMenu = (params) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
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

  return menu;
};
export default useRestaurantMenu;
