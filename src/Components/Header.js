import { useState, useContext } from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);

  const cartItem = useSelector((store) => store.cart.items);

  console.log(cartItem);

  return (
    <div className="flex justify-between bg-orange-100 p-1 shadow-md">
      <div className="logo-section">
        <img className="w-24" src={logo} />
      </div>
      <div className="mt-2">
        <ul className="flex">
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-2">
            <Link to="/cart">Cart - {cartItem.length} Items</Link>
          </li>
        </ul>
      </div>
      <span className="mt-3 font-semibold text-gray-900">{user.name}</span>
      <div>
        {isLoggedIn ? (
          <button
            className="bg-red-900 text-white p-2 rounded-md"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-slate-900 text-white p-2 rounded-md"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
