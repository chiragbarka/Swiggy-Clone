import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-[200px] mr-5 p-3 h-[320px] mb-2 shadow-lg border-gray-200 rounded-md">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-orange-700 text-md mb-1">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3 className="font-medium">Distance: {lastMileTravelString}</h3>
      <h5 className="font-bold">
        Hello! See this {user.name}
      </h5>
    </div>
  );
};

export default RestaurantCard;
