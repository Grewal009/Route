import { useEffect, useState } from "react";
import { RESTRO_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Restaurant = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  const status = useOnlineStatus();

  async function fetchRestaurants() {
    const data = await fetch(RESTRO_URL);
    const json = await data.json();
    console.log(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setRestaurantList(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  if (!restaurantList) return null;

  if (!status) {
    return <h1>You are not connected to the internet. You are offline</h1>;
  }
  return (
    <ul className="flex flex-wrap justify-center">
      {restaurantList.map((restaurant) => (
        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
          <RestaurantCard rest={restaurant} id={restaurant.info.id} />
        </Link>
      ))}
    </ul>
  );
};

export default Restaurant;
