import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //   Previously it was used without custom hook
  //   const [restaurantMenuData, setRestaurantMenuData] = useState(null);

  //   Data is coming from custom hook
  const restaurantMenuData = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurantMenuData ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="w-5/12">
        <h1 className="mt-2 mb-2 font-bold text-xl">
          {restaurantMenuData?.name}
        </h1>
        <img
          className="w-52"
          src={IMG_CDN_URL + restaurantMenuData?.cloudinaryImageId}
        />
      </div>
      <div className="pl-3 pt-2">
        <h2 className="font-bold text-lg mb-2">Menu</h2>
        <ul className="flex flex-wrap">
          {Object.values(restaurantMenuData?.menu?.items).map((item) => (
            <li className="mr-2 border-black border-2 mb-2 p-3" key={item.id}>
              {item.name}{" "}
              <button
                onClick={() => addFoodItem(item)}
                className="bg-amber-400 p-1 text-sm"
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
