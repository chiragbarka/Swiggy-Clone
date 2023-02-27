import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurantMenuData, setRestaurantMenuData] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  //   Get data from API
  async function getRestaurantMenu() {
    const data = await fetch(FETCH_RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    // console.log(json.data);
    setRestaurantMenuData(json.data);
  }

  //   Return data to custom hook in RestaurantMenu.js
  return restaurantMenuData;
};

export default useRestaurant;
