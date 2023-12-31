import { useEffect, useState } from "react";
import { RESTRO_URL } from "../utils/constants";
import RestaurantCard, { withDiscountedInfo } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantCardWithPromotion = withDiscountedInfo(RestaurantCard);

const Restaurant = () => {
  const [restaurantList, setRestaurantList] = useState(null);

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

  const status = useOnlineStatus();
  if (status === false)
    return <h1>You are offline, Please check your internet connection.</h1>;

  return !restaurantList ? null : (
    <ul className="flex flex-wrap justify-center">
      {restaurantList.map((restaurant) => (
        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
          {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
            <RestaurantCardWithPromotion rest={restaurant} />
          ) : (
            <RestaurantCard rest={restaurant} />
          )}
        </Link>
      ))}
    </ul>
  );
};

export default Restaurant;
