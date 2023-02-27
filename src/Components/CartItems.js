import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const CartItems = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div>
      <h1 className="mb-3 mt-3 text-xl font-bold">Cart Items:</h1>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
