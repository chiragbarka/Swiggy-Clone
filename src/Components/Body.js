import { useState, useEffect, useContext } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { FETCH_ALL_RESTAURANT_URL } from "../constants";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getRestaurantData() {
    const data = await fetch(FETCH_ALL_RESTAURANT_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurantData();
  }, []);

  //   Custom Hooks
  const isOnline = useOnline();

  const { user, setUser } = useContext(UserContext);

  if (!isOnline) {
    return <h1>No Internet Connection</h1>;
  }

  // Early Return - No rendering of component
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="text-center m-4">
        <input
          className="border border-gray-400 shadow-sm focus:outline-none bg-slate-100 focus:bg-orange-100 mr-1 rounded-md p-2"
          type="search"
          placeholder="Search Your Food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bg-orange-700 p-2 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Find Food
        </button>
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="See use of context"
          className=" ml-2 border border-gray-400 shadow-sm focus:outline-none bg-slate-100 focus:bg-orange-100 mr-1 rounded-md p-2"
        />
      </div>
      <div className="flex flex-wrap pl-2">
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurant found</h1>
        ) : (
          filteredRestaurants.map((item) => {
            return (
              <Link to={"/restaurant/" + item.data.id} key={item.data.id}>
                <RestaurantCard {...item.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
