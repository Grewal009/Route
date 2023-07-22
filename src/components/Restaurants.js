import { useEffect, useState } from "react";
import { RESTRO_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Restaurant = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  async function fetchRestaurants() {
    const data = await fetch(RESTRO_URL);
    const json = await data.json();
    console.log(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants,
    );
    setRestaurantList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants,
    );
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  if (!restaurantList) return null;
  return (
    <ul className="flex flex-wrap justify-center">
      {restaurantList.map((restaurant) => (
        <RestaurantCard rest={restaurant} key={restaurant.info.id} />
      ))}
    </ul>
  );
};

export default Restaurant;
